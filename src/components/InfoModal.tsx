import React from 'react';
import { X, Sparkles, Flame, Dumbbell, ShieldCheck, Share, Smartphone } from 'lucide-react';

interface InfoModalProps {
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ onClose }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/60 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200"
    >
      <div
        className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300 border border-slate-200/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-slate-100 bg-[#F0F4F3]/80 px-5 pt-3.5 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/25">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-[#1F2937] leading-none">
                Guida & Informazioni
              </h2>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">Linee guida del piano</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-200/80 text-slate-600 hover:bg-slate-300 active:scale-95 transition-all"
            aria-label="Chiudi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-5 py-4 space-y-3.5 text-xs text-slate-700 leading-relaxed overscroll-contain">
          {/* iOS Tip Card */}
          <div className="bg-emerald-50/90 rounded-3xl p-4.5 border border-emerald-200/80 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-950 font-extrabold text-sm">
              <Smartphone className="w-4 h-4 text-emerald-700" />
              <span>Come installarla su iPhone (iOS PWA)</span>
            </div>
            <p className="text-slate-800 font-medium">
              Per avere questa webapp a schermo intero come un'app nativa:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-slate-700 pl-1 font-semibold">
              <li>Apri il link in <strong>Safari</strong> su iPhone.</li>
              <li>Tocca il pulsante <strong>Condividi</strong> (<Share className="inline w-3 h-3 text-emerald-700" /> in basso).</li>
              <li>Scorri verso il basso e seleziona <strong>"Aggiungi alla schermata Home"</strong>.</li>
              <li>Conferma toccando <strong>"Aggiungi"</strong>.</li>
            </ol>
          </div>

          {/* Calorie & Protein Philosophy */}
          <div className="space-y-2 bg-[#F0F4F3] p-4.5 rounded-3xl border border-slate-200/80">
            <h3 className="font-extrabold text-[#1F2937] flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Flame className="w-4 h-4 text-amber-500" />
              Struttura Nutrizionale
            </h3>
            <p className="font-medium">
              • <strong>Calorie:</strong> Media di <strong>~1.816 kcal/giorno</strong> (fluttuazioni naturali tra 1.750 e 1.850 kcal in base ai giorni).
            </p>
            <p className="font-medium">
              • <strong>Proteine:</strong> Quota media di <strong>~142 g/giorno</strong>, con picchi fino a 165 g nei giorni di carne/nuggets.
            </p>
            <p className="font-medium">
              • <strong>Strategia:</strong> Nessun'aggiunta calorica incontrollata. Abbiamo semplicemente ridotto la quota di oli di cottura, zuccheri e porzioni giganti di riso/pasta, sostituendoli con fonti proteiche nobili (Skyr, Whey, Pollo, Tofu, Uova).
            </p>
          </div>

          {/* Training Overview */}
          <div className="space-y-2 bg-[#F0F4F3] p-4.5 rounded-3xl border border-slate-200/80">
            <h3 className="font-extrabold text-[#1F2937] flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Dumbbell className="w-4 h-4 text-emerald-600" />
              Programma Palestra (Settembre – Marzo)
            </h3>
            <p className="font-medium">
              • <strong>Settembre-Ottobre:</strong> 3 giorni/settimana (Full body / Upper-Lower ibrido).
            </p>
            <p className="font-medium">
              • <strong>Da Novembre:</strong> 4 giorni/settimana (Upper / Lower dedicato).
            </p>
            <p className="font-medium">
              • <strong>Gomito del Tennista:</strong> Prese neutre guidate per non stressare gli estensori del polso.
            </p>
            <p className="font-medium">
              • <strong>Walking Pad & Passi:</strong> Da 6.000 a 10.000 passi al giorno per stimolare il deficit senza affaticamento.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F0F4F3] border-t border-slate-200/80 flex justify-end safe-bottom">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs active:scale-98 shadow-md shadow-emerald-500/25 hover:bg-emerald-700 transition-all"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
