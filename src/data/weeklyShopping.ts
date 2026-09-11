import { HEALTHY_RECIPES } from './recipes';
import { SIX_WEEK_PLAN } from './monthlyPlan';
import { Ingredient, Recipe } from '../types';
import { formatCalendarDate } from '../utils/dates';

const number = (value: number) => Number(value.toFixed(2)).toLocaleString('it-IT');

export function shoppingQuantity(ingredient: Ingredient, recipe: Recipe, portions: number): string {
  if (ingredient.quantity == null) return 'Quantità non specificata: vedi dose originale';
  const min = ingredient.quantity * portions / (recipe.maxServings ?? recipe.defaultServings);
  const max = (ingredient.quantityMax ?? ingredient.quantity) * portions / recipe.defaultServings;
  return `${number(min)}${Math.abs(max - min) > 0.001 ? `–${number(max)}` : ''} ${ingredient.unit ?? ''}`.trim();
}

export const WEEKLY_SHOPPING = Array.from({ length: 6 }, (_, index) => {
  const start = 21 + index * 7;
  const days = SIX_WEEK_PLAN.slice(index * 7, index * 7 + 7);
  const meals = days.flatMap(day => day.meals);
  const extras = new Map<string, number>();
  for (const meal of meals) {
    for (const ingredient of meal.extras ?? []) {
      extras.set(ingredient.name, (extras.get(ingredient.name) ?? 0) + (ingredient.grams ?? 0));
    }
  }
  const recipes = HEALTHY_RECIPES.filter(recipe => meals.some(meal => meal.recipeId === recipe.id));
  return {
    week: index + 1,
    label: `${formatCalendarDate(start, { day: 'numeric', month: 'short' })} – ${formatCalendarDate(start + 6, { day: 'numeric', month: 'short' })}`,
    warnings: meals.filter(meal => meal.notes).map(meal => `${meal.name}: ${meal.notes}`),
    groups: [
      {
        title: 'Spuntini e aggiunte del piano',
        description: 'Totali settimanali, in aggiunta agli ingredienti delle ricette qui sotto.',
        sourceUrl: '',
        items: [...extras].map(([name, grams], i) => ({ id: `healthy-week-${index + 1}-extra-${i}`, name, quantity: `${number(grams)} g`, original: '' })),
      },
      ...recipes.map(recipe => {
        const portions = meals.filter(meal => meal.recipeId === recipe.id).reduce((sum, meal) => sum + (meal.recipeServings ?? 1), 0);
        return {
          title: recipe.title,
          description: `${portions} ${recipe.yieldLabel?.includes('pancake') ? 'pancake' : 'porzioni'} nella settimana · ricetta originale: ${recipe.yieldLabel}`,
          sourceUrl: recipe.sourceUrl ?? '',
          items: recipe.ingredients.map((ingredient, i) => ({
            id: `healthy-week-${index + 1}-${recipe.id}-${i}`,
            name: ingredient.name + (ingredient.notes ? ` (${ingredient.notes.toLowerCase()})` : ''),
            quantity: shoppingQuantity(ingredient, recipe, portions),
            original: ingredient.sourceText ?? ingredient.name,
          })),
        };
      }),
    ],
  };
});
