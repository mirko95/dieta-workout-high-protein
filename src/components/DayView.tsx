import React, { useState, useEffect, useRef } from 'react';
import { DayPlan, MealSlot, Recipe } from '../types';
import { MONTHLY_PLAN } from '../data/monthlyPlan';
import { RECIPES } from '../data/recipes';
import { Flame, Sparkles, CheckCircle2, Circle, ChevronLeft, ChevronRight, BookOpen, Clock, Zap, Activity } from 'lucide-react';
import { FitnessRings } from './FitnessRings';
import { triggerHaptic } from '../utils/haptics';
import { formatCalendarDate, mealProgressKey } from '../utils/dates';

interface DayViewProps {
  currentDay: number;
  onSelectDay: (day: number) => void;
  onOpenRecipe: (recipe: Recipe, isHp: boolean) => void;
}

export const DayView: React.FC<DayViewProps> = ({
  currentDay,
  onSelectDay,
  onOpenRecipe
}) => {
  const dayPlan: DayPlan = MONTHLY_PLAN.find((d) => d.dayNumber === currentDay) || MONTHLY_PLAN[0];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Local storage for completed meals of each day
  const [eatenMeals, setEatenMeals] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('diet_eaten_meals');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('diet_eaten_meals', JSON.stringify(eatenMeals));
    } catch (e) {
      console.warn(e);
    }
  }, [eatenMeals]);

  // Center active day button on mount or change
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeBtn = scrollContainerRef.current.querySelector(`[data-day="${currentDay}"]`) as HTMLElement;
      if (activeBtn) {
        scrollContainerRef.current.scrollTo({ left: activeBtn.offsetLeft - scrollContainerRef.current.offsetLeft - scrollContainerRef.current.clientWidth / 2 + activeBtn.clientWidth / 2, behavior: 'smooth' });
      }
    }
  }, [currentDay]);

  const toggleMealEaten = (mealIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const key = mealProgressKey(currentDay, mealIndex);
    const willBeDone = !eatenMeals[key];
    setEatenMeals((prev) => ({ ...prev, [key]: willBeDone }));
    triggerHaptic(willBeDone ? 'success' : 'light');
  };


  const getMealRecipe = (slot: MealSlot): Recipe | undefined => {
    return RECIPES.find((r) => r.id === slot.recipeId);
  };

  const completedCount = dayPlan.meals.filter((_, idx) => eatenMeals[mealProgressKey(currentDay, idx)]).length;
  const mealCount = dayPlan.meals.length;
  const hasNutritionTargets = dayPlan.totalKcal > 0 && dayPlan.totalProtein > 0;

  const mealSlotIcons: Record<string, string> = {
    'COLAZIONE': '☕',
    'SPUNTINO 1': '🍎',
    'PRANZO': '🥗',
    'SPUNTINO 2': '⚡',
    'CENA': '🍲'
  };

  // Apple Fitness calculations
  const caloriePercent = hasNutritionTargets ? Math.min(100, Math.round((dayPlan.totalKcal / 1850) * 100)) : 0;
  const proteinPercent = hasNutritionTargets ? Math.min(100, Math.round((dayPlan.totalProtein / 142) * 100)) : 0;
  const mealPercent = Math.round((completedCount / mealCount) * 100);
  const selectedDate = formatCalendarDate(currentDay, { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div className="space-y-3.5 pb-4">
      {currentDay >= 21 && <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-3 text-xs space-y-2">
        <p className="font-bold text-emerald-900">Settimana {Math.floor((currentDay - 21) / 7) + 1} di 6 · Piano dal 21 settembre al 1° novembre 2026</p>
        <p>I totali giornalieri sono quelli del piano. Le dosi aggiuntive sono indicate in ciascun pasto; i valori delle ricette si riferiscono alla sola ricetta base.</p>
        <a href={`${import.meta.env.BASE_URL}documents/piano-alimentare-6-settimane.pdf`} target="_blank" rel="noopener noreferrer" className="inline-block font-bold underline">Apri il piano originale PDF</a>
      </div>}
      {/* Dated meal calendar */}
      <div className="bg-white rounded-3xl p-3 shadow-xs border border-slate-200/70">
        <div className="flex items-center justify-between px-1 mb-2 text-xs text-slate-500 font-medium">
          <span className="font-semibold text-slate-600">Calendario</span>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 text-[11px]">
            {selectedDate}
          </span>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-0.5 snap-x scroll-smooth"
        >
          {MONTHLY_PLAN.map((plan) => {
            const isSelected = plan.dayNumber === currentDay;
            return (
              <button
                key={plan.dayNumber}
                data-day={plan.dayNumber}
                onClick={() => {
                  triggerHaptic('light');
                  onSelectDay(plan.dayNumber);
                }}
                className={`shrink-0 flex flex-col items-center justify-center w-12 h-14 rounded-2xl transition-all duration-200 snap-center select-none ${
                  isSelected
                    ? 'bg-gradient-to-b from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/30 scale-105 font-bold'
                    : 'bg-[#F0F4F3]/80 text-[#1F2937] hover:bg-slate-100 active:scale-95 border border-slate-200/60'
                }`}
              >
                <span className="text-[9px] font-bold uppercase opacity-80">{formatCalendarDate(plan.dayNumber, { weekday: 'short' }).replace('.', '')}</span>
                <span className="text-base font-extrabold leading-none my-0.5">{formatCalendarDate(plan.dayNumber, { day: 'numeric' })}</span>
                <span className={`text-[8px] font-bold ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                  {formatCalendarDate(plan.dayNumber, { month: 'short' })}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Apple Health & Fitness Interactive Activity Card */}
      <div className="bg-gradient-to-br from-[#1F2937] via-slate-900 to-emerald-950 text-white rounded-3xl p-4.5 shadow-lg border border-slate-800/80 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between gap-3 relative z-10">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 bg-emerald-950/90 px-2.5 py-0.5 rounded-full border border-emerald-700/60">
                {selectedDate}
              </span>
              <span className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-emerald-400" /> Apple Health
              </span>
            </div>
            
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              {hasNutritionTargets ? `~${dayPlan.totalKcal}` : 'Dieta Plank'} <span className="text-sm font-semibold text-slate-300">{hasNutritionTargets ? 'kcal target' : '• 14 giorni'}</span>
            </h2>

            {/* Apple Activity Stat Legend */}
            <div className="space-y-1.5 mt-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FA5252] shrink-0" />
                <span className="text-slate-300 font-medium">Calorie:</span>
                <strong className="text-white font-extrabold font-mono">{hasNutritionTargets ? `~${dayPlan.totalKcal} kcal` : 'Non indicato'}</strong>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shrink-0" />
                <span className="text-slate-300 font-medium">Proteine:</span>
                <strong className="text-emerald-400 font-extrabold font-mono">{hasNutritionTargets ? `${dayPlan.totalProtein} g` : 'Non indicate'}</strong>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] shrink-0" />
                <span className="text-slate-300 font-medium">Pasti consumati:</span>
                <strong className="text-sky-300 font-extrabold font-mono">{completedCount} / {mealCount}</strong>
              </div>
            </div>
          </div>

          {/* Activity Rings Graphic */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <FitnessRings
              calorieProgress={caloriePercent}
              proteinProgress={proteinPercent}
              mealProgress={mealPercent}
              size={105}
            />
            <span className="text-[10px] text-slate-400 mt-1 font-bold">Anelli Attività</span>
          </div>
        </div>

        {/* Progress Tracker for Eaten Meals */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-2.5 border border-slate-700/60 relative z-10 mt-3.5">
          <div className="flex items-center justify-between text-xs mb-1.5 font-semibold text-slate-300">
            <span>Completamento pasti di oggi:</span>
            <span className="font-extrabold text-emerald-400">{completedCount} su {mealCount} pasti</span>
          </div>
          <div className="w-full bg-slate-700/70 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 h-full transition-all duration-500 rounded-full"
              style={{ width: `${(completedCount / mealCount) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* 5 Daily Meals List */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-1 text-xs font-bold text-slate-500">
          <span>PROGRAMMA PASTI</span>
          <span className="text-emerald-700">Spunta per registrare</span>
        </div>

        {dayPlan.meals.map((meal, idx) => {
          const isDone = !!eatenMeals[mealProgressKey(currentDay, idx)];
          const recipe = getMealRecipe(meal);
          const icon = mealSlotIcons[meal.type] || '🍽️';

          return (
            <div
              key={idx}
              onClick={() => {
                triggerHaptic('light');
                if (recipe) onOpenRecipe(recipe, meal.isHp);
              }}
              className={`group bg-white rounded-3xl p-3.5 border transition-all duration-200 shadow-xs cursor-pointer active:scale-[0.98] select-none ${
                isDone
                  ? 'border-emerald-200/80 bg-emerald-50/40 opacity-90'
                  : 'border-slate-200/80 hover:border-emerald-400'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                {/* Left Meal Info */}
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <button
                    onClick={(e) => toggleMealEaten(idx, e)}
                    className="mt-0.5 text-slate-300 hover:text-emerald-600 active:scale-90 transition-all shrink-0 p-0.5"
                    title={isDone ? 'Segna come non consumato' : 'Segna come consumato'}
                    aria-label={`${meal.type}: ${isDone ? 'segna come non consumato' : 'segna come consumato'}`}
                    aria-pressed={isDone}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 hover:text-emerald-500" />
                    )}
                  </button>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 bg-[#F0F4F3] px-2.5 py-0.5 rounded-full border border-slate-200/60">
                        {icon} {meal.type}
                      </span>
                      {recipe?.hpVariant && <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100/80 border border-emerald-300/80 px-2 py-0.5 rounded-full"><Sparkles className="w-2.5 h-2.5" /> HP</span>}
                    </div>

                    <h3 className={`text-sm font-bold mt-1 text-[#1F2937] leading-snug group-hover:text-emerald-700 transition-colors ${
                      isDone ? 'line-through text-slate-400' : ''
                    }`}>
                      {meal.name}
                    </h3>

                    {meal.notes && (
                      <p className="text-xs text-amber-800 font-semibold mt-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60 inline-block">
                        ⚠️ {meal.notes}
                      </p>
                    )}

                    {recipe && (
                      <div className="flex items-center gap-2.5 mt-2 text-xs text-slate-500 font-semibold">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {recipe.timeMinutes} min
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-bold text-slate-700">
                          <Flame className="w-3 h-3 text-amber-500" />
                          {recipe.sourcePage ? 'Ricetta base' : `${recipe.hpVariant?.kcal ?? recipe.kcal} kcal`}
                        </span>
                        <span>•</span>
                        <span className="font-extrabold text-emerald-700">
                          {recipe.sourcePage ? 'Vedi dosi' : `~${recipe.hpVariant?.proteinGrams ?? recipe.originalProteinGrams}g prot`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* View Recipe Button */}
                {recipe && (
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      triggerHaptic('light');
                      onOpenRecipe(recipe, meal.isHp);
                    }}
                    className="p-2.5 rounded-2xl bg-[#F0F4F3] text-slate-600 group-hover:bg-emerald-600 group-hover:text-white active:scale-90 transition-all shrink-0 mt-0.5 shadow-2xs"
                    title="Vedi ingredienti e preparazione"
                    aria-label={`Apri ricetta: ${recipe.title}`}
                  >
                    <BookOpen className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next Day Floating Navigator */}
      <div className="flex items-center justify-between gap-2.5 pt-1">
        <button
          onClick={() => {
            triggerHaptic('light');
            onSelectDay(Math.max(1, currentDay - 1));
          }}
          disabled={currentDay <= 1}
          className="flex-1 py-3 px-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1 disabled:opacity-40 active:scale-95 transition-all shadow-xs hover:border-slate-300"
        >
          <ChevronLeft className="w-4 h-4" />
          {formatCalendarDate(Math.max(1, currentDay - 1), { day: 'numeric', month: 'short' })}
        </button>

        <button
          onClick={() => {
            triggerHaptic('light');
            onSelectDay(21);
          }}
          className="px-4 py-3 rounded-full bg-[#F0F4F3] text-slate-700 font-bold text-xs hover:bg-slate-200 active:scale-95 transition-all border border-slate-200"
        >
          21 settembre
        </button>

        <button
          onClick={() => {
            triggerHaptic('light');
            onSelectDay(Math.min(62, currentDay + 1));
          }}
          disabled={currentDay >= 62}
          className="flex-1 py-3 px-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1 disabled:opacity-40 active:scale-95 transition-all shadow-md shadow-emerald-500/25"
        >
          {formatCalendarDate(Math.min(62, currentDay + 1), { day: 'numeric', month: 'short' })}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
