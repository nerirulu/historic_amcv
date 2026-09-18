/* ============================================================
   YOUR DATA "DATABASE"
   Add a new object to this array for every new concert.
   - photo: path/URL to a real photo once hosted on your own site
            (leave "" to show the placeholder used in this sketch)
   - embedUrl per piece: a YouTube embed link, a Vimeo embed link,
     or a Google Drive preview link — all three work the same way.
   ============================================================ */
const CONCERTS = [
 
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
  },
  
  {
    date: "2021-06-14",
    dateLabel: "14 jun. 2021",
    title: "Un Castell de Musicals",
    category: "castell",
    venue: "Castell de Sant Marçal",
    photo: "assets/2021/castell musicals/Cartell_Castell2021.jpg",
    description: "Després de rependre l'activitat rere la Covid, tornem a l'aire lliure amb un programa de musicals. Malauradament no vam poder comptar amb el director Raul Lacilla, i a últim moment es va incorporar l'ex-director Gerard Pastor.",
    pieces: [
      
      { title: "West Side Story", composer: "Bernstein", description: "Primera part complicada amb molt esforç tècnic.", embedUrl: "" }
    ],
    gallery: ["assets/2021/castell musicals/IMG_9418.jpg"]
  },
  {
    date: "2021-05-02",
    dateLabel: "2 May 2021",
    title: "Concert Festa Major 2021",
    category: "festa-major",
    venue: "Ateneu de Cerdanyola",
    photo: "assets/2021/festa major/IMG_6184.jpg",
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
    gallery: ["assets/2021/festa major/IMG_6184.jpg","assets/2021/festa major/IMG_6188.jpg","assets/2021/festa major/IMG_6183.jpg","assets/2021/festa major/IMG_6189.jpg","assets/2021/festa major/IMG_6191.jpg","assets/2021/festa major/IMG_6200.jpg"]
  },
  {
    date: "2021-11-19",
    dateLabel: "19 nov. 2021",
    title: "Santa Cecília 2021",
    category: "santa cecília",
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
  }
];
