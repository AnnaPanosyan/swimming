import img1 from "../assets/kids.jpg";
import img2 from "../assets/boy.jpg";
import img3 from "../assets/pool.jpg";

export const data = [
  {
    id: 1,
    number: "01",
    imgSrc: img1,
    destTitle: "Anfänger - Schwimmkurse",
    age: "ab 5 Jahre",
    description: [
      {
        rouls: [
          `Ein Sprung vom Beckenrand mit anschließendem 25 m
      Schwimmen (ohne Schwimmhilfe) in eine Schwimmart
      in Bauch oder Rückenlage
      ( Grobform, während des Schwimmens in Bauchlage
      erkennbar ins Wasser ausatmen)`,
          `Heraufholen eines Tauchrings mit den Händen aus schultertiefen Wasser`,
          `3-5 Baderegeln, die Sie auch auf meiner Homepage finden können`,
        ],
        about: `Während unseres Anfänger-Schwimmkurses werden die Kinder auf 
        spielerische Art und Weise, das sichere und eigenständige Bewegen, 
        im Wasser erarbeiten. Inhaltlich folgen nach der spielerischen Wassergewöhnung 
        das Atmen, Tauchen, Springen, Gleiten und natürlich die ersten Arm und 
        Beinbewegungen des Schwimmens. Der Kurs wird voraussichtlich mit dem 
        Schwimmabzeichen Seepferdchen abgeschlossen.`,
        subTitle: "Anforderungen zum Schwimmabzeichen Seepferdchen",
      },
    ],
    duration: "45 Minuten",
    lessons: "10 Trainingseinheiten",
    kids: "von 8-12 Kinder",
    preis: "Preis 140",
  },
  {
    id: 2,
    number: "02",
    imgSrc: img2,
    destTitle: "Folge - Schwimmkurs",
    age: "ab 5 Jahre",
    description: [
      {
        rouls: [
          `Das Hauptziel wird sein, 
        die 25 m selbstständig, ohne jegliche Schwimmhilfen zu 
        schwimmen und einen Tauchring aus schultertiefen Wasser 
        hinauf zu holen, sowie alle Baderegeln kennen zu lernen.`,
        ],
        about: `Der Folge Schwimmkurs ist für diejenigen, 
        die kurz vor dem Seepferdchen-Abzeichen stehen. In diesem Aufbaukurs werden die Kinder 
        ihr vorhandenes können aufbessern und festigen.`,
        subTitle: "Anforderungen zum Schwimmabzeichen Folge",
      },
    ],
    duration: "45 Minuten",
    lessons: "8 Trainingseinheiten",
    kids: "von 8-12 Kinder",
    preis: "Preis 130",
  },
  {
    id: 3,
    number: "03",
    imgSrc: img3,
    destTitle: "Bronze, Silber - und Goldkurs",
    age: "von 6 - 14 Jahre",
    description: [
      {
        rouls: [
          ` Sprung Kopfwärts vom Beckenrand 
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
          `Baderegeln`,
        ],
        about: `dieser ist ein Kurs für diejenigen, die bereits schwimmen können und das Seepferdchen 
      Schwimmabzeichen besitzen.
      Jedes Kind muss sich ohne Hilfsmittel über Wasser halten können. 
     im Bronzekurs werden die Kinder ihre bereits erlernten Fähigkeiten  verbessern und Kondition aufbauen, 
     vor allem das Brustschwimmen wird gefestigt.
     erst mit dem Erwerb des DSA Bronze gilt ihr Kind als sichere/r Schwimmer/in.`,
        subTitle: "Anforderungen zum Schwimmabzeichen Bronze",
      },
      {
        rouls: [
          `Sprung Kopfwärts vom Beckenrand und 20 Minuten Schwimmen. In dieser Zeit sind mindestens 
      400 m zurückzulegen, davon 300 m in Bauch- oder Rückenlage in einer erkennbaren Schwimmart und 100 
      m in der anderen Körperlage ( Wechsel der Körperlage während des Schwimmens auf der Schwimmbahn 
        ohne Festhalten)`,
          `zweimal ca. 2 m Tieftauchen von der Wasseroberfläche mit Heraufholen je eines 
        Gegenstandes (z.B kleiner Tauchring)`,
          `10 m Streckentauchen mit Abstoßen vom Beckenrand im Wasser.`,
          `Sprung aus 3 m Höhe oder zwei verschiedene Sprünge aus 1 m Höhe`,
        ],
        about: `Bei den Silber-und Goldkurse, wird  das Gelerntes nochmal vertieft.
      Der Kurs ist anspruchsvoller, d.h. hier werden z.B. Rückenschwimmen und Kraulen erlernt und geübt, 
      sowie Streckentauchen. Schwimmsicherheit, Ausdauer und Muskelkraft werden weiter ausgebaut.
      In unseren Silber- und Goldkurse dürfen Kinder ab 9 Jahren teilnehmen.`,
        subTitle: "Anforderungen zum Silber",
      },
      {
        rouls: [
          `Sprung Kopfwärts vom Beckenrand und 30 Minuten Schwimmen. In dieser Zeit sind mindestens 
      800 m zurückzulegen, davon 650 m in den Bauch- oder Rückenlage in einer erkennbaren Schwimmart und 
      150 m in der anderen Körperlage (Wechsel der Körperlage während des Schwimmens auf der Schwimmbahn 
        ohne Festhalten)`,
          `Startsprung und 25 m Kraulschwimmen`,
          `Startsprung und 50 m Brustschwimmen in 
        höchstens 1:15 Minuten
        `,
          `50 m Rückenschwimmen mit Grätschschwung ohne Armtätigkeit oder Rückenkraulschwimmen`,
          `10 m streckentauchen aus der Schwimmlage (ohne Abstoßen vom Beckenrand)`,
          `Dreimal ca. 2m Tieftauchen von der Wasseroberfläche mit Heraufholen je eines Gegenstandes 
        (z.B.: kleiner Tauchring) innerhalb von 3 Minuten`,
          `ein Sprung aus 3 m Höhe oder zwei verschiedene Sprünge aus 1 m Höhe`,
          ` 50 m Transport schwimmen: Schieben oder Ziehen`,
        ],
        about: "",
        subTitle: "Anforderungen zum Goldkurse",
      },
    ],

    duration: "45 Minuten",
    lessons: "8 Trainingseinheiten",
    kids: "von 8-12 Kinder",
    preis: "Preis 130",
  },
];
