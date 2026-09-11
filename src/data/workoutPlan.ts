import { WorkoutSession } from '../types';

export const WORKOUTS: WorkoutSession[] = [
  {
    id: 'a', name: 'Workout A', targetFocus: 'Full body', schedule: 'Lunedì',
    exercises: [
      { name: 'Hack squat or leg press', sets: '3', reps: '8–12', restSeconds: 180, restLabel: '120–180' },
      { name: 'Machine chest press', sets: '3', reps: '8–12', restSeconds: 120 },
      { name: 'Chest-supported machine row', sets: '3', reps: '8–12', restSeconds: 120 },
      { name: 'Dumbbell Romanian deadlift (RDL)', sets: '3', reps: '8–12', restSeconds: 120 },
      { name: 'Seated leg curl', sets: '2', reps: '10–15', restSeconds: 90, restLabel: '60–90' },
      { name: 'Reverse crunch', sets: '3', reps: '10–15', restSeconds: 60 },
    ],
  },
  {
    id: 'b', name: 'Workout B', targetFocus: 'Full body', schedule: 'Mercoledì',
    exercises: [
      { name: '45° back extension / hip extension', sets: '3', reps: '10–15', restSeconds: 120 },
      { name: 'Neutral-grip lat pulldown', sets: '3', reps: '8–12', restSeconds: 120 },
      { name: 'Supported split squat', sets: '3', reps: '8–10 per leg', restSeconds: 120 },
      { name: 'Neutral-grip machine shoulder press', sets: '2', reps: '8–12', restSeconds: 120 },
      { name: 'Leg extension', sets: '2', reps: '10–15', restSeconds: 90, restLabel: '60–90' },
      { name: 'Side plank', sets: '3', reps: '20–40 sec per side', restSeconds: 60 },
    ],
  },
  {
    id: 'c', name: 'Workout C', targetFocus: 'Full body', schedule: 'Venerdì',
    exercises: [
      { name: 'Leg press or Smith-machine box squat', sets: '3', reps: '8–12', restSeconds: 180, restLabel: '120–180' },
      { name: 'Incline machine chest press', sets: '3', reps: '8–12', restSeconds: 120 },
      { name: 'Chest-supported row', sets: '3', reps: '8–12', restSeconds: 120 },
      { name: 'Cable pull-through', sets: '3', reps: '10–15', restSeconds: 120 },
      { name: 'Neutral-grip lat pulldown', sets: '2', reps: '10–12', restSeconds: 90 },
      { name: 'Reverse crunch', sets: '3', reps: '10–15', restSeconds: 60 },
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
