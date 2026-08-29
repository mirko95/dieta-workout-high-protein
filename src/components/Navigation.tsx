import React from 'react';
import { Calendar, BookOpen, Sparkles, ShoppingBag, Dumbbell } from 'lucide-react';

export type TabType = 'oggi' | 'ricette' | 'hp' | 'spesa' | 'allenamento';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  dayNumber: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  dayNumber
}) => {
  const tabs = [
    { id: 'oggi' as TabType, label: `Giorno ${dayNumber}`, icon: Calendar, badge: 'Oggi' },
    { id: 'ricette' as TabType, label: 'Ricette', icon: BookOpen },
    { id: 'hp' as TabType, label: 'Varianti HP', icon: Sparkles },
    { id: 'spesa' as TabType, label: 'Spesa', icon: ShoppingBag },
    { id: 'allenamento' as TabType, label: 'Workout', icon: Dumbbell }
  ];

  return (
    <nav
      aria-label="Navigazione principale"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-2xl border-t border-slate-200/70 safe-bottom shadow-lg shadow-slate-900/5"
    >
      <div className="max-w-md mx-auto px-3 py-1.5 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 select-none ${
                isActive
                  ? 'text-[#047857]'
                  : 'text-slate-500 hover:text-slate-800 active:scale-95'
              }`}
            >
              <div
                className={`relative p-1.5 rounded-2xl transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-white scale-105 shadow-md shadow-emerald-500/30'
                    : 'text-slate-500 hover:bg-slate-100/80'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                {tab.id === 'hp' && (
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                )}
              </div>
              <span className={`text-[11px] mt-1 tracking-tight transition-colors ${isActive ? 'font-bold text-[#047857]' : 'font-medium text-slate-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
