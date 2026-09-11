import { WorkoutSession } from '../types';
import { datasetAnimation, datasetExercise } from './exerciseDataset';

const alternatives = (...items: [string, string, string, string][]) =>
  items.map(([name, id, equipment, gif]) => ({ name, ...datasetAnimation(id, equipment, gif) }));

export const WORKOUTS: WorkoutSession[] = [
  {
    id: 'a', name: 'Workout A', targetFocus: 'Full body', schedule: 'Lunedì',
    exercises: [
      { name: 'Hack squat alla slitta', sets: '3', reps: '8–12', restSeconds: 180, restLabel: '120–180', alternatives: alternatives(['Leg press', '0739', 'slitta', 'videos/0739-10Z2DXU.gif'], ['Goblet squat con manubrio', '1760', 'manubrio', 'videos/1760-yn8yg1r.gif']), ...datasetExercise('0743') },
      { name: 'Chest press alla macchina', sets: '3', reps: '8–12', restSeconds: 120, alternatives: alternatives(['Panca piana con manubri', '0289', 'manubri', 'videos/0289-SpYC0Kp.gif'], ['Push-up inclinati', '0493', 'corpo libero', 'videos/0493-B1EVP9F.gif']), ...datasetExercise('0577') },
      { name: 'Rematore da seduto alla macchina', sets: '3', reps: '8–12', restSeconds: 120, alternatives: alternatives(['Rematore con manubrio su panca', '0292', 'manubrio', 'videos/0292-C0MA9bC.gif'], ['Rematore al cavo basso con presa neutra', '0861', 'cavi', 'videos/0861-fUBheHs.gif']), ...datasetExercise('1350') },
      { name: 'Stacco rumeno con manubri', sets: '3', reps: '8–12', restSeconds: 120, alternatives: alternatives(['Stacco rumeno con bilanciere', '0085', 'bilanciere', 'videos/0085-wQ2c4XD.gif'], ['Glute bridge con bilanciere', '1409', 'bilanciere', 'videos/1409-qKBpF7I.gif']), ...datasetExercise('1459') },
      { name: 'Leg curl da seduto alla macchina', sets: '2', reps: '10–15', restSeconds: 90, restLabel: '60–90', alternatives: alternatives(['Leg curl sdraiato', '0586', 'macchina a leve', 'videos/0586-17lJ1kr.gif'], ['Leg curl in piedi a corpo libero', '0795', 'corpo libero', 'videos/0795-C5jncD2.gif']), ...datasetExercise('0599') },
      { name: 'Crunch inverso', sets: '3', reps: '10–15', restSeconds: 60, alternatives: alternatives(['Dead bug', '0276', 'corpo libero', 'videos/0276-iny3m5y.gif'], ['Hanging knee raise assistito', '0011', 'assistito', 'videos/0011-03lzqwk.gif']), ...datasetExercise('0872') },
    ],
  },
  {
    id: 'b', name: 'Workout B', targetFocus: 'Full body', schedule: 'Mercoledì',
    exercises: [
      { name: 'Iperestensioni su panca', sets: '3', reps: '10–15', restSeconds: 120, alternatives: alternatives(['Good morning con bilanciere', '0044', 'bilanciere', 'videos/0044-XlZ4lAC.gif'], ['Glute bridge con bilanciere', '1409', 'bilanciere', 'videos/1409-qKBpF7I.gif']), ...datasetExercise('0488') },
      { name: 'Lat machine con maniglie parallele', sets: '3', reps: '8–12', restSeconds: 120, alternatives: alternatives(['Pulldown con elastico presa stretta', '0974', 'elastico', 'videos/0974-DptumMx.gif'], ['Pulldown braccia tese con corda', '0237', 'cavi', 'videos/0237-DT14T9T.gif']), ...datasetExercise('0818') },
      { name: 'Split squat con supporto', sets: '3', reps: '8–10 per gamba', restSeconds: 120, alternatives: alternatives(['Affondi indietro con manubri', '0381', 'manubri', 'videos/0381-SSsBDwB.gif'], ['Step-up con manubri', '0431', 'manubri', 'videos/0431-aXtJhlg.gif']), perSide: true, ...datasetExercise('2368') },
      { name: 'Shoulder press alla macchina con presa neutra', sets: '2', reps: '8–12', restSeconds: 120, alternatives: alternatives(['Shoulder press seduto con manubri presa neutra', '0404', 'manubri', 'videos/0404-f1jf47L.gif'], ['Shoulder press ai cavi', '0219', 'cavi', 'videos/0219-PzQanLE.gif']), ...datasetExercise('0603') },
      { name: 'Leg extension alla macchina', sets: '2', reps: '10–15', restSeconds: 90, restLabel: '60–90', alternatives: alternatives(['Sissy squat assistito', '1489', 'corpo libero', 'videos/1489-xdYPUtE.gif'], ['Squat con elastico', '1004', 'elastico', 'videos/1004-TUZLh71.gif']), ...datasetExercise('0585') },
      { name: 'Side plank', sets: '3', reps: '20–40 sec per lato', restSeconds: 60, alternatives: alternatives(['Pallof press con elastico', '0979', 'elastico', 'videos/0979-9pa4H5m.gif'], ['Farmer walk con manubri', '2133', 'manubri', 'videos/2133-qPEzJjA.gif']), perSide: true, ...datasetExercise('0705') },
    ],
  },
  {
    id: 'c', name: 'Workout C', targetFocus: 'Full body', schedule: 'Venerdì',
    exercises: [
      { name: 'Squat alla Smith machine', sets: '3', reps: '8–12', restSeconds: 180, restLabel: '120–180', alternatives: alternatives(['Leg press', '0739', 'slitta', 'videos/0739-10Z2DXU.gif'], ['Goblet squat con manubrio', '1760', 'manubrio', 'videos/1760-yn8yg1r.gif']), ...datasetExercise('0770') },
      { name: 'Chest press inclinata alla macchina', sets: '3', reps: '8–12', restSeconds: 120, alternatives: alternatives(['Panca inclinata con manubri', '0314', 'manubri', 'videos/0314-ns0SIbU.gif'], ['Push-up inclinati', '0493', 'corpo libero', 'videos/0493-B1EVP9F.gif']), ...datasetExercise('1299') },
      { name: 'Rematore da seduto alla macchina', sets: '3', reps: '8–12', restSeconds: 120, alternatives: alternatives(['Rematore con manubrio su panca', '0292', 'manubrio', 'videos/0292-C0MA9bC.gif'], ['Rematore al cavo basso con presa neutra', '0861', 'cavi', 'videos/0861-fUBheHs.gif']), ...datasetExercise('1350') },
      { name: 'Pull-through ai cavi con corda', sets: '3', reps: '10–15', restSeconds: 120, alternatives: alternatives(['Glute bridge con bilanciere', '1409', 'bilanciere', 'videos/1409-qKBpF7I.gif'], ['Glute bridge a terra', '3013', 'corpo libero', 'videos/3013-u0cNiij.gif']), ...datasetExercise('0196') },
      { name: 'Lat machine con maniglie parallele', sets: '2', reps: '10–12', restSeconds: 90, alternatives: alternatives(['Pulldown con elastico presa stretta', '0974', 'elastico', 'videos/0974-DptumMx.gif'], ['Pulldown braccia tese con corda', '0237', 'cavi', 'videos/0237-DT14T9T.gif']), ...datasetExercise('0818') },
      { name: 'Crunch inverso', sets: '3', reps: '10–15', restSeconds: 60, alternatives: alternatives(['Dead bug', '0276', 'corpo libero', 'videos/0276-iny3m5y.gif'], ['Hanging knee raise assistito', '0011', 'assistito', 'videos/0011-03lzqwk.gif']), ...datasetExercise('0872') },
    ],
  },
];

