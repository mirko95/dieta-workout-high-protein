import React from 'react';

interface FitnessRingsProps {
  calorieProgress: number; // 0 to 100
  proteinProgress: number; // 0 to 100
  mealProgress: number;    // 0 to 100
  size?: number;
}

export const FitnessRings: React.FC<FitnessRingsProps> = ({
  calorieProgress,
  proteinProgress,
  mealProgress,
  size = 110
}) => {
  const strokeWidth = 8;
  const center = size / 2;

  // Ring radii
  const r1 = center - strokeWidth; // Calorie Ring (outer)
  const r2 = r1 - strokeWidth - 3; // Protein Ring (middle)
  const r3 = r2 - strokeWidth - 3; // Meal Ring (inner)

  const circ1 = 2 * Math.PI * r1;
  const circ2 = 2 * Math.PI * r2;
  const circ3 = 2 * Math.PI * r3;

  const strokeDashoffset1 = circ1 - (Math.min(100, Math.max(0, calorieProgress)) / 100) * circ1;
  const strokeDashoffset2 = circ2 - (Math.min(100, Math.max(0, proteinProgress)) / 100) * circ2;
  const strokeDashoffset3 = circ3 - (Math.min(100, Math.max(0, mealProgress)) / 100) * circ3;

  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id="ringCalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FA5252" />
            <stop offset="100%" stopColor="#FF8787" />
          </linearGradient>
          <linearGradient id="ringProtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
          <linearGradient id="ringMealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        {/* Ring 1 (Calories) Background & Progress */}
        <circle
          cx={center}
          cy={center}
          r={r1}
          fill="none"
          stroke="#374151"
          strokeWidth={strokeWidth}
          strokeOpacity={0.4}
        />
        <circle
          cx={center}
          cy={center}
          r={r1}
          fill="none"
          stroke="url(#ringCalGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circ1}
          strokeDashoffset={strokeDashoffset1}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />

        {/* Ring 2 (Protein) Background & Progress */}
        <circle
          cx={center}
          cy={center}
          r={r2}
          fill="none"
          stroke="#374151"
          strokeWidth={strokeWidth}
          strokeOpacity={0.4}
        />
        <circle
          cx={center}
          cy={center}
          r={r2}
          fill="none"
          stroke="url(#ringProtGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circ2}
          strokeDashoffset={strokeDashoffset2}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />

        {/* Ring 3 (Meals) Background & Progress */}
        <circle
          cx={center}
          cy={center}
          r={r3}
          fill="none"
          stroke="#374151"
          strokeWidth={strokeWidth}
          strokeOpacity={0.4}
        />
        <circle
          cx={center}
          cy={center}
          r={r3}
          fill="none"
          stroke="url(#ringMealGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circ3}
          strokeDashoffset={strokeDashoffset3}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      
      {/* Center Apple-style micro icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-xs">⚡</span>
      </div>
    </div>
  );
};
