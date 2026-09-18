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
    venue: "Castell de Sant Marçal",
    photo: "assets/Cartell_Castell2026.jpg",
    gallery: ["assets/Cartell_Castell2026.jpg"],
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
    date: "2025-11-22",
    dateLabel: "22 nov. 2025",
    title: "Concert de Santa Cecília",
    venue: "Teatre de l'Ateneu Municipal",
    photo: "",
    description: "Edició de l'any passat, centrada en repertori de pel·lícula i bandes sonores.",
    pieces: [
      { title: "Suite de John Williams", composer: "J. Williams (arr.)", description: "Medley de temes coneguts adaptat per a l'agrupació completa.", embedUrl: "" },
      { title: "Danzón núm. 2", composer: "A. Márquez", description: "Peça de caràcter llatí, amb protagonisme de la percussió.", embedUrl: "" }
    ],
    gallery: []
  },
  {
    date: "2025-06-14",
    dateLabel: "14 jun. 2025",
    title: "Concert de Primavera",
    venue: "Castell de Sant Marçal",
    photo: "",
    description: "La vint-i-tresena edició del concert a l'aire lliure, amb un homenatge al repertori popular català.",
    pieces: [
      { title: "Ball de Torrent", composer: "Trad. (arr.)", description: "Peça de cultura popular adaptada per a banda simfònica.", embedUrl: "" }
    ],
    gallery: []
  }
];
