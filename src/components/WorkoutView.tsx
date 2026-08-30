import React, { useEffect, useState } from 'react';
import { MONTHLY_PROGRAMS, WORKOUT_GUIDELINES } from '../data/workoutPlan';
import { MonthProgram, WorkoutExercise, WorkoutSession } from '../types';
import { Dumbbell, Timer, Flame, Footprints, ShieldAlert, TrendingUp, Info, Check, Play } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

interface WorkoutViewProps {
  onStartTimer: (seconds: number, label: string) => void;
}

export const WorkoutView: React.FC<WorkoutViewProps> = ({ onStartTimer }) => {
  const [selectedMonthId, setSelectedMonthId] = useState<string>('settembre');
  const [activeTab, setActiveTab] = useState<'scheda' | 'gomito' | 'progressione'>('scheda');
  const [selectedWorkoutId, setSelectedWorkoutId] = useState<string>('');
  const [exerciseProgress, setExerciseProgress] = useState<Record<string, { weight: string; reps: string; done: boolean }>>(() => {
    try {
      return JSON.parse(localStorage.getItem('diet_exercise_progress') || '{}');
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('diet_exercise_progress', JSON.stringify(exerciseProgress));
  }, [exerciseProgress]);

  const currentProgram: MonthProgram = MONTHLY_PROGRAMS.find((p) => p.id === selectedMonthId) || MONTHLY_PROGRAMS[0];

  // If selected workout doesn't belong to current month, select the first workout of the month
  const activeWorkout: WorkoutSession =
    currentProgram.workouts.find((w) => w.id === selectedWorkoutId) || currentProgram.workouts[0];

  return (
    <div className="space-y-3.5 pb-4">
      {/* Top Segmented Controls */}
      <div className="bg-[#E5EAE8] p-1.5 rounded-full flex items-center gap-1 text-xs font-bold border border-slate-200/60 shadow-xs">
        <button
          onClick={() => {
            triggerHaptic('light');
            setActiveTab('scheda');
          }}
          className={`flex-1 py-2.5 rounded-full transition-all flex items-center justify-center gap-1.5 select-none ${
            activeTab === 'scheda'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Dumbbell className="w-3.5 h-3.5" />
          Schede Mese
        </button>
        <button
          onClick={() => {
            triggerHaptic('light');
            setActiveTab('progressione');
          }}
          className={`flex-1 py-2.5 rounded-full transition-all flex items-center justify-center gap-1.5 select-none ${
            activeTab === 'progressione'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          Progressione Pesi
        </button>
        <button
          onClick={() => {
            triggerHaptic('light');
            setActiveTab('gomito');
          }}
          className={`flex-1 py-2.5 rounded-full transition-all flex items-center justify-center gap-1.5 select-none ${
            activeTab === 'gomito'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          Gomito
        </button>
      </div>

      {/* TAB 1: SCHEDE MENSILI */}
      {activeTab === 'scheda' && (
        <div className="space-y-3.5">
          {/* Months Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {MONTHLY_PROGRAMS.map((prog) => {
              const isSelected = prog.id === selectedMonthId;
              return (
                <button
                  key={prog.id}
                  onClick={() => {
                    triggerHaptic('light');
                    setSelectedMonthId(prog.id);
                    setSelectedWorkoutId(prog.workouts[0].id);
                  }}
                  className={`shrink-0 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all select-none ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25 font-bold'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  {prog.monthName}
                </button>
              );
            })}
          </div>

          {/* Month Banner */}
          <div className="bg-gradient-to-br from-[#1F2937] via-slate-900 to-indigo-950 text-white rounded-3xl p-5 shadow-lg relative overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 bg-emerald-950/90 px-2.5 py-0.5 rounded-full border border-emerald-700/60">
                  {currentProgram.monthName}
                </span>
                <h3 className="text-lg font-extrabold mt-1 text-white tracking-tight">{currentProgram.subtitle}</h3>
              </div>
              <span className="text-xs text-slate-300 font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">
                {currentProgram.frequency.split('(')[0].trim()}
              </span>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-slate-300">
                Target RIR: <strong className="text-emerald-400">{currentProgram.rirTarget}</strong>
              </span>
              {currentProgram.coachTip && (
                <span className="text-[11px] text-amber-300 italic font-medium">
                  💡 {currentProgram.coachTip}
                </span>
              )}
            </div>
          </div>

          {/* Workout Sessions Tabs (A, B, C or Upper A, Lower A, etc.) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {currentProgram.workouts.map((w) => {
              const isSelected = w.id === activeWorkout.id;
              return (
                <button
                  key={w.id}
                  onClick={() => {
                    triggerHaptic('light');
                    setSelectedWorkoutId(w.id);
                  }}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all select-none ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
                      : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  {w.name} {w.schedule ? `(${w.schedule})` : ''}
                </button>
              );
            })}
          </div>

          {/* Active Workout Details */}
          <div className="bg-white rounded-3xl p-4.5 border border-slate-200/80 shadow-xs space-y-3.5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div>
                <h4 className="text-base font-extrabold text-[#1F2937]">{activeWorkout.name}</h4>
                <p className="text-xs text-emerald-700 font-semibold">{activeWorkout.targetFocus}</p>
              </div>
              <span className="text-xs text-slate-500 font-bold bg-slate-100 px-2.5 py-1 rounded-full">
                {activeWorkout.exercises.length} Esercizi
              </span>
            </div>

            {/* Exercises List */}
            <div className="space-y-2.5">
              {activeWorkout.exercises.map((ex: WorkoutExercise, idx: number) => {
                const key = `${activeWorkout.id}:${idx}`;
                const progress = exerciseProgress[key] || { weight: '', reps: '', done: false };

                return <div
                  key={key}
                  className={`p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 ${progress.done ? 'bg-emerald-50 border-emerald-300' : 'bg-[#F0F4F3]/60 border-slate-200/80 hover:border-emerald-400'}`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h5 className="text-xs sm:text-sm font-bold text-[#1F2937]">{ex.name}</h5>
                    </div>

                    <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-600 pl-7">
                      <span className="font-extrabold text-[#1F2937] bg-white px-2.5 py-0.5 rounded-full border border-slate-200/80 shadow-2xs">
                        {ex.sets} × {ex.reps}
                      </span>
                      <span className="text-slate-500 flex items-center gap-1 font-semibold">
                        <Timer className="w-3.5 h-3.5 text-slate-400" />
                        Rip. {ex.restSeconds} s
                      </span>
                    </div>

                    {ex.notes && (
                      <p className="text-[11px] text-slate-500 mt-1 pl-7 italic font-medium">
                        {ex.notes}
                      </p>
                    )}

                    <div className="flex gap-2 mt-3 pl-7">
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        placeholder="kg"
                        value={progress.weight}
                        onChange={(event) => setExerciseProgress((current) => ({ ...current, [key]: { ...progress, weight: event.target.value } }))}
                        className="w-16 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-bold text-slate-700 outline-none focus:border-emerald-500"
                        aria-label={`Carico per ${ex.name}`}
                      />
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="reps fatte"
                        value={progress.reps}
                        onChange={(event) => setExerciseProgress((current) => ({ ...current, [key]: { ...progress, reps: event.target.value } }))}
                        className="w-24 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-bold text-slate-700 outline-none focus:border-emerald-500"
                        aria-label={`Ripetizioni eseguite per ${ex.name}`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => {
                        triggerHaptic('medium');
                        onStartTimer(ex.restSeconds, `Recupero: ${ex.name}`);
                      }}
                      className="shrink-0 px-3.5 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 active:scale-90 text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all"
                      title={`Avvia timer recupero (${ex.restSeconds}s)`}
                    >
                      <Play className="w-3 h-3 fill-current text-emerald-600" />
                      {ex.restSeconds}s
                    </button>
                    <button
                      onClick={() => setExerciseProgress((current) => ({ ...current, [key]: { ...progress, done: !progress.done } }))}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${progress.done ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-slate-200 text-transparent'}`}
                      title="Segna esercizio completato"
                      aria-label={`Segna ${ex.name} come completato`}
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </div>;
              })}
            </div>
          </div>

          {/* Cardio & Walking Pad Prescription */}
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-4.5 border border-teal-200/80 space-y-2.5 text-xs shadow-xs">
            <h4 className="font-extrabold text-teal-900 flex items-center gap-1.5 text-sm">
              <Footprints className="w-4.5 h-4.5 text-teal-700" />
              Cardio in Palestra & Walking Pad ({currentProgram.monthName})
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-slate-800">
              <div className="bg-white/90 rounded-2xl p-3 border border-teal-100 shadow-2xs">
                <p className="text-[10px] uppercase font-bold text-teal-800">Cardio Post-Pesi</p>
                <p className="font-semibold mt-0.5 text-slate-800">{currentProgram.cardioAndMovement.cardioPostWeights}</p>
              </div>
              <div className="bg-white/90 rounded-2xl p-3 border border-teal-100 shadow-2xs">
                <p className="text-[10px] uppercase font-bold text-teal-800">Walking Pad</p>
                <p className="font-semibold mt-0.5 text-slate-800">{currentProgram.cardioAndMovement.walkingPad}</p>
              </div>
              <div className="bg-white/90 rounded-2xl p-3 border border-teal-100 col-span-1 sm:col-span-2 shadow-2xs">
                <p className="text-[10px] uppercase font-bold text-teal-800">Obiettivo Passi Medi Giornalieri</p>
                <p className="font-extrabold text-emerald-700 mt-0.5 text-sm">{currentProgram.cardioAndMovement.dailySteps}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PROGRESSIONE PESI */}
      {activeTab === 'progressione' && (
        <div className="space-y-3.5">
          <div className="bg-white rounded-3xl p-4.5 border border-slate-200/80 shadow-xs space-y-2">
            <h3 className="text-base font-extrabold text-[#1F2937]">
              {WORKOUT_GUIDELINES.progressionMethod.title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {WORKOUT_GUIDELINES.progressionMethod.description}
            </p>
          </div>

          {/* Example Table */}
          <div className="bg-white rounded-3xl p-4.5 border border-slate-200/80 shadow-xs">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
              Esempio Pratico: Esercizio 3 × 8–12
            </h4>
            <div className="space-y-1.5 text-xs">
              {WORKOUT_GUIDELINES.progressionMethod.example.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-2.5 rounded-2xl border ${
                    i === 4
                      ? 'bg-emerald-50/80 border-emerald-300 font-bold text-emerald-900'
                      : 'bg-[#F0F4F3] border-slate-200/80 text-[#1F2937]'
                  }`}
                >
                  <span className="font-semibold">{row.session}</span>
                  <span className="font-mono font-bold text-emerald-800">{row.reps}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Increment Guidelines */}
          <div className="bg-emerald-50/90 rounded-3xl p-4.5 border border-emerald-200/80 text-xs text-emerald-950 space-y-1.5 shadow-xs">
            <p className="font-extrabold text-emerald-900">Incrementi Consigliati:</p>
            <p className="text-slate-700 leading-relaxed font-medium">{WORKOUT_GUIDELINES.progressionMethod.weightIncrements}</p>
            <p className="text-[11px] text-emerald-800 italic pt-1 font-medium">
              *Dopo l'aumento è del tutto normale tornare vicino al limite basso del range (es. da 12-12-12 a 9-8-8 reps).
            </p>
          </div>

          {/* When NOT to increase */}
          <div className="bg-rose-50/90 rounded-3xl p-4.5 border border-rose-200/80 text-xs text-rose-950 space-y-2 shadow-xs">
            <p className="font-extrabold text-rose-900">NON Aumentare il Carico Quando:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-800 pl-1">
              {WORKOUT_GUIDELINES.progressionMethod.doNotIncreaseWhen.map((rule, idx) => (
                <li key={idx} className="font-medium">{rule}</li>
              ))}
            </ul>
          </div>

          {/* Golden Rule Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-4.5 text-xs leading-relaxed border border-slate-800 shadow-md">
            <p className="text-amber-300 font-extrabold mb-1">⭐ Regola d'Oro del Personal Trainer:</p>
            <p className="text-slate-200 leading-relaxed">{WORKOUT_GUIDELINES.goldenRule}</p>
          </div>
        </div>
      )}

      {/* TAB 3: GOMITO DEL TENNISTA & SICUREZZA */}
      {activeTab === 'gomito' && (
        <div className="space-y-3.5">
          <div className="bg-amber-50/90 rounded-3xl p-4.5 border border-amber-300/80 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              <span>Precauzioni per il Gomito del Tennista</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Il programma è stato strutturato per evitare lo stress sul tendine dell'avambraccio, privilegiando macchine guidate e prese neutre.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4.5 border border-slate-200/80 shadow-xs space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Regole Fondamentali
            </h4>
            <div className="space-y-2 text-xs">
              {WORKOUT_GUIDELINES.elbowPrecautions.map((p, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-[#F0F4F3] rounded-2xl border border-slate-200/80">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <p className="text-[#1F2937] leading-relaxed font-medium">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rest Times Reference Table */}
          <div className="bg-white rounded-3xl p-4.5 border border-slate-200/80 shadow-xs space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
              Tabella Recuperi Consigliati
            </h4>
            <div className="space-y-1.5 text-xs">
              {WORKOUT_GUIDELINES.restRules.map((rule, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 bg-[#F0F4F3] rounded-2xl border border-slate-200/80">
                  <span className="font-semibold text-[#1F2937]">{rule.category}</span>
                  <span className="font-bold text-emerald-800 font-mono bg-white px-2 py-0.5 rounded-full border border-slate-200/60">{rule.rest}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 italic pt-1 font-medium">
              Se allo scadere del timer sei ancora affannato, attendi altri 20-30 secondi: la tecnica viene prima del cronometro.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
