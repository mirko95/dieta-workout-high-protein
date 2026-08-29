import { MonthProgram } from '../types';

export const WORKOUT_GUIDELINES = {
  durationBreakdown: [
    { label: 'Riscaldamento dinamico', time: '5 min' },
    { label: 'Lavoro con i pesi', time: '38–40 min' },
    { label: 'Cardio finale in palestra', time: '15–17 min' },
    { label: 'Defaticamento e mobilità', time: '1–2 min' }
  ],
  restRules: [
    { category: 'Leg press, Hack squat, Chest press, Row, Hip thrust', rest: '90–120 s' },
    { category: 'Lat machine, Leg curl, Leg extension', rest: '75–90 s' },
    { category: 'Alzate laterali, Pec deck, Polpacci (Calf)', rest: '60 s' },
    { category: 'Addome / Crunch machine', rest: '45–60 s' }
  ],
  elbowPrecautions: [
    'Preferisci impugnature e prese neutre (palmi che si guardano).',
    'Non stringere le maniglie più del necessario durante le serie.',
    'Usa le cinghie / straps negli esercizi di tirata se riducono il sovraccarico agli avambracci.',
    'Evita al momento: curl pesanti con bilanciere dritto, reverse curl, farmer walk, stacchi da terra pesanti, skull crusher.',
    'Se un esercizio provoca fastidio o dolore acuto, sostituiscilo immediatamente.'
  ],
  progressionMethod: {
    title: 'Metodo della Doppia Progressione',
    description: 'Prima aumenti le ripetizioni mantenendo lo stesso carico fino al limite alto del range; solo quando completi tutte le serie a target con tecnica perfetta aumenti il carico.',
    example: [
      { session: 'Seduta 1', reps: '10 / 9 / 8' },
      { session: 'Seduta 2', reps: '10 / 10 / 9' },
      { session: 'Seduta 3', reps: '11 / 10 / 10' },
      { session: 'Seduta 4', reps: '12 / 12 / 11' },
      { session: 'Seduta 5 (Target raggiunto!)', reps: '12 / 12 / 12 -> Aumenta il peso la volta successiva' }
    ],
    weightIncrements: 'Parte superiore: +2,5–5% • Gambe: circa +5%',
    doNotIncreaseWhen: [
      'Riduci il range di movimento (ROM).',
      'Devi oscillare o fare "cheating".',
      'Il gomito inizia a dare fastidio.',
      'Non controlli la fase eccentrica di 2 secondi.',
      'Non raggiungi il minimo del range con tecnica pulita.'
    ]
  },
  goldenRule: 'Dimagrire è il progetto; diventare progressivamente più forte è il segnale che stai proteggendo e costruendo il muscolo durante il deficit calorico.'
};

