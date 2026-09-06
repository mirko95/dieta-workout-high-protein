import React, { useState, useMemo } from 'react';
import { Recipe } from '../types';
import { RECIPES } from '../data/recipes';
import { Search, Sparkles, Clock, Flame, ChefHat, Filter, ChevronRight } from 'lucide-react';

interface RecipesViewProps {
  onOpenRecipe: (recipe: Recipe, isHp: boolean) => void;
}

export const RecipesView: React.FC<RecipesViewProps> = ({ onOpenRecipe }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('TUTTE');
  const [filterQuickOnly, setFilterQuickOnly] = useState<boolean>(false);

  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((r) => {
      // Category filter
      if (selectedCategory !== 'TUTTE' && r.category !== selectedCategory) {
        return false;
      }
      // Quick filter (< 25 min)
      if (filterQuickOnly && r.timeMinutes > 25) {
        return false;
      }
      // Search query (title, ingredients, tags)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = r.title.toLowerCase().includes(q);
        const matchesIngredient = r.ingredients.some((ing) => ing.name.toLowerCase().includes(q));
        const matchesTag = r.tags.some((t) => t.toLowerCase().includes(q));
        return matchesTitle || matchesIngredient || matchesTag;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, filterQuickOnly]);

  const categories = [
    { id: 'TUTTE', label: 'Tutte', count: RECIPES.length },
    { id: 'COLAZIONE', label: 'Colazioni', count: RECIPES.filter((r) => r.category === 'COLAZIONE').length },
    { id: 'PRANZO / CENA', label: 'Pranzo / Cena', count: RECIPES.filter((r) => r.category === 'PRANZO / CENA').length },
    { id: 'SNACK', label: 'Snack', count: RECIPES.filter((r) => r.category === 'SNACK').length }
  ];

  return (
    <div className="space-y-3.5 pb-4">
      {/* Search Input Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-700/60" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cerca per piatto, ingrediente (es. salmone, tofu, pollo, skyr)..."
          className="w-full pl-10 pr-10 py-3 rounded-full bg-white border border-slate-200/80 text-xs text-[#1F2937] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-xs transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 p-1 rounded-full"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category Pills Carousel */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              selectedCategory === cat.id
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
                : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
            }`}
          >
            {cat.label} <span className={`text-[10px] ml-0.5 ${selectedCategory === cat.id ? 'text-emerald-100 font-normal' : 'text-slate-400'}`}>({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Quick Filters */}
      <div className="flex items-center gap-2 text-xs">
        <button
          onClick={() => setFilterQuickOnly(!filterQuickOnly)}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold transition-all ${
            filterQuickOnly
              ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
              : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50'
          }`}
        >
          <Clock className="w-3.5 h-3.5 text-amber-500" />
          Veloci (≤ 25 min)
        </button>
      </div>

      {/* Recipes List Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
        <span>Trovate {filteredRecipes.length} ricette</span>
        <span className="text-emerald-700">Tocca per dosi & preparazione</span>
      </div>

      {/* Recipes Cards */}
      <div className="space-y-3">
        {filteredRecipes.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center border border-slate-200/80 text-slate-500 space-y-2">
            <p className="font-bold text-sm text-slate-800">Nessuna ricetta trovata</p>
            <p className="text-xs">Prova a cercare un termine diverso o azzera i filtri.</p>
          </div>
        ) : (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => onOpenRecipe(recipe, true)}
              className="group bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:border-emerald-400 active:scale-[0.99] transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      {recipe.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
                      <Sparkles className="w-2.5 h-2.5" /> High-Protein
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1F2937] leading-snug group-hover:text-emerald-700 transition-colors">
                    {recipe.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 font-normal">
                    {recipe.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
                    <span className="font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                      🔥 {recipe.hpVariant!.kcal} kcal
                    </span>
                    <span className="font-extrabold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200/50">
                      ⚡ ~{recipe.hpVariant!.proteinGrams}g proteine
                    </span>
                    <span className="text-slate-500 flex items-center gap-1 font-semibold bg-[#F0F4F3] px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {recipe.timeMinutes} min
                    </span>
                    <span className="text-slate-500 capitalize text-[11px] font-medium">
                      • {recipe.difficulty}
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#F0F4F3] group-hover:bg-emerald-500 group-hover:text-white text-slate-400 flex items-center justify-center transition-all shrink-0 mt-1">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
