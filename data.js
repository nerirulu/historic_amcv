/* ============================================================
   YOUR DATA "DATABASE"
   Add a new object to this array for every new concert.
   - photo: path/URL to a real photo once hosted on your own site
            (leave "" to show the placeholder used in this sketch)
   - embedUrl per piece: a YouTube embed link, a Vimeo embed link,
     or a Google Drive preview link — all three work the same way.
   ============================================================ */
const CONCERTS = [
  
  // FESTA MAJOR 2021
  {
    date: "2021-05-02",
    dateLabel: "2 May 2021",
    title: "Concert Festa Major 2021",
    category: "festa-major",
    venue: "Ateneu de Cerdanyola",
    photo: "assets/2021/festa major/IMG_6184.JPG",
    description: "El meu primer concert i també el del Raul :) Molt de repertori reciclat després d'haver d'assajar al local dels castellers dissabtes al matí.",
    pieces: [
      
      { title: "Rosa de Sant Jordi", composer: "Fèlix Martínez i Comín", description: "Sardana xula.", embedUrl: ""},
      { title: "La Storia", composer: "Jacob de Haan", description: "", embedUrl: "" },
      { title: "La noche de la iguana", composer: "Lucrecia", description: "Clàssic de l'agrupació.", embedUrl: "https://youtu.be/kKJiEosWsaU"},
      { title: "Benny Goodman", composer: "Benny Goodman", description: "Medley per exel·lència.", embedUrl: "" },
      { title: "They can't take that away from me", composer: "George Gershwin", description: "", embedUrl: "https://youtube.com/shorts/aW0C-kq8Xjc" },
      { title: "Blue Moon", composer: "Richard Rodgers", description: "", embedUrl: "" },
      { title: "La Gavina", composer: "Marina Rosell", description: "", embedUrl: "" },
      { title: "Around the world in 80 days", composer: "Otto Schwartz", description: "", embedUrl: "" }
      
      
      
    ],
    gallery: ["assets/2021/festa major/IMG_6184.JPG","assets/2021/festa major/IMG_6188.JPG","assets/2021/festa major/IMG_6183.JPG","assets/2021/festa major/IMG_6189.JPG","assets/2021/festa major/IMG_6191.JPG","assets/2021/festa major/IMG_6200.JPG"]
  },

  // CASTELL DE MUSICALS 2021
{
    date: "2021-06-14",
    dateLabel: "14 jun. 2021",
    title: "Un Castell de Musicals",
    category: "castell",
    venue: "Castell de Sant Marçal",
    photo: "assets/2021/castell musicals/Cartell_Castell2021.jpg",
    description: "Després de rependre l'activitat rere la Covid, tornem a l'aire lliure amb un programa de musicals. Malauradament no vam poder comptar amb el director Raul Lacilla, i a últim moment es va incorporar l'ex-director Gerard Pastor.",
    pieces: [
      
      { title: "West Side Story: America", composer: "LeonardBernstein", description: "Bastant lol, no va acabar de sortir.", embedUrl: "https://youtu.be/BlENx49QyTk" },
      { title: "West Side Story: Somewhere", composer: "Leonard Bernstein", description: "Molt bonic, visca la secció de clarinets.", embedUrl: "https://youtu.be/I0utGSaQ6FE" },
      { title: "West Side Story: Cool", composer: "Leonard Bernstein", description: "", embedUrl: "https://youtu.be/65hKT0o1FB0" },
      { title: "West Side Story: Prologue", composer: "Leonard Bernstein", description: "", embedUrl: "" },
      { title: "West Side Story: Maria", composer: "Leonard Bernstein", description: "", embedUrl: "" },
      { title: "West Side Story: Tonight", composer: "Leonard Bernstein", description: "", embedUrl: "" },
      { title: "I'm still standing", composer: "Elton John", description: "", embedUrl: "" },
      { title: "I dreamed a dream", composer: "Cliff Eidelman", description: "", embedUrl: "" },
      { title: "Shadowland", composer: "Hans Zimmer, Lebo M, Mark Mancina", description: "Video de nosaltres cantant-ho als castellers", embedUrl: "https://youtu.be/tjNbzZPfbCE" },
      { title: "You'll be back (Hamilton)", composer: "Lin-Manuel Miranda", description: "", embedUrl: "" },
      { title: "Defying gravity", composer: "Stephen Schwartz", description: "", embedUrl: "" },
      { title: "Come what may", composer: "David BAerwald", description: "", embedUrl: "" },
      { title: "West Side Story: Mambo !", composer: "Leonard Bernstein", description: "Locura", embedUrl: "" }
    ],
    gallery: ["assets/2021/castell musicals/IMG_9418.JPG","assets/2021/castell musicals/np_F0A7031.JPG","assets/2021/castell musicals/np_F0A7104.JPG","assets/2021/castell musicals/np_F0A7113.JPG","assets/2021/castell musicals/np_F0A7176.JPG","assets/2021/castell musicals/np_F0A7224.JPG","assets/2021/castell musicals/np_F0A7329.JPG",,"assets/2021/castell musicals/np_F0A7117.JPG"]
  },

  // SANTA CECÍLIA 2021
  {
    date: "2021-11-19",
    dateLabel: "19 nov. 2021",
    title: "Santa Cecília 2021",
    category: "santa-cecilia",
    venue: "Ateneu de Cerdanyola",
    photo: "assets/2021/concerts novembre/Cartell_SantaCecilia2021.jpg",
    description: "Tornem a l'ateneu després d'un temps amb un reper del segle XIX (iuju).",
    pieces: [
      
      { title: "Suite 1", composer: "Gustav Holst", description: "Perfectes els 3 moviments.", embedUrl: "" },
      { title: "Pavané per un infante difunte", composer: "Fauré", description: "", embedUrl: "" },
      { title: "Cantique", composer: "Fauré", description: "", embedUrl: "" },
      { title: "Arlesienne", composer: "Bizet", description: "", embedUrl: "" },
      
    ],
    gallery: ["assets/2021/concerts novembre/Santa_Cecília1.jpg","assets/2021/concerts novembre/Santa_Cecília2.jpg"]
  },
  {
    date: "2021-11-21",
    dateLabel: "21 nov. 2021 i 18 des. 2021",
    title: "Un Castell de Musicals",
    category: "altres",
    venue: "Casino aliança del Poblenou i Concert de Pineda",
    photo: "assets/2021/concerts novembre/Concert_Pineda_2021.jpg",
    description: "Aquest lloc era molt petit però com erem poquíssims ni ens va importar. Va ser molt diver (atents al Jaume i a la Laia).",
    pieces: [
      { title: "Vídeo sencer", composer: "", description: "", embedUrl: "https://www.youtube.com/watch?v=WFWpr9BXwp0&t=816s" },
      { title: "West Side Story: Prologue, Maria, Tonight, America, Cool, Somewhere", composer: "Leonard Bernstein", description: "", embedUrl: "" },
      { title: "I'm still standing", composer: "Elton John", description: "", embedUrl: "" },
      { title: "I dreamed a dream", composer: "Cliff Eidelman", description: "", embedUrl: "" },
      { title: "Shadowland", composer: "", description: "", embedUrl: "" },
      { title: "Per què he plorat", composer: "Albert Guinovart", description: "", embedUrl: "" },
      { title: "You'll be back (Hamilton)", composer: "", description: "", embedUrl: "" },
      { title: "Defying gravity", composer: "", description: "", embedUrl: "" },
      { title: "Come what may", composer: "", description: "", embedUrl: "" },
      { title: "Mambo !", composer: "", description: "", embedUrl: "" },
    ],
    gallery: ["assets/2021/concerts novembre/Concert_Pineda_2021.jpg", "assets/2021/concerts novembre/Poblenou1.jpg", "assets/2021/concerts novembre/Poblenou2.jpg", ]
  },

  {
    date: "2026-07-03",
    dateLabel: "3 jul. 2026",
    title: "Varietats al Castell",
    category: "castell",
    venue: "Castell de Sant Marçal",
    photo: "assets/2026/Castell Varietats/Cartell_Castell2026.jpg",
    gallery: [""],
    description: ".",
    pieces: [
      { title: "Can-Can", composer: "Offenbach", description: ".", embedUrl: "" },
      { title: "Little Threepenny Music", composer: "Weill", description: ".", embedUrl: "" },
      { title: "Amo de l'hostal", composer: "", description: ".", embedUrl: "" },
      { title: "La Vida Breve", composer: "De Falla", description: ".", embedUrl: "" },
      { title: "La Valse", composer: "Ravel", description: ".", embedUrl: "" },
      { title: "Candide Overture", composer: "Bernstein", description: ".", embedUrl: "" },
      { title: "Candide 2", composer: "Bernstein", description: ".", embedUrl: "" },
      { title: "El Relicario", composer: "Padilla", description: ".", embedUrl: "" },
      { title: "Honkey Tonk Ragtime", composer: "Faust", description: ".", embedUrl: "" },
      { title: "Reines del paral·lel", composer: "AA.VV (Arranjament Raul Lacilla)", description: ".", embedUrl: "https://www.youtube.com/watch?v=68H8M7tt3oQ" },
      { title: "Caravan", composer: "Ellington", description: ".", embedUrl: "" },
      { title: "Anything goes", composer: "Porter", description: ".", embedUrl: "https://www.youtube.com/watch?v=6J2oRTI61yE" },
      { title: "Cabaret", composer: "John Kander", description: ".", embedUrl: "" },
    ]
  }
];
