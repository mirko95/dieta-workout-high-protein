import React, { useState } from 'react';
import { WEEKLY_SHOPPING } from '../data/weeklyShopping';

export function WeeklyShoppingView({ currentDay }: { currentDay: number }) {
  const [week, setWeek] = useState(Math.floor((currentDay - 21) / 7) + 1);
  const [initial] = useState(() => {
    try {
      const checked = JSON.parse(localStorage.getItem('diet_healthy_shopping_2026') ?? '{}');
      if (!checked || Array.isArray(checked) || typeof checked !== 'object' || !Object.values(checked).every(value => typeof value === 'boolean')) throw new Error();
      return { checked: checked as Record<string, boolean>, error: '' };
    } catch { return { checked: {} as Record<string, boolean>, error: 'Impossibile leggere la spesa salvata. Ricarica prima di modificarla.' }; }
  });
  const [checked, setChecked] = useState(initial.checked);
  const [status, setStatus] = useState(initial.error);
  const list = WEEKLY_SHOPPING[week - 1];
  const items = list.groups.flatMap(group => group.items);

  function save(next: Record<string, boolean>) {
    setChecked(next);
    try {
      localStorage.setItem('diet_healthy_shopping_2026', JSON.stringify(next));
      setStatus('Spesa salvata su questo dispositivo.');
    } catch { setStatus('Salvataggio non riuscito. Mantieni aperta la pagina e premi Salva spesa per riprovare.'); }
  }

  async function copyList() {
    const text = `SPESA · Settimana ${week} · ${list.label}\n1 persona; dosi proporzionate alle ricette. Gli intervalli e le quantità non specificate provengono dal PDF.\n${list.warnings.join('\n')}\n\n` + list.groups.map(group => `${group.title}\n${group.description}\n${group.items.map(item => `${checked[item.id] ? '[x]' : '[ ]'} ${item.name}: ${item.quantity}${item.original ? ` (dose originale: ${item.original})` : ''}`).join('\n')}${group.sourceUrl ? `\n${group.sourceUrl}` : ''}`).join('\n\n');
    try { await navigator.clipboard.writeText(text); setStatus('Lista copiata negli appunti.'); }
    catch { setStatus('Copia non riuscita: accesso agli appunti non disponibile.'); }
  }

  return <div className="space-y-4 pb-4">
    <div className="rounded-3xl bg-slate-900 p-5 text-white space-y-2">
      <h2 className="text-lg font-extrabold">Spesa · 6 settimane</h2>
      <p className="text-xs">21 settembre – 1° novembre 2026 · 1 persona</p>
      <p className="text-xs text-slate-200">Una porzione di ricetta per pasto, salvo i 3 pancake indicati. Quantità proporzionate alle dosi del ricettario; gli intervalli rispettano le rese variabili. Contorni facoltativi e dosi non specificate restano indicati come tali.</p>
    </div>
    <label className="block text-sm font-bold">Settimana della spesa
      <select className="mt-2 block w-full rounded-xl border border-slate-200 bg-white p-3" value={week} onChange={event => setWeek(Number(event.target.value))}>
        {WEEKLY_SHOPPING.map(list => <option key={list.week} value={list.week}>{list.week} · {list.label}</option>)}
      </select>
    </label>
    <div className="flex items-center justify-between gap-2 text-xs">
      <span className="font-bold">{items.filter(item => checked[item.id]).length} / {items.length} voci spuntate</span>
      <button type="button" onClick={copyList} className="rounded-full bg-emerald-700 px-4 py-2 text-white font-bold">Copia lista</button>
    </div>
    <p role="status" className="text-xs text-slate-700">{status}</p>
    {list.warnings.map(warning => <p key={warning} className="rounded-2xl bg-amber-50 border border-amber-300 p-3 text-xs">{warning} La spesa di questo piatto è incompleta.</p>)}
    <p className="text-xs text-slate-600">Le quantità di riso e contorni sono riportate come nel piano, che non specifica sempre il peso a crudo o cotto. Per ingredienti ripetuti tra ricette, somma le rispettive voci.</p>
    <fieldset disabled={!!initial.error} className="space-y-3 min-w-0">
      {list.groups.map((group, i) => <details key={`${week}-${i}`} open={i === 0} className="rounded-2xl bg-white border border-slate-200 p-4">
        <summary className="cursor-pointer text-sm font-bold">{group.title}</summary>
        <p className="my-2 text-xs text-slate-600">{group.description}</p>
        {group.sourceUrl && <a href={group.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-block mb-2 text-xs font-bold text-emerald-800 underline">Ricetta originale ↗</a>}
        <div className="space-y-2">{group.items.map(item => <label key={item.id} className={`flex items-start gap-3 rounded-xl border p-3 text-xs ${checked[item.id] ? 'bg-emerald-50 border-emerald-200' : 'border-slate-100'}`}>
          <input type="checkbox" checked={!!checked[item.id]} onChange={event => save({ ...checked, [item.id]: event.target.checked })} className="mt-0.5 h-5 w-5 shrink-0 accent-emerald-700" />
          <span className="min-w-0"><span className={`block font-semibold ${checked[item.id] ? 'line-through text-slate-500' : ''}`}>{item.name}</span><strong className="block mt-1 text-emerald-800">{item.quantity}</strong>{item.original && <small className="block mt-1 text-slate-500">Dose originale: {item.original}</small>}</span>
        </label>)}</div>
      </details>)}
      <button type="button" onClick={() => save(checked)} className="w-full rounded-full bg-emerald-700 py-3 text-sm font-bold text-white">Salva spesa</button>
    </fieldset>
  </div>;
}
