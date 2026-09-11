import { FourDayBlock, ShoppingCategory } from '../types';

export const MONTHLY_PANTRY: ShoppingCategory[] = [
  {
    title: 'Cereali e Carboidrati',
    items: [
      { id: 'p-quinoa', name: 'Quinoa', quantity: '~325 g' },
      { id: 'p-spaghetti-int', name: 'Spaghetti integrali', quantity: '~325 g' },
      { id: 'p-pasta-int', name: 'Pasta integrale corta', quantity: '~260 g' },
      { id: 'p-riso-basmati', name: 'Riso basmati', quantity: '~250 g' },
      { id: 'p-riso-integrale', name: 'Riso integrale', quantity: '~200 g' },
      { id: 'p-riso-lungo', name: 'Riso a chicco lungo', quantity: '~200 g' },
      { id: 'p-riso-selvaggio', name: 'Riso selvaggio', quantity: '~200 g' },
      { id: 'p-cuscus', name: 'Cuscus', quantity: '~120 g' },
      { id: 'p-farro', name: 'Farro', quantity: '~120 g' },
      { id: 'p-avena', name: 'Fiocchi d\'avena', quantity: '~221 g' },
      { id: 'p-cornflakes', name: 'Corn flakes (non zuccherati)', quantity: '~200 g' },
      { id: 'p-spaghetti-vetro', name: 'Spaghetti di vetro', quantity: '~88 g' },
      { id: 'p-carta-riso', name: 'Fogli di carta di riso', quantity: '~147 g (ca. 20 fogli)' },
      { id: 'p-pane-int', name: 'Pane integrale a fette', quantity: '~280 g' }
    ]
  },
  {
    title: 'Legumi e Surgelati',
    items: [
      { id: 'p-ceci', name: 'Ceci in scatola', quantity: '~533 g' },
      { id: 'p-fagiolini', name: 'Fagiolini surgelati', quantity: '~375 g' },
      { id: 'p-piselli-surg', name: 'Piselli surgelati', quantity: '~375 g' },
      { id: 'p-piselli-scatola', name: 'Piselli in scatola', quantity: '~200 g' }
    ]
  },
  {
    title: 'Frutta Secca e Semi',
    items: [
      { id: 'p-noci-pecan', name: 'Noci pecan', quantity: '~145 g' },
      { id: 'p-mandorle-mac', name: 'Mandorle macinate / farina', quantity: '~47 g' },
      { id: 'p-mandorle-trit', name: 'Mandorle tritate / a lamelle', quantity: '~24 g' },
      { id: 'p-noci', name: 'Noci', quantity: '~23 g' },
      { id: 'p-semi-lino', name: 'Semi di lino macinati', quantity: '~80 g' },
      { id: 'p-semi-girasole', name: 'Semi di girasole', quantity: '~23 g' },
      { id: 'p-semi-zucca', name: 'Semi di zucca', quantity: '~23 g' },
      { id: 'p-scaglie-cocco', name: 'Scaglie di cocco disidratato', quantity: '~93 g' }
    ]
  },
  {
    title: 'Colazioni e Snack',
    items: [
      { id: 'p-cacao', name: 'Cacao amaro in polvere', quantity: '~195 g' },
      { id: 'p-burro-arachidi', name: 'Burro di arachidi 100%', quantity: '~175 g' },
      { id: 'p-whey', name: 'Proteine in polvere (Whey)', quantity: '~775 g' },
      { id: 'p-datteri', name: 'Datteri freschi (tipo Medjool)', quantity: '~380 g' },
      { id: 'p-ciocc-fond', name: 'Cioccolato fondente (min 70%)', quantity: '~72 g' },
      { id: 'p-gocce-ciocc', name: 'Gocce di cioccolato fondente', quantity: '~10 g' },
      { id: 'p-zucchero-cocco', name: 'Zucchero di cocco (per versione base)', quantity: '~15 g' }
    ]
  },
  {
    title: 'Condimenti e Salse',
    items: [
      { id: 'p-soia', name: 'Salsa di soia (a ridotto contenuto di sale)', quantity: '~394 ml' },
      { id: 'p-miele', name: 'Miele millefiori / acacia', quantity: '~132 g' },
      { id: 'p-sciroppo-acero', name: 'Sciroppo d\'acero', quantity: '~50 ml' },
      { id: 'p-olio-oliva', name: 'Olio extravergine d\'oliva', quantity: '~200 ml' },
      { id: 'p-olio-girasole', name: 'Olio di girasole', quantity: '~45 ml' },
      { id: 'p-olio-sesamo', name: 'Olio di sesamo tostato', quantity: '~35 ml' },
      { id: 'p-olio-cocco', name: 'Olio di cocco vergine', quantity: '~43 ml' },
      { id: 'p-senape', name: 'Senape di Digione', quantity: '~75 g' },
      { id: 'p-passata', name: 'Passata di pomodoro', quantity: '~300 g' },
      { id: 'p-concentrato', name: 'Concentrato di pomodoro', quantity: '~32 g' },
      { id: 'p-latte-cocco', name: 'Latte di cocco light / parz. scremato', quantity: '~320 ml' },
      { id: 'p-capperi', name: 'Capperi sottosale o sottaceto', quantity: '~34 g' },
      { id: 'p-olive-nere', name: 'Olive nere snocciolate', quantity: '~27 g' },
      { id: 'p-pomodori-secchi', name: 'Pomodori secchi sott\'olio', quantity: '~27 g' },
      { id: 'p-aceto-riso', name: 'Aceto di riso', quantity: '~27 ml' },
      { id: 'p-aceto-bianco', name: 'Aceto di vino bianco', quantity: '~20 ml' }
    ]
  },
  {
    title: 'Cottura e Spezie',
    items: [
      { id: 'p-farina-int', name: 'Farina integrale', quantity: '~300 g' },
      { id: 'p-farina-00', name: 'Farina tipo 00', quantity: '~13 g' },
      { id: 'p-bicarbonato', name: 'Bicarbonato di sodio', quantity: '~13 g' },
      { id: 'p-amido-mais', name: 'Amido di mais (maizena)', quantity: '~8 g' },
      { id: 'p-vaniglia', name: 'Estratto di vaniglia puro', quantity: '~10 g' },
      { id: 'p-cannella', name: 'Cannella macinata', quantity: '~18 g' },
      { id: 'p-zenzero-mac', name: 'Zenzero in polvere', quantity: '~10 g' },
      { id: 'p-cumino', name: 'Cumino macinato', quantity: '~10 g' },
      { id: 'p-paprica', name: 'Paprica dolce in polvere', quantity: '~12 g' },
      { id: 'p-curry', name: 'Curry in polvere', quantity: '~6 g + q.b.' },
      { id: 'p-curcuma', name: 'Curcuma macinata', quantity: '~2 g' },
      { id: 'p-cayenna', name: 'Peperoncino di Cayenna', quantity: '~5 g' },
      { id: 'p-spezie-varie', name: 'Noce moscata, chiodi di garofano, origano, aglio in polvere, dolcificante', quantity: 'q.b.' }
    ]
  }
];

