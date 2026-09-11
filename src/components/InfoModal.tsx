import React, { useRef } from 'react';
import { X, Sparkles, Flame, Dumbbell, ShieldCheck, Share, Smartphone, Download, Upload } from 'lucide-react';

interface InfoModalProps {
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ onClose }) => {
  const backupInputRef = useRef<HTMLInputElement>(null);

  const downloadBackup = () => {
    const data = Object.fromEntries(Object.entries(localStorage).filter(([key]) => key.startsWith('diet_')));
    const file = new Blob([JSON.stringify({ version: 1, savedAt: new Date().toISOString(), data }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dieta-fit-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const restoreBackup = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const { data } = JSON.parse(await file.text()) as { data?: Record<string, unknown> };
      if (!data || !Object.entries(data).every(([key, value]) => key.startsWith('diet_') && typeof value === 'string')) throw new Error('invalid backup');
      if (!window.confirm('Il backup sostituirà i dati attuali su questo telefono. Continuare?')) return;
      Object.keys(localStorage).filter((key) => key.startsWith('diet_')).forEach((key) => localStorage.removeItem(key));
      Object.entries(data).forEach(([key, value]) => localStorage.setItem(key, value as string));
      window.location.reload();
    } catch {
      window.alert('File di backup non valido.');
    } finally {
      event.target.value = '';
    }
  };

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
          <div className="bg-sky-50 rounded-3xl p-4.5 border border-sky-200/80 space-y-3 shadow-xs">
            <div>
              <h3 className="font-extrabold text-sky-950 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-sky-700" /> Backup dati
              </h3>
              <p className="mt-1 font-medium">Salva i tuoi pasti, spesa e progressi palestra in un file da conservare sul telefono o nel cloud.</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={downloadBackup} className="py-2.5 rounded-xl bg-sky-700 text-white font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all">
                <Download className="w-3.5 h-3.5" /> Esporta
              </button>
              <button onClick={() => backupInputRef.current?.click()} className="py-2.5 rounded-xl bg-white border border-sky-200 text-sky-800 font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all">
                <Upload className="w-3.5 h-3.5" /> Ripristina
              </button>
              <input ref={backupInputRef} type="file" accept="application/json,.json" onChange={restoreBackup} className="hidden" />
            </div>
          </div>

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

          <div className="space-y-2 bg-[#F0F4F3] p-4.5 rounded-3xl border border-slate-200/80">
            <h3 className="font-extrabold">Piano alimentare · 21 settembre – 1° novembre 2026</h3>
            <p>Sei settimane dai PDF forniti, con cinque pasti al giorno. Calorie e proteine giornaliere sono le stime del piano originale. Ingredienti e valori delle ricette sono quelli del ricettario; le aggiunte sono indicate nei singoli pasti.</p>
            <p>Seleziona una data per vedere i pasti, le ricette e la spesa del relativo periodo. Il programma precedente al 21 settembre rimane consultabile nell’archivio.</p>
            <p>La spesa settimanale è calcolata per una persona: una porzione di ricetta per pasto, salvo i pancake indicati. Le rese variabili e le quantità mancanti del PDF sono segnalate.</p>
          </div>
          <div className="space-y-2 bg-[#F0F4F3] p-4.5 rounded-3xl border border-slate-200/80">
            <h3 className="font-extrabold">Allenamento · 14 settembre – 8 novembre 2026</h3>
            <p>Workout A il lunedì, B il mercoledì e C il venerdì; recupero negli altri giorni. Registra carichi, ripetizioni, cardio e note per ogni data.</p>
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
