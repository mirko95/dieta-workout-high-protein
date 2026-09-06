import React, { useEffect, useState } from 'react';

type BodyMetrics = Record<'startWeight' | 'currentWeight' | 'targetWeight' | 'startFat' | 'currentFat' | 'startLean' | 'currentLean', string>;

const EMPTY_METRICS: BodyMetrics = {
  startWeight: '', currentWeight: '', targetWeight: '', startFat: '', currentFat: '', startLean: '', currentLean: ''
};

const FIELDS = [
  ['startWeight', 'Peso iniziale', 'kg', 300], ['currentWeight', 'Peso attuale', 'kg', 300],
  ['startFat', 'Massa grassa iniziale', '%', 100], ['currentFat', 'Massa grassa attuale', '%', 100],
  ['startLean', 'Massa magra iniziale', '%', 100], ['currentLean', 'Massa magra attuale', '%', 100],
  ['targetWeight', 'Peso target', 'kg', 300, true]
] as const;

export const BodyMetricsView: React.FC = () => {
  const [metrics, setMetrics] = useState<BodyMetrics>(() => {
    try {
      return { ...EMPTY_METRICS, ...JSON.parse(localStorage.getItem('diet_body_metrics') || '{}') };
    } catch {
      return EMPTY_METRICS;
    }
  });

  useEffect(() => {
    localStorage.setItem('diet_body_metrics', JSON.stringify(metrics));
  }, [metrics]);

  return (
    <section className="space-y-3.5 pb-4">
      <div className="bg-gradient-to-br from-[#1F2937] via-slate-900 to-emerald-950 text-white rounded-3xl p-5 shadow-lg">
        <p className="text-emerald-300 text-xs font-extrabold uppercase tracking-wider">Profilo</p>
        <h2 className="text-xl font-extrabold mt-1">I miei dati corporei</h2>
        <p className="text-sm text-slate-300 mt-1">I dati restano salvati su questo dispositivo.</p>
      </div>
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs grid grid-cols-2 gap-3 p-4">
        {FIELDS.map(([key, label, unit, max, fullWidth]) => (
          <label key={key} className={`text-[11px] font-bold text-slate-600 ${fullWidth ? 'col-span-2' : ''}`}>
            {label}
            <div className="relative mt-1">
              <input
                type="number"
                inputMode="decimal"
                min="0"
                max={max}
                step="0.1"
                value={metrics[key]}
                onChange={(event) => setMetrics((current) => ({ ...current, [key]: event.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 pr-8 text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
              <span className="absolute right-3 top-2.5 text-xs text-slate-400">{unit}</span>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};
