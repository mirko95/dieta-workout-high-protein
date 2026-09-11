import { WorkoutSession } from '../types';
import { datasetExercise } from './exerciseDataset';

export const WORKOUTS: WorkoutSession[] = [
  {
    id: 'a', name: 'Workout A', targetFocus: 'Full body', schedule: 'Lunedì',
    exercises: [
      { name: 'Hack squat alla slitta', sets: '3', reps: '8–12', restSeconds: 180, restLabel: '120–180', alternatives: ['Leg press', 'Goblet squat con manubrio'], ...datasetExercise('0743') },
      { name: 'Chest press alla macchina', sets: '3', reps: '8–12', restSeconds: 120, alternatives: ['Panca piana con manubri', 'Push-up inclinati'], ...datasetExercise('0577') },
      { name: 'Rematore da seduto alla macchina', sets: '3', reps: '8–12', restSeconds: 120, alternatives: ['Rematore con manubrio su panca', 'Rematore al cavo basso con presa neutra'], ...datasetExercise('1350') },
      { name: 'Stacco rumeno con manubri', sets: '3', reps: '8–12', restSeconds: 120, alternatives: ['Stacco rumeno con bilanciere', 'Hip thrust alla macchina o con bilanciere'], ...datasetExercise('1459') },
      { name: 'Leg curl da seduto alla macchina', sets: '2', reps: '10–15', restSeconds: 90, restLabel: '60–90', alternatives: ['Leg curl sdraiato', 'Sliding leg curl con asciugamani o dischi'], ...datasetExercise('0599') },
      { name: 'Crunch inverso', sets: '3', reps: '10–15', restSeconds: 60, alternatives: ['Dead bug', 'Hanging knee raise assistito'], ...datasetExercise('0872') },
    ],
  },
  {
    id: 'b', name: 'Workout B', targetFocus: 'Full body', schedule: 'Mercoledì',
    exercises: [
      { name: 'Iperestensioni su panca', sets: '3', reps: '10–15', restSeconds: 120, alternatives: ['Good morning con elastico', 'Hip thrust'], ...datasetExercise('0488') },
      { name: 'Lat machine con maniglie parallele', sets: '3', reps: '8–12', restSeconds: 120, alternatives: ['Pulldown ai cavi con corda', 'Rematore alla macchina con presa neutra'], ...datasetExercise('0818') },
      { name: 'Split squat con supporto', sets: '3', reps: '8–10 per gamba', restSeconds: 120, alternatives: ['Affondi indietro con manubri', 'Step-up basso'], perSide: true, ...datasetExercise('2368') },
      { name: 'Shoulder press alla macchina con presa neutra', sets: '2', reps: '8–12', restSeconds: 120, alternatives: ['Shoulder press con manubri presa neutra', 'Landmine press a un braccio'], ...datasetExercise('0603') },
      { name: 'Leg extension alla macchina', sets: '2', reps: '10–15', restSeconds: 90, restLabel: '60–90', alternatives: ['Sissy squat assistito', 'Spanish squat con elastico'], ...datasetExercise('0585') },
      { name: 'Side plank', sets: '3', reps: '20–40 sec per lato', restSeconds: 60, alternatives: ['Pallof press', 'Suitcase carry leggero'], perSide: true, ...datasetExercise('0705') },
    ],
  },
  {
    id: 'c', name: 'Workout C', targetFocus: 'Full body', schedule: 'Venerdì',
    exercises: [
      { name: 'Squat alla Smith machine', sets: '3', reps: '8–12', restSeconds: 180, restLabel: '120–180', alternatives: ['Leg press', 'Goblet box squat'], ...datasetExercise('0770') },
      { name: 'Chest press inclinata alla macchina', sets: '3', reps: '8–12', restSeconds: 120, alternatives: ['Panca inclinata con manubri', 'Push-up inclinati'], ...datasetExercise('1299') },
      { name: 'Rematore da seduto alla macchina', sets: '3', reps: '8–12', restSeconds: 120, alternatives: ['Rematore chest-supported con manubri', 'Rematore al cavo basso con presa neutra'], ...datasetExercise('1350') },
      { name: 'Pull-through ai cavi con corda', sets: '3', reps: '10–15', restSeconds: 120, alternatives: ['Hip thrust', 'Glute bridge con manubrio'], ...datasetExercise('0196') },
      { name: 'Lat machine con maniglie parallele', sets: '2', reps: '10–12', restSeconds: 90, alternatives: ['Pulldown ai cavi con corda', 'Rematore alla macchina con presa neutra'], ...datasetExercise('0818') },
      { name: 'Crunch inverso', sets: '3', reps: '10–15', restSeconds: 60, alternatives: ['Dead bug', 'Hanging knee raise assistito'], ...datasetExercise('0872') },
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
export type DayProgress = { sets: Record<string, SetProgress>; cardioMinutes: string; treadmillDone?: boolean; notes: string; done: boolean };
export type WorkoutProgress = Record<string, DayProgress>;
export const emptyDay = (): DayProgress => ({ sets: {}, cardioMinutes: '', treadmillDone: false, notes: '', done: false });

export function parseProgress(raw: string | null): WorkoutProgress {
  const value = JSON.parse(raw ?? '{}');
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid progress');
  for (const [date, day] of Object.entries(value) as [string, DayProgress][]) {
    if (!WORKOUT_DAYS.some(d => d.date === date) || !day || typeof day.notes !== 'string' ||
        typeof day.cardioMinutes !== 'string' || typeof day.done !== 'boolean' ||
        (day.treadmillDone !== undefined && typeof day.treadmillDone !== 'boolean') ||
        !day.sets || typeof day.sets !== 'object' || Array.isArray(day.sets)) throw new Error('Invalid day');
    for (const set of Object.values(day.sets)) {
      if (!set || typeof set.weight !== 'string' || typeof set.reps !== 'string' || typeof set.done !== 'boolean') throw new Error('Invalid set');
    }
  }
  return value;
}
