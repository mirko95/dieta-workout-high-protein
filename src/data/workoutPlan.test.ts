import assert from 'node:assert/strict';
import { ELBOW_ROUTINE, elbowLoadGuidance, WORKOUT_DAYS, WORKOUTS, emptyDay, parseProgress } from './workoutPlan';

assert.equal(WORKOUT_DAYS.length, 56);
assert.ok(WORKOUT_DAYS.every(day => day.treadmillMinutes === 30));
assert.equal(WORKOUT_DAYS[0].date, '2026-09-14');
assert.equal(WORKOUT_DAYS.at(-1)?.date, '2026-11-08');
assert.equal(new Set(WORKOUT_DAYS.map(day => day.date)).size, 56);
for (let week = 1; week <= 8; week++) {
  assert.deepEqual(WORKOUT_DAYS.filter(day => day.week === week).map(day => day.workout?.id ?? null), ['a', null, 'b', null, 'c', null, null]);
  assert.deepEqual(WORKOUT_DAYS.filter(day => day.week === week).map(day => day.elbowRoutine), [true, true, true, false, true, true, false]);
}
assert.deepEqual(WORKOUTS.map(workout => workout.exercises.length), [6, 6, 6]);
assert.equal(WORKOUTS[0].exercises[3].name, 'Stacco rumeno con manubri');
assert.equal(WORKOUTS[2].exercises[3].name, 'Pull-through ai cavi con corda');
assert.equal(WORKOUTS[1].exercises[5].reps, '20–40 sec per lato');
assert.ok(WORKOUTS.flatMap(workout => workout.exercises).every(exercise => exercise.gifUrl?.includes('raw.githubusercontent.com') && exercise.instructionSteps?.length));
const workoutExercises = WORKOUTS.flatMap(workout => workout.exercises);
assert.ok(workoutExercises.every(exercise => exercise.alternatives?.length === 2));
assert.ok(workoutExercises.every(exercise => exercise.alternatives?.every(alternative => alternative.gifUrl.includes('raw.githubusercontent.com') && alternative.datasetId)));
const progress = {
  '2026-09-14': { ...emptyDay(), sets: { '0:0': { weight: '42.5', reps: '12', done: true } }, cardioMinutes: '18', notes: 'Leg press', done: true },
  '2026-09-21': emptyDay(),
};
const restored = parseProgress(JSON.stringify(progress));
assert.deepEqual(restored, progress);
assert.deepEqual(restored['2026-09-21'].sets, {});
assert.deepEqual(parseProgress(null), {});
for (const invalid of ['null', '[]', '{', '{"2026-09-14":{}}']) assert.throws(() => parseProgress(invalid));
// Existing saved days remain readable; treadmill progress is independent of gym cardio.
const legacyDay = { sets: {}, cardioMinutes: '18', notes: 'Saved before treadmill tracking', done: true };
assert.deepEqual(parseProgress(JSON.stringify({ '2026-09-14': legacyDay }))['2026-09-14'], legacyDay);
const treadmillProgress = parseProgress(JSON.stringify({
  '2026-09-14': { ...legacyDay, treadmillDone: true },
  '2026-09-15': { ...emptyDay(), treadmillDone: true }, // Recovery day.
  '2026-09-16': emptyDay(),
}));
assert.equal(treadmillProgress['2026-09-14'].cardioMinutes, '18');
assert.equal(treadmillProgress['2026-09-15'].treadmillDone, true);
assert.equal(treadmillProgress['2026-09-16'].treadmillDone, false);
assert.throws(() => parseProgress(JSON.stringify({ '2026-09-14': { ...legacyDay, treadmillDone: 'yes' } })));
assert.equal(WORKOUT_DAYS.filter(day => day.elbowRoutine).length, 40);
assert.equal(ELBOW_ROUTINE.length, 4);
assert.equal(new Set(ELBOW_ROUTINE.map(exercise => exercise.id)).size, 4);
assert.match(elbowLoadGuidance(1), /0 kg/);
assert.match(elbowLoadGuidance(2), /0,5 kg/);
assert.match(elbowLoadGuidance(8), /solo se il gomito lo tollera/);
const elbowDay = { ...progress['2026-09-14'], treadmillDone: true, sets: {
  ...progress['2026-09-14'].sets,
  'elbow-eccentric': { weight: '0.5', reps: '12 / 12', done: true },
} };
const elbowSaved = parseProgress(JSON.stringify({ '2026-09-14': elbowDay, '2026-09-15': emptyDay() }));
assert.deepEqual(elbowSaved['2026-09-14'], elbowDay);
assert.equal(elbowSaved['2026-09-15'].sets['elbow-eccentric'], undefined);
console.log('Workout schedule and progress checks passed.');
