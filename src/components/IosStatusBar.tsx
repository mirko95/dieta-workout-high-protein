import React, { useState, useEffect } from 'react';
import { Wifi, BatteryMedium, Sparkles, Timer as TimerIcon } from 'lucide-react';

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
  const [timeStr, setTimeStr] = useState<string>('09:41');

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const h = d.getHours().toString().padStart(2, '0');
      const m = d.getMinutes().toString().padStart(2, '0');
      setTimeStr(`${h}:${m}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const hasActiveTimer = typeof timerSeconds === 'number' && timerSeconds > 0;

  const formatTimerMinSec = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full select-none text-slate-800 pt-2 px-6 pb-1 flex items-center justify-between text-xs font-semibold">
      {/* iOS Clock */}
      <span className="font-extrabold tracking-tight text-[13px] text-[#1F2937] w-12">
        {timeStr}
      </span>

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
            <span>Giorno {currentDay}</span>
          </div>
        )}

        <div className="w-2.5 h-2.5 rounded-full bg-indigo-950/80 border border-indigo-700/60 shrink-0" />
      </div>

      {/* Status Icons: Wi-Fi, 5G, Battery */}
      <div className="flex items-center justify-end gap-1.5 text-[#1F2937] w-12">
        <span className="text-[10px] font-extrabold tracking-tighter">5G</span>
        <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
        <div className="relative flex items-center">
          <div className="w-5 h-2.5 rounded-sm border border-slate-700/80 p-0.5 flex items-center">
            <div className="bg-emerald-500 h-full w-[85%] rounded-[1px]" />
          </div>
          <div className="w-0.5 h-1 bg-slate-700/80 rounded-r-xs" />
        </div>
      </div>
    </div>
  );
};
