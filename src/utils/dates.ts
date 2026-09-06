export const formatCalendarDate = (dayNumber: number, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('it-IT', options).format(new Date(new Date().getFullYear(), new Date().getMonth(), dayNumber));
