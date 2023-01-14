import img1 from "../assets/kids.jfif";
import img2 from "../assets/boy.jpg";
import img3 from "../assets/pool.jpg";
import {v4 as uuidv4} from 'uuid';


export const data = [
  {
    id: uuidv4(),
    number:1,
    imgSrc: img1,
    destTitle: "Anfänger - Schwimmkurse",
    age:"ab 5 Jahre",
    rouls:[`Ein Sprung vom Beckenrand mit anschließendem 25 m
    Schwimmen (ohne Schwimmhilfe) in eine Schwimmart
    in Bauch oder Rückenlage
    ( Grobform, während des Schwimmens in Bauchlage
    erkennbar ins Wasser ausatmen)`,
    `Heraufholen eines Tauchrings mit den Händen aus schultertiefen Wasser`,
  `3-5 Baderegeln, die Sie auch auf meiner Homepage finden können`],
    about:`Während unseres Anfänger- Schwimmkurses 
    werden die Kinder auf spielerische Art und Weise, 
    das sichere und eigenständige Bewegen, im Wasser erarbeiten. 
    Inhaltlich folgen nach der spielerischen Wassergewöhnung das Atmen, 
    Tauchen, Springen, Gleiten und natürlich die ersten Arm und 
    Beinbewegungen des Schwimmens. Kurs wird voraussichtlich mit 
    dem Schwimmabzeichen Seepferdchen abgeschlossen.`,
    subTitle:"Anforderungen zum Schwimmabzeichen Seepferdchen",
    duration:"45 Minuten",
    lessons:"10 Trainingseinheiten",
    kids:"von 8-12 Kinder",
    preis:"Preis 190"
},
  {
    id: uuidv4(),
    number:2,
    imgSrc: img2,
    destTitle: "Folge - Schwimmkurs",
    age:"ab 5 Jahre",
    rouls:[`Das Hauptziel wird sein, 
    die 25 m selbstständig, ohne jegliche Schwimmhilfen zu 
    schwimmen und einen Tauchring aus schultertiefen Wasser 
    hinauf zu holen, sowie alle Baderegeln kennen zu lernen.`],
    about:`Der Folge Schwimmkurs ist für diejenigen, 
    die kurz vor dem Seepferdchen-Abzeichen stehen. 
    In diesem Aufbaukurs  werden die Kinder 
    ihr vorhandenes können aufbessern und festigen.`,
    subTitle:"Anforderungen zum Schwimmabzeichen Folge",
    duration:"45 Minuten",
    lessons:"8 Trainingseinheiten",
    kids:"von 8-12 Kinder",
    preis:"Preis 180"
},
  {
    id: uuidv4(),
    number:3,
    imgSrc: img3,
    destTitle: "Bronze, Silber - und Goldkurs",
    age:"von 6 - 14 Jahre",
    about:"",
    subTitle:"??????",

    rouls:[` Sprung Kopfwärts vom Beckenrand 
    und 15 Minuten Schwimmen. In dieser Zeit 
    sind mindestens 200 m zurückzulegen, 
    davon 150 m in Bauch- oder Rückenlage 
    in einer erkennbaren Schwimmart und 50 m 
    in der anderen Körperlage 
    (Wechsel der Körperlage während des 
      Schwimmens auf der Schwimmbahn ohne Festhalten)`,
      `einmal ca. 2 m Tieftauchen 
      von der Wasseroberfläche und 
      einen Tauchring heraufholen`,
      `ein Paketsprung vom Startblock oder 1 m- Brett`,
      `Baderegeln`
],
    duration:"45 Minuten",
    lessons:"8 Trainingseinheiten",
    kids:"von 8-12 Kinder",
    preis:"Preis 180"
  }
]