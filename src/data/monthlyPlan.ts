import { DayPlan } from '../types';
import sixWeekPlan from './sixWeekPlan.json';

export const SIX_WEEK_PLAN: DayPlan[] = sixWeekPlan as DayPlan[];

const PLANK_START_DAY = 7;
const PLANK_WEEK: Omit<DayPlan, 'dayNumber'>[] = [
  { totalKcal: 0, totalProtein: 0, meals: [
    { type: 'COLAZIONE', name: 'Caffè senza zucchero', isHp: false },
    { type: 'PRANZO', name: '2 uova sode e spinaci poco salati', isHp: false },
    { type: 'CENA', name: 'Una grande bistecca o 3 fette di arrosto con insalata verde e sedano', isHp: false }
  ] },
  { totalKcal: 0, totalProtein: 0, meals: [
    { type: 'COLAZIONE', name: 'Caffè senza zucchero e un po’ di pane', isHp: false },
    { type: 'PRANZO', name: '1 bistecca con insalata e frutta', isHp: false },
    { type: 'CENA', name: 'Prosciutto cotto', isHp: false }
  ] },
  { totalKcal: 0, totalProtein: 0, meals: [
    { type: 'COLAZIONE', name: 'Caffè senza zucchero e un po’ di pane', isHp: false },
    { type: 'PRANZO', name: '2 uova sode e insalata con pomodori', isHp: false },
    { type: 'CENA', name: 'Prosciutto cotto e insalata', isHp: false }
  ] },
  { totalKcal: 0, totalProtein: 0, meals: [
    { type: 'COLAZIONE', name: 'Caffè senza zucchero e un po’ di pane', isHp: false },
    { type: 'PRANZO', name: '1 uovo, carote crude o bollite e formaggio svizzero', isHp: false },
    { type: 'CENA', name: 'Frutta e 1 yogurt', isHp: false }
  ] },
  { totalKcal: 0, totalProtein: 0, meals: [
    { type: 'COLAZIONE', name: 'Carote, limone e caffè senza zucchero', isHp: false },
    { type: 'PRANZO', name: 'Pesce al vapore e pomodori', isHp: false },
    { type: 'CENA', name: '1 bistecca con contorno di insalata', isHp: false }
  ] },
  { totalKcal: 0, totalProtein: 0, meals: [
    { type: 'COLAZIONE', name: 'Caffè senza zucchero e un po’ di pane', isHp: false },
    { type: 'PRANZO', name: 'Pollo alla griglia', isHp: false },
    { type: 'CENA', name: '2 uova sode e carote', isHp: false }
  ] },
  { totalKcal: 0, totalProtein: 0, meals: [
    { type: 'COLAZIONE', name: 'Tè con succo di limone', isHp: false },
    { type: 'PRANZO', name: 'Una bistecca alla griglia e frutta', isHp: false },
    { type: 'CENA', name: 'Tutto quello che si desidera, ma niente alcol', isHp: false }
  ] }
];

