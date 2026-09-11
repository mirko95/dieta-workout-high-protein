import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ELBOW_ROUTINE, elbowLoadGuidance, WORKOUT_DAYS, PROGRESS_KEY, emptyDay, parseProgress, DayProgress, WorkoutProgress } from '../data/workoutPlan';
import { DATASET_SOURCE } from '../data/exerciseDataset';

interface WorkoutViewProps {
  onStartTimer: (seconds: number, label: string) => void;
}

const formatDate = (date: string, options: Intl.DateTimeFormatOptions) =>
  new Date(`${date}T12:00:00`).toLocaleDateString('it-IT', options);
const inputClass = 'min-w-0 w-full rounded-xl border border-slate-300 bg-white px-2 py-2 text-sm focus:outline-emerald-600';

export const WorkoutView: React.FC<WorkoutViewProps> = ({ onStartTimer }) => {
  const [selectedDate, setSelectedDate] = useState(() => {
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    return WORKOUT_DAYS.find(day => day.date === today)?.date ?? WORKOUT_DAYS[0].date;
  });
  const [saved, setSaved] = useState('');
  const [initial] = useState(() => {
    try { return { progress: parseProgress(localStorage.getItem(PROGRESS_KEY)), error: '' }; }
    catch { return { progress: {} as WorkoutProgress, error: 'Impossibile leggere i progressi salvati. Ricarica prima di modificarli.' }; }
  });
  const [progress, setProgress] = useState(initial.progress);
  const [error, setError] = useState(initial.error);
  const day = WORKOUT_DAYS.find(item => item.date === selectedDate)!;
  const log = progress[selectedDate] ?? emptyDay();
  const workout = day.workout;

  function updateDay(patch: Partial<DayProgress>) {
    const next = { ...progress, [selectedDate]: { ...log, ...patch } };
    setProgress(next);
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      setSaved('Progressi salvati su questo dispositivo.');
      setError('');
    } catch {
      setSaved('');
      setError('Salvataggio non riuscito. Mantieni aperta questa pagina e riprova con Salva progressi.');
    }
  }

  return (
    <div className="space-y-4 pb-4">
      <div className="rounded-3xl bg-slate-900 p-5 text-white space-y-2">
        <h2 className="text-xl font-extrabold">Il tuo programma · 8 settimane</h2>
        <p className="text-sm text-emerald-300">14 settembre – 8 novembre 2026</p>
        <p className="text-xs">Lunedì A · Mercoledì B · Venerdì C. Gli altri giorni: recupero dai pesi. Ogni giorno: 30 minuti di tapis roulant a casa durante l’home office.</p>
        <p className="text-xs">Mantieni 2–3 ripetizioni in riserva in tutte le serie, soprattutto nelle prime settimane. Preferisci prese neutre e interrompi o cambia i movimenti che aggravano il gomito.</p>
        <p className="text-xs">Routine gomito: lunedì, martedì, mercoledì, venerdì e sabato. Giovedì e domenica: riposo dalla routine.</p>
        <p className="text-sm font-bold">{WORKOUT_DAYS.filter(d => d.workout && progress[d.date]?.done).length} / 24 allenamenti completati</p>
      </div>

      <div className="flex items-center justify-between gap-2">
        <button type="button" aria-label="Settimana precedente" disabled={day.week === 1} onClick={() => setSelectedDate(WORKOUT_DAYS[(day.week - 2) * 7].date)} className="p-2 rounded-full bg-white disabled:opacity-30"><ChevronLeft /></button>
        <label className="text-sm font-bold">Settimana{' '}
          <select aria-label="Seleziona settimana" value={day.week} onChange={event => setSelectedDate(WORKOUT_DAYS[(Number(event.target.value) - 1) * 7].date)} className="rounded-lg bg-white p-2">
            {Array.from({ length: 8 }, (_, i) => <option key={i} value={i + 1}>{i + 1} di 8</option>)}
          </select>
        </label>
        <button type="button" aria-label="Settimana successiva" disabled={day.week === 8} onClick={() => setSelectedDate(WORKOUT_DAYS[day.week * 7].date)} className="p-2 rounded-full bg-white disabled:opacity-30"><ChevronRight /></button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {WORKOUT_DAYS.filter(item => item.week === day.week).map(item => (
          <button key={item.date} type="button" aria-pressed={item.date === selectedDate} aria-label={`${formatDate(item.date, { dateStyle: 'full' })}: ${item.workout?.name ?? 'Recupero'}${item.elbowRoutine ? ', routine gomito' : ''}${progress[item.date]?.done ? ', completato' : ''}`} onClick={() => setSelectedDate(item.date)} className={`rounded-xl py-3 text-center text-[10px] ${item.date === selectedDate ? 'bg-emerald-700 text-white' : 'bg-white text-slate-700'}`}>
            <span className="block capitalize">{formatDate(item.date, { weekday: 'short' })}</span>
            <strong className="block text-base">{formatDate(item.date, { day: 'numeric' })}</strong>
            <span className="block">{item.workout ? item.workout.id.toUpperCase() : 'Riposo'}</span>
            {item.elbowRoutine && <span className="block text-[9px]">+ Gomito</span>}
            {progress[item.date]?.done && <Check className="mx-auto h-3 w-3" />}
          </button>
        ))}
      </div>

      <h3 className="text-lg font-extrabold capitalize">{formatDate(selectedDate, { weekday: 'long', day: 'numeric', month: 'long' })} · {workout?.name ?? 'Recupero'}</h3>
      <p className="text-xs text-slate-600">Salvataggio automatico per ogni data, su questo browser. Puoi tornare ai giorni precedenti per vedere o modificare i progressi.</p>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      <fieldset disabled={!!initial.error} className="space-y-4 min-w-0">
        <section className="rounded-2xl bg-sky-50 border border-sky-200 p-4 space-y-3">
          <h4 className="text-sm font-bold">Tapis roulant a casa · {day.treadmillMinutes} minuti</h4>
          <p className="text-xs text-slate-600">Durante l’home office, ogni giorno, inclusi i giorni di recupero.</p>
          <label className="flex items-center gap-3 text-sm font-semibold">
            <input type="checkbox" className="h-5 w-5 accent-emerald-600" checked={log.treadmillDone ?? false} onChange={event => updateDay({ treadmillDone: event.target.checked })} />
            Tapis roulant · 30 minuti completati
          </label>
          <button type="button" onClick={() => onStartTimer(day.treadmillMinutes * 60, 'Tapis roulant a casa · home office')} className="flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-2 text-xs font-bold text-sky-800">
            <Play className="h-3 w-3" /> Avvia timer 30 minuti
          </button>
        </section>
        {workout ? workout.exercises.map((exercise, index) => (
          <section key={`${selectedDate}:${index}`} className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
            <h4 className="text-sm font-bold">{index + 1}. {exercise.name}</h4>
            {exercise.gifUrl && <details className="rounded-xl bg-slate-50 p-3">
              <summary className="cursor-pointer text-xs font-bold text-emerald-800">Guarda animazione e istruzioni</summary>
              <div className="mt-3 flex gap-3">
                <img src={exercise.gifUrl} alt={`Animazione: ${exercise.name}`} className="h-28 w-28 shrink-0 rounded-lg object-cover" loading="lazy" />
                <div className="min-w-0 text-xs text-slate-700">
                  <p className="font-semibold">Attrezzo: {exercise.equipment}</p>
                  <ol className="mt-2 list-decimal space-y-1 pl-4">{exercise.instructionSteps?.map(step => <li key={step}>{step}</li>)}</ol>
                  <a href={DATASET_SOURCE} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[10px] text-slate-500 underline">Exercise Dataset · © Gym visual</a>
                </div>
              </div>
            </details>}
            <div className="flex flex-wrap justify-between items-center gap-2 text-xs">
              <span>{exercise.sets} × {exercise.reps} · Recupero {exercise.restLabel ?? exercise.restSeconds} s</span>
              <button type="button" onClick={() => onStartTimer(exercise.restSeconds, `Recupero: ${exercise.name}`)} className="flex items-center gap-1 rounded-full border px-3 py-2 text-emerald-800" aria-label={`Avvia recupero per ${exercise.name}`}><Play className="h-3 w-3" />{exercise.restSeconds} s</button>
            </div>
            {!!exercise.alternatives?.length && <details className="rounded-xl border border-slate-200 p-3">
              <summary className="cursor-pointer text-xs font-bold text-slate-700">Alternative con animazione</summary>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {exercise.alternatives.map(alternative => <div key={alternative.datasetId} className="flex gap-3 rounded-lg bg-slate-50 p-2">
                  <img src={alternative.gifUrl} alt={`Animazione: ${alternative.name}`} className="h-20 w-20 shrink-0 rounded-lg object-cover" loading="lazy" />
                  <div className="min-w-0 text-xs text-slate-700">
                    <p className="font-bold">{alternative.name}</p>
                    <p>Attrezzo: {alternative.equipment}</p>
                    <a href={DATASET_SOURCE} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[10px] text-slate-500 underline">Exercise Dataset · © Gym visual</a>
                  </div>
                </div>)}
              </div>
            </details>}
            <div className="grid grid-cols-[2rem_1fr_1.4fr_2rem] gap-2 text-[10px] text-slate-500" aria-hidden="true"><span>Serie</span><span>Kg</span><span>{exercise.perSide ? (exercise.name === 'Side plank' ? 'Secondi per lato' : 'Reps per gamba') : 'Reps'}</span><span>Fatto</span></div>
            {Array.from({ length: Number(exercise.sets) }, (_, setIndex) => {
              const key = `${index}:${setIndex}`;
              const set = log.sets[key] ?? { weight: '', reps: '', done: false };
              const label = `${exercise.name}, serie ${setIndex + 1}`;
              const updateSet = (patch: Partial<typeof set>) => updateDay({ sets: { ...log.sets, [key]: { ...set, ...patch } } });
              return <div key={key} className="grid grid-cols-[2rem_1fr_1.4fr_2rem] items-center gap-2">
                <span className="text-xs font-bold">{setIndex + 1}</span>
                <input className={inputClass} type="number" min="0" step="any" inputMode="decimal" aria-label={`Kg: ${label}`} value={set.weight} onChange={event => { if (event.target.validity.valid) updateSet({ weight: event.target.value }); }} />
                <input className={inputClass} type="text" placeholder={exercise.perSide ? 'sx / dx' : ''} aria-label={`${exercise.name === 'Side plank' ? 'Secondi per lato' : 'Ripetizioni'}: ${label}`} value={set.reps} onChange={event => updateSet({ reps: event.target.value })} />
                <input type="checkbox" className="h-5 w-5 accent-emerald-600" aria-label={`Completata: ${label}`} checked={set.done} onChange={event => updateSet({ done: event.target.checked })} />
              </div>;
            })}
          </section>
        )) : <p className="rounded-2xl bg-white p-4 text-sm">Giorno di recupero: nessuna sessione con i pesi prevista.</p>}

        {workout && <label className="block rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm font-bold">Cardio finale · 15–20 minuti a intensità moderata
          <span className="block text-xs font-normal my-2">Minuti completati</span>
          <input type="number" min="0" step="any" inputMode="decimal" className={inputClass} value={log.cardioMinutes} onChange={event => { if (event.target.validity.valid) updateDay({ cardioMinutes: event.target.value }); }} />
        </label>}
        {day.elbowRoutine ? <section className="rounded-2xl bg-amber-50 border border-amber-200 p-4 space-y-3">
          <h4 className="text-base font-bold">Routine gomito · 8–12 minuti</h4>
          <p className="text-xs text-slate-700">{workout ? `Dopo ${workout.name}. ` : ''}Estensori del polso e rotazione dell’avambraccio. Non cercare il cedimento muscolare.</p>
          <p className="text-xs font-semibold text-amber-900">{elbowLoadGuidance(day.week)}</p>
          {ELBOW_ROUTINE.map(exercise => {
            const entry = log.sets[exercise.id] ?? { weight: '', reps: '', done: false };
            const updateExercise = (patch: Partial<typeof entry>) => updateDay({ sets: { ...log.sets, [exercise.id]: { ...entry, ...patch } } });
            return <div key={exercise.id} className="rounded-xl bg-white border border-amber-100 p-3 space-y-2">
              <h5 className="text-sm font-bold">{exercise.name}</h5>
              <p className="text-xs font-semibold text-amber-900">{exercise.prescription}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{exercise.instructions}</p>
              <div className="grid grid-cols-2 gap-2">
                {exercise.id !== 'elbow-stretch' && exercise.id !== 'elbow-isometric' && <label className="text-xs">Carico (kg)
                  <input type="number" min="0" step="any" inputMode="decimal" aria-label={`Carico gomito: ${exercise.name}`} className={inputClass} value={entry.weight} onChange={event => { if (event.target.validity.valid) updateExercise({ weight: event.target.value }); }} />
                </label>}
                <label className="text-xs col-span-2">{exercise.id === 'elbow-stretch' ? 'Secondi per serie' : 'Ripetizioni per serie'}
                  <input type="text" aria-label={`Risultati gomito: ${exercise.name}`} placeholder={exercise.id === 'elbow-stretch' ? 'Es. 20 / 20 sec' : 'Es. 12 / 12'} className={inputClass} value={entry.reps} onChange={event => updateExercise({ reps: event.target.value })} />
                </label>
              </div>
              <label className="flex items-center gap-2 text-xs font-semibold">
                <input type="checkbox" className="h-5 w-5 accent-emerald-600" aria-label={`Completato: ${exercise.name}`} checked={entry.done} onChange={event => updateExercise({ done: event.target.checked })} /> Esercizio completato
              </label>
            </div>;
          })}
        </section> : <p className="rounded-2xl bg-white border border-slate-200 p-4 text-sm">Routine gomito: oggi riposo.</p>}
        <label className="block text-sm font-bold">Note della giornata
          <textarea className={`${inputClass} mt-2`} rows={3} placeholder="Carichi, varianti scelte, sensazioni…" value={log.notes} onChange={event => updateDay({ notes: event.target.value })} />
        </label>
        <label className="flex items-center gap-3 text-sm font-bold"><input type="checkbox" className="h-5 w-5 accent-emerald-600" checked={log.done} onChange={event => updateDay({ done: event.target.checked })} />{workout ? 'Allenamento completato' : 'Giornata completata'}</label>
        <button type="button" onClick={() => updateDay({})} className="w-full rounded-full bg-emerald-700 py-3 text-sm font-bold text-white">Salva progressi</button>
      </fieldset>
      <p role="status" className="text-xs text-emerald-800">{saved}</p>
    </div>
  );
};
