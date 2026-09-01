import React, { useState, useMemo } from 'react';
import { Recipe } from '../types';
import { X, Clock, Flame, ChefHat, Sparkles, Check, Plus, Minus, Timer, AlertCircle } from 'lucide-react';

interface RecipeModalProps {
  recipe: Recipe;
  initialIsHp?: boolean;
  onClose: () => void;
  onStartTimer: (seconds: number, label: string) => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  initialIsHp = false,
  onClose,
  onStartTimer
}) => {
  const [servings, setServings] = useState<number>(recipe.defaultServings || 1);
  const [showHpVariant, setShowHpVariant] = useState<boolean>(initialIsHp && !!recipe.hpVariant);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  const scaleFactor = servings / (recipe.defaultServings || 1);

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleStep = (idx: number) => {
    setCompletedSteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Extract duration from text if present (e.g. "8 minuti", "1 ora", "20 minuti")
  const findMinutesInText = (text: string): number | null => {
    if (text.includes('1 ora') || text.includes('1 h')) return 60;
    const match = text.match(/(\d+)\s*(?:minuti|min|secondi)/i);
    if (match) {
      const num = parseInt(match[1], 10);
      if (text.toLowerCase().includes('secondi')) return Math.max(1, Math.round(num / 60));
      return num;
    }
    return null;
  };

  const scaledKcal = Math.round(
    (showHpVariant && recipe.hpVariant ? recipe.hpVariant.kcal : recipe.kcal) * (servings / recipe.defaultServings)
  );

  const estimatedProtein = showHpVariant && recipe.hpVariant
    ? Math.round(recipe.hpVariant.proteinGrams * (servings / recipe.defaultServings))
    : recipe.originalProteinGrams
    ? Math.round(recipe.originalProteinGrams * (servings / recipe.defaultServings))
    : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/60 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200"
    >
      <div
        className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300 border border-slate-200/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* iOS Handle bar & Header */}
        <div className="relative border-b border-slate-100 bg-[#F0F4F3]/80 px-5 pt-3 pb-3.5">
          <div className="w-10 h-1.5 bg-slate-300 rounded-full mx-auto mb-2 sm:hidden" />
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full mb-1 border border-emerald-200/60">
                {recipe.category}
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-[#1F2937] leading-snug">
                {recipe.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-200/80 text-slate-600 hover:bg-slate-300 active:scale-95 transition-all shrink-0"
              aria-label="Chiudi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-2 mt-2.5 text-xs text-slate-600">
            <span className="flex items-center gap-1 font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
              <Flame className="w-3.5 h-3.5 fill-current text-emerald-600" />
              {scaledKcal} kcal totali
            </span>
            {estimatedProtein && (
              <span className="flex items-center gap-1 font-bold text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/60">
                ⚡ ~{estimatedProtein} g proteine
              </span>
            )}
            <span className="flex items-center gap-1 font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-full border border-slate-200/80">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {recipe.timeMinutes} min
            </span>
            <span className="flex items-center gap-1 font-semibold capitalize text-slate-700 bg-white px-2.5 py-1 rounded-full border border-slate-200/80">
              <ChefHat className="w-3.5 h-3.5 text-slate-400" />
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-5 py-4 space-y-4.5 flex-1 overscroll-contain">
          {/* HP Variant Selector (if recipe has an HP variant) */}
          {recipe.hpVariant && (
            <div className="p-4 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 shadow-xs">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-extrabold text-emerald-900">Variante High-Protein</span>
                </div>
                <button
                  onClick={() => setShowHpVariant(!showHpVariant)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all shadow-xs ${
                    showHpVariant
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
                      : 'bg-white text-emerald-700 border border-emerald-300'
                  }`}
                >
                  {showHpVariant ? 'Attiva (Consigliata)' : 'Mostra versione HP'}
                </button>
              </div>

              {showHpVariant && (
                <div className="mt-3 text-xs text-emerald-950 space-y-1.5 bg-white/80 rounded-2xl p-3 border border-emerald-100">
                  <p className="font-bold text-emerald-900">{recipe.hpVariant.description}</p>
                  <p className="text-[11px] font-semibold text-emerald-800">Quantità indicate per {recipe.defaultServings} {recipe.defaultServings === 1 ? 'porzione' : 'porzioni'}.</p>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                    {recipe.hpVariant.adjustments.map((adj, i) => (
                      <li key={i} className="font-medium">{adj}</li>
                    ))}
                  </ul>
                  {recipe.hpVariant.tips && (
                    <p className="text-[11px] text-emerald-800 font-semibold italic pt-1.5 border-t border-emerald-100">
                      💡 {recipe.hpVariant.tips}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <p className="text-xs text-slate-600 leading-relaxed bg-[#F0F4F3] p-3.5 rounded-2xl border border-slate-200/80 font-medium">
            {recipe.description}
          </p>

          {/* Servings Scaler */}
          <div className="flex items-center justify-between bg-[#F0F4F3] p-3 rounded-2xl border border-slate-200/80">
            <span className="text-xs font-bold text-[#1F2937]">Numero di porzioni:</span>
            <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-2xs border border-slate-200">
              <button
                onClick={() => setServings((s) => Math.max(1, s - 1))}
                disabled={servings <= 1}
                className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 disabled:opacity-30 active:scale-95"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-extrabold w-6 text-center text-[#1F2937]">{servings}</span>
              <button
                onClick={() => setServings((s) => s + 1)}
                className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center active:scale-95 font-bold"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Ingredients Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-extrabold text-[#1F2937]">Ingredienti ({servings} {servings === 1 ? 'porzione' : 'porzioni'})</h3>
              <span className="text-[11px] text-slate-500 font-medium">Tocca per spuntare</span>
            </div>

            <div className="space-y-1.5">
              {recipe.ingredients.map((ing, idx) => {
                const isChecked = !!checkedIngredients[idx];
                let displayQuantity = ing.amount;

                if (ing.grams) {
                  const scaledGrams = Math.round(ing.grams * scaleFactor);
                  displayQuantity = `${scaledGrams} g`;
                }

                return (
                  <div
                    key={idx}
                    onClick={() => toggleIngredient(idx)}
                    className={`flex items-center justify-between p-2.5 rounded-2xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-[#F0F4F3]/60 border-slate-200/60 text-slate-400 line-through'
                        : 'bg-white border-slate-200/80 text-[#1F2937] hover:border-emerald-400'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4.5 h-4.5 rounded-lg border flex items-center justify-center transition-all ${
                          isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-semibold">{ing.name}</span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      isChecked ? 'text-slate-400 bg-slate-100' : 'text-emerald-800 bg-emerald-50 border border-emerald-200/60'
                    }`}>
                      {displayQuantity}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructions Step-by-Step */}
          <div>
            <h3 className="text-sm font-extrabold text-[#1F2937] mb-2.5">Preparazione</h3>
            <div className="space-y-2.5">
              {recipe.instructions.map((step, idx) => {
                const isDone = !!completedSteps[idx];
                const minutesFound = findMinutesInText(step);

                return (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      isDone
                        ? 'bg-emerald-50/50 border-emerald-200/60 opacity-80'
                        : 'bg-white border-slate-200/80 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <button
                        onClick={() => toggleStep(idx)}
                        className={`w-5 h-5 rounded-full mt-0.5 shrink-0 flex items-center justify-center text-[10px] font-extrabold transition-all ${
                          isDone
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#F0F4F3] text-slate-600 border border-slate-200'
                        }`}
                      >
                        {isDone ? <Check className="w-3 h-3 stroke-[3]" /> : idx + 1}
                      </button>

                      <div className="min-w-0 flex-1">
                        <p className={`text-xs leading-relaxed font-medium ${isDone ? 'text-slate-400 line-through' : 'text-[#1F2937]'}`}>
                          {step}
                        </p>

                        {/* Interactive Step Timer Trigger */}
                        {minutesFound && (
                          <div className="mt-2">
                            <button
                              onClick={() => onStartTimer(minutesFound * 60, `${recipe.title.slice(0, 18)}... (Passo ${idx + 1})`)}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 hover:bg-amber-100 active:scale-95 border border-amber-200/80 text-[11px] font-bold transition-all shadow-2xs"
                            >
                              <Timer className="w-3.5 h-3.5 text-amber-700" />
                              Avvia timer {minutesFound} min
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Bottom Fixed Actions */}
        <div className="p-4 bg-[#F0F4F3] border-t border-slate-200/80 flex items-center justify-between gap-3 safe-bottom">
          <button
            onClick={() => onStartTimer(recipe.timeMinutes * 60, recipe.title)}
            className="flex-1 py-3 px-4 rounded-2xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-98 shadow-md shadow-emerald-500/25 hover:bg-emerald-700 transition-all"
          >
            <Timer className="w-4 h-4 text-emerald-100" />
            Timer Totale ({recipe.timeMinutes} min)
          </button>
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-2xl bg-white border border-slate-200/80 text-slate-700 font-bold text-xs active:scale-98 hover:bg-slate-50 transition-all shadow-2xs"
          >
            Fatto
          </button>
        </div>
      </div>
    </div>
  );
};
