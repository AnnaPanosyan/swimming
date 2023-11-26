import img1 from "../assets/kids.jpg";
import img2 from "../assets/bgimg1.jpeg";
import img3 from "../assets/pool.jpg";
import img4 from '../assets/boy.jpg'
import { useState } from "react";

export const data = [
  {
    id: 1,
    number: "01",
    imgSrc: img1,
    destTitle: "Anfänger - Schwimmkurse",
    age: "ab 5 Jahre",
    duration1: "45 Minuten",
    lessons: "10 Trainingseinheiten",
    kids: "von 8-12 Kinder",
    preis1: "Preis 140",
    description: [
      {
        subTitle: "Anforderungen zum Schwimmabzeichen Seepferdchen",
        about: `Während unseres Anfänger-Schwimmkurses werden die Kinder auf 
        spielerische Art und Weise, das sichere und eigenständige Bewegen, 
        im Wasser erarbeiten. Inhaltlich folgen nach der spielerischen Wassergewöhnung 
        das Atmen, Tauchen, Springen, Gleiten und natürlich die ersten Arm und 
        Beinbewegungen des Schwimmens. Der Kurs wird voraussichtlich mit dem 
        Schwimmabzeichen Seepferdchen abgeschlossen.`,
        rouls: [
          `Ein Sprung vom Beckenrand mit anschließendem 25 m
      Schwimmen (ohne Schwimmhilfe) in eine Schwimmart
      in Bauch oder Rückenlage
      ( Grobform, während des Schwimmens in Bauchlage
      erkennbar ins Wasser ausatmen)`,
          `Heraufholen eines Tauchrings mit den Händen aus schultertiefen Wasser`,
          `3-5 Baderegeln, die Sie auch auf meiner Homepage finden können`,
        ],

      },
    ],

  },
  {
    id: 2,
    number: "02",
    imgSrc: img2,
    destTitle: "Einzelschwimmunterricht für Kinder und Erwachsene",
    age: "",
    duration1: "  1 x 45 Minuten",
    duration2: "  5 x 45 Minuten",
    kids: "",
    preis1: " Preis 40",
    preis2: " Preis 175",
    description: [
      {
        subTitle: "",
        about: `Im Einzelunterricht kann ich, als persönlicher Schwimmlehrer, noch effektiver und individueller auf die  Bedürfnisse des Kindes eingehen, als im Gruppenunterricht.
        Der Einzelunterricht ist besonders vorteilhaft bei Vorliegen von: `,
        rouls: [`Konzentrationsschwäche`, `Koordinationsschwäche`, `Ängste im Wasser`],
      },
      {
        subTitle: "",
        about: `Der Einzelunterricht bietet zusätzlich die Möglichkeit, das Schwimmen innerhalb kürzester Zeit zu lernen.`,
        rouls: [],
      },
      {
        subTitle: "",
        about: `Desweiteren biete ich meinen Einzelunterricht für Erwachsene an, die ihre technik verbessern wollen oder  das Schwimmen zu erlernen, oder sich unwohl fühlen als Erwachsener an einem Schwimmkurs teilzunehmen.`,
        rouls: [],
      }
    ],
  },
  {
    id: 3,
    number: "03",
    imgSrc: img3,
    destTitle: "Bronze, Silber - und Goldkurs",
    age: "von 6 - 14 Jahre",
    duration1: "45 Minuten",
    lessons: "8 Trainingseinheiten",
    kids: "von 8-12 Kinder",
    preis1: "Preis 130",
    description: [
      {
        subTitle: "Anforderungen zum Schwimmabzeichen Bronze",
        about: `dieser ist ein Kurs für diejenigen, die bereits schwimmen können und das Seepferdchen 
        Schwimmabzeichen besitzen.
        Jedes Kind muss sich ohne Hilfsmittel über Wasser halten können. 
       im Bronzekurs werden die Kinder ihre bereits erlernten Fähigkeiten  verbessern und Kondition aufbauen, 
       vor allem das Brustschwimmen wird gefestigt.
       erst mit dem Erwerb des DSA Bronze gilt ihr Kind als sichere/r Schwimmer/in.`,
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

      },
      {
        subTitle: "Anforderungen zum Silber",
        about: `Bei den Silber-und Goldkurse, wird  das Gelerntes nochmal vertieft.
        Der Kurs ist anspruchsvoller, d.h. hier werden z.B. Rückenschwimmen und Kraulen erlernt und geübt, 
        sowie Streckentauchen. Schwimmsicherheit, Ausdauer und Muskelkraft werden weiter ausgebaut.
        In unseren Silber- und Goldkurse dürfen Kinder ab 9 Jahren teilnehmen.`,
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

      },
      {
        subTitle: "Anforderungen zum Goldkurse",
        about: "",
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

      },
    ],


  },
  {
    id: 4,
    number: "04",
    imgSrc: img4,
    destTitle: "Jahreskurs",
    age: "ab 6 Jahre, Mindestanforderung Schwimmabzeichen Silber",
    duration1: "45 Minuten",
    lessons: "Das ganze Jahr, Monatlich kündbar",
    kids: "von 8-12 Kinder",
    preis1: "4 Wochen Training (1x pro Woche): Preis 40",
    description: [
      {
        subTitle: "Die Prüfungsanforderungen sind:(Juniorretter)",
        about: `Für unsere motiviertesten  Schwimmer/in besteht die Möglichkeit an 
        einem Schwimmkurs für das ganze Jahr  teilzunehmen. 
        Die Mindestanforderung ist das Silberschwimmabzeichen.
        Die Ziele in diesem Jahreskurs:
        Die Kursteilnehmer erlernen das 
        Kraul-und Rückenkraulschwimmen, um das Goldschwimmabzeichen zu erwerben.
        Außerdem dient diesen Kurs als Vorbereitung für den Juniorretter/in ( Praktische Teil).`,
        rouls: [
          `1)  100m schwimmen ohne Unterbrechung, davon`,
          `. 25 m Kraulschwimmen`,
          `. 25m Rückenkraulschwimmen`,
          `. 25 Brustschwimmen`,
          `. 25 Rückenschwimmen mit Grätschschwung ohne Armtätigkeit`,
          ` 2) 25m schleppen eines Partners mit Achselschleppgriff`,
          ` 3)  Selbstrettungsübung: kombinierter Übung in leichter Freizeitbekleidung die 
          ohne Pause, in der angegebenen Reihenfolge zu erfüllen ist:`,
          `. Fußwärts ins Wasser springen, danach schwebelage einnehmen`,
          `. 4 Minuten schweben an der Wasseroberfläche in Rückenlage mit Paddelbewegungen`,
          `. 6 Minuten langsames Schwimmen, jedoch mindestens vier mal die Körper Lage wechseln 
          (Bauch, Rücken, Seitenlage)`,
          `. Anschließend die Kleidungsstücke im tiefen Wasser ausziehen`,
          ` 4) Fremdrettungsübung: kombinierte Übung, die ohne Pause  in der angegebenen Reihenfolge 
          zu erfüllen ist:`,
          `. 15 m in Bauchlage an schwimmen nach halber Strecke Kopfschmerz auf circa 2 m Tiefe abtauchen 
          und zwei kleine Gegenstände (z.B. Tauchringe) heraufholen, diese anschließend fallen lassen und 
          das Anschwimmen fortsetzen.`,
          `. 15 m schleppen eines Partners mit Achselschleppgriff`,
          `. Sichern des Geretteten`,

        ],

      },
      
    ],

  },
];