const BASE_MONTHLY_PLAN: DayPlan[] = [
  {
    dayNumber: 1,
    totalKcal: 1806,
    totalProtein: 151,
    meals: [
      { type: 'COLAZIONE', name: 'Muesli croccante low-carb al cioccolato', recipeId: 'muesli-croccante-low-carb', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Pollo tikka masala', recipeId: 'pollo-tikka-masala', isHp: true },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero', recipeId: 'palline-energetiche-pan-zenzero', isHp: true },
      { type: 'CENA', name: 'Frittelle di spinaci su valeriana', recipeId: 'frittelle-spinaci-valeriana', isHp: true }
    ]
  },
  {
    dayNumber: 2,
    totalKcal: 1804,
    totalProtein: 137,
    meals: [
      { type: 'COLAZIONE', name: 'Frullato proteico al cioccolato', recipeId: 'frullato-proteico-cioccolato', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Pirofila di carne macinata e patate dolci con feta', recipeId: 'pirofila-carne-patate-dolci-feta', isHp: false },
      { type: 'SPUNTINO 2', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'CENA', name: 'Riso fritto con tofu', recipeId: 'riso-fritto-tofu', isHp: true }
    ]
  },
  {
    dayNumber: 3,
    totalKcal: 1813,
    totalProtein: 164,
    meals: [
      { type: 'COLAZIONE', name: 'Sandwich di pomodoro con insalata cremosa alle uova', recipeId: 'sandwich-pomodoro-insalata-uova', isHp: true },
      { type: 'SPUNTINO 1', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'PRANZO', name: 'Nuggets di pollo croccanti su insalata', recipeId: 'nuggets-pollo-insalata', isHp: false },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero', recipeId: 'palline-energetiche-pan-zenzero', isHp: true },
      { type: 'CENA', name: 'Pasta cremosa al curry', recipeId: 'pasta-cremosa-curry', isHp: false }
    ]
  },
  {
    dayNumber: 4,
    totalKcal: 1826,
    totalProtein: 142,
    meals: [
      { type: 'COLAZIONE', name: 'Smoothie alla banana con cioccolato', recipeId: 'smoothie-banana-cioccolato', isHp: true },
      { type: 'SPUNTINO 1', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'PRANZO', name: 'Cavolfiore in salsa al formaggio', recipeId: 'cavolfiore-salsa-formaggio', isHp: true },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero', recipeId: 'palline-energetiche-pan-zenzero', isHp: true },
      { type: 'CENA', name: 'Insalata mediterranea con calamaro', recipeId: 'insalata-mediterranea-calamaro', isHp: true }
    ]
  },
  {
    dayNumber: 5,
    totalKcal: 1837,
    totalProtein: 140,
    meals: [
      { type: 'COLAZIONE', name: 'Frullato proteico al cioccolato', recipeId: 'frullato-proteico-cioccolato', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Pasta verde', recipeId: 'pasta-verde', isHp: true },
      { type: 'SPUNTINO 2', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'CENA', name: 'Salmone in friggitrice ad aria', recipeId: 'salmone-friggitrice-aria', isHp: false }
    ]
  },
  {
    dayNumber: 6,
    totalKcal: 1804,
    totalProtein: 138,
    meals: [
      { type: 'COLAZIONE', name: 'Sandwich di pomodoro con insalata cremosa alle uova', recipeId: 'sandwich-pomodoro-insalata-uova', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Tofu teriyaki', recipeId: 'tofu-teriyaki', isHp: true },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero', recipeId: 'palline-energetiche-pan-zenzero', isHp: true },
      { type: 'CENA', name: 'Padellata di pollo e funghi', recipeId: 'padellata-pollo-funghi', isHp: false }
    ]
  },
  {
    dayNumber: 7,
    totalKcal: 1806,
    totalProtein: 137,
    meals: [
      { type: 'COLAZIONE', name: 'Smoothie alla banana con cioccolato', recipeId: 'smoothie-banana-cioccolato', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Cavolfiore al curry e cocco con cuscus', recipeId: 'cavolfiore-curry-cocco-cuscus', isHp: true },
      { type: 'SPUNTINO 2', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'CENA', name: 'Burger low-carb con spinaci e uova', recipeId: 'burger-low-carb-spinaci-uova', isHp: false }
    ]
  },
  {
    dayNumber: 8,
    totalKcal: 1806,
    totalProtein: 151,
    meals: [
      { type: 'COLAZIONE', name: 'Muesli croccante low-carb al cioccolato', recipeId: 'muesli-croccante-low-carb', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Pollo tikka masala', recipeId: 'pollo-tikka-masala', isHp: true },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero', recipeId: 'palline-energetiche-pan-zenzero', isHp: true },
      { type: 'CENA', name: 'Frittelle di spinaci su valeriana', recipeId: 'frittelle-spinaci-valeriana', isHp: true }
    ]
  },
  {
    dayNumber: 9,
    totalKcal: 1805,
    totalProtein: 138,
    meals: [
      { type: 'COLAZIONE', name: 'Frullato proteico al cioccolato', recipeId: 'frullato-proteico-cioccolato', isHp: true },
      { type: 'SPUNTINO 1', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'PRANZO', name: 'Padellata di pollo e funghi', recipeId: 'padellata-pollo-funghi', isHp: false },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero', recipeId: 'palline-energetiche-pan-zenzero', isHp: true },
      { type: 'CENA', name: 'Cavolfiore al curry e cocco con cuscus', recipeId: 'cavolfiore-curry-cocco-cuscus', isHp: true }
    ]
  },
  {
    dayNumber: 10,
    totalKcal: 1823,
    totalProtein: 136,
    meals: [
      { type: 'COLAZIONE', name: 'Smoothie alla banana con cioccolato', recipeId: 'smoothie-banana-cioccolato', isHp: true },
      { type: 'SPUNTINO 1', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'PRANZO', name: 'Riso fritto con tofu', recipeId: 'riso-fritto-tofu', isHp: true },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero', recipeId: 'palline-energetiche-pan-zenzero', isHp: true },
      { type: 'CENA', name: 'Burger low-carb con spinaci e uova', recipeId: 'burger-low-carb-spinaci-uova', isHp: false }
    ]
  },
  {
    dayNumber: 11,
    totalKcal: 1824,
    totalProtein: 131,
    meals: [
      { type: 'COLAZIONE', name: 'Sandwich di pomodoro con insalata cremosa alle uova', recipeId: 'sandwich-pomodoro-insalata-uova', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Tofu teriyaki', recipeId: 'tofu-teriyaki', isHp: true },
      { type: 'SPUNTINO 2', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'CENA', name: 'Pasta verde', recipeId: 'pasta-verde', isHp: true }
    ]
  },
  {
    dayNumber: 12,
    totalKcal: 1784,
    totalProtein: 132,
    meals: [
      { type: 'COLAZIONE', name: 'Muesli croccante low-carb al cioccolato', recipeId: 'muesli-croccante-low-carb', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Cavolfiore in salsa al formaggio', recipeId: 'cavolfiore-salsa-formaggio', isHp: false },
      { type: 'SPUNTINO 2', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'CENA', name: 'Pasta cremosa al curry', recipeId: 'pasta-cremosa-curry', isHp: true }
    ]
  },
  {
    dayNumber: 13,
    totalKcal: 1819,
    totalProtein: 162,
    meals: [
      { type: 'COLAZIONE', name: 'Frullato proteico al cioccolato', recipeId: 'frullato-proteico-cioccolato', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: false },
      { type: 'PRANZO', name: 'Nuggets di pollo croccanti su insalata', recipeId: 'nuggets-pollo-insalata', isHp: false },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero', recipeId: 'palline-energetiche-pan-zenzero', isHp: true },
      { type: 'CENA', name: 'Salmone in friggitrice ad aria', recipeId: 'salmone-friggitrice-aria', isHp: false }
    ]
  },
  {
    dayNumber: 14,
    totalKcal: 1851,
    totalProtein: 138,
    meals: [
      { type: 'COLAZIONE', name: 'Muesli croccante low-carb al cioccolato', recipeId: 'muesli-croccante-low-carb', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Pirofila di carne macinata e patate dolci con feta', recipeId: 'pirofila-carne-patate-dolci-feta', isHp: false },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero (HP light: 100g skyr)', recipeId: 'palline-energetiche-pan-zenzero', isHp: true, notes: 'Usa 100 g skyr' },
      { type: 'CENA', name: 'Insalata mediterranea con calamaro', recipeId: 'insalata-mediterranea-calamaro', isHp: true }
    ]
  },
  {
    dayNumber: 15,
    totalKcal: 1763,
    totalProtein: 132,
    meals: [
      { type: 'COLAZIONE', name: 'Smoothie alla banana con cioccolato', recipeId: 'smoothie-banana-cioccolato', isHp: true },
      { type: 'SPUNTINO 1', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'PRANZO', name: 'Cavolfiore in salsa al formaggio', recipeId: 'cavolfiore-salsa-formaggio', isHp: true },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero', recipeId: 'palline-energetiche-pan-zenzero', isHp: true },
      { type: 'CENA', name: 'Frittelle di spinaci su valeriana', recipeId: 'frittelle-spinaci-valeriana', isHp: false }
    ]
  },
  {
    dayNumber: 16,
    totalKcal: 1813,
    totalProtein: 164,
    meals: [
      { type: 'COLAZIONE', name: 'Sandwich di pomodoro con insalata cremosa alle uova', recipeId: 'sandwich-pomodoro-insalata-uova', isHp: true },
      { type: 'SPUNTINO 1', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'PRANZO', name: 'Nuggets di pollo croccanti su insalata', recipeId: 'nuggets-pollo-insalata', isHp: false },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero', recipeId: 'palline-energetiche-pan-zenzero', isHp: true },
      { type: 'CENA', name: 'Pasta cremosa al curry', recipeId: 'pasta-cremosa-curry', isHp: false }
    ]
  },
  {
    dayNumber: 17,
    totalKcal: 1804,
    totalProtein: 137,
    meals: [
      { type: 'COLAZIONE', name: 'Frullato proteico al cioccolato', recipeId: 'frullato-proteico-cioccolato', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Pirofila di carne macinata e patate dolci con feta', recipeId: 'pirofila-carne-patate-dolci-feta', isHp: false },
      { type: 'SPUNTINO 2', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'CENA', name: 'Riso fritto con tofu', recipeId: 'riso-fritto-tofu', isHp: true }
    ]
  },
  {
    dayNumber: 18,
    totalKcal: 1824,
    totalProtein: 131,
    meals: [
      { type: 'COLAZIONE', name: 'Sandwich di pomodoro con insalata cremosa alle uova', recipeId: 'sandwich-pomodoro-insalata-uova', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Tofu teriyaki', recipeId: 'tofu-teriyaki', isHp: true },
      { type: 'SPUNTINO 2', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'CENA', name: 'Pasta verde', recipeId: 'pasta-verde', isHp: true }
    ]
  },
  {
    dayNumber: 19,
    totalKcal: 1852,
    totalProtein: 140,
    meals: [
      { type: 'COLAZIONE', name: 'Muesli croccante low-carb al cioccolato', recipeId: 'muesli-croccante-low-carb', isHp: true },
      { type: 'SPUNTINO 1', name: 'Mug Cake alla banana e burro di arachidi', recipeId: 'mug-cake-banana-burro-arachidi', isHp: true },
      { type: 'PRANZO', name: 'Pollo tikka masala', recipeId: 'pollo-tikka-masala', isHp: true },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero (HP light: 100g skyr)', recipeId: 'palline-energetiche-pan-zenzero', isHp: true, notes: 'Usa 100 g skyr' },
      { type: 'CENA', name: 'Insalata mediterranea con calamaro', recipeId: 'insalata-mediterranea-calamaro', isHp: true }
    ]
  },
  {
    dayNumber: 20,
    totalKcal: 1805,
    totalProtein: 138,
    meals: [
      { type: 'COLAZIONE', name: 'Frullato proteico al cioccolato', recipeId: 'frullato-proteico-cioccolato', isHp: true },
      { type: 'SPUNTINO 1', name: 'Involtini primavera vietnamiti', recipeId: 'involtini-primavera-vietnamiti', isHp: true },
      { type: 'PRANZO', name: 'Padellata di pollo e funghi', recipeId: 'padellata-pollo-funghi', isHp: false },
      { type: 'SPUNTINO 2', name: 'Palline energetiche al pan di zenzero', recipeId: 'palline-energetiche-pan-zenzero', isHp: true },
      { type: 'CENA', name: 'Cavolfiore al curry e cocco con cuscus', recipeId: 'cavolfiore-curry-cocco-cuscus', isHp: true }
    ]
  }
];

export const MONTHLY_PLAN: DayPlan[] = [...BASE_MONTHLY_PLAN.map((day) => {
  const plankDay = day.dayNumber < PLANK_START_DAY || day.dayNumber >= PLANK_START_DAY + 14
    ? undefined
    : PLANK_WEEK[(day.dayNumber - PLANK_START_DAY) % PLANK_WEEK.length];
  return plankDay ? { ...plankDay, dayNumber: day.dayNumber } : day;
}), ...SIX_WEEK_PLAN];