export const MONTHLY_PROTEIN_SUMMARY = {
  additions: [
    { name: 'Skyr / Yogurt proteico', amount: '~5,6 kg nel mese' },
    { name: 'Albumi pastorizzati', amount: '~1,2 kg extra' },
    { name: 'Tofu duro al naturale', amount: '~2,2 kg extra' },
    { name: 'Tofu affumicato', amount: '~1,6 kg extra' },
    { name: 'Petto di pollo', amount: '~765 g extra' },
    { name: 'Calamari anelli', amount: '~470 g extra' }
  ],
  reductions: [
    { name: 'Whey totale', detail: '~775 g/mese considerando anche frullato YAZIO' },
    { name: 'Burro di arachidi', detail: 'Scende a ~175 g/mese' },
    { name: 'Oli e condimenti grassi', detail: 'Fortemente ridotti soprattutto in involtini e frittelle' },
    { name: 'Zuccheri & Cioccolato', detail: 'Ridotti nei Mug Cake e nelle palline energetiche' },
    { name: 'Cereali e Carboidrati', detail: 'Meno quinoa, pasta, riso e pane nei pasti corretti HP' }
  ],
  practicalAdvice: 'Acquista lo Skyr in vasetti multipack e il Tofu in blocchi convenienti; porziona e congela il petto di pollo se non lo consumi entro 48 ore.'
};

