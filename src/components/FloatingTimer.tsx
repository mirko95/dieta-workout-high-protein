import React, { useEffect, useState } from 'react';
import { Play, Pause, X, Bell, RotateCcw } from 'lucide-react';
import { playTimerCompletionSound } from '../utils/audio';

interface FloatingTimerProps {
  initialSeconds: number;
  label: string;
  onClose: () => void;
}

export const FloatingTimer: React.FC<FloatingTimerProps> = ({ initialSeconds, label, onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [hasFinished, setHasFinished] = useState<boolean>(false);

  useEffect(() => {
    setSecondsLeft(initialSeconds);
    setIsActive(true);
    setHasFinished(false);
  }, [initialSeconds, label]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            setHasFinished(true);
            playTimerCompletionSound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsLeft]);

  const togglePlay = () => {
    if (hasFinished) {
      setSecondsLeft(initialSeconds);
      setHasFinished(false);
      setIsActive(true);
    } else {
      setIsActive(!isActive);
    }
  };

  const resetTimer = () => {
    setSecondsLeft(initialSeconds);
    setIsActive(false);
    setHasFinished(false);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = initialSeconds > 0 ? ((initialSeconds - secondsLeft) / initialSeconds) * 100 : 0;

  return (
    <aside
      aria-label="Timer attivo"
      className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 z-50 bg-[#1F2937]/95 text-white rounded-3xl shadow-2xl backdrop-blur-xl border border-slate-700/80 p-4 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className={`p-2.5 rounded-2xl flex items-center justify-center shrink-0 ${hasFinished ? 'bg-amber-500 animate-pulse text-slate-950 shadow-md shadow-amber-500/50' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'}`}>
            <Bell className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-slate-400 truncate uppercase tracking-wider">{label}</p>
            <p className={`text-xl font-extrabold font-mono tracking-tight ${hasFinished ? 'text-amber-400 animate-bounce' : 'text-white'}`}>
              {hasFinished ? 'TEMPO SCADUTO!' : formatTime(secondsLeft)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={resetTimer}
            title="Azzera timer"
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 active:scale-95 transition-all border border-slate-700/60"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={togglePlay}
            title={isActive ? 'Pausa' : 'Riprendi'}
            className={`p-2.5 rounded-full font-bold active:scale-95 transition-all flex items-center gap-1 shadow-xs ${
              hasFinished
                ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                : isActive
                ? 'bg-slate-800 text-emerald-400 hover:bg-slate-700 border border-slate-700/60'
                : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
            }`}
          >
            {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
          </button>
          <button
            onClick={onClose}
            title="Chiudi"
            className="p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 active:scale-95 transition-all border border-slate-700/60"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mini progress bar */}
      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 rounded-full ${hasFinished ? 'bg-amber-500' : 'bg-gradient-to-r from-emerald-500 to-teal-400'}`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </aside>
  );
};
