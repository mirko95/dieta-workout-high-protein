import healthyRecipes from './healthyRecipes.json';
import { Recipe } from '../types';

export const PREVIOUS_RECIPES: Recipe[] = [
  {
    id: 'muesli-croccante-low-carb',
    title: 'Muesli croccante low-carb al cioccolato',
    category: 'COLAZIONE',
    kcal: 252,
    timeMinutes: 70,
    difficulty: 'normale',
    defaultServings: 6,
    description: 'Il muesli low-carb fatto in casa con semi, noci, cacao e albumi cotti al forno. Ottimo con latte di mandorle o skyr!',
    originalProteinGrams: 8,
    tags: ['Low-Carb', 'Cioccolato', 'Forno', 'Meal Prep'],
    ingredients: [
      { name: 'Albumi', amount: '2 albumi', grams: 70 },
      { name: 'Scaglie di cocco', amount: '100 g', grams: 100 },
      { name: 'Semi di girasole', amount: '25 g', grams: 25 },
      { name: 'Noci', amount: '25 g', grams: 25 },
      { name: 'Semi di zucca', amount: '25 g', grams: 25 },
      { name: 'Cacao in polvere', amount: '15 g', grams: 15 },
      { name: 'Mandorle macinate', amount: '50 g', grams: 50 },
      { name: 'Dolcificante (Stevia o Eritritolo)', amount: 'a piacere' }
    ],
    instructions: [
      'Per la miscela di cereali, separare 2 uova e mettere gli albumi in una ciotola.',
      'Mescolare con gli ingredienti rimanenti e aggiungere la quantità desiderata di dolcificante.',
      'Cospargere il composto su una teglia ricoperta di carta da forno e cuocere in forno a 140°C per 1 ora.',
      'Far raffreddare il muesli, rompere a pezzi e servire con latte fresco o skyr.',
      'Buon appetito!'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '70% della porzione YAZIO + 200 g di skyr naturale.',
      kcal: 302,
      proteinGrams: 27,
      adjustments: [
        'Usa il 70% della porzione normale di muesli cotto',
        'Aggiungi 200 g di Skyr naturale o yogurt greco 0%',
        'Mescola con il muesli croccante prima di gustare'
      ],
      tips: 'Prepara il muesli in batch per tutta la settimana e aggiungi lo skyr fresco ogni mattina.'
    }
  },
  {
    id: 'frullato-proteico-cioccolato',
    title: 'Frullato proteico al cioccolato',
    category: 'COLAZIONE',
    kcal: 284,
    timeMinutes: 5,
    difficulty: 'facile',
    defaultServings: 2,
    description: 'Frullato super cioccolatoso con banana, avena, burro di arachidi e proteine in polvere per iniziare la giornata o pre-workout.',
    originalProteinGrams: 16,
    tags: ['Frullato', 'Veloce', 'Pre-Workout', 'Cioccolato'],
    ingredients: [
      { name: 'Banana matura', amount: '1 banana', grams: 150 },
      { name: 'Acqua', amount: '300 ml' },
      { name: 'Semi di lino macinati', amount: '2 cucchiai', grams: 20 },
      { name: 'Fiocchi d\'avena', amount: '3 cucchiai', grams: 24 },
      { name: 'Proteine in polvere (Whey)', amount: '2 cucchiai', grams: 24 },
      { name: 'Cacao in polvere', amount: '10 g', grams: 10 },
      { name: 'Burro di arachidi', amount: '1 cucchiaio', grams: 20 }
    ],
    instructions: [
      'Sbucciare la banana.',
      'Metterla in un frullatore con acqua, semi di lino, fiocchi d\'avena, proteine, cacao e burro di arachidi.',
      'Frullare ad alta velocità per 30-45 secondi fino a quando il composto è vellutato e cremoso.',
      'Versare nei bicchieri e gustare subito!'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '+18 g Whey; burro di arachidi -5 g; banana -25 g.',
      kcal: 305,
      proteinGrams: 30,
      adjustments: [
        'Aumenta le proteine Whey di +18 g (totale ~42 g Whey)',
        'Riduci il burro di arachidi a 15 g (-5 g)',
        'Riduci la banana a 125 g (-25 g)'
      ],
      tips: 'Puoi preparare i dosatori di polveri la sera prima per velocizzare la mattina.'
    }
  },
  {
    id: 'smoothie-banana-cioccolato',
    title: 'Smoothie alla banana con cioccolato',
    category: 'COLAZIONE',
    kcal: 305,
    timeMinutes: 3,
    difficulty: 'facile',
    defaultServings: 1,
    description: 'Smoothie vegano freschissimo con banana, cacao, cubetti di ghiaccio e latte di mandorle non dolcificato.',
    originalProteinGrams: 5,
    tags: ['Vegano', 'Express', 'Fresco', 'Cioccolato'],
    ingredients: [
      { name: 'Banana', amount: '1 frutto', grams: 150 },
      { name: 'Cacao in polvere', amount: '2 cucchiai', grams: 30 },
      { name: 'Cubetti di ghiaccio', amount: 'a piacere' },
      { name: 'Latte di mandorle non addolcito', amount: '200 ml' }
    ],
    instructions: [
      'Sbucciare la banana e tagliarla grossolanamente.',
      'Mettere la banana, il cacao, il latte di mandorle e il ghiaccio nel robot o frullatore.',
      'Frullare fino a ottenere una consistenza densa e cremosa.',
      'Buon appetito!'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: 'Banana 100 g, Cacao 20 g, +25 g proteine Whey.',
      kcal: 338,
      proteinGrams: 26,
      adjustments: [
        'Usa 100 g di banana anziché 150 g',
        'Riduci il cacao a 20 g',
        'Aggiungi 25 g di proteine Whey (gusto neutro o cioccolato/vaniglia)'
      ],
      tips: 'Se usi una banana precedentemente congelata a rondelle, otterrai una consistenza tipo gelato cremoso!'
    }
  },
  {
    id: 'sandwich-pomodoro-insalata-uova',
    title: 'Sandwich di pomodoro con insalata cremosa alle uova',
    category: 'COLAZIONE',
    kcal: 240,
    timeMinutes: 15,
    difficulty: 'normale',
    defaultServings: 2,
    description: 'Panino croccante con uovo sodo sminuzzato, capperi, yogurt greco magro 0%, pomodori freschi e basilico.',
    originalProteinGrams: 14,
    tags: ['Salato', 'Uova', 'Toast', 'Meal Prep'],
    ingredients: [
      { name: 'Uovo', amount: '1 uovo', grams: 70 },
      { name: 'Capperi', amount: '1 cucchiaio', grams: 8.6 },
      { name: 'Pomodori freschi', amount: '2 pomodori', grams: 240 },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Lattuga', amount: 'foglie', grams: 25 },
      { name: 'Basilico fresco', amount: 'a piacere' },
      { name: 'Yogurt greco magro 0%', amount: '100 g', grams: 100 },
      { name: 'Pane integrale a fette', amount: '4 fette', grams: 100 }
    ],
    instructions: [
      'Per l\'insalata cremosa, far bollire l\'uovo in un pentolino per 8 minuti.',
      'Nel frattempo tritare finemente i capperi e tagliare i pomodori a fette.',
      'Raffreddare l\'uovo sotto acqua corrente fredda, sbucciarlo e tagliarlo a pezzettini.',
      'In una ciotola sbattere l\'uovo con capperi, yogurt greco, sale e pepe formando una crema.',
      'Tostare le fette di pane fino a doratura.',
      'Spalmare la crema all\'uovo sul pane, adagiare lattuga, pomodori e basilico, chiudere con la seconda fetta e tagliare a metà.',
      'Buon appetito!'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '+100 g albumi pastorizzati nell\'insalata; pane -15 g.',
      kcal: 255,
      proteinGrams: 24,
      adjustments: [
        'Aggiungi 100 g di albumi cotti/strapazzati o sodi all\'insalata cremosa',
        'Riduci il pane integrale di 15 g'
      ],
      tips: 'Puoi cuocere l\'albume al microonde per 1 minuto in una tazza prima di sminuzzarlo nell\'insalata di uova.'
    }
  },
  {
    id: 'pirofila-carne-patate-dolci-feta',
    title: 'Pirofila di carne macinata e patate dolci con feta',
    category: 'PRANZO / CENA',
    kcal: 578,
    timeMinutes: 60,
    difficulty: 'normale',
    defaultServings: 4,
    description: 'Gustoso sformato a strati con patate dolci morbide, macinato di manzo saporito al pomodoro e origano, feta magra e mozzarella gratinata.',
    originalProteinGrams: 43,
    tags: ['Carne', 'Sformato', 'Patate Dolci', 'Meal Prep', 'Originale'],
    ingredients: [
      { name: 'Patate dolci', amount: '3 patate', grams: 450 },
      { name: 'Cipolla', amount: '1 cipolla', grams: 80 },
      { name: 'Aglio', amount: '2 spicchi', grams: 6 },
      { name: 'Manzo macinato magro', amount: '500 g', grams: 500 },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Concentrato di pomodoro', amount: '2 cucchiai', grams: 32 },
      { name: 'Origano', amount: 'a piacere' },
      { name: 'Feta magra', amount: '150 g', grams: 150 },
      { name: 'Latte 1,5%', amount: '100 ml' },
      { name: 'Uovo', amount: '1 uovo', grams: 70 },
      { name: 'Mozzarella grattugiata magra', amount: '120 g', grams: 120 }
    ],
    instructions: [
      'Sbucciare le patate dolci e bollirle in acqua bollente per circa 20 minuti.',
      'Nel frattempo sbucciare e tritare cipolla e aglio e soffriggerli in padella.',
      'Aggiungere il macinato di manzo, rosolare e condire con sale, pepe, concentrato di pomodoro e origano.',
      'Tagliare le patate dolci cotte a fette e coprire il fondo della pirofila con metà delle patate.',
      'Versare metà della carne macinata sulle patate e sbriciolare sopra metà della feta.',
      'Ripetere il secondo strato con le patate, la carne e la restante feta.',
      'Sbattere l\'uovo con il latte e versare uniformemente su tutta la pirofila.',
      'Cospargere con mozzarella grattugiata magra e infornare a 200°C per circa 30 minuti.',
      'Buon appetito!'
    ],
    hpVariant: {
      title: 'Versione Originale Consigliata',
      description: 'Già ottimale: apporta ~578 kcal e ~43 g di proteine stimate a porzione.',
      kcal: 578,
      proteinGrams: 43,
      adjustments: [
        'Utilizza la ricetta originale: è già ricca di proteine e perfettamente bilanciata'
      ]
    }
  },
  {
    id: 'nuggets-pollo-insalata',
    title: 'Nuggets di pollo croccanti su insalata',
    category: 'PRANZO / CENA',
    kcal: 508,
    timeMinutes: 25,
    difficulty: 'facile',
    defaultServings: 2,
    description: 'Bocconcini di petto di pollo impanati nei corn flakes cotti al forno e serviti su insalata mista con dressing leggero a senape e miele.',
    originalProteinGrams: 65,
    tags: ['Pollo', 'Croccante', 'Top Proteine', 'Air Fryer / Forno'],
    ingredients: [
      { name: 'Corn flakes non addolciti', amount: '80 g', grams: 80 },
      { name: 'Uovo', amount: '1 uovo', grams: 70 },
      { name: 'Filetto di petto di pollo', amount: '500 g', grams: 500 },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Lattuga', amount: '50 g', grams: 50 },
      { name: 'Pomodoro', amount: '1 pomodoro', grams: 120 },
      { name: 'Senape', amount: '1 cucchiaino', grams: 10 },
      { name: 'Miele', amount: '1 cucchiaino', grams: 10 },
      { name: 'Aceto di vino bianco', amount: '1 cucchiaino', grams: 8 }
    ],
    instructions: [
      'Mettere i corn flakes in un sacchetto e schiacciarli a mano grossolanamente.',
      'Sbattere l\'uovo in una ciotolina con una forchetta, sale e pepe.',
      'Tagliare il petto di pollo a bocconcini tipo nuggets, insaporendo con sale e pepe.',
      'Immergere i bocconcini prima nell\'uovo e poi passarli nei corn flakes premendo bene.',
      'Disporre sulla teglia (o cestello air fryer) e cuocere a 200°C per circa 15 minuti.',
      'Lavare lattuga e pomodori, tagliarli e condire con l\'emulsione di senape, miele e aceto.',
      'Guarnire l\'insalata con i nuggets caldi e croccanti e servire!'
    ],
    hpVariant: {
      title: 'Versione Originale (Top Proteine)',
      description: 'Questo pasto fornisce già ben ~65 g di proteine a porzione!',
      kcal: 508,
      proteinGrams: 65,
      adjustments: [
        'Nessuna modifica necessaria: è uno dei pasti più proteici del piano'
      ]
    }
  },
  {
    id: 'cavolfiore-salsa-formaggio',
    title: 'Cavolfiore in salsa al formaggio',
    category: 'PRANZO / CENA',
    kcal: 534,
    timeMinutes: 15,
    difficulty: 'facile',
    defaultServings: 4,
    description: 'Cime di cavolfiore cotte al vapore/lessate avvolte in una cremosa salsa al cheddar e curcuma.',
    originalProteinGrams: 18,
    tags: ['Verdure', 'Cheddar', 'Comfort Food', 'Veloce'],
    ingredients: [
      { name: 'Cavolfiore', amount: '1 cespo', grams: 800 },
      { name: 'Panna fresca', amount: '240 g', grams: 240 },
      { name: 'Formaggio spalmabile', amount: '110 g', grams: 110 },
      { name: 'Cheddar grattugiato', amount: '225 g', grams: 225 },
      { name: 'Senape', amount: '1 cucchiaino', grams: 10 },
      { name: 'Polvere d\'aglio', amount: 'a piacere' },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Curcuma macinata', amount: '1 cucchiaino', grams: 2 }
    ],
    instructions: [
      'Separare il cavolfiore in piccole cime e lessarlo in acqua bollente per 5 minuti.',
      'In una padella scaldare la panna e unire il formaggio spalmabile mescolando con una frusta.',
      'Aggiungere quasi tutto il cheddar grattugiato (tenendo da parte una manciata) fino a scioglimento.',
      'Scolare bene il cavolfiore.',
      'Insaporire la salsa con senape, curcuma, polvere d\'aglio, sale e pepe.',
      'Unire il cavolfiore alla salsa, mescolare bene e cospargere con il formaggio rimanente.',
      'Buon appetito!'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '+120 g petto di pollo a porzione; panna -40 g; cheddar -20 g.',
      kcal: 466,
      proteinGrams: 43,
      adjustments: [
        'Aggiungi 120 g di petto di pollo a cubetti rosolato in padella',
        'Riduci la panna fresca di 40 g totali',
        'Riduci il formaggio cheddar di 20 g totali'
      ],
      tips: 'Nei giorni 12 e 24 del piano mensile si consuma nella versione originale!'
    }
  },
  {
    id: 'pasta-cremosa-curry',
    title: 'Pasta cremosa al curry',
    category: 'PRANZO / CENA',
    kcal: 600,
    timeMinutes: 25,
    difficulty: 'facile',
    defaultServings: 4,
    description: 'One-pot pasta integrale con pollo tenero, carote a rondelle, curry aromatico, latte, panna e filante mozzarella.',
    originalProteinGrams: 35,
    tags: ['Pasta', 'One-Pot', 'Pollo', 'Curry'],
    ingredients: [
      { name: 'Filetti di petto di pollo', amount: '2 petti', grams: 300 },
      { name: 'Spicchio d\'aglio', amount: '1 spicchio', grams: 3 },
      { name: 'Carote', amount: '2 carote', grams: 300 },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Acqua', amount: '600 ml' },
      { name: 'Pasta integrale', amount: '300 g', grams: 300 },
      { name: 'Latte 1,5%', amount: '500 ml' },
      { name: 'Panna fresca', amount: '100 ml' },
      { name: 'Mozzarella', amount: '1 palla', grams: 125 },
      { name: 'Curry in polvere', amount: '3 cucchiaini', grams: 6 }
    ],
    instructions: [
      'Tagliare il pollo a bocconcini e cuocerlo in padella antiaderente per 5 minuti.',
      'Sbucciare e tritare l\'aglio e tagliare le carote a fette sottili.',
      'Condire il pollo con curry, sale e pepe, unire aglio e carote e cuocere per 3 minuti.',
      'Sfumare con l\'acqua e versare la pasta cruda. Lasciar sobbollire per circa 8 minuti.',
      'Aggiungere latte e panna e continuare la cottura per altri 2 minuti.',
      'Unire la mozzarella a cubetti lasciandola fondere mescolando bene.',
      'Servire caldo e cremoso!'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '150 g pollo, 55 g pasta, ~10 g panna, ~20 g mozzarella per porzione.',
      kcal: 540,
      proteinGrams: 50,
      adjustments: [
        'Aumenta il pollo a 150 g per porzione',
        'Riduci la pasta a 55 g per porzione',
        'Riduci panna a ~10 g e mozzarella a ~20 g a porzione'
      ],
      tips: 'Nei giorni 3 e 16 del calendario si usa la versione originale.'
    }
  },
  {
    id: 'tofu-teriyaki',
    title: 'Tofu teriyaki',
    category: 'PRANZO / CENA',
    kcal: 582,
    timeMinutes: 30,
    difficulty: 'facile',
    defaultServings: 3,
    description: 'Cubetti di tofu croccanti e fagiolini glassati in salsa teriyaki allo zenzero e sciroppo d\'acero, serviti con quinoa.',
    originalProteinGrams: 24,
    tags: ['Tofu', 'Vegano', 'Quinoa', 'Teriyaki'],
    ingredients: [
      { name: 'Fagiolini surgelati', amount: '225 g', grams: 225 },
      { name: 'Quinoa', amount: '300 g', grams: 300 },
      { name: 'Tofu duro', amount: '200 g', grams: 200 },
      { name: 'Olio di sesamo', amount: '2 cucchiaini', grams: 14 },
      { name: 'Salsa di soia', amount: '3 cucchiai', grams: 45 },
      { name: 'Zenzero fresco grattugiato', amount: '1 cucchiaino', grams: 2 },
      { name: 'Sciroppo d\'acero', amount: '40 ml' },
      { name: 'Amido di mais', amount: '1 cucchiaino', grams: 5 },
      { name: 'Aceto di riso', amount: '1 cucchiaio', grams: 16 },
      { name: 'Acqua', amount: '60 ml' },
      { name: 'Aglio', amount: '2 spicchi', grams: 6 },
      { name: 'Cipollotto', amount: '1 cipollotto', grams: 20 }
    ],
    instructions: [
      'Scongelare i fagiolini, cuocere la quinoa e tamponare bene il tofu con carta assorbente.',
      'Tagliare il tofu a dadini e dorarlo in padella con metà dell\'olio di sesamo.',
      'Preparare la salsa unendo salsa di soia, restante olio di sesamo, zenzero, sciroppo d\'acero, amido di mais, aceto di riso e acqua.',
      'Schiacciare l\'aglio e aggiungerlo alla salsa mescolando con cura.',
      'Togliere il tofu, saltare i fagiolini nella stessa padella per 10 minuti.',
      'Reintrodurre il tofu con la salsa e cuocere a fuoco lento per 10 minuti finché si addensa.',
      'Servire sulla quinoa guarnendo con anelli di cipollotto fresco.'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '~200 g tofu, ~65 g quinoa, ~5 ml sciroppo d\'acero, ~3 ml olio sesamo.',
      kcal: 575,
      proteinGrams: 36,
      adjustments: [
        'Aumenta il tofu a ~200 g per porzione',
        'Riduci la quinoa a ~65 g (peso secco) per porzione',
        'Riduci lo sciroppo d\'acero a ~5 ml e l\'olio a ~3 ml'
      ]
    }
  },
  {
    id: 'riso-fritto-tofu',
    title: 'Riso fritto con tofu',
    category: 'PRANZO / CENA',
    kcal: 521,
    timeMinutes: 30,
    difficulty: 'facile',
    defaultServings: 2,
    description: 'Riso integrale saltato con tofu croccante al forno marinato in soia e burro di arachidi, carote, piselli e cipollotti.',
    originalProteinGrams: 20,
    tags: ['Tofu', 'Riso Integrale', 'Vegano', 'Wok'],
    ingredients: [
      { name: 'Tofu duro', amount: '200 g', grams: 200 },
      { name: 'Riso integrale', amount: '100 g', grams: 100 },
      { name: 'Aglio', amount: '3 spicchi', grams: 9 },
      { name: 'Salsa di soia', amount: '3 cucchiai', grams: 45 },
      { name: 'Burro di arachidi', amount: '1 cucchiaio', grams: 20 },
      { name: 'Sciroppo d\'acero', amount: '2 cucchiaini', grams: 20 },
      { name: 'Olio di sesamo', amount: '2 cucchiaini', grams: 14 },
      { name: 'Carota', amount: '½ carota', grams: 75 },
      { name: 'Cipollotti', amount: '50 g', grams: 50 },
      { name: 'Piselli in scatola', amount: '80 g', grams: 80 }
    ],
    instructions: [
      'Preriscaldare il forno a 200°C.',
      'Asciugare il tofu con un canovaccio, tagliarlo a cubetti e infornarlo per 30 minuti su carta forno.',
      'Lessare il riso integrale secondo le istruzioni.',
      'Mescolare soia, burro di arachidi, sciroppo d\'acero, metà olio di sesamo e 1 spicchio d\'aglio schiacciato.',
      'Unire il tofu alla marinata e lasciar riposare 5 minuti, poi saltarlo in padella per 3 minuti e metterlo da parte.',
      'Scaldare l\'olio rimasto con l\'aglio restante, unire carote a cubetti, piselli e cipollotti soffriggendo per 5 minuti.',
      'Aggiungere il riso e il tofu marinato, spadellare a fuoco vivo e servire!'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '~180 g tofu, ~40 g riso, ~5 g burro arachidi, ~5 ml acero, ~4 ml olio.',
      kcal: 513,
      proteinGrams: 31,
      adjustments: [
        'Aumenta il tofu a 180 g per porzione',
        'Riduci il riso integrale a 40 g per porzione',
        'Riduci burro di arachidi a 5 g e olio di sesamo a 4 ml'
      ]
    }
  },
  {
    id: 'pollo-tikka-masala',
    title: 'Pollo tikka masala',
    category: 'PRANZO / CENA',
    kcal: 572,
    timeMinutes: 90,
    difficulty: 'facile',
    defaultServings: 2,
    description: 'Bocconcini di pollo tenerissimi marinati allo yogurt e spezie orientali con cremosa salsa di pomodoro e panna acida, serviti con riso basmati.',
    originalProteinGrams: 38,
    tags: ['Pollo', 'Spezie', 'Riso Basmati', 'Etnico'],
    ingredients: [
      { name: 'Filetto di petto di pollo', amount: '150 g', grams: 150 },
      { name: 'Succo di lime', amount: '¼ lime', grams: 17 },
      { name: 'Yogurt 1,5%', amount: '120 g', grams: 120 },
      { name: 'Cumino macinato', amount: '2 cucchiaini', grams: 4 },
      { name: 'Cannella', amount: '½ cucchiaino', grams: 1 },
      { name: 'Peperoncino di cayenna', amount: '1 cucchiaino', grams: 2 },
      { name: 'Zenzero macinato', amount: '1 cucchiaino', grams: 2 },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Riso basmati', amount: '120 g', grams: 120 },
      { name: 'Aglio', amount: '1 spicchio', grams: 3 },
      { name: 'Jalapeno', amount: '½ pezzo', grams: 2.5 },
      { name: 'Olio d\'oliva', amount: '1 cucchiaino', grams: 7 },
      { name: 'Paprica in polvere', amount: '1 cucchiaino', grams: 2 },
      { name: 'Passata di pomodoro', amount: '120 g', grams: 120 },
      { name: 'Panna acida', amount: '120 g', grams: 120 },
      { name: 'Coriandolo fresco', amount: 'a piacere' }
    ],
    instructions: [
      'Tagliare il pollo a bocconcini.',
      'Unire succo di lime, yogurt, cannella, cayenna, zenzero, sale, pepe e metà cumino.',
      'Marinare il pollo nel mix in frigo per almeno 1 ora.',
      'Lessare il riso basmati e rosolare il pollo in padella per 5 minuti.',
      'In una seconda padella scaldare l\'olio d\'oliva, soffriggere aglio e jalapeño tritati per 1 minuto con paprica e cumino.',
      'Sfumare con passata di pomodoro e panna acida, aggiungere il pollo e cuocere a fuoco lento per 10 minuti.',
      'Servire con riso basmati e foglie di coriandolo fresco.'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '150 g pollo, 50 g riso basmati, 30 g panna acida + 30 g yogurt greco 0%.',
      kcal: 579,
      proteinGrams: 45,
      adjustments: [
        'Usa 150 g di pollo netto a porzione',
        'Riduci il riso basmati a 50 g a porzione',
        'Sostituisci metà della panna acida con yogurt greco 0% (30 g panna + 30 g yogurt)'
      ]
    }
  },
  {
    id: 'pasta-verde',
    title: 'Pasta verde',
    category: 'PRANZO / CENA',
    kcal: 561,
    timeMinutes: 40,
    difficulty: 'facile',
    defaultServings: 2,
    description: 'Spaghetti integrali avvolti in una deliziosa crema verde di spinaci, aglio arrosto, latte di mandorle e scaglie di lievito, con zucchine e piselli.',
    originalProteinGrams: 22,
    tags: ['Pasta', 'Spinaci', 'Verdure', 'Lievito Alimentare'],
    ingredients: [
      { name: 'Zucchine', amount: '1 zucchina', grams: 230 },
      { name: 'Olio d\'oliva', amount: '1 cucchiaio', grams: 13.5 },
      { name: 'Sale', amount: 'a piacere' },
      { name: 'Aglio', amount: '2 spicchi', grams: 6 },
      { name: 'Spaghetti integrali', amount: '200 g', grams: 200 },
      { name: 'Latte di mandorle non addolcito', amount: '125 ml' },
      { name: 'Spinaci freschi', amount: '200 g', grams: 200 },
      { name: 'Scaglie di lievito', amount: '1 cucchiaio', grams: 4 },
      { name: 'Limone', amount: '½ limone', grams: 40 },
      { name: 'Piselli surgelati', amount: '150 g', grams: 150 }
    ],
    instructions: [
      'Infornare a 180°C le zucchine a rondelle con metà olio e sale per 10 minuti, poi aggiungere gli spicchi d\'aglio e cuocere altri 10 minuti.',
      'Lessare gli spaghetti integrali al dente.',
      'In una pentola far appassire gli spinaci nel latte di mandorle con un pizzico di sale.',
      'Aggiungere l\'aglio arrostito agli spinaci e frullare con un minipimer a immersione unendo le scaglie di lievito.',
      'Aggiungere succo di limone, piselli e zucchine alla salsa e sobbollire per 5 minuti.',
      'Scolare la pasta e mantecarla nella salsa verde cremosa!'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '~65 g pasta + 150 g tofu a cubetti; olio ridotto a ~3 ml.',
      kcal: 586,
      proteinGrams: 38,
      adjustments: [
        'Riduci la pasta a 65 g per porzione',
        'Aggiungi 150 g di tofu dorato in padella',
        'Riduci l\'olio d\'oliva a ~3 ml'
      ]
    }
  },
  {
    id: 'padellata-pollo-funghi',
    title: 'Padellata di pollo e funghi',
    category: 'PRANZO / CENA',
    kcal: 512,
    timeMinutes: 20,
    difficulty: 'facile',
    defaultServings: 3,
    description: 'Straccetti di pollo rosolati con funghi champignon crema in salsa saporita con brodo vegetale e panna light, accompagnati da riso.',
    originalProteinGrams: 35,
    tags: ['Pollo', 'Funghi', 'Cremoso', 'Originale'],
    ingredients: [
      { name: 'Riso a chicco lungo', amount: '150 g', grams: 150 },
      { name: 'Olio d\'oliva', amount: '1 cucchiaio', grams: 13.5 },
      { name: 'Cosce di pollo disossate a striscioline', amount: '400 g', grams: 400 },
      { name: 'Cipolla', amount: '1 cipolla', grams: 80 },
      { name: 'Aglio', amount: '1 spicchio', grams: 3 },
      { name: 'Funghi champignon crema', amount: '500 g', grams: 500 },
      { name: 'Farina 00', amount: '1 cucchiaio', grams: 10 },
      { name: 'Paprica in polvere', amount: '1 cucchiaino', grams: 2 },
      { name: 'Brodo vegetale', amount: '100 ml' },
      { name: 'Panna da cucina light', amount: '150 ml' },
      { name: 'Sale e pepe', amount: 'a piacere' }
    ],
    instructions: [
      'Lessare il riso a chicco lungo.',
      'Scaldare metà dell\'olio in padella e rosolare il pollo per 5 minuti fino a doratura, poi toglierlo.',
      'Nella stessa padella con il restante olio saltare i funghi a fette per 3 minuti con cipolla e aglio.',
      'Spolverare farina e paprica sui funghi mescolando per 1 minuto.',
      'Sfumare con il brodo vegetale e cuocere 1 minuto.',
      'Reintrodurre il pollo, unire la panna light e cuocere 5 minuti fino a consistenza vellutata.',
      'Servire caldo con il riso!'
    ],
    hpVariant: {
      title: 'Versione Originale Consigliata',
      description: 'Fornisce ~512 kcal e ~35 g di proteine a porzione.',
      kcal: 512,
      proteinGrams: 35,
      adjustments: [
        'Mantieni la ricetta originale per un perfetto bilanciamento'
      ]
    }
  },
  {
    id: 'cavolfiore-curry-cocco-cuscus',
    title: 'Cavolfiore al curry e cocco con cuscus',
    category: 'PRANZO / CENA',
    kcal: 552,
    timeMinutes: 15,
    difficulty: 'normale',
    defaultServings: 3,
    description: 'Piatto profumato con cime di cavolfiore, ceci e pomodori stufati in salsa di latte di cocco al curry, servito con cuscus al vapore.',
    originalProteinGrams: 16,
    tags: ['Ceci', 'Cuscus', 'Cocco', 'Curry'],
    ingredients: [
      { name: 'Cipolla', amount: '½ cipolla', grams: 40 },
      { name: 'Aglio', amount: '2 spicchi', grams: 6 },
      { name: 'Cavolfiore', amount: '560 g', grams: 560 },
      { name: 'Pomodori', amount: '2 pomodori', grams: 240 },
      { name: 'Ceci in scatola', amount: '400 g', grams: 400 },
      { name: 'Olio di cocco', amount: '1 cucchiaio', grams: 14 },
      { name: 'Curry in polvere', amount: 'a piacere' },
      { name: 'Latte di cocco parz. scremato', amount: '400 ml' },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Brodo vegetale', amount: '235 ml' },
      { name: 'Cuscus', amount: '115 g', grams: 115 },
      { name: 'Coriandolo', amount: 'a piacere' }
    ],
    instructions: [
      'Tritare cipolla e aglio, tagliare il cavolfiore a cime e i pomodori a dadini; scolare i ceci.',
      'Soffriggere la cipolla in olio di cocco per 2-3 minuti con aglio e curry.',
      'Aggiungere cavolfiore e ceci nella padella e mescolare.',
      'Unire pomodori, latte di cocco, sale e pepe, lasciando sobbollire per 10 minuti fino a quando la salsa si addensa.',
      'Portare a ebollizione il brodo vegetale in un pentolino, versare il cuscus, spegnere e coprire lasciandolo gonfiare 7 minuti.',
      'Servire il curry di cavolfiore e ceci sul cuscus con coriandolo fresco.'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '+100 g tofu; latte cocco ~80 ml, couscous ~30 g, olio cocco ~2 ml.',
      kcal: 538,
      proteinGrams: 35,
      adjustments: [
        'Aggiungi 100 g di tofu a cubetti',
        'Riduci il latte di cocco a ~80 ml per porzione',
        'Riduci il couscous a ~30 g a porzione',
        'Limita l\'olio di cocco a 2 ml'
      ]
    }
  },
  {
    id: 'burger-low-carb-spinaci-uova',
    title: 'Burger low-carb con spinaci e uova',
    category: 'PRANZO / CENA',
    kcal: 522,
    timeMinutes: 15,
    difficulty: 'facile',
    defaultServings: 2,
    description: 'Burger di puro manzo con scalogno cotti in padella con spinaci freschi all\'aglio, pomodori a cubetti e uova all\'occhio di bue.',
    originalProteinGrams: 42,
    tags: ['Carne', 'Uova', 'Low-Carb', 'Keto Friendly', 'Originale'],
    ingredients: [
      { name: 'Scalogno', amount: '1 scalogno', grams: 20 },
      { name: 'Manzo macinato magro', amount: '300 g', grams: 300 },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Olio d\'oliva', amount: '1 cucchiaio', grams: 13.5 },
      { name: 'Spinaci freschi', amount: '250 g', grams: 250 },
      { name: 'Aglio', amount: '1 spicchio', grams: 3 },
      { name: 'Pomodori', amount: '2 pomodori', grams: 240 },
      { name: 'Uova', amount: '2 uova', grams: 140 }
    ],
    instructions: [
      'Tritare finemente lo scalogno e amalgamarlo al macinato di manzo con sale e pepe formando gli hamburger.',
      'Scaldare l\'olio in padella e cuocere i burger su entrambi i lati.',
      'Mettere gli spinaci al centro della padella lasciandoli appassire con l\'aglio tritato.',
      'Aggiungere i pomodori a cubetti e far cuocere finché gli spinaci sono morbidi.',
      'Togliere la carne, rompere le uova nella padella e cuocerle al tegamino.',
      'Servire i burger con gli spinaci, il pomodoro e l\'uovo fritto sopra.'
    ],
    hpVariant: {
      title: 'Versione Originale Consigliata',
      description: 'Già ottimamente calibrato a ~522 kcal e ~42 g di proteine per porzione.',
      kcal: 522,
      proteinGrams: 42,
      adjustments: [
        'Usa la ricetta originale senza modifiche'
      ]
    }
  },
  {
    id: 'salmone-friggitrice-aria',
    title: 'Salmone in friggitrice ad aria',
    category: 'PRANZO / CENA',
    kcal: 538,
    timeMinutes: 20,
    difficulty: 'facile',
    defaultServings: 1,
    description: 'Filetto di salmone laccato con marinata a base di miele, senape, soia e paprica cotto in air fryer con riso selvaggio e cipollotto.',
    originalProteinGrams: 38,
    tags: ['Salmone', 'Omega 3', 'Air Fryer', 'Originale'],
    ingredients: [
      { name: 'Riso selvaggio', amount: '50 g', grams: 50 },
      { name: 'Miele', amount: '1 cucchiaio', grams: 20 },
      { name: 'Senape', amount: '1 cucchiaino', grams: 10 },
      { name: 'Salsa di soia', amount: '1 cucchiaino', grams: 8 },
      { name: 'Paprica in polvere', amount: '½ cucchiaino', grams: 1 },
      { name: 'Aglio in polvere', amount: '½ cucchiaino', grams: 1 },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Filetto di salmone fresco', amount: '1 filetto', grams: 150 },
      { name: 'Cipollotto', amount: '1 cipollotto', grams: 20 }
    ],
    instructions: [
      'Preriscaldare la friggitrice ad aria a 200°C.',
      'Lessare il riso selvaggio secondo le indicazioni.',
      'Per la marinata mescolare miele, senape, salsa di soia, paprica, aglio in polvere, sale e pepe.',
      'Spennellare il salmone con uno strato di marinata.',
      'Cuocere il salmone nella friggitrice per 10 minuti con la pelle rivolta verso il basso.',
      'Tritare il cipollotto a rondelle; scaldare in un pentolino la marinata rimasta con un goccio d\'acqua per 2 minuti.',
      'Servire il salmone caldo con il riso selvaggio e glassare con la salsa e i cipollotti.'
    ],
    hpVariant: {
      title: 'Versione Originale Consigliata',
      description: 'Fornisce ~538 kcal e ~38 g di proteine ad alto valore biologico.',
      kcal: 538,
      proteinGrams: 38,
      adjustments: [
        'Usa la ricetta originale: ricca di grassi nobili Omega-3 e proteine'
      ]
    }
  },
  {
    id: 'frittelle-spinaci-valeriana',
    title: 'Frittelle di spinaci su valeriana',
    category: 'PRANZO / CENA',
    kcal: 509,
    timeMinutes: 30,
    difficulty: 'normale',
    defaultServings: 2,
    description: 'Morbide polpette vegetali di spinaci, yogurt greco, uova, avena e mandorle su letto di valeriana con dressing fresco al limone.',
    originalProteinGrams: 20,
    tags: ['Spinaci', 'Polpette', 'Yogurt Greco', 'Insalata'],
    ingredients: [
      { name: 'Cipolla', amount: '1 cipolla', grams: 80 },
      { name: 'Aglio', amount: '1 spicchio', grams: 3 },
      { name: 'Limone biologico', amount: '½ limone', grams: 40 },
      { name: 'Olio d\'oliva', amount: '2 cucchiai', grams: 27 },
      { name: 'Spinacino fresco', amount: '200 g', grams: 200 },
      { name: 'Yogurt greco', amount: '200 g', grams: 200 },
      { name: 'Uovo', amount: '1 uovo', grams: 70 },
      { name: 'Fiocchi d\'avena', amount: '50 g', grams: 50 },
      { name: 'Mandorle tritate', amount: '2 cucchiai', grams: 16 },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Latte 1,5%', amount: '5 cucchiai', grams: 75 },
      { name: 'Valeriana', amount: '150 g', grams: 150 }
    ],
    instructions: [
      'Tritare cipolla e aglio e soffriggerli con metà olio per 2 minuti.',
      'Aggiungere gli spinaci per 3 minuti finché appassiscono, scolarli e strizzarli con un cucchiaio, poi sminuzzarli.',
      'In una ciotola unire spinaci, ⅔ dello yogurt greco, uovo, avena, mandorle tritate, sale, pepe e scorza di limone.',
      'Formare polpette con le mani e dorarle in padella con l\'olio rimasto per circa 5 minuti per lato.',
      'Per il dressing unire lo yogurt rimasto con il latte, sale, pepe e succo di limone.',
      'Servire le frittelle calde sul letto di valeriana condita con il dressing.'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '+100 g albumi; olio ~5 ml; mandorle ~4 g.',
      kcal: 463,
      proteinGrams: 35,
      adjustments: [
        'Aggiungi 100 g di albumi pastorizzati all\'impasto',
        'Riduci l\'olio d\'oliva a ~5 ml',
        'Riduci le mandorle tritate a ~4 g'
      ],
      tips: 'Nel giorno 15 del mese si gusta nella versione originale!'
    }
  },
  {
    id: 'insalata-mediterranea-calamaro',
    title: 'Insalata mediterranea con calamaro',
    category: 'PRANZO / CENA',
    kcal: 508,
    timeMinutes: 40,
    difficulty: 'facile',
    defaultServings: 3,
    description: 'Insalata fresca di farro con anelli di calamaro rosolati, pomodori secchi sott\'olio, olive nere snocciolate, basilico e limone.',
    originalProteinGrams: 26,
    tags: ['Pesce', 'Farro', 'Calamari', 'Mediterraneo'],
    ingredients: [
      { name: 'Chicchi di farro', amount: '90 g', grams: 90 },
      { name: 'Aglio', amount: '1 spicchio', grams: 3 },
      { name: 'Pomodori essiccati sott\'olio', amount: '20 g', grams: 20 },
      { name: 'Olive nere snocciolate', amount: '20 g', grams: 20 },
      { name: 'Basilico fresco', amount: '2 cucchiai', grams: 10 },
      { name: 'Olio d\'oliva', amount: '2 cucchiai', grams: 27 },
      { name: 'Anelli di calamaro', amount: '250 g', grams: 250 },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Limone biologico', amount: '1 limone', grams: 80 }
    ],
    instructions: [
      'Lessare il farro secondo le istruzioni sulla confezione.',
      'Tritare aglio, pomodori secchi, affettare le olive e sminuzzare il basilico in un\'ampia ciotola.',
      'Scaldare metà dell\'olio in padella e rosolare i calamari per circa 5 minuti finché sono sodi e cotti.',
      'Unire i calamari caldi nella ciotola con le erbe, condire con sale, pepe e il restante olio.',
      'Grattugiare la scorza di limone e unire il succo mescolando bene.',
      'Adagiare il farro nei piatti e coprire con l\'insalata tiepida di calamari.'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: 'Calamari portati a ~200 g a porzione e olio ridotto di ~5 ml.',
      kcal: 572,
      proteinGrams: 36,
      adjustments: [
        'Aumenta la dose di anelli di calamaro a 200 g per porzione',
        'Riduci l\'olio d\'oliva di circa 5 ml'
      ]
    }
  },
  {
    id: 'mug-cake-banana-burro-arachidi',
    title: 'Mug Cake alla banana e burro di arachidi',
    category: 'SNACK',
    kcal: 216,
    timeMinutes: 20,
    difficulty: 'facile',
    defaultServings: 2,
    description: 'Tortina monoporzione in tazza con banana schiacciata, burro di arachidi, farina integrale e gocce di cioccolato fondente.',
    originalProteinGrams: 7,
    tags: ['Tazza', 'Dolce', 'Microonde / Forno', 'Snack'],
    ingredients: [
      { name: 'Olio di cocco', amount: '½ cucchiaino', grams: 3.5 },
      { name: 'Banana', amount: '½ banana', grams: 75 },
      { name: 'Zucchero di cocco', amount: '1 cucchiaio', grams: 15 },
      { name: 'Burro di arachidi', amount: '1 cucchiaio', grams: 20 },
      { name: 'Estratto di vaniglia', amount: '½ cucchiaino', grams: 1 },
      { name: 'Farina integrale', amount: '30 g', grams: 30 },
      { name: 'Bicarbonato', amount: '¼ cucchiaino', grams: 1.3 },
      { name: 'Cannella macinata', amount: '½ cucchiaino', grams: 1 },
      { name: 'Sale', amount: 'un pizzico' },
      { name: 'Gocce di cioccolato fondente', amount: '1 cucchiaio', grams: 10 }
    ],
    instructions: [
      'Preriscaldare il forno a 175°C (oppure usare il microonde per 90 secondi).',
      'Ungere la tazza con un velo di olio di cocco.',
      'Schiacciare la banana in una ciotolina con una forchetta; unire zucchero di cocco, ⅔ del burro di arachidi, vaniglia, farina, bicarbonato, cannella e sale fino a composto liscio.',
      'Aggiungere le gocce di cioccolato.',
      'Versare l\'impasto nella tazza e cuocere in forno per 15 minuti (o al microonde per 1:30 min).',
      'Guarnire con il restante burro di arachidi e servire tiepida!'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '+20 g proteine whey; zero zucchero cocco; -5 g burro arachidi; niente gocce cioccolato.',
      kcal: 210,
      proteinGrams: 20,
      adjustments: [
        'Aggiungi 20 g di proteine Whey (gusto vaniglia o cioccolato)',
        'Elimina lo zucchero di cocco',
        'Riduci il burro di arachidi a 15 g (-5 g)',
        'Elimina le gocce di cioccolato fondente'
      ],
      tips: 'Nei giorni 13 e 29 del mese si gusta nella versione originale!'
    }
  },
  {
    id: 'involtini-primavera-vietnamiti',
    title: 'Involtini primavera vietnamiti',
    category: 'SNACK',
    kcal: 201,
    timeMinutes: 40,
    difficulty: 'normale',
    defaultServings: 12,
    description: 'Involtini croccanti in carta di riso ripieni di spaghetti di vetro, tofu affumicato, carota grattugiata e germogli di soia, serviti con soia.',
    originalProteinGrams: 7,
    tags: ['Finger Food', 'Tofu Affumicato', 'Air Fryer', 'Snack'],
    ingredients: [
      { name: 'Spaghetti di vetro', amount: '50 g', grams: 50 },
      { name: 'Tofu affumicato', amount: '300 g', grams: 300 },
      { name: 'Carota', amount: '1 carota', grams: 150 },
      { name: 'Cipolla', amount: '1 cipolla', grams: 80 },
      { name: 'Germogli di fagioli mungo', amount: '150 g', grams: 150 },
      { name: 'Sale e pepe', amount: 'a piacere' },
      { name: 'Fogli di carta di riso', amount: '12 fogli', grams: 84 },
      { name: 'Olio di girasole', amount: '150 ml' },
      { name: 'Salsa di soia', amount: '100 ml' }
    ],
    instructions: [
      'Ammollare e cuocere gli spaghetti di vetro, scolarli, sciacquarli in acqua fredda e tagliarli a pezzetti con le forbici.',
      'Asciugare il tofu affumicato e sbriciolarlo finemente.',
      'Grattugiare la carota e tritare la cipolla; unire in una ciotola pasta, tofu, carota, cipolla, germogli, sale e pepe.',
      'Immergere ciascun foglio di carta di riso in acqua tiepida per 10 secondi e stenderlo su canovaccio umido.',
      'Mettere 1 cucchiaio abbondante di ripieno, arrotolare dal basso, piegare i lati verso l\'interno e completare il rotolo.',
      'Cuocere in padella/wok con olio o in Air Fryer spennellando leggermente fino a doratura croccante.',
      'Asciugare su carta assorbente e servire con salsa di soia.'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: 'Tofu affumicato a 100 g per porzione, cottura in air fryer con max 2 ml di olio.',
      kcal: 198,
      proteinGrams: 14,
      adjustments: [
        'Aumenta la dose di tofu affumicato a 100 g a porzione',
        'Cuoci esclusivamente in Air Fryer con max 2 ml di olio spray (evita frittura immersa)'
      ]
    }
  },
  {
    id: 'palline-energetiche-pan-zenzero',
    title: 'Palline energetiche al pan di zenzero',
    category: 'SNACK',
    kcal: 251,
    timeMinutes: 30,
    difficulty: 'facile',
    defaultServings: 8,
    description: 'Bocconcini energetici natalizi a base di datteri freschi frullati con noci pecan, cannella, zenzero, noce moscata e colata di cioccolato fondente.',
    originalProteinGrams: 4,
    tags: ['Datteri', 'Raw / Senza Cottura', 'Spezie', 'Snack'],
    ingredients: [
      { name: 'Datteri freschi denocciolati', amount: '12 datteri', grams: 288 },
      { name: 'Noci pecan tritate', amount: '110 g', grams: 110 },
      { name: 'Miele', amount: '1 cucchiaio', grams: 20 },
      { name: 'Cannella', amount: '1 cucchiaino', grams: 2 },
      { name: 'Zenzero macinato', amount: '1 cucchiaino', grams: 2 },
      { name: 'Noce moscata', amount: '¼ cucchiaino', grams: 0.5 },
      { name: 'Chiodi di garofano macinati', amount: '¼ cucchiaino', grams: 0.5 },
      { name: 'Sale', amount: 'un pizzico' },
      { name: 'Cioccolato fondente', amount: '55 g', grams: 55 }
    ],
    instructions: [
      'Denocciolare i datteri e tritarli nel mixer finemente.',
      'Aggiungere noci pecan, miele, cannella, zenzero, noce moscata, chiodi di garofano e sale; frullare fino a ottenere una pasta compatta.',
      'Sciogliere il cioccolato fondente a bagnomaria o al microonde.',
      'Formare delle palline con le mani e adagiarle su carta da forno.',
      'Con un cucchiaino colare il cioccolato fuso sopra le palline.',
      'Riporre in frigorifero per almeno 15 minuti per far solidificare il cioccolato. Conservare in contenitore ermetico in frigo.'
    ],
    hpVariant: {
      title: 'Variante High-Protein',
      description: '½ porzione di palline + 200 g di Skyr naturale (oppure 100 g skyr nei giorni 14 e 19).',
      kcal: 252,
      proteinGrams: 23,
      adjustments: [
        'Consuma ½ porzione di palline energetiche',
        'Abbina 200 g di Skyr naturale (oppure 100 g skyr nei giorni 14 e 19 -> 189 kcal / 12 g prot)'
      ],
      tips: 'Conservale in frigo in un vasetto: si mantengono perfette per 10 giorni.'
    }
  }
];

export const HEALTHY_RECIPES: Recipe[] = healthyRecipes as Recipe[];
export const RECIPES: Recipe[] = [...PREVIOUS_RECIPES, ...HEALTHY_RECIPES];
