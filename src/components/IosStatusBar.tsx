import React from 'react';
import { Sparkles, Timer as TimerIcon } from 'lucide-react';
import { formatCalendarDate } from '../utils/dates';

interface IosStatusBarProps {
  timerSeconds?: number | null;
  timerLabel?: string | null;
  currentDay: number;
  onDynamicIslandClick?: () => void;
}

export const IosStatusBar: React.FC<IosStatusBarProps> = ({
  timerSeconds,
  timerLabel,
  currentDay,
  onDynamicIslandClick
}) => {
  const hasActiveTimer = typeof timerSeconds === 'number' && timerSeconds > 0;

  const formatTimerMinSec = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full select-none pt-2 pb-1 flex justify-center">
      {/* Dynamic Island pill */}
      <div
        onClick={onDynamicIslandClick}
        className={`bg-black text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm transition-all duration-300 cursor-pointer ${
          hasActiveTimer ? 'ring-2 ring-emerald-500/40 animate-pulse' : 'hover:scale-[1.02]'
        }`}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 shrink-0" />
        
        {hasActiveTimer ? (
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
            <TimerIcon className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
            <span>{formatTimerMinSec(timerSeconds)}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-300">
            <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
            <span>{formatCalendarDate(currentDay, { day: 'numeric', month: 'short' })}</span>
          </div>
        )}

        <div className="w-2.5 h-2.5 rounded-full bg-indigo-950/80 border border-indigo-700/60 shrink-0" />
      </div>
    </div>
  );
};
