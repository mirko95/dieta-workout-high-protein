export type MealCategory = 'COLAZIONE' | 'PRANZO' | 'CENA' | 'SNACK' | 'SPUNTINO 1' | 'SPUNTINO 2';

export interface Ingredient {
  name: string;
  amount?: string;
  grams?: number;
  quantity?: number;
  quantityMax?: number;
  sourceText?: string;
  unit?: string;
  notes?: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: 'COLAZIONE' | 'PRANZO / CENA' | 'SNACK';
  kcal: number;
  timeMinutes: number;
  difficulty: 'facile' | 'normale' | 'impegnativa';
  description: string;
  defaultServings: number;
  ingredients: Ingredient[];
  instructions: string[];
  sourceUrl?: string;
  sourcePage?: number;
  sourceNotes?: string;
  maxServings?: number;
  yieldLabel?: string;
  timeLabel?: string;
  nutritionLabel?: string;
  nutritionDetails?: string;
  hpVariant?: {
    title: string;
    description: string;
    kcal: number;
    proteinGrams: number;
    adjustments: string[];
    tips?: string;
  };
  originalProteinGrams?: number;
  tags: string[];
}

export interface MealSlot {
  type: 'COLAZIONE' | 'SPUNTINO 1' | 'PRANZO' | 'SPUNTINO 2' | 'CENA';
  name: string;
  recipeId?: string;
  isHp: boolean;
  notes?: string;
  recipeServings?: number;
  extras?: Ingredient[];
  estimatedKcal?: number;
  estimatedProtein?: number;
}

export interface DayPlan {
  dayNumber: number;
  totalKcal: number;
  totalProtein: number;
  meals: MealSlot[];
}

export interface ShoppingCategory {
  title: string;
  items: {
    id: string;
    name: string;
    quantity: string;
    checked?: boolean;
    isHpExtra?: boolean;
  }[];
}

export interface FourDayBlock {
  id: string;
  daysRange: string;
  startDay: number;
  endDay: number;
  categories: {
    title: string;
    items: { id: string; name: string; quantity: string }[];
  }[];
  hpCorrections: string[];
  mealPrepSteps: string[];
  storageAdvice: string;
}

export interface WorkoutExercise {
  name: string;
  sets: string;
  reps: string;
  restSeconds: number;
  restLabel?: string;
  notes?: string;
  datasetId?: string;
  equipment?: string;
  instructionSteps?: string[];
  gifUrl?: string;
  alternatives?: string[];
  perSide?: boolean;
}

export interface WorkoutSession {
  id: string;
  name: string;
  targetFocus: string;
  schedule?: string;
  exercises: WorkoutExercise[];
}

export interface MonthProgram {
  id: string;
  monthName: string;
  subtitle: string;
  frequency: string;
  rirTarget: string;
  structure: {
    title: string;
    points: string[];
  }[];
  workouts: WorkoutSession[];
  cardioAndMovement: {
    cardioPostWeights: string;
    walkingPad: string;
    dailySteps: string;
    extraNote?: string;
  };
  coachTip?: string;
}