export const FOUR_DAY_BLOCKS: FourDayBlock[] = [
  {
    id: 'block-1-4',
    daysRange: 'Giorni 1–4',
    startDay: 1,
    endDay: 4,
    categories: [
      {
        title: 'Frutta e Verdura',
        items: [
          { id: 'b1-banane', name: 'Banane', quantity: '~300 g' },
          { id: 'b1-aglio', name: 'Aglio', quantity: '~11 g' },
          { id: 'b1-cipolla', name: 'Cipolla', quantity: '~80 g' },
          { id: 'b1-carote', name: 'Carote', quantity: '~150 g' },
          { id: 'b1-cavolfiore', name: 'Cavolfiore', quantity: '~200 g' },
          { id: 'b1-pomodori', name: 'Pomodori', quantity: '~180 g' },
          { id: 'b1-patatedolci', name: 'Patate dolci', quantity: '~112 g' },
          { id: 'b1-lattuga', name: 'Lattuga', quantity: '~38 g' },
          { id: 'b1-spinacino', name: 'Spinacino', quantity: '~100 g' },
          { id: 'b1-valeriana', name: 'Valeriana', quantity: '~75 g' },
          { id: 'b1-limone', name: 'Limone', quantity: '~47 g' },
          { id: 'b1-lime', name: 'Lime', quantity: '~9 g' },
          { id: 'b1-cipollotto', name: 'Cipollotto', quantity: '~25 g' },
          { id: 'b1-germogli', name: 'Germogli di fagioli mungo', quantity: '~38 g' },
          { id: 'b1-basilico', name: 'Basilico fresco', quantity: '~3 g' },
          { id: 'b1-jalapeno', name: 'Jalapeño fresco', quantity: 'q.b.' }
        ]
      },
      {
        title: 'Proteine (Fresco / Banco)',
        items: [
          { id: 'b1-pollo', name: 'Petto di pollo fresco', quantity: '~400 g (+195 g HP)' },
          { id: 'b1-manzo', name: 'Manzo macinato magro', quantity: '~125 g' },
          { id: 'b1-tofu-duro', name: 'Tofu duro naturale', quantity: '~100 g (+80 g HP)' },
          { id: 'b1-tofu-aff', name: 'Tofu affumicato', quantity: '~75 g (+225 g HP)' },
          { id: 'b1-calamari', name: 'Anelli di calamaro', quantity: '~83 g (+117 g HP)' },
          { id: 'b1-uova', name: 'Uova fresche intere', quantity: '~2 uova' }
        ]
      },
      {
        title: 'Frigo e Latticini',
        items: [
          { id: 'b1-latte', name: 'Latte 1,5%', quantity: '~188 ml' },
          { id: 'b1-latte-mandorle', name: 'Latte di mandorle non dolcificato', quantity: '~200 ml' },
          { id: 'b1-yogurt', name: 'Yogurt 1,5%', quantity: '~60 g' },
          { id: 'b1-yogurt-greco', name: 'Yogurt greco', quantity: '~100 g' },
          { id: 'b1-yogurt-0', name: 'Yogurt greco 0%', quantity: '~50 g' },
          { id: 'b1-panna-acida', name: 'Panna acida', quantity: '~60 g' },
          { id: 'b1-feta', name: 'Feta magra', quantity: '~38 g' },
          { id: 'b1-cheddar', name: 'Cheddar grattugiato', quantity: '~56 g' },
          { id: 'b1-spalmabile', name: 'Formaggio spalmabile light', quantity: '~28 g' },
          { id: 'b1-mozzarella', name: 'Mozzarella classica', quantity: '~31 g' },
          { id: 'b1-mozzarella-magra', name: 'Mozzarella magra', quantity: '~30 g' },
          { id: 'b1-panna-fresca', name: 'Panna fresca', quantity: '~85 ml' }
        ]
      }
    ],
    hpCorrections: [
      'Skyr naturale: ~800 g',
      'Proteine Whey: ~83 g',
      'Petto di pollo: +~195 g',
      'Tofu duro: +~80 g',
      'Tofu affumicato: +~225 g',
      'Calamari: +~117 g',
      'Albumi pastorizzati: +~200 g',
      'Usa ~75 g di banana in meno rispetto alla lista base.'
    ],
    mealPrepSteps: [
      'Porziona subito 4 vasetti di skyr e le dosi di whey per smoothie e Mug Cake.',
      'Prepara il muesli in batch da 6 porzioni: servirai il 70% della porzione con 200 g di skyr.',
      'Tikka Masala: porziona 150 g di pollo marinato e 50 g di riso per la porzione HP.',
      'Involtini: arrotola con abbondante tofu affumicato e cuoci in Air Fryer con max 2 ml d\'olio spray.',
      'Calamari: porzione portata a 200 g (conservali congelati fino al giorno prima).'
    ],
    storageAdvice: 'Raffredda rapidamente i cibi cotti in contenitori ermetici. Congela le porzioni eccedenti i 2 giorni.'
  },
  {
    id: 'block-5-8',
    daysRange: 'Giorni 5–8',
    startDay: 5,
    endDay: 8,
    categories: [
      {
        title: 'Frutta e Verdura',
        items: [
          { id: 'b2-banane', name: 'Banane', quantity: '~375 g (-75 g HP)' },
          { id: 'b2-aglio', name: 'Aglio', quantity: '~12 g' },
          { id: 'b2-cipolla', name: 'Cipolla', quantity: '~93 g' },
          { id: 'b2-pomodori', name: 'Pomodori', quantity: '~320 g' },
          { id: 'b2-cavolfiore', name: 'Cavolfiore', quantity: '~187 g' },
          { id: 'b2-funghi', name: 'Funghi champignon crema', quantity: '~167 g' },
          { id: 'b2-spinaci', name: 'Spinaci freschi', quantity: '~225 g' },
          { id: 'b2-spinacino', name: 'Spinacino', quantity: '~100 g' },
          { id: 'b2-valeriana', name: 'Valeriana', quantity: '~75 g' },
          { id: 'b2-zucchine', name: 'Zucchine', quantity: '~115 g' },
          { id: 'b2-limone', name: 'Limone', quantity: '~40 g' },
          { id: 'b2-carota', name: 'Carota', quantity: '~25 g' },
          { id: 'b2-cipollotti', name: 'Cipollotti', quantity: '~27 g' },
          { id: 'b2-scalogno', name: 'Scalogno', quantity: '~10 g' },
          { id: 'b2-germogli', name: 'Germogli di fagioli mungo', quantity: '~25 g' }
        ]
      },
      {
        title: 'Proteine',
        items: [
          { id: 'b2-salmone', name: 'Filetto di salmone fresco', quantity: '~150 g' },
          { id: 'b2-cosce', name: 'Cosce di pollo disossate', quantity: '~133 g' },
          { id: 'b2-petto-pollo', name: 'Petto di pollo', quantity: '~75 g (+75 g HP)' },
          { id: 'b2-manzo', name: 'Manzo macinato', quantity: '~150 g' },
          { id: 'b2-tofu-duro', name: 'Tofu duro naturale', quantity: '~67 g (+383 g HP)' },
          { id: 'b2-tofu-aff', name: 'Tofu affumicato', quantity: '~50 g (+150 g HP)' },
          { id: 'b2-uova', name: 'Uova intere', quantity: 'Circa 2 uova' }
        ]
      },
      {
        title: 'Frigo',
        items: [
          { id: 'b2-latte-mandorle', name: 'Latte di mandorle non dolcificato', quantity: '~262 ml' },
          { id: 'b2-yogurt', name: 'Yogurt', quantity: '~60 g' },
          { id: 'b2-yogurt-greco', name: 'Yogurt greco', quantity: '~100 g' },
          { id: 'b2-yogurt-0', name: 'Yogurt greco 0%', quantity: '~50 g' },
          { id: 'b2-panna-acida', name: 'Panna acida', quantity: '~60 g' },
          { id: 'b2-panna-cucina', name: 'Panna da cucina light', quantity: '~50 ml' },
          { id: 'b2-latte', name: 'Latte', quantity: '~38 ml' }
        ]
      }
    ],
    hpCorrections: [
      'Skyr: ~600 g',
      'Whey: ~123 g',
      'Petto di pollo: +~75 g',
      'Tofu duro: +~383 g',
      'Tofu affumicato: +~150 g',
      'Albumi: +~200 g',
      'Usa ~75 g di banana in meno.'
    ],
    mealPrepSteps: [
      'Prepara sacchetti monodose per smoothie con banana già pesata (ridotta) e dose whey.',
      'Pasta verde: cuoci il tofu a dadini dorato separatamente e uniscilo alla crema verde (pasta ridotta a 65 g).',
      'Teriyaki: porziona 200 g di tofu e 65 g di quinoa secca.',
      'Curry cavolfiore: aggiungi 100 g di tofu cubettato e riduci latte di cocco e couscous.',
      'Mug Cake: prepara i barattoli con le polveri asciutte (farina, spezie, whey) e aggiungi la banana fresca al momento.'
    ],
    storageAdvice: 'Conserva le porzioni di pesce e tofu fresco rigorosamente coperte in frigo.'
  },
  {
    id: 'block-9-12',
    daysRange: 'Giorni 9–12',
    startDay: 9,
    endDay: 12,
    categories: [
      {
        title: 'Frutta e Verdura',
        items: [
          { id: 'b3-banane', name: 'Banane', quantity: '~300 g' },
          { id: 'b3-cavolfiore', name: 'Cavolfiore', quantity: '~387 g' },
          { id: 'b3-pomodori', name: 'Pomodori', quantity: '~320 g' },
          { id: 'b3-spinaci', name: 'Spinaci freschi', quantity: '~225 g' },
          { id: 'b3-funghi', name: 'Funghi champignon', quantity: '~167 g' },
          { id: 'b3-carote', name: 'Carote', quantity: '~162 g' },
          { id: 'b3-zucchine', name: 'Zucchine', quantity: '~115 g' },
          { id: 'b3-cipolla', name: 'Cipolla', quantity: '~67 g' },
          { id: 'b3-aglio', name: 'Aglio', quantity: '~15 g' },
          { id: 'b3-cipollotti', name: 'Cipollotti', quantity: '~32 g' },
          { id: 'b3-germogli', name: 'Germogli mungo', quantity: '~50 g' },
          { id: 'b3-limone', name: 'Limone', quantity: '~20 g' },
          { id: 'b3-scalogno', name: 'Scalogno', quantity: '~10 g' }
        ]
      },
      {
        title: 'Proteine',
        items: [
          { id: 'b3-tofu-duro', name: 'Tofu duro', quantity: '~167 g (+463 g HP)' },
          { id: 'b3-tofu-aff', name: 'Tofu affumicato', quantity: '~100 g (+300 g HP)' },
          { id: 'b3-manzo', name: 'Manzo macinato', quantity: '~150 g' },
          { id: 'b3-cosce', name: 'Cosce di pollo disossate', quantity: '~133 g' },
          { id: 'b3-petto', name: 'Petto di pollo', quantity: '~75 g (+75 g HP)' },
          { id: 'b3-uova', name: 'Uova', quantity: 'Circa 2 uova' }
        ]
      },
      {
        title: 'Frigo',
        items: [
          { id: 'b3-latte-mandorle', name: 'Latte di mandorle', quantity: '~262 ml' },
          { id: 'b3-latte', name: 'Latte', quantity: '~125 ml' },
          { id: 'b3-cheddar', name: 'Cheddar', quantity: '~56 g' },
          { id: 'b3-spalmabile', name: 'Formaggio spalmabile', quantity: '~28 g' },
          { id: 'b3-mozzarella', name: 'Mozzarella', quantity: '~31 g' },
          { id: 'b3-panna-fresca', name: 'Panna fresca', quantity: '~85 ml' },
          { id: 'b3-panna-cucina', name: 'Panna da cucina light', quantity: '~50 ml' },
          { id: 'b3-yogurt-0', name: 'Yogurt greco 0%', quantity: '~50 g' }
        ]
      }
    ],
    hpCorrections: [
      'Skyr: ~600 g',
      'Whey: ~83 g',
      'Petto di pollo: +~75 g',
      'Tofu duro: +~463 g',
      'Tofu affumicato: +~300 g',
      'Albumi: +~100 g',
      'Usa ~75 g di banana in meno.'
    ],
    mealPrepSteps: [
      'Porziona skyr e whey all\'inizio del blocco.',
      'Riso fritto: prepara tofu extra e limita il riso a 40 g e i condimenti dolci come da variante HP.',
      'Teriyaki e pasta verde: cuoci il tofu in batch e riponilo in contenitori ermetici.',
      'Giorno 12: il cavolfiore al formaggio resta originale (non aggiungere il pollo previsto dalla variante HP).',
      'Involtini sempre in air fryer per tagliare le calorie da frittura.'
    ],
    storageAdvice: 'Dividi le erbe fresche con un foglio di carta umida nel cassetto delle verdure.'
  },
  {
    id: 'block-13-16',
    daysRange: 'Giorni 13–16',
    startDay: 13,
    endDay: 16,
    categories: [
      {
        title: 'Frutta e Verdura',
        items: [
          { id: 'b4-banane', name: 'Banane', quantity: '~300 g' },
          { id: 'b4-patatedolci', name: 'Patate dolci', quantity: '~112 g' },
          { id: 'b4-pomodori', name: 'Pomodori', quantity: '~240 g' },
          { id: 'b4-cavolfiore', name: 'Cavolfiore', quantity: '~200 g' },
          { id: 'b4-carote', name: 'Carote', quantity: '~100 g' },
          { id: 'b4-cipolla', name: 'Cipolla', quantity: '~73 g' },
          { id: 'b4-lattuga', name: 'Lattuga', quantity: '~62 g' },
          { id: 'b4-spinacino', name: 'Spinacino', quantity: '~100 g' },
          { id: 'b4-valeriana', name: 'Valeriana', quantity: '~75 g' },
          { id: 'b4-limone', name: 'Limone', quantity: '~47 g' },
          { id: 'b4-cipollotto', name: 'Cipollotto', quantity: '~20 g' },
          { id: 'b4-germogli', name: 'Germogli mungo', quantity: '~25 g' }
        ]
      },
      {
        title: 'Proteine',
        items: [
          { id: 'b4-petto', name: 'Petto di pollo', quantity: '~575 g (+120 g HP)' },
          { id: 'b4-salmone', name: 'Salmone filetto', quantity: '~150 g' },
          { id: 'b4-manzo', name: 'Manzo macinato', quantity: '~125 g' },
          { id: 'b4-calamari', name: 'Calamari', quantity: '~83 g (+117 g HP)' },
          { id: 'b4-tofu-aff', name: 'Tofu affumicato', quantity: '~50 g (+150 g HP)' },
          { id: 'b4-uova', name: 'Uova intere', quantity: 'Circa 3 uova' }
        ]
      },
      {
        title: 'Frigo',
        items: [
          { id: 'b4-latte', name: 'Latte', quantity: '~188 ml' },
          { id: 'b4-latte-mandorle', name: 'Latte di mandorle', quantity: '~200 ml' },
          { id: 'b4-yogurt-greco', name: 'Yogurt greco', quantity: '~100 g' },
          { id: 'b4-yogurt-0', name: 'Yogurt greco 0%', quantity: '~50 g' },
          { id: 'b4-feta', name: 'Feta', quantity: '~38 g' },
          { id: 'b4-cheddar', name: 'Cheddar', quantity: '~56 g' },
          { id: 'b4-spalmabile', name: 'Formaggio spalmabile', quantity: '~28 g' },
          { id: 'b4-mozzarella', name: 'Mozzarella', quantity: '~31 g' },
          { id: 'b4-mozzarella-magra', name: 'Mozzarella magra', quantity: '~30 g' },
          { id: 'b4-panna-fresca', name: 'Panna fresca', quantity: '~85 ml' }
        ]
      }
    ],
    hpCorrections: [
      'Skyr: ~900 g',
      'Whey: ~63 g',
      'Petto di pollo: +~120 g',
      'Tofu affumicato: +~150 g',
      'Calamari: +~117 g',
      'Albumi: +~100 g',
      'Usa ~75 g di banana in meno.'
    ],
    mealPrepSteps: [
      'Prepara lo skyr in vasetti (giorno 14 usa solo 100 g con mezza porzione di palline).',
      'Giorno 13 Mug Cake originale: non aggiungere proteine whey a quel mug cake.',
      'Giorno 16 Pasta al curry originale: mantieni la ricetta originale.',
      'Calamari: porzione generosa a 200 g il giorno 14.',
      'Mantieni nuggets e salmone in versione originale: sono già ultra proteici.'
    ],
    storageAdvice: 'Il giorno con i nuggets puoi impanare il pollo in anticipo e tenerlo coperto su carta forno prima di infornare.'
  },
  {
    id: 'block-17-20',
    daysRange: 'Giorni 17–20',
    startDay: 17,
    endDay: 20,
    categories: [
      {
        title: 'Frutta e Verdura',
        items: [
          { id: 'b5-banane', name: 'Banane', quantity: '~262 g' },
          { id: 'b5-pomodori', name: 'Pomodori', quantity: '~200 g' },
          { id: 'b5-cavolfiore', name: 'Cavolfiore', quantity: '~187 g' },
          { id: 'b5-funghi', name: 'Funghi', quantity: '~167 g' },
          { id: 'b5-patatedolci', name: 'Patate dolci', quantity: '~112 g' },
          { id: 'b5-zucchine', name: 'Zucchine', quantity: '~115 g' },
          { id: 'b5-spinaci', name: 'Spinaci', quantity: '~100 g' },
          { id: 'b5-carote', name: 'Carote', quantity: '~75 g' },
          { id: 'b5-cipolla', name: 'Cipolla', quantity: '~80 g' },
          { id: 'b5-aglio', name: 'Aglio', quantity: '~16 g' },
          { id: 'b5-cipollotti', name: 'Cipollotti', quantity: '~32 g' },
          { id: 'b5-germogli', name: 'Germogli mungo', quantity: '~38 g' },
          { id: 'b5-limone', name: 'Limone', quantity: '~47 g' },
          { id: 'b5-lime', name: 'Lime', quantity: '~9 g' }
        ]
      },
      {
        title: 'Proteine',
        items: [
          { id: 'b5-tofu-duro', name: 'Tofu duro', quantity: '~167 g (+463 g HP)' },
          { id: 'b5-tofu-aff', name: 'Tofu affumicato', quantity: '~75 g (+225 g HP)' },
          { id: 'b5-cosce', name: 'Cosce di pollo disossate', quantity: '~133 g' },
          { id: 'b5-manzo', name: 'Manzo macinato', quantity: '~125 g' },
          { id: 'b5-calamari', name: 'Calamari', quantity: '~83 g (+117 g HP)' },
          { id: 'b5-petto', name: 'Petto di pollo', quantity: '~75 g (+75 g HP)' },
          { id: 'b5-uova', name: 'Uova intere', quantity: 'Circa 1 uovo' }
        ]
      },
      {
        title: 'Frigo',
        items: [
          { id: 'b5-yogurt', name: 'Yogurt', quantity: '~60 g' },
          { id: 'b5-yogurt-0', name: 'Yogurt greco 0%', quantity: '~50 g' },
          { id: 'b5-panna-acida', name: 'Panna acida', quantity: '~60 g' },
          { id: 'b5-panna-cucina', name: 'Panna da cucina light', quantity: '~50 ml' },
          { id: 'b5-feta', name: 'Feta', quantity: '~38 g' },
          { id: 'b5-mozzarella-magra', name: 'Mozzarella magra', quantity: '~30 g' },
          { id: 'b5-latte-mandorle', name: 'Latte di mandorle', quantity: '~62 ml' }
        ]
      }
    ],
    hpCorrections: [
      'Skyr: ~500 g',
      'Whey: ~96 g',
      'Petto di pollo: +~75 g',
      'Tofu duro: +~463 g',
      'Tofu affumicato: +~225 g',
      'Calamari: +~117 g',
      'Albumi: +~100 g',
      'Usa ~50 g di banana in meno.'
    ],
    mealPrepSteps: [
      'Giorno 19: ½ porzione palline al pan di zenzero + 100 g skyr naturale.',
      'Tikka Masala: prepara 150 g di pollo, 50 g di riso e sostituisci metà della panna con yogurt 0%.',
      'Prepara il tofu extra per teriyaki, riso fritto e pasta verde in un unico batch.',
      'Calamari: 200 g e dosaggio dell\'olio controllato con cucchiaio.',
      'Conserva salse e condimenti separati dai carboidrati fino al momento del consumo.'
    ],
    storageAdvice: 'Il brodo vegetale avanzato può essere congelato in vaschette per cubetti di ghiaccio per dosarlo all\'occorrenza.'
  }
];
