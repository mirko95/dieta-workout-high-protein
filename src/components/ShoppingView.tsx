import React, { useState, useEffect } from 'react';
import { MONTHLY_PANTRY, FOUR_DAY_BLOCKS, MONTHLY_PROTEIN_SUMMARY } from '../data/shoppingList';
import { Check, RotateCcw, Package, ShoppingCart, Sparkles, ChefHat, Copy, CheckCheck, Info } from 'lucide-react';
import { triggerHaptic } from '../utils/haptics';

interface ShoppingViewProps {
  currentDay: number;
}

export const ShoppingView: React.FC<ShoppingViewProps> = ({ currentDay }) => {
  // Find which block currentDay belongs to
  const defaultBlock = FOUR_DAY_BLOCKS.find((b) => currentDay >= b.startDay && currentDay <= b.endDay) || FOUR_DAY_BLOCKS[0];

  const [activeTab, setActiveTab] = useState<'4giorni' | 'dispensa' | 'quadro'>('4giorni');
  const [selectedBlockId, setSelectedBlockId] = useState<string>(defaultBlock.id);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  // Persistent checked items state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('diet_shopping_checked');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('diet_shopping_checked', JSON.stringify(checkedItems));
    } catch (e) {
      console.warn(e);
    }
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    triggerHaptic('light');
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedBlock = FOUR_DAY_BLOCKS.find((b) => b.id === selectedBlockId) || FOUR_DAY_BLOCKS[0];

  // Calculate checked progress
  const currentBlockItemIds = selectedBlock.categories.flatMap((c) => c.items.map((i) => i.id));
  const blockCheckedCount = currentBlockItemIds.filter((id) => checkedItems[id]).length;

  const resetCurrentBlock = () => {
    triggerHaptic('warning');
    const next = { ...checkedItems };
    currentBlockItemIds.forEach((id) => delete next[id]);
    setCheckedItems(next);
  };

  const checkAllCurrentBlock = () => {
    triggerHaptic('success');
    const next = { ...checkedItems };
    currentBlockItemIds.forEach((id) => { next[id] = true; });
    setCheckedItems(next);
  };

  const copyToAppleNotes = () => {
    triggerHaptic('success');
    let text = `🛒 LISTA SPESA: ${selectedBlock.daysRange}\n`;
    text += `Target: ~1.800 kcal & ~142g Proteine/die\n\n`;

    if (selectedBlock.hpCorrections.length > 0) {
      text += `⚡ NOTE HP:\n${selectedBlock.hpCorrections.map(c => `• ${c}`).join('\n')}\n\n`;
    }

    selectedBlock.categories.forEach(cat => {
      text += `📂 ${cat.title.toUpperCase()}:\n`;
      cat.items.forEach(it => {
        const isDone = checkedItems[it.id] ? '[x]' : '[ ]';
        text += `${isDone} ${it.name} (${it.quantity})\n`;
      });
      text += '\n';
    });

    navigator.clipboard.writeText(text).then(() => {
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    });
  };

  return (
    <div className="space-y-3.5 pb-4">
      {/* Top iOS Segmented Controls */}
      <div className="bg-[#E5EAE8] p-1.5 rounded-full flex items-center gap-1 text-xs font-bold border border-slate-200/60 shadow-xs">
        <button
          onClick={() => {
            triggerHaptic('light');
            setActiveTab('4giorni');
          }}
          className={`flex-1 py-2.5 rounded-full transition-all flex items-center justify-center gap-1.5 select-none ${
            activeTab === '4giorni'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Blocchi 4 Giorni
        </button>
        <button
          onClick={() => {
            triggerHaptic('light');
            setActiveTab('dispensa');
          }}
          className={`flex-1 py-2.5 rounded-full transition-all flex items-center justify-center gap-1.5 select-none ${
            activeTab === 'dispensa'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Package className="w-3.5 h-3.5" />
          Dispensa Mese
        </button>
        <button
          onClick={() => {
            triggerHaptic('light');
            setActiveTab('quadro');
          }}
          className={`flex-1 py-2.5 rounded-full transition-all flex items-center justify-center gap-1.5 select-none ${
            activeTab === 'quadro'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Proteine HP
        </button>
      </div>

      {/* TAB 1: BLOCCHI DA 4 GIORNI (Freschi + Meal Prep) */}
      {activeTab === '4giorni' && (
        <div className="space-y-3.5">
          {/* Block Selector Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {FOUR_DAY_BLOCKS.map((block) => {
              const isSelected = block.id === selectedBlockId;
              const isCurrent = currentDay >= block.startDay && currentDay <= block.endDay;
              return (
                <button
                  key={block.id}
                  onClick={() => {
                    triggerHaptic('light');
                    setSelectedBlockId(block.id);
                  }}
                  className={`shrink-0 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all relative select-none ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25 font-bold'
                      : 'bg-white text-[#1F2937] border border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  {block.daysRange}
                  {isCurrent && (
                    <span className="ml-1 text-[9px] px-1.5 py-0.5 bg-emerald-100 text-emerald-900 rounded-full font-black">
                      Oggi
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Block Header & Progress with Apple Notes Copy Button */}
          <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-extrabold text-[#1F2937]">
                  Spesa per {selectedBlock.daysRange}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {blockCheckedCount} di {currentBlockItemIds.length} ingredienti acquistati
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={checkAllCurrentBlock}
                  className="px-3 py-1 text-xs text-emerald-700 hover:bg-emerald-50 rounded-full font-bold border border-emerald-200/60 active:scale-95"
                  title="Spunta tutti"
                >
                  Tutti
                </button>
                <button
                  onClick={resetCurrentBlock}
                  className="p-2 text-xs text-slate-400 hover:bg-slate-100 rounded-full active:scale-95"
                  title="Azzera"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500 rounded-full"
                style={{ width: `${(blockCheckedCount / (currentBlockItemIds.length || 1)) * 100}%` }}
              />
            </div>

            {/* Apple Notes Export Action */}
            <button
              onClick={copyToAppleNotes}
              className="w-full py-2.5 px-3 rounded-2xl bg-[#F0F4F3] hover:bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-bold flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              {copiedToast ? (
                <>
                  <CheckCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copiata negli Appunti per Note / Promemoria!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Copia Lista per Apple Note / Promemoria</span>
                </>
              )}
            </button>
          </div>

          {/* HP Corrections Box */}
          {selectedBlock.hpCorrections.length > 0 && (
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-4.5 border border-emerald-200/80 shadow-xs">
              <div className="flex items-center gap-1.5 mb-2.5 text-emerald-900 font-extrabold text-xs">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Correzioni High-Protein per questo blocco</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {selectedBlock.hpCorrections.map((corr, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span className="font-semibold">{corr}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grocery Categories */}
          <div className="space-y-3">
            {selectedBlock.categories.map((cat, catIdx) => (
              <div key={catIdx} className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-3">
                  {cat.title}
                </h4>

                <div className="space-y-1.5">
                  {cat.items.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`flex items-center justify-between p-3 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] ${
                          isChecked
                            ? 'bg-[#F0F4F3]/60 border-slate-200/60 text-slate-400 line-through'
                            : 'bg-white border-slate-200/80 text-[#1F2937] hover:border-emerald-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                              isChecked
                                ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-semibold">{item.name}</span>
                        </div>
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          isChecked ? 'text-slate-400 bg-slate-100' : 'text-emerald-800 bg-emerald-50 border border-emerald-200/60'
                        }`}>
                          {item.quantity}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Meal Prep Card */}
          <div className="bg-amber-50/90 rounded-3xl p-4.5 border border-amber-200/80 space-y-2 text-xs text-amber-950 shadow-xs">
            <div className="flex items-center gap-2 font-extrabold text-amber-900">
              <ChefHat className="w-4 h-4 text-amber-700" />
              <span>Meal Prep & Consigli del Blocco</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-slate-800 leading-relaxed pl-1">
              {selectedBlock.mealPrepSteps.map((step, idx) => (
                <li key={idx} className="font-semibold">{step}</li>
              ))}
            </ol>
            <p className="text-[11px] text-amber-900 pt-2 border-t border-amber-200 font-semibold italic">
              🧊 <strong>Conservazione:</strong> {selectedBlock.storageAdvice}
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: DISPENSA MENSILE */}
      {activeTab === 'dispensa' && (
        <div className="space-y-3.5">
          <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs">
            <h3 className="text-base font-extrabold text-[#1F2937]">Dispensa Mensile (1 Mese)</h3>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              Compra la dispensa non deperibile una sola volta all'inizio del mese.
            </p>
          </div>

          <div className="space-y-3">
            {MONTHLY_PANTRY.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-3">
                  {cat.title}
                </h4>

                <div className="space-y-1.5">
                  {cat.items.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`flex items-center justify-between p-3 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] ${
                          isChecked
                            ? 'bg-[#F0F4F3]/60 border-slate-200/60 text-slate-400 line-through'
                            : 'bg-white border-slate-200/80 text-[#1F2937] hover:border-emerald-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                              isChecked
                                ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-semibold">{item.name}</span>
                        </div>
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          isChecked ? 'text-slate-400 bg-slate-100' : 'text-emerald-800 bg-emerald-50 border border-emerald-200/60'
                        }`}>
                          {item.quantity}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: QUADRO AGGIUNTE PROTEICHE */}
      {activeTab === 'quadro' && (
        <div className="space-y-3.5">
          <div className="bg-gradient-to-br from-[#1F2937] via-slate-900 to-emerald-950 text-white rounded-3xl p-5 shadow-lg border border-slate-800">
            <h3 className="text-base font-extrabold">Acquisti Proteici Aggiuntivi del Mese</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Riepilogo delle quantità extra necessarie per garantire la media di ~142 g di proteine al giorno.
            </p>
          </div>

          {/* Additions */}
          <div className="bg-white rounded-3xl p-4.5 border border-slate-200/80 shadow-xs">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Aggiunte Principali nel Mese
            </h4>
            <div className="space-y-2">
              {MONTHLY_PROTEIN_SUMMARY.additions.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-xs">
                  <span className="font-bold text-slate-800">{item.name}</span>
                  <span className="font-extrabold text-emerald-800 bg-white px-2.5 py-0.5 rounded-full border border-emerald-200/60">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reductions */}
          <div className="bg-white rounded-3xl p-4.5 border border-slate-200/80 shadow-xs">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-3 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600" />
              Cosa Diminuisce per Bilanciare le Calorie
            </h4>
            <div className="space-y-2 text-xs">
              {MONTHLY_PROTEIN_SUMMARY.reductions.map((item, i) => (
                <div key={i} className="p-3 bg-[#F0F4F3] rounded-2xl border border-slate-200/80">
                  <p className="font-bold text-[#1F2937]">{item.name}</p>
                  <p className="text-slate-600 mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Advice */}
          <div className="bg-teal-50/90 rounded-3xl p-4.5 border border-teal-200/80 text-xs text-teal-950 shadow-xs">
            <p className="font-extrabold mb-1 text-teal-900">💡 Suggerimento di praticità:</p>
            <p className="leading-relaxed text-slate-700 font-medium">{MONTHLY_PROTEIN_SUMMARY.practicalAdvice}</p>
          </div>
        </div>
      )}
    </div>
  );
};
