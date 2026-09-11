import React from 'react';
import { Calendar, BookOpen, ShoppingBag, Dumbbell, UserRound } from 'lucide-react';
import { formatCalendarDate } from '../utils/dates';

export type TabType = 'oggi' | 'dati' | 'ricette' | 'spesa' | 'allenamento';

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
    { id: 'oggi' as TabType, label: formatCalendarDate(dayNumber, { day: 'numeric', month: 'short' }), icon: Calendar, badge: 'Oggi' },
    { id: 'dati' as TabType, label: 'Dati', icon: UserRound },
    { id: 'ricette' as TabType, label: 'Ricette', icon: BookOpen },
    { id: 'spesa' as TabType, label: 'Spesa', icon: ShoppingBag },
    { id: 'allenamento' as TabType, label: 'Pesi', icon: Dumbbell }
  ];

  return (
    <nav
      aria-label="Navigazione principale"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-2xl border-t border-slate-200/70 safe-bottom shadow-lg shadow-slate-900/5"
    >
      <div className="max-w-md mx-auto px-1 py-1.5 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex-1 flex flex-col items-center justify-center min-h-14 py-1 px-1 rounded-2xl transition-all duration-200 select-none ${
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
