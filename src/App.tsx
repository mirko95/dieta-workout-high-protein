/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType, Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { DayView } from './components/DayView';
import { RecipesView } from './components/RecipesView';
import { HpVariantsView } from './components/HpVariantsView';
import { ShoppingView } from './components/ShoppingView';
import { WorkoutView } from './components/WorkoutView';
import { RecipeModal } from './components/RecipeModal';
import { InfoModal } from './components/InfoModal';
import { FloatingTimer } from './components/FloatingTimer';
import { IosStatusBar } from './components/IosStatusBar';
import { Recipe } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('oggi');
  const [currentDay, setCurrentDay] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('diet_current_day');
      return saved ? parseInt(saved, 10) : 1;
    } catch {
      return 1;
    }
  });

  const [activeRecipe, setActiveRecipe] = useState<{ recipe: Recipe; isHp: boolean } | null>(null);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  // Active Timer state
  const [timerData, setTimerData] = useState<{ seconds: number; label: string } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('diet_current_day', currentDay.toString());
    } catch (e) {
      console.warn(e);
    }
  }, [currentDay]);

  const handleOpenRecipe = (recipe: Recipe, isHp: boolean = false) => {
    setActiveRecipe({ recipe, isHp });
  };

  const handleCloseRecipe = () => {
    setActiveRecipe(null);
  };

  const handleStartTimer = (seconds: number, label: string) => {
    setTimerData({ seconds, label });
  };

  const handleCloseTimer = () => {
    setTimerData(null);
  };

  return (
    <div className="min-h-screen bg-[#F0F4F3] text-[#1F2937] flex flex-col font-sans selection:bg-emerald-200">
      {/* iOS Status Bar & Dynamic Island */}
      <IosStatusBar
        timerSeconds={timerData?.seconds}
        timerLabel={timerData?.label}
        currentDay={currentDay}
        onDynamicIslandClick={() => {
          if (!timerData) {
            setActiveTab('oggi');
          }
        }}
      />

      {/* Top iOS Header */}
      <Header
        currentDay={currentDay}
        onSelectDay={setCurrentDay}
        onOpenInfo={() => setShowInfoModal(true)}
      />

      {/* Main Screen Content with iOS bottom padding to avoid bottom bar overlap */}
      <main className="flex-1 max-w-md w-full mx-auto px-3.5 pt-3 pb-28">
        {activeTab === 'oggi' && (
          <DayView
            currentDay={currentDay}
            onSelectDay={setCurrentDay}
            onOpenRecipe={handleOpenRecipe}
          />
        )}

        {activeTab === 'ricette' && (
          <RecipesView onOpenRecipe={handleOpenRecipe} />
        )}

        {activeTab === 'hp' && (
          <HpVariantsView onOpenRecipe={handleOpenRecipe} />
        )}

        {activeTab === 'spesa' && (
          <ShoppingView currentDay={currentDay} />
        )}

        {activeTab === 'allenamento' && (
          <WorkoutView onStartTimer={handleStartTimer} />
        )}
      </main>

      {/* Floating Rest / Step Timer Widget */}
      {timerData && (
        <FloatingTimer
          initialSeconds={timerData.seconds}
          label={timerData.label}
          onClose={handleCloseTimer}
        />
      )}

      {/* Recipe Detail Modal */}
      {activeRecipe && (
        <RecipeModal
          recipe={activeRecipe.recipe}
          initialIsHp={activeRecipe.isHp}
          onClose={handleCloseRecipe}
          onStartTimer={handleStartTimer}
        />
      )}

      {/* App Guide & Info Modal */}
      {showInfoModal && (
        <InfoModal onClose={() => setShowInfoModal(false)} />
      )}

      {/* Fixed iOS Bottom Tab Bar */}
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        dayNumber={currentDay}
      />
    </div>
  );
}