export const MONTHLY_PROGRAMS: MonthProgram[] = [
  {
    id: 'settembre',
    monthName: 'Settembre',
    subtitle: 'Adattamento e Tecnica',
    frequency: '3 giorni a settimana (Lunedì A • Mercoledì B • Venerdì C)',
    rirTarget: '~3 RIR (3 ripetizioni in riserva, buffer ampio)',
    structure: [
      {
        title: 'Fase iniziale',
        points: [
          'Prime 2 settimane: esegui solo 2 serie sui movimenti principali per adattamento articolare.',
          'Dalla settimana 3: passa alle serie piene indicate nella scheda.',
          'Focus totale su esecuzione pulita e controllo eccentrico (~2s).'
        ]
      }
    ],
    workouts: [
      {
        id: 'set-a',
        name: 'Workout A',
        targetFocus: 'Gambe & Spinta/Tirata Orizzontale',
        schedule: 'Lunedì',
        exercises: [
          { name: 'Leg press 45°', sets: '3', reps: '10–12', restSeconds: 120, notes: 'Piedi a larghezza spalle, discesa controllata' },
          { name: 'Chest press presa neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Presa neutra salva-gomito' },
          { name: 'Seated row presa neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Tira con i gomiti, adduci le scapole' },
          { name: 'Leg curl seduto', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Blocca bene i cuscinetti' },
          { name: 'Alzate laterali alla macchina', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Movimento fluido senza slancio' },
          { name: 'Crunch machine', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Espira in contrazione' }
        ]
      },
      {
        id: 'set-b',
        name: 'Workout B',
        targetFocus: 'Quadricipiti, Trazione & Catena Posteriore',
        schedule: 'Mercoledì',
        exercises: [
          { name: 'Hack squat', sets: '3', reps: '8–12', restSeconds: 120, notes: 'Schiena ben aderente allo schienale' },
          { name: 'Lat machine presa neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Presa a triangolo o barra parallela' },
          { name: 'Chest press inclinata', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Focus parte alta del petto' },
          { name: 'Hip thrust machine', sets: '3', reps: '10–12', restSeconds: 90, notes: '1 secondo di fermo in cima per i glutei' },
          { name: 'Reverse pec deck', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Per deltoidi posteriori e postura' },
          { name: 'Plank a terra', sets: '2', reps: '30–45 s', restSeconds: 60, notes: 'Addome e glutei contratti' }
        ]
      },
      {
        id: 'set-c',
        name: 'Workout C',
        targetFocus: 'Full Body Macchine & Isolamento',
        schedule: 'Venerdì',
        exercises: [
          { name: 'Leg press', sets: '3', reps: '10–12', restSeconds: 120, notes: 'Spinta uniforme sui talloni' },
          { name: 'Chest-supported row', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Petto in appoggio sullo schienale' },
          { name: 'Pec deck', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Gomiti leggermente flessi' },
          { name: 'Leg extension', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Controllo completo in discesa' },
          { name: 'Leg curl', sets: '2', reps: '10–15', restSeconds: 75, notes: 'Femorali' },
          { name: 'Calf raise alla macchina', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Massima estensione in basso' },
          { name: 'Addome macchina', sets: '2', reps: '12–15', restSeconds: 60, notes: '45-60s recupero' }
        ]
      }
    ],
    cardioAndMovement: {
      cardioPostWeights: '15 min × 3 sedute (Tapis roulant inclinato, bike o ellittica a intensità 5–6/10)',
      walkingPad: '30 min × 5 giorni a settimana (ritmo facile durante il lavoro)',
      dailySteps: '6.000–7.000 passi/giorno medi'
    },
    coachTip: 'Esci dalla palestra pensando "avrei potuto fare qualcosa in più". Niente cedimento, niente ego lifting.'
  },
  {
    id: 'ottobre',
    monthName: 'Ottobre',
    subtitle: 'Costruzione della Base',
    frequency: '3 giorni a settimana (Stessi Workout A/B/C di settembre)',
    rirTarget: '2–3 RIR (Carico solido e costante)',
    structure: [
      {
        title: 'Cosa cambia',
        points: [
          'Completa tutte le serie prescritte al 100%.',
          'Inizia l\'applicazione rigorosa della doppia progressione: prima aumentano le ripetizioni, poi il carico.',
          'Mantieni le stesse macchine senza cambiarle ogni settimana per misurare i veri progressi.'
        ]
      },
      {
        title: 'Target tecnico',
        points: [
          'Fase eccentrica controllata a ~2 secondi.',
          'Niente rimbalzi o strappi sui fermi.',
          'Ultime ripetizioni impegnative ma con traiettoria pulita.'
        ]
      }
    ],
    workouts: [
      {
        id: 'ott-a',
        name: 'Workout A',
        targetFocus: 'Gambe & Spinta/Tirata Orizzontale',
        schedule: 'Lunedì',
        exercises: [
          { name: 'Leg press 45°', sets: '3', reps: '10–12', restSeconds: 120, notes: 'Aumenta le reps fino a 12' },
          { name: 'Chest press presa neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Presa neutra' },
          { name: 'Seated row neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Tirata controllata' },
          { name: 'Leg curl seduto', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Contrazione di picco 1s' },
          { name: 'Alzate laterali macchina', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Isolamento spalle' },
          { name: 'Crunch machine', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Addome' }
        ]
      },
      {
        id: 'ott-b',
        name: 'Workout B',
        targetFocus: 'Quadricipiti, Dorso & Glutei',
        schedule: 'Mercoledì',
        exercises: [
          { name: 'Hack squat', sets: '3', reps: '8–12', restSeconds: 120, notes: 'Discesa profonda controllata' },
          { name: 'Lat machine neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Trazione verticale' },
          { name: 'Chest press inclinata', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Spinta alta' },
          { name: 'Hip thrust machine', sets: '3', reps: '10–12', restSeconds: 90, notes: 'Glutei' },
          { name: 'Reverse pec deck', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Deltoidi post' },
          { name: 'Plank', sets: '2', reps: '30–45 s', restSeconds: 60, notes: 'Core stability' }
        ]
      },
      {
        id: 'ott-c',
        name: 'Workout C',
        targetFocus: 'Full Body Bilanciato',
        schedule: 'Venerdì',
        exercises: [
          { name: 'Leg press', sets: '3', reps: '10–12', restSeconds: 120, notes: 'Progressione su reps' },
          { name: 'Chest-supported row', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Schiena' },
          { name: 'Pec deck', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Pettorali' },
          { name: 'Leg extension', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Quadricipiti' },
          { name: 'Leg curl', sets: '2', reps: '10–15', restSeconds: 75, notes: 'Femorali' },
          { name: 'Calf raise', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Polpacci' },
          { name: 'Addome macchina', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Addominali' }
        ]
      }
    ],
    cardioAndMovement: {
      cardioPostWeights: '15–18 min × 3 sedute',
      walkingPad: '40 min × 5 giorni a settimana (anche diviso in 2 mini-sessioni)',
      dailySteps: '7.000–8.000 passi/giorno medi'
    },
    coachTip: 'Non giudicare la seduta dalla quantità di sudore. Giudicala da tecnica, ripetizioni registrate e progressione.'
  },
  {
    id: 'novembre',
    monthName: 'Novembre',
    subtitle: 'Upper / Lower (4 Giorni)',
    frequency: '4 giorni a settimana (Lunedì Upper A • Martedì Lower A • Giovedì Upper B • Sabato Lower B)',
    rirTarget: '~2 RIR',
    structure: [
      {
        title: 'Passaggio a 4 Giorni',
        points: [
          'Split mirato Upper / Lower per aumentare la frequenza e lo stimolo muscolare senza affaticamento articolare.',
          'Tutti gli esercizi di spinta/tirata mantengono prese neutre per preservare il gomito.'
        ]
      }
    ],
    workouts: [
      {
        id: 'nov-upper-a',
        name: 'Upper A',
        targetFocus: 'Petto, Dorso & Spalle',
        schedule: 'Lunedì',
        exercises: [
          { name: 'Chest press neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Spinta orizzontale' },
          { name: 'Lat machine neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Trazione verticale neutra' },
          { name: 'Seated row neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Tirata orizzontale' },
          { name: 'Shoulder press neutra', sets: '2', reps: '10–12', restSeconds: 75, notes: '*Solo se il gomito la tollera bene' },
          { name: 'Alzate laterali', sets: '3', reps: '12–15', restSeconds: 60, notes: 'Deltoidi laterali' },
          { name: 'Reverse pec deck', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Deltoidi posteriori' }
        ]
      },
      {
        id: 'nov-lower-a',
        name: 'Lower A',
        targetFocus: 'Gambe & Glutei A',
        schedule: 'Martedì',
        exercises: [
          { name: 'Leg press', sets: '3', reps: '8–12', restSeconds: 120, notes: 'Pesante controllato' },
          { name: 'Leg curl', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Femorali' },
          { name: 'Leg extension', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Quadricipiti' },
          { name: 'Hip thrust machine', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Spinta sui glutei' },
          { name: 'Calf raise', sets: '3', reps: '12–15', restSeconds: 60, notes: 'Polpacci' },
          { name: 'Crunch machine', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Addominali' }
        ]
      },
      {
        id: 'nov-upper-b',
        name: 'Upper B',
        targetFocus: 'Spinta Inclinata & Trazioni',
        schedule: 'Giovedì',
        exercises: [
          { name: 'Chest press inclinata', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Parte clavicolare del petto' },
          { name: 'Chest-supported row', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Tirata con petto in appoggio' },
          { name: 'Lat machine neutra', sets: '3', reps: '10–12', restSeconds: 90, notes: 'Volume dorso' },
          { name: 'Pec deck', sets: '2', reps: '10–15', restSeconds: 75, notes: 'Isolamento petto' },
          { name: 'Reverse pec deck', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Postura' },
          { name: 'Alzate laterali', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Spalle' }
        ]
      },
      {
        id: 'nov-lower-b',
        name: 'Lower B',
        targetFocus: 'Gambe & Glutei B',
        schedule: 'Sabato',
        exercises: [
          { name: 'Hack squat', sets: '3', reps: '8–12', restSeconds: 120, notes: 'Quadricipiti' },
          { name: 'Leg curl sdraiato', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Femorali isolati' },
          { name: 'Glute Drive', sets: '3', reps: '10–12', restSeconds: 90, notes: 'Glutei specifici' },
          { name: 'Leg extension', sets: '2', reps: '12–15', restSeconds: 75, notes: 'Quadricipiti volume' },
          { name: 'Abductor machine', sets: '2', reps: '15–20', restSeconds: 60, notes: 'Medio gluteo' },
          { name: 'Calf raise', sets: '3', reps: '12–15', restSeconds: 60, notes: 'Polpacci' }
        ]
      }
    ],
    cardioAndMovement: {
      cardioPostWeights: '15 min dopo ogni seduta pesi (4 volte a settimana)',
      walkingPad: '40–45 min × 5 giorni a settimana',
      dailySteps: '8.000–9.000 passi/giorno'
    }
  },
  {
    id: 'dicembre',
    monthName: 'Dicembre',
    subtitle: 'Più Volume, Stessi Fondamentali',
    frequency: '4 giorni a settimana (Struttura Upper/Lower)',
    rirTarget: '1–2 RIR sulle ultime serie (mai cedimento obbligatorio)',
    structure: [
      {
        title: 'Aumento del Volume Efficace',
        points: [
          'Primo esercizio della giornata: 4 serie piene (es. Chest press 4x8-12, Leg press 4x8-12).',
          'Altri esercizi principali: 3 serie.',
          'Accessori: 2–3 serie con massima cura tecnica.'
        ]
      }
    ],
    workouts: [
      {
        id: 'dic-upper-a',
        name: 'Upper A (Dicembre)',
        targetFocus: 'Volume Spinta/Tirata',
        schedule: 'Lunedì',
        exercises: [
          { name: 'Chest press', sets: '4', reps: '8–12', restSeconds: 90, notes: 'Primo esercizio a 4 serie!' },
          { name: 'Lat machine', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Dorso' },
          { name: 'Row seated', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Spessore schiena' },
          { name: 'Shoulder press', sets: '2', reps: '10–12', restSeconds: 75, notes: 'Presa neutra' },
          { name: 'Alzate laterali', sets: '3', reps: '12–15', restSeconds: 60, notes: 'Spalle' },
          { name: 'Reverse pec deck', sets: '2', reps: '12–15', restSeconds: 60, notes: 'Posteriore' }
        ]
      },
      {
        id: 'dic-lower-a',
        name: 'Lower A (Dicembre)',
        targetFocus: 'Volume Gambe',
        schedule: 'Martedì',
        exercises: [
          { name: 'Leg press', sets: '4', reps: '8–12', restSeconds: 120, notes: '4 serie piene' },
          { name: 'Leg curl', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Femorali' },
          { name: 'Leg extension', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Quadricipiti' },
          { name: 'Hip thrust', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Glutei' },
          { name: 'Calf raise', sets: '3', reps: '12–15', restSeconds: 60, notes: 'Polpacci' }
        ]
      }
    ],
    cardioAndMovement: {
      cardioPostWeights: '15–18 min × 4 sedute',
      walkingPad: '45 min × 5 giorni',
      dailySteps: '8.000–8.500+ passi/giorno'
    },
    coachTip: 'Se dicembre è caotico con le feste, proteggi la frequenza: meglio 4 allenamenti buoni ma leggermente più veloci che saltare una settimana intera.'
  },
  {
    id: 'gennaio',
    monthName: 'Gennaio',
    subtitle: 'Forza + Muscolo',
    frequency: '4 giorni a settimana (Upper/Lower)',
    rirTarget: '1–2 RIR',
    structure: [
      {
        title: 'Range di Ripetizioni Più Pesante',
        points: [
          'Sui primi esercizi lavoriamo con carichi più pesanti a 6–10 ripetizioni senza fare massimali.',
          'Leg press: 3–4 × 6–10 • Hack squat: 3 × 6–10 • Chest press: 3–4 × 6–10.',
          'Row: 3 × 8–10 • Lat machine: 3 × 8–12 • Accessori: 10–15 reps.'
        ]
      },
      {
        title: 'Gestione della fatica',
        points: [
          'Se per 2 settimane consecutive perdi reps, dormi peggio e senti stanchezza cronica: non aumentare cardio, riduci il volume pesi del 20-30% per una settimana di deload.'
        ]
      }
    ],
    workouts: [
      {
        id: 'gen-upper-forza',
        name: 'Upper Forza (Gennaio)',
        targetFocus: 'Intensità di Spinta & Trazione',
        schedule: 'Lunedì / Giovedì',
        exercises: [
          { name: 'Chest press', sets: '3–4', reps: '6–10', restSeconds: 120, notes: 'Carico più pesante, discesa controllata' },
          { name: 'Seated row', sets: '3', reps: '8–10', restSeconds: 90, notes: 'Tirata di forza' },
          { name: 'Lat machine', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Dorso' },
          { name: 'Alzate laterali & Rear delt', sets: '3', reps: '10–15', restSeconds: 60, notes: 'Accessori in pompaggio' }
        ]
      },
      {
        id: 'gen-lower-forza',
        name: 'Lower Forza (Gennaio)',
        targetFocus: 'Intensità Gambe & Glutei',
        schedule: 'Martedì / Sabato',
        exercises: [
          { name: 'Leg press', sets: '3–4', reps: '6–10', restSeconds: 120, notes: 'Forza pura sui quadricipiti' },
          { name: 'Hack squat', sets: '3', reps: '6–10', restSeconds: 120, notes: 'Profondità costante' },
          { name: 'Leg curl & Leg extension', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Isolamento' },
          { name: 'Hip thrust / Glute drive', sets: '3', reps: '8–10', restSeconds: 90, notes: 'Glutei pesanti' }
        ]
      }
    ],
    cardioAndMovement: {
      cardioPostWeights: '15–20 min × 4 sedute',
      walkingPad: '45–60 min × 5 giorni',
      dailySteps: '~9.000 passi/giorno medi'
    },
    coachTip: 'In deficit calorico, mantenere un carico alto è già una grande vittoria. Non pretendere nuovi record ogni singola settimana.'
  },
  {
    id: 'febbraio',
    monthName: 'Febbraio',
    subtitle: 'Consolidare mentre Dimagrisci',
    frequency: '4 giorni a settimana',
    rirTarget: '1–2 RIR',
    structure: [
      {
        title: 'Obiettivo del mese',
        points: [
          'Torniamo prevalentemente a 8–12 ripetizioni consolidando i pesi conquistati a gennaio.',
          'Primi esercizi: 3–4 × 8–12 • Secondari: 3 × 8–12 / 10–15 • Accessori: 2–3 × 12–15.',
          'Totale 16–20 serie per seduta.'
        ]
      },
      {
        title: 'Regola di priorità',
        points: [
          'Non aumentare contemporaneamente pesi, serie, cardio e passi. Cambia solo una variabile per volta.'
        ]
      }
    ],
    workouts: [
      {
        id: 'feb-upper',
        name: 'Upper Consolidamento',
        targetFocus: 'Spinta & Trazione Bilanciata',
        schedule: 'Lunedì / Giovedì',
        exercises: [
          { name: 'Chest press neutra', sets: '3–4', reps: '8–12', restSeconds: 90, notes: 'Carico consolidato da gennaio' },
          { name: 'Lat machine neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Dorso' },
          { name: 'Row orizzontale', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Tirata' },
          { name: 'Pec deck + Alzate lat', sets: '3', reps: '10–15', restSeconds: 60, notes: 'Isolamento' }
        ]
      },
      {
        id: 'feb-lower',
        name: 'Lower Consolidamento',
        targetFocus: 'Gambe Complete',
        schedule: 'Martedì / Sabato',
        exercises: [
          { name: 'Leg press', sets: '3–4', reps: '8–12', restSeconds: 120, notes: 'Mantenimento forza' },
          { name: 'Hack squat', sets: '3', reps: '8–12', restSeconds: 120, notes: 'Quadricipiti' },
          { name: 'Leg curl + Leg extension', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Femorali / Quad' },
          { name: 'Hip thrust / Calf', sets: '3', reps: '10–12', restSeconds: 75, notes: 'Glutei / Polpacci' }
        ]
      }
    ],
    cardioAndMovement: {
      cardioPostWeights: 'Upper: 17–20 min • Lower: 15–17 min',
      walkingPad: '45–60 min × 5 giorni',
      dailySteps: '9.000–10.000 passi/giorno'
    },
    coachTip: 'Se il peso sulla bilancia scende ma la forza sui pesi resta solida e stabile, stai proteggendo magistralmente la massa muscolare magra.'
  },
  {
    id: 'marzo',
    monthName: '1–15 Marzo',
    subtitle: 'Niente Sprint Finale, Stabilità',
    frequency: '4 giorni a settimana (Stessa struttura di Febbraio)',
    rirTarget: '1–2 RIR sui principali',
    structure: [
      {
        title: 'Niente eccessi nell\'ultima fase',
        points: [
          'Mantieni Upper/Lower, carichi e abitudini costanti senza raddoppiare improvvisamente il cardio.',
          'Se recupero o sonno peggiorano, riduci una serie di lavoro.'
        ]
      },
      {
        title: 'Cosa misurare e valutare il 15 Marzo',
        points: [
          'Peso corporeo e media delle ultime 7 giornate.',
          'Circonferenza vita misurata a digiuno.',
          'Foto di confronto fronte/lato.',
          'Carichi raggiunti su leg press, chest press, row e lat machine.',
          'Stato di salute del gomito rispetto all\'inizio di settembre.'
        ]
      }
    ],
    workouts: [
      {
        id: 'mar-upper',
        name: 'Upper Finale',
        targetFocus: 'Mantenimento Forza Massima',
        schedule: 'Lunedì / Giovedì',
        exercises: [
          { name: 'Chest press neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Tecnica pulita' },
          { name: 'Lat machine neutra', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Trazione piena' },
          { name: 'Row con appoggio', sets: '3', reps: '8–12', restSeconds: 90, notes: 'Dorso' },
          { name: 'Alzate laterali', sets: '2–3', reps: '12–15', restSeconds: 60, notes: 'Spalle' }
        ]
      },
      {
        id: 'mar-lower',
        name: 'Lower Finale',
        targetFocus: 'Gambe & Glutei',
        schedule: 'Martedì / Sabato',
        exercises: [
          { name: 'Leg press', sets: '3', reps: '8–12', restSeconds: 120, notes: '8-12 reps pulite' },
          { name: 'Hack squat', sets: '3', reps: '8–12', restSeconds: 120, notes: 'Quadricipiti' },
          { name: 'Leg curl + Leg extension', sets: '3', reps: '10–15', restSeconds: 75, notes: 'Isolamento' },
          { name: 'Calf raise', sets: '2–3', reps: '12–15', restSeconds: 60, notes: 'Polpacci' }
        ]
      }
    ],
    cardioAndMovement: {
      cardioPostWeights: '15–20 min × 4 sedute',
      walkingPad: '45–60 min × 5 giorni',
      dailySteps: 'Circa 10.000 passi/giorno (se ben tollerati)'
    },
    coachTip: 'Non inseguire un numero sulla bilancia a ogni costo: il vero traguardo è arrivare più magro, atletico, forte e con abitudini solide e durature nel tempo.'
  }
];
