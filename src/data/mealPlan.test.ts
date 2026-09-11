import assert from 'node:assert/strict';
import { MONTHLY_PLAN, SIX_WEEK_PLAN } from './monthlyPlan';
import { HEALTHY_RECIPES, RECIPES } from './recipes';
import { FOUR_DAY_BLOCKS } from './shoppingList';
import { WEEKLY_SHOPPING, shoppingQuantity } from './weeklyShopping';
import { calendarDateKey, dayNumberFromDate, mealProgressKey } from '../utils/dates';

assert.equal(MONTHLY_PLAN.length, 62);
assert.equal(SIX_WEEK_PLAN.length, 42);
assert.equal(HEALTHY_RECIPES.length, 38);
assert.equal(calendarDateKey(SIX_WEEK_PLAN[0].dayNumber), '2026-09-21');
assert.equal(calendarDateKey(SIX_WEEK_PLAN.at(-1)!.dayNumber), '2026-11-01');
assert.equal(calendarDateKey(31), '2026-10-01');
assert.equal(calendarDateKey(55), '2026-10-25'); // End of daylight saving time in Italy.
for (let day = 1; day <= 62; day++) assert.equal(dayNumberFromDate(calendarDateKey(day)), day);
assert.equal(mealProgressKey(20, 0), 'day_20_meal_0');
assert.notEqual(mealProgressKey(21, 0), 'day_21_meal_0');
assert.notEqual(mealProgressKey(21, 0), mealProgressKey(51, 0));
assert.equal(MONTHLY_PLAN[19].meals[2].name, 'Tutto quello che si desidera, ma niente alcol');
assert.equal(FOUR_DAY_BLOCKS.at(-1)!.endDay, 20);
assert.equal(new Set(RECIPES.map(recipe => recipe.id)).size, RECIPES.length);
for (const recipe of HEALTHY_RECIPES) {
  assert.ok(recipe.sourceUrl?.startsWith('https://'));
  assert.ok(recipe.ingredients.length && recipe.instructions.length);
  assert.ok(recipe.ingredients.every(ingredient => ingredient.sourceText));
  assert.ok(recipe.defaultServings > 0 && recipe.maxServings! >= recipe.defaultServings);
  assert.equal(recipe.hpVariant, undefined);
}
for (const [index, day] of SIX_WEEK_PLAN.entries()) {
  assert.equal(day.dayNumber, 21 + index);
  assert.equal(day.meals.length, 5);
  for (const meal of day.meals) {
    if (meal.recipeId) assert.ok(HEALTHY_RECIPES.some(recipe => recipe.id === meal.recipeId));
    else assert.ok(meal.type.startsWith('SPUNTINO') || meal.notes?.includes('non presente'));
  }
}
assert.deepEqual(SIX_WEEK_PLAN[0].meals[0].extras, [{ name: 'skyr', grams: 100 }, { name: 'frutti di bosco', grams: 100 }]);
assert.equal(SIX_WEEK_PLAN[33].meals[4].recipeId, undefined);
assert.match(SIX_WEEK_PLAN[33].meals[4].notes!, /non presente/);
assert.equal(SIX_WEEK_PLAN[33].meals[3].extras?.at(-1)?.grams, 10);
assert.equal(SIX_WEEK_PLAN[0].totalKcal, 1800);
assert.equal(SIX_WEEK_PLAN.at(-1)!.totalProtein, 138);
assert.equal(WEEKLY_SHOPPING.length, 6);
assert.equal(WEEKLY_SHOPPING[4].warnings.length, 1);
const shoppingIds = WEEKLY_SHOPPING.flatMap(week => week.groups.flatMap(group => group.items.map(item => item.id)));
assert.equal(new Set(shoppingIds).size, shoppingIds.length);
const oats = HEALTHY_RECIPES.find(recipe => recipe.id === 'healthy-03')!;
assert.equal(shoppingQuantity(oats.ingredients[0], oats, 1), '20 g');
assert.match(shoppingQuantity(oats.ingredients[3], oats, 1), /non specificata/);
const pancakes = HEALTHY_RECIPES.find(recipe => recipe.id === 'healthy-11')!;
assert.equal(shoppingQuantity(pancakes.ingredients[0], pancakes, 3), '0,43–0,5 pz');
const pasta = HEALTHY_RECIPES.find(recipe => recipe.id === 'healthy-39')!;
assert.equal(shoppingQuantity(pasta.ingredients[0], pasta, 1), '50–75 g');
const extras = WEEKLY_SHOPPING[0].groups[0].items;
assert.equal(extras.find(item => item.name === 'whey')?.quantity, '195 g');
assert.equal(HEALTHY_RECIPES.find(recipe => recipe.id === 'healthy-13')?.kcal, 0);
assert.equal(HEALTHY_RECIPES.find(recipe => recipe.id === 'healthy-19')?.timeMinutes, 250);
console.log('Meal dates, recipe links, portions, shopping and progress keys passed.');
