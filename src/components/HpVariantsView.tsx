import React, { useState } from 'react';
import { Sparkles, Info, ArrowRight, ShieldCheck, Flame, Scale, CheckCircle } from 'lucide-react';
import { Recipe } from '../types';
import { RECIPES } from '../data/recipes';

interface HpVariantsViewProps {
  onOpenRecipe: (recipe: Recipe, isHp: boolean) => void;
}

export const HpVariantsView: React.FC<HpVariantsViewProps> = ({ onOpenRecipe }) => {
  const [activeFilter, setActiveFilter] = useState<'tutte' | 'colazioni' | 'principali' | 'snack' | 'originali'>('tutte');

  const openRecipeByTitle = (titlePrefix: string, isHp: boolean) => {
    const found = RECIPES.find((r) => r.title.toLowerCase().includes(titlePrefix.toLowerCase()));
    if (found) {
      onOpenRecipe(found, isHp);
    }
  };

  return (
    <div className="space-y-3.5 pb-4">
      {/* Hero Overview */}
      <div className="bg-gradient-to-br from-emerald-700 via-teal-800 to-slate-900 text-white rounded-3xl p-5 shadow-lg relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 rounded-full bg-emerald-400/20 border border-emerald-300/30">
            <Sparkles className="w-4 h-4 text-emerald-300" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            Guida Varianti High-Protein
          </span>
        </div>

        <h2 className="text-xl font-extrabold leading-tight">
          Target ~1.800 kcal & ~142 g Proteine/die
        </h2>
        <p className="text-xs text-emerald-100/90 mt-2 leading-relaxed">
          Le ricette mantengono tutto il loro gusto originale. Spostiamo le calorie da olio, zuccheri raffinati e porzioni eccessive di cereali verso <strong>skyr, albumi, whey, tofu e petto di pollo</strong>.
        </p>

        <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-emerald-600/40 text-xs">
          <div className="bg-white/10 rounded-2xl p-2.5 backdrop-blur-xs">
            <p className="text-[10px] text-emerald-200 uppercase font-semibold">Media Giornaliera</p>
            <p className="text-sm font-extrabold text-white mt-0.5">1.816 kcal</p>
            <p className="text-[10px] text-emerald-200">Range: 1.750 – 1.850 kcal</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-2.5 backdrop-blur-xs">
            <p className="text-[10px] text-emerald-200 uppercase font-semibold">Quota Proteica</p>
            <p className="text-sm font-extrabold text-white mt-0.5">~142 g / giorno</p>
            <p className="text-[10px] text-emerald-200">Fino a 165 g nei giorni top</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
        {[
          { id: 'tutte', label: 'Tutte le regole' },
          { id: 'colazioni', label: 'Colazioni' },
          { id: 'principali', label: 'Pranzo & Cena' },
          { id: 'snack', label: 'Snack' },
          { id: 'originali', label: 'Cosa resta originale' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeFilter === tab.id
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
                : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Category: Colazioni HP */}
      {(activeFilter === 'tutte' || activeFilter === 'colazioni') && (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 px-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Colazioni High-Protein</span>
          </div>

          <div
            onClick={() => openRecipeByTitle('muesli', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Muesli croccante HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  70% della porzione standard + 200 g Skyr naturale
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~302 kcal</strong> • <strong className="text-emerald-700">~27 g proteine</strong>
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>

          <div
            onClick={() => openRecipeByTitle('frullato', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Frullato proteico HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  +18 g Whey; burro arachidi -5 g; banana -25 g
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~305 kcal</strong> • <strong className="text-emerald-700">~30 g proteine</strong>
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>

          <div
            onClick={() => openRecipeByTitle('smoothie', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Smoothie alla banana HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  Banana 100 g, Cacao 20 g, +25 g Whey
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~338 kcal</strong> • <strong className="text-emerald-700">~26 g proteine</strong>
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>

          <div
            onClick={() => openRecipeByTitle('sandwich', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Sandwich insalata uova HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  +100 g albumi nell'insalata di uova; pane -15 g
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~255 kcal</strong> • <strong className="text-emerald-700">~24 g proteine</strong>
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Category: Piatti Principali HP */}
      {(activeFilter === 'tutte' || activeFilter === 'principali') && (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 px-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Piatti Principali High-Protein</span>
          </div>

          <div
            onClick={() => openRecipeByTitle('tikka', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Pollo Tikka Masala HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  150 g pollo, 50 g riso, 30 g panna acida + 30 g yogurt greco 0%
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~579 kcal</strong> • <strong className="text-emerald-700">~45 g proteine</strong>
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>

          <div
            onClick={() => openRecipeByTitle('pasta cremosa al curry', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Pasta cremosa al curry HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  150 g pollo, 55 g pasta, ~10 g panna, ~20 g mozzarella
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~540 kcal</strong> • <strong className="text-emerald-700">~50 g proteine</strong> (Gg 3 e 16 usa l'originale)
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>

          <div
            onClick={() => openRecipeByTitle('tofu teriyaki', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Tofu Teriyaki HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  ~200 g tofu, ~65 g quinoa, ~5 ml acero, ~3 ml olio sesamo
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~575 kcal</strong> • <strong className="text-emerald-700">~36 g proteine</strong>
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>

          <div
            onClick={() => openRecipeByTitle('pasta verde', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Pasta Verde HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  ~65 g pasta + 150 g tofu; olio ridotto a ~3 ml
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~586 kcal</strong> • <strong className="text-emerald-700">~38 g proteine</strong>
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>

          <div
            onClick={() => openRecipeByTitle('calamaro', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Insalata di Calamaro HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  Calamari a ~200 g e olio ridotto di ~5 ml
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~572 kcal</strong> • <strong className="text-emerald-700">~36 g proteine</strong>
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Category: Snack HP */}
      {(activeFilter === 'tutte' || activeFilter === 'snack') && (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 px-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Snack High-Protein</span>
          </div>

          <div
            onClick={() => openRecipeByTitle('mug cake', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Mug Cake HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  +20 g Whey; zero zucchero cocco; -5 g burro arachidi; no gocce ciocc
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~210 kcal</strong> • <strong className="text-emerald-700">~20 g proteine</strong> (Gg 13 e 29 usa l'originale)
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>

          <div
            onClick={() => openRecipeByTitle('palline', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Palline al Pan di Zenzero HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  ½ porzione palline + 200 g Skyr naturale (Gg 14 e 19 usa 100 g skyr)
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~252 kcal</strong> • <strong className="text-emerald-700">~23 g proteine</strong>
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>

          <div
            onClick={() => openRecipeByTitle('involtini', true)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs hover:border-emerald-400 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#1F2937]">Involtini Primavera HP</h3>
                <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                  Tofu affumicato a 100 g / porzione; cottura in Air Fryer con max 2 ml olio
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Valori: <strong className="text-slate-700">~198 kcal</strong> • <strong className="text-emerald-700">~14 g proteine</strong>
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shrink-0">
                Vedi ricetta &rarr;
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Category: Ricette Originali da Mantenere */}
      {(activeFilter === 'tutte' || activeFilter === 'originali') && (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 px-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Ricette già ottimali (Restano Originali)</span>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-4.5 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Nessuna modifica necessaria</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div
                onClick={() => openRecipeByTitle('nuggets', false)}
                className="bg-slate-800/90 p-3 rounded-2xl hover:bg-slate-700 cursor-pointer transition-colors border border-slate-700"
              >
                <p className="font-bold text-slate-100">🍗 Nuggets di pollo su insalata</p>
                <p className="text-[11px] text-emerald-400 font-bold mt-1">~508 kcal • ~65 g proteine (Top!)</p>
              </div>

              <div
                onClick={() => openRecipeByTitle('pirofila', false)}
                className="bg-slate-800/90 p-3 rounded-2xl hover:bg-slate-700 cursor-pointer transition-colors border border-slate-700"
              >
                <p className="font-bold text-slate-100">🥘 Pirofila di carne & patate dolci</p>
                <p className="text-[11px] text-emerald-400 font-bold mt-1">~578 kcal • ~43 g proteine</p>
              </div>

              <div
                onClick={() => openRecipeByTitle('burger', false)}
                className="bg-slate-800/90 p-3 rounded-2xl hover:bg-slate-700 cursor-pointer transition-colors border border-slate-700"
              >
                <p className="font-bold text-slate-100">🍔 Burger low-carb spinaci & uova</p>
                <p className="text-[11px] text-emerald-400 font-bold mt-1">~522 kcal • ~42 g proteine</p>
              </div>

              <div
                onClick={() => openRecipeByTitle('salmone', false)}
                className="bg-slate-800/90 p-3 rounded-2xl hover:bg-slate-700 cursor-pointer transition-colors border border-slate-700"
              >
                <p className="font-bold text-slate-100">🐟 Salmone in friggitrice ad aria</p>
                <p className="text-[11px] text-emerald-400 font-bold mt-1">~538 kcal • ~38 g proteine</p>
              </div>

              <div
                onClick={() => openRecipeByTitle('funghi', false)}
                className="bg-slate-800/90 p-3 rounded-2xl hover:bg-slate-700 cursor-pointer transition-colors border border-slate-700 col-span-1 sm:col-span-2"
              >
                <p className="font-bold text-slate-100">🍲 Padellata di pollo e funghi</p>
                <p className="text-[11px] text-emerald-400 font-bold mt-1">~512 kcal • ~35 g proteine</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Practical Rules Note */}
      <div className="bg-amber-50/90 rounded-3xl p-4.5 border border-amber-200/80 text-xs text-amber-950 space-y-1.5 shadow-xs">
        <p className="font-extrabold flex items-center gap-1.5 text-amber-900">
          <Info className="w-4 h-4 text-amber-700" />
          Consigli pratici dal piano
        </p>
        <p className="text-slate-700 leading-relaxed">
          • <strong>Giorni ad alta quota proteica:</strong> Quando arrivi a 155–165 g di proteine con i pasti (come con i nuggets di pollo), non aggiungere altra whey.
        </p>
        <p className="text-slate-700 leading-relaxed">
          • <strong>Creatina monoidrato:</strong> Non modifica le calorie in modo rilevante; 3–5 g al giorno è la dose standard consigliata.
        </p>
      </div>
    </div>
  );
};