export const ELBOW_ROUTINE = [
  {
    id: 'elbow-isometric', name: 'Estensione isometrica del polso', prescription: '2 × 10–15 · tenuta 5 sec',
    instructions: 'Avambraccio appoggiato, palmo verso il basso. Con l’altra mano fai resistenza mentre provi a sollevare il polso, senza farlo muovere.',
  },
  {
    id: 'elbow-eccentric', name: 'Estensione eccentrica del polso', prescription: '2–3 × 10–15 · discesa 3–5 sec',
    instructions: 'Usa l’altra mano per aiutare il polso a salire; poi abbassalo lentamente in 3–5 secondi con il braccio dolorante. Esercizio principale della routine.',
  },
  {
    id: 'elbow-rotation', name: 'Pronazione / supinazione', prescription: '2 × 10–12 per lato',
    instructions: 'Gomito piegato a 90°. Tieni un martello o un manubrio molto leggero e ruota lentamente il palmo verso l’alto e poi verso il basso.',
  },
  {
    id: 'elbow-stretch', name: 'Stretch estensori del polso', prescription: '2 × 20–30 sec',
    instructions: 'Braccio disteso, palmo verso il basso. Porta delicatamente il polso e le dita verso il basso finché senti tirare nell’avambraccio.',
  },
];

