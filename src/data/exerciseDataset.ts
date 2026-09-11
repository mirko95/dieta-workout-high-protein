const baseUrl = 'https://raw.githubusercontent.com/hasaneyldrm/exercises-dataset/main/';
export const DATASET_SOURCE = 'https://github.com/hasaneyldrm/exercises-dataset';

type DatasetExercise = { id: string; equipment: string; steps: string[]; gif: string };
const records: Record<string, DatasetExercise> = {
  '0743': { id: '0743', equipment: 'macchina a slitta', gif: 'videos/0743-Qa55kX1.gif', steps: ['Regola la macchina per la tua altezza.', 'Piedi alla larghezza delle spalle sulla piattaforma.', 'Scendi piegando anche e ginocchia con schiena dritta.', 'Spingi dai talloni per tornare in alto.'] },
  '0577': { id: '0577', equipment: 'macchina a leve', gif: 'videos/0577-T0yTjgW.gif', steps: ['Regola il sedile e appoggia la schiena al cuscino.', 'Impugna le maniglie con i gomiti a circa 90 gradi.', 'Spingi in avanti e torna lentamente alla posizione iniziale.'] },
  '1350': { id: '1350', equipment: 'macchina a leve', gif: 'videos/1350-7I6LNUG.gif', steps: ['Regola sedile e poggiapiedi.', 'Appoggia il petto al cuscino e impugna le maniglie.', 'Tira verso il corpo stringendo le scapole.', 'Rilascia lentamente.'] },
  '1459': { id: '1459', equipment: 'manubri', gif: 'videos/1459-rR0LJzx.gif', steps: ['Piedi alla larghezza delle spalle, un manubrio per mano.', 'Spingi indietro le anche con schiena dritta e ginocchia morbide.', 'Scendi finché senti allungare i posteriori della coscia.', 'Spingi dai talloni e contrai i glutei per risalire.'] },
  '0599': { id: '0599', equipment: 'macchina a leve', gif: 'videos/0599-Zg3XY7P.gif', steps: ['Regola la macchina e siediti con la schiena allo schienale.', 'Posiziona le gambe sotto il rullo imbottito.', 'Fletti le ginocchia, fermati brevemente e torna lentamente.'] },
  '0872': { id: '0872', equipment: 'corpo libero', gif: 'videos/0872-nCU1Ekp.gif', steps: ['Sdraiati con le braccia lungo i fianchi.', 'Solleva piedi e cosce, con le ginocchia piegate.', 'Contrai gli addominali e porta le ginocchia verso il petto.', 'Abbassa lentamente i fianchi.'] },
  '0488': { id: '0488', equipment: 'panca per iperestensioni', gif: 'videos/0488-zkgRrbK.gif', steps: ['Regola la panca e blocca i piedi.', 'Abbassa il busto mantenendo la schiena dritta.', 'Risalire fino a essere in linea con le gambe.'] },
  '0818': { id: '0818', equipment: 'cavi', gif: 'videos/0818-rkg41Fb.gif', steps: ['Regola sedile e fermacosce.', 'Usa le maniglie parallele e mantieni il petto alto.', 'Tira verso la parte alta del torace stringendo le scapole.', 'Rilascia lentamente.'] },
  '2368': { id: '2368', equipment: 'corpo libero', gif: 'videos/2368-9E25EOx.gif', steps: ['Porta un piede avanti e mantieni la schiena dritta.', 'Scendi finché la coscia davanti è quasi parallela al suolo.', 'Spingi dal tallone anteriore e ripeti dall’altro lato.'] },
  '0603': { id: '0603', equipment: 'macchina a leve', gif: 'videos/0603-67n3r98.gif', steps: ['Regola il sedile e appoggia la schiena.', 'Impugna le maniglie all’altezza delle spalle.', 'Spingi in alto senza bloccare i gomiti.', 'Abbassa lentamente.'] },
  '0585': { id: '0585', equipment: 'macchina a leve', gif: 'videos/0585-my33uHU.gif', steps: ['Regola sedile e schienale.', 'Estendi le ginocchia per sollevare il carico.', 'Fermati brevemente in alto e torna lentamente.'] },
  '0705': { id: '0705', equipment: 'corpo libero', gif: 'videos/0705-RKjH6Lt.gif', steps: ['Appoggia l’avambraccio sotto la spalla.', 'Solleva i fianchi e mantieni il corpo allineato.', 'Mantieni la posizione e ripeti dall’altro lato.'] },
  '0770': { id: '0770', equipment: 'Smith machine', gif: 'videos/0770-jFtipLl.gif', steps: ['Posiziona il bilanciere sulle spalle e attiva il core.', 'Scendi piegando anche e ginocchia con il petto alto.', 'Spingi dai talloni per risalire.'] },
  '1299': { id: '1299', equipment: 'macchina a leve', gif: 'videos/1299-jHAnWmT.gif', steps: ['Regola sedile e schienale.', 'Impugna le maniglie poco oltre la larghezza delle spalle.', 'Spingi in avanti, poi abbassa lentamente verso il petto.'] },
  '0196': { id: '0196', equipment: 'cavi con corda', gif: 'videos/0196-OM46QHm.gif', steps: ['Dai le spalle ai cavi e impugna la corda.', 'Spingi indietro le anche con schiena dritta.', 'Contrai glutei e posteriori della coscia per tornare in piedi.'] },
};

export const datasetExercise = (id: keyof typeof records) => ({
  datasetId: records[id].id,
  equipment: records[id].equipment,
  instructionSteps: records[id].steps,
  gifUrl: `${baseUrl}${records[id].gif}`,
});

export const datasetAnimation = (id: string, equipment: string, gif: string) => ({
  datasetId: id,
  equipment,
  gifUrl: `${baseUrl}${gif}`,
});
