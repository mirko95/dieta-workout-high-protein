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
  instructionSteps: alternativeSteps[id],
});

const alternativeSteps: Record<string, string[]> = {
  '0739': ['Regola sedile e pedana della leg press.', 'Siediti con schiena appoggiata e piedi alla larghezza delle spalle.', 'Spingi la pedana estendendo le gambe senza bloccare le ginocchia.', 'Torna lentamente mantenendo i talloni appoggiati.'],
  '1760': ['Tieni un manubrio verticale contro il petto.', 'Scendi in squat con petto alto e core attivo.', 'Arriva fin dove riesci con controllo.', 'Spingi dai talloni per tornare in piedi.'],
  '0289': ['Sdraiati su panca piana con un manubrio per mano.', 'Parti con i manubri sopra il petto.', 'Abbassali ai lati del petto con controllo.', 'Spingi in alto senza sbattere i manubri.'],
  '0493': ['Metti le mani su panca o supporto rialzato.', 'Mantieni il corpo in linea dalle spalle ai talloni.', 'Abbassa il petto verso il supporto.', 'Spingi per tornare alla posizione iniziale.'],
  '0292': ['Appoggia una mano su panca e tieni un manubrio nell’altra.', 'Mantieni schiena neutra e core attivo.', 'Tira il manubrio verso il fianco stringendo la scapola.', 'Abbassa lentamente.'],
  '0861': ['Siediti al cavo basso con piedi appoggiati.', 'Afferra la maniglia mantenendo la schiena dritta.', 'Tira verso il corpo stringendo le scapole.', 'Rilascia lentamente.'],
  '0085': ['Tieni il bilanciere con presa prona.', 'Spingi indietro le anche con ginocchia morbide.', 'Scendi tenendo il bilanciere vicino al corpo.', 'Risalire contraendo glutei e posteriori.'],
  '1409': ['Sdraiati con ginocchia piegate e bilanciere sui fianchi.', 'Attiva core e glutei.', 'Solleva i fianchi fino ad allineare ginocchia e spalle.', 'Fermati in alto e scendi lentamente.'],
  '0586': ['Regola la macchina leg curl sdraiata.', 'Sdraiati con i talloni sotto il rullo.', 'Fletti le ginocchia senza sollevare i fianchi.', 'Torna lentamente alla posizione iniziale.'],
  '0795': ['Stai in piedi con appoggio se serve equilibrio.', 'Sposta il peso su una gamba.', 'Piega il tallone verso il gluteo.', 'Abbassa lentamente e cambia lato.'],
  '0276': ['Sdraiati con braccia verso il soffitto.', 'Porta anche e ginocchia a 90 gradi.', 'Premi la zona lombare verso il pavimento.', 'Abbassa lentamente braccio e gamba opposti.'],
  '0011': ['Appenditi alla barra con controllo.', 'Attiva il core.', 'Solleva le ginocchia verso il petto.', 'Abbassa lentamente le gambe.'],
  '0044': ['Tieni il bilanciere sulla parte alta della schiena.', 'Piedi alla larghezza delle spalle.', 'Inclina il busto spingendo indietro le anche.', 'Risalire contraendo glutei e posteriori.'],
  '0974': ['Ancora l’elastico in alto.', 'Afferra l’elastico e crea tensione.', 'Tira verso il petto stringendo le scapole.', 'Rilascia lentamente.'],
  '0237': ['Attacca la corda al cavo alto.', 'Stai rivolto verso la macchina.', 'Tieni le braccia quasi tese davanti a te.', 'Porta la corda verso le cosce con controllo.'],
  '0381': ['Tieni un manubrio per mano.', 'Fai un passo indietro in affondo.', 'Scendi con controllo mantenendo il busto stabile.', 'Spingi dal tallone anteriore per risalire.'],
  '0431': ['Mettiti davanti a un box o panca bassa.', 'Appoggia tutto il piede sul supporto.', 'Spingi dal tallone e sali.', 'Scendi lentamente e alterna lato.'],
  '0404': ['Siediti con un manubrio per mano e palmi verso l’interno.', 'Porta i manubri all’altezza delle spalle.', 'Spingi sopra la testa senza bloccare i gomiti.', 'Abbassa lentamente.'],
  '0219': ['Regola i cavi all’altezza delle spalle.', 'Porta le maniglie alle spalle.', 'Spingi verso l’alto con controllo.', 'Torna lentamente alla partenza.'],
  '1489': ['Tieni un supporto se serve equilibrio.', 'Mantieni il busto alto.', 'Piega le ginocchia lasciandoti andare leggermente indietro.', 'Risalire con controllo.'],
  '1004': ['Posiziona l’elastico sopra le ginocchia.', 'Scendi in squat spingendo indietro le anche.', 'Mantieni le ginocchia in linea con le punte.', 'Spingi dai talloni per risalire.'],
  '0979': ['Ancora l’elastico all’altezza della vita.', 'Stai di lato rispetto all’ancoraggio.', 'Porta le mani al petto.', 'Spingi avanti resistendo alla rotazione.'],
  '2133': ['Tieni un manubrio per mano ai lati.', 'Mantieni schiena dritta e spalle basse.', 'Cammina con passi piccoli e controllati.', 'Fermati quando perdi postura.'],
  '0314': ['Regola la panca inclinata.', 'Tieni un manubrio per mano all’altezza del petto.', 'Spingi i manubri verso l’alto.', 'Abbassa lentamente ai lati del petto.'],
  '3013': ['Sdraiati con ginocchia piegate e piedi a terra.', 'Braccia lungo i fianchi.', 'Solleva i fianchi contraendo i glutei.', 'Fermati in alto e scendi lentamente.'],
};
