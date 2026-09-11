import { calendarDateKey, dayNumberFromDate } from '../utils/dates';
import React, { useState } from 'react';
import { Share, ChevronRight, X, Info, Flame, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  currentDay: number;
  onSelectDay: (day: number) => void;
  onOpenInfo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentDay, onSelectDay, onOpenInfo }) => {
  const [showPwaBanner, setShowPwaBanner] = useState<boolean>(() => {
    return !localStorage.getItem('pwa_banner_dismissed');
  });

  const dismissPwaBanner = () => {
    setShowPwaBanner(false);
    localStorage.setItem('pwa_banner_dismissed', 'true');
  };

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 safe-top shadow-xs">
      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/25">
            <Flame className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h1 className="text-base font-extrabold text-[#1F2937] leading-tight flex items-center gap-1.5">
              Dieta & Fit <span className="text-[#047857] text-[10px] font-bold px-2 py-0.5 bg-emerald-100/70 rounded-full border border-emerald-200">High-Protein</span>
            </h1>
            <p className="text-[11px] text-slate-500 font-semibold">
              6 settimane • 21 set – 1 nov 2026
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenInfo}
            aria-label="Info e Linee Guida"
            className="w-11 h-11 rounded-full bg-slate-100/80 text-slate-600 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-700 active:scale-90 transition-all border border-slate-200/50"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>

      <label className="max-w-md mx-auto px-4 pb-2 flex items-center justify-between gap-3 text-xs font-semibold text-slate-600">
        Data del piano alimentare
        <input type="date" min="2026-09-01" max="2026-11-01" value={calendarDateKey(currentDay)} onChange={event => {
          if (!event.target.value || !event.target.validity.valid) return;
          const day = dayNumberFromDate(event.target.value);
          if (day >= 1 && day <= 62) onSelectDay(day);
        }} className="min-w-0 rounded-xl border border-slate-200 bg-white px-2 py-1.5 text-slate-800" />
      </label>

      {/* iOS Add to Home Screen tip banner (dismissible) */}
      {showPwaBanner && (
        <div className="bg-emerald-50/90 border-t border-emerald-100/80 px-4 py-2 text-xs text-emerald-950 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Share className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <p className="truncate text-[11px]">
              <strong>iPhone tip:</strong> Tocca <em>Condividi</em> &gt; <em>"Aggiungi a Home"</em> per averla a tutto schermo!
            </p>
          </div>
          <button
            onClick={dismissPwaBanner}
            className="min-h-10 min-w-10 rounded-full text-emerald-700 hover:bg-emerald-200/50 shrink-0 flex items-center justify-center"
            aria-label="Chiudi avviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};
