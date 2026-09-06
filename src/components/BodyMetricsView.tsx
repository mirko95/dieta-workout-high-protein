import React, { useEffect, useState } from 'react';

type BodyMetrics = Record<'startWeight' | 'currentWeight' | 'targetWeight' | 'startFat' | 'currentFat' | 'startLean' | 'currentLean', string>;
type Measurement = { date: string; weight?: number; fat?: number; lean?: number };

const EMPTY_METRICS: BodyMetrics = {
  startWeight: '', currentWeight: '', targetWeight: '', startFat: '', currentFat: '', startLean: '', currentLean: ''
};

const FIELDS = [
  ['startWeight', 'Peso iniziale', 'kg', 300], ['currentWeight', 'Peso attuale', 'kg', 300],
  ['startFat', 'Massa grassa iniziale', '%', 100], ['currentFat', 'Massa grassa attuale', '%', 100],
  ['startLean', 'Massa magra iniziale', '%', 100], ['currentLean', 'Massa magra attuale', '%', 100],
  ['targetWeight', 'Peso target', 'kg', 300, true]
] as const;

const formatDate = (date: string) => new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'short' }).format(new Date(`${date}T12:00:00`));
export const upsertMeasurement = (history: Measurement[], measurement: Measurement) =>
  [...history.filter((entry) => entry.date !== measurement.date), measurement].sort((a, b) => a.date.localeCompare(b.date));

const ProgressChart: React.FC<{ title: string; color: string; suffix: string; data: Measurement[]; field: 'weight' | 'fat' }> = ({ title, color, suffix, data, field }) => {
  const points = data.filter((entry): entry is Measurement & Record<typeof field, number> => typeof entry[field] === 'number').slice(-8);
  if (!points.length) return null;

  const values = points.map((entry) => entry[field]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const coordinates = values.map((value, index) => `${12 + (index * 276) / Math.max(1, values.length - 1)},${12 + ((max - value) * 66) / range}`).join(' ');
  const change = values[values.length - 1] - values[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-extrabold text-slate-700">{title}</span>
        <span className="font-bold" style={{ color }}>{values[values.length - 1].toFixed(1)} {suffix}{points.length > 1 && ` • ${change >= 0 ? '+' : ''}${change.toFixed(1)}`}</span>
      </div>
      <svg viewBox="0 0 300 90" className="mt-2 h-24 w-full" role="img" aria-label={`Grafico ${title}`}>
        <path d="M12 78H288" stroke="#cbd5e1" strokeDasharray="3 3" />
        <polyline points={coordinates} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {coordinates.split(' ').map((point, index) => {
          const [cx, cy] = point.split(',');
          return <circle key={index} cx={cx} cy={cy} r="3.5" fill={color} />;
        })}
        <text x="12" y="88" fill="#64748b" fontSize="9">{formatDate(points[0].date)}</text>
        <text x="288" y="88" fill="#64748b" fontSize="9" textAnchor="end">{formatDate(points[points.length - 1].date)}</text>
      </svg>
    </div>
  );
};

export const BodyMetricsView: React.FC = () => {
  const [metrics, setMetrics] = useState<BodyMetrics>(() => {
    try {
      return { ...EMPTY_METRICS, ...JSON.parse(localStorage.getItem('diet_body_metrics') || '{}') };
    } catch {
      return EMPTY_METRICS;
    }
  });
  const [history, setHistory] = useState<Measurement[]>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('diet_body_history') || '[]');
      return Array.isArray(saved) ? saved.filter((entry) => entry && typeof entry.date === 'string') : [];
    } catch {
      return [];
    }
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem('diet_body_metrics', JSON.stringify(metrics));
  }, [metrics]);

  useEffect(() => {
    localStorage.setItem('diet_body_history', JSON.stringify(history));
  }, [history]);

  const saveMeasurement = () => {
    const now = new Date();
    const measurement: Measurement = { date: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}` };
    ([['currentWeight', 'weight'], ['currentFat', 'fat'], ['currentLean', 'lean']] as const).forEach(([metric, field]) => {
      const value = Number(metrics[metric]);
      if (metrics[metric] !== '' && Number.isFinite(value)) measurement[field] = value;
    });
    if (!('weight' in measurement) && !('fat' in measurement) && !('lean' in measurement)) return;
    setHistory((current) => upsertMeasurement(current, measurement));
    setSaved(true);
  };

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
      <button
        onClick={saveMeasurement}
        className="w-full rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-extrabold text-white shadow-md shadow-emerald-500/25 active:scale-[0.98]"
      >
        {saved ? 'Rilevazione di oggi salvata' : 'Salva rilevazione di oggi'}
      </button>
      {history.length > 0 && (
        <div className="space-y-3 rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-slate-800">Storico progressi</h3>
            <span className="text-[11px] font-semibold text-slate-500">Ultime {Math.min(history.length, 8)} rilevazioni</span>
          </div>
          <ProgressChart title="Peso" color="#059669" suffix="kg" data={history} field="weight" />
          <ProgressChart title="Massa grassa" color="#0284c7" suffix="%" data={history} field="fat" />
        </div>
      )}
    </section>
  );
};
