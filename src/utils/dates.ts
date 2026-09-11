// Day numbers are offsets from 1 September 2026, including October and November.
export const calendarDate = (dayNumber: number) => new Date(2026, 8, dayNumber, 12);
export const formatCalendarDate = (dayNumber: number, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('it-IT', options).format(calendarDate(dayNumber));
export const calendarDateKey = (dayNumber: number) => {
  const date = calendarDate(dayNumber);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};
export const dayNumberFromDate = (value: string) => {
  const date = new Date(`${value}T12:00:00Z`);
  return Math.round((date.getTime() - Date.UTC(2026, 8, 1, 12)) / 86400000) + 1;
};
export const mealProgressKey = (day: number, meal: number) =>
  day < 21 ? `day_${day}_meal_${meal}` : `date_${calendarDateKey(day)}_meal_${meal}`;