export const elbowLoadGuidance = (week: number) => week === 1
  ? 'Settimana 1: estensione del polso senza peso (0 kg).'
  : week === 2
    ? 'Settimana 2: 0,5 kg per l’estensione del polso, solo se tollerati senza aumento del dolore.'
    : 'Settimana 3+: aumenta il carico solo se il gomito lo tollera, molto gradualmente; eventualmente circa 0,5–1,5 kg, senza aumento del dolore.';

export const WORKOUT_DAYS = Array.from({ length: 56 }, (_, index) => ({
  date: new Date(Date.UTC(2026, 8, 14 + index)).toISOString().slice(0, 10),
  week: Math.floor(index / 7) + 1,
  treadmillMinutes: 30,
  elbowRoutine: [0, 1, 2, 4, 5].includes(index % 7),
  workout: index % 7 === 0 ? WORKOUTS[0] : index % 7 === 2 ? WORKOUTS[1] : index % 7 === 4 ? WORKOUTS[2] : null,
}));

export const PROGRESS_KEY = 'diet_workout_progress_2026_09_14';
export type SetProgress = { weight: string; reps: string; done: boolean };
export type DayProgress = { sets: Record<string, SetProgress>; variants?: Record<string, string>; cardioMinutes: string; treadmillDone?: boolean; notes: string; done: boolean };
export type WorkoutProgress = Record<string, DayProgress>;
export const emptyDay = (): DayProgress => ({ sets: {}, variants: {}, cardioMinutes: '', treadmillDone: false, notes: '', done: false });

export function parseProgress(raw: string | null): WorkoutProgress {
  const value = JSON.parse(raw ?? '{}');
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid progress');
  for (const [date, day] of Object.entries(value) as [string, DayProgress][]) {
    if (!WORKOUT_DAYS.some(d => d.date === date) || !day || typeof day.notes !== 'string' ||
        typeof day.cardioMinutes !== 'string' || typeof day.done !== 'boolean' ||
        (day.treadmillDone !== undefined && typeof day.treadmillDone !== 'boolean') ||
        (day.variants !== undefined && (typeof day.variants !== 'object' || Array.isArray(day.variants))) ||
        !day.sets || typeof day.sets !== 'object' || Array.isArray(day.sets)) throw new Error('Invalid day');
    if (day.variants) {
      for (const variant of Object.values(day.variants)) {
        if (typeof variant !== 'string') throw new Error('Invalid variant');
      }
    }
    for (const set of Object.values(day.sets)) {
      if (!set || typeof set.weight !== 'string' || typeof set.reps !== 'string' || typeof set.done !== 'boolean') throw new Error('Invalid set');
    }
  }
  return value;
}
