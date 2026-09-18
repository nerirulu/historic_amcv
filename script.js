/* ============================================================
   PLACEHOLDER PHOTO — swap for a real <img> once you have photos
   ============================================================ */
function placeholderSvg(){
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <rect width="100" height="100" fill="#FFB3C1"/>
    <circle cx="70" cy="28" r="10" fill="#FFF4F0" opacity="0.7"/>
    <path d="M0 78 L28 52 L48 70 L68 46 L100 78 L100 100 L0 100 Z" fill="#FF4D6D" opacity="0.55"/>
  </svg>`;
}
function thumbHtml(concert){
  return concert.photo
    ? `<img src="${concert.photo}" alt="${concert.title}">`
    : placeholderSvg();
}

/* ============================================================
   RENDER LOGIC
   ============================================================ */
const trackEl = document.getElementById('track');
const yearFilterEl = document.getElementById('yearFilter');
const countEl = document.getElementById('resultCount');
const catFilterEl = document.getElementById('catFilter');

const CATEGORIES = [
  { id: 'castell', label: 'Castell' },
  { id: 'nadal', label: 'Nadal' },
  { id: 'santa-cecilia', label: 'Santa Cecília' },
  { id: 'passacarrers', label: 'Passacarrers' },
  { id: 'primavera', label: 'Primavera' },
  { id: 'festa-major', label: 'Festa Major' },
  { id: 'altres', label: 'Altres' }
];
const CATEGORY_LABELS = Object.fromEntries(CATEGORIES.map(c => [c.id, c.label]));
let currentCategory = 'all';

function categorySlug(concert){
  return concert.category && CATEGORIES.some(c => c.id === concert.category) ? concert.category : 'altres';
}

function uniqueYears(data){
  return [...new Set(data.map(c => c.date.slice(0,4)))].sort((a,b) => b.localeCompare(a));
}
function populateYearFilter(){
  uniqueYears(CONCERTS).forEach(y => {
    const opt = document.createElement('option');
    opt.value = y; opt.textContent = y;
    yearFilterEl.appendChild(opt);
  });
}

function entryTemplate(concert, i, position){
  const cat = categorySlug(concert);
  return `
    <div class="entry ${position} cat-${cat}" data-index="${i}">
      <div class="stem"></div>
      <div class="dot" data-open="${i}" tabindex="0" role="button" aria-label="Obre ${concert.title}"></div>
      <span class="date-tag">${concert.dateLabel}</span>
      <div class="card" data-open="${i}">
        <div class="thumb">${thumbHtml(concert)}</div>
        <div class="card-text">
          <p class="title">${concert.title}</p>
          <span class="venue">${concert.venue}</span>
          <span class="mini-date">${concert.dateLabel}</span>
          <span class="cat-tag">${CATEGORY_LABELS[cat]}</span>
        </div>
      </div>
    </div>
  `;
}

let currentData = [];

function render(filterYear){
  currentData = CONCERTS
    .filter(c => filterYear === 'all' || c.date.startsWith(filterYear))
    .filter(c => currentCategory === 'all' || categorySlug(c) === currentCategory)
    .sort((a,b) => a.date.localeCompare(b.date));

  const html = currentData
    .map((c, i) => entryTemplate(c, i, i % 2 === 0 ? 'up' : 'down'))
    .join('');

  trackEl.innerHTML = '<div class="rail-line"></div>' + html;
  countEl.textContent = currentData.length + (currentData.length === 1 ? ' concert' : ' concerts');

  trackEl.querySelectorAll('[data-open]').forEach(el => {
    el.addEventListener('click', () => openModal(parseInt(el.getAttribute('data-open'), 10)));
    el.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openModal(parseInt(el.getAttribute('data-open'), 10)); }
    });
  });
}

function renderCategoryButtons(){
  const buttons = [
    `<button class="cat-btn active" data-cat="all"><span class="swatch"></span>Tots</button>`,
    ...CATEGORIES.map(c => `<button class="cat-btn cat-${c.id}" data-cat="${c.id}"><span class="swatch"></span>${c.label}</button>`)
  ].join('');
  catFilterEl.innerHTML = buttons;
  catFilterEl.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.getAttribute('data-cat');
      catFilterEl.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b === btn));
      render(yearFilterEl.value);
    });
  });
}

/* ---------------- modal ---------------- */
const overlay = document.getElementById('modalOverlay');
const modalThumb = document.getElementById('modalThumb');
const modalDate = document.getElementById('modalDate');
const modalTitle = document.getElementById('modalTitle');
const modalVenue = document.getElementById('modalVenue');
const modalDesc = document.getElementById('modalDesc');
const modalPieces = document.getElementById('modalPieces');
const modalGallery = document.getElementById('modalGallery');
const lightbox = document.getElementById('lightbox');
let lastFocused = null;

function videoId(embedUrl){
  const youtu = embedUrl.match(/youtu\.be\/([\w-]+)/);
  if(youtu) return youtu[1];
  const watch = embedUrl.match(/[?&]v=([\w-]+)/);
  if(watch) return watch[1];
  const emb = embedUrl.match(/\/embed\/([\w-]+)/);
  if(emb) return emb[1];
  return null;
}

function toEmbedUrl(embedUrl){
  const id = videoId(embedUrl);
  if(id) return 'https://www.youtube.com/embed/' + id;
  return embedUrl;
}

function externalLink(embedUrl){
  const id = videoId(embedUrl);
  if(id) return { href: 'https://www.youtube.com/watch?v=' + id, label: 'Obrir a YouTube' };
  if(/vimeo/i.test(embedUrl)) return { href: embedUrl, label: 'Obrir a Vimeo' };
  if(/drive\.google/i.test(embedUrl)) return { href: embedUrl, label: 'Obrir' };
  return { href: embedUrl, label: 'Obrir vídeo' };
}

function hasVideo(piece){
  return !!(piece.embedUrl && piece.embedUrl.trim());
}

function pieceTemplate(piece, idx){
  const videoBlock = hasVideo(piece)
    ? (() => {
        const ext = externalLink(piece.embedUrl);
        return `
        <button class="video-toggle" data-video-idx="${idx}">Veure la gravació</button>
        <a class="video-ext" href="${ext.href}" target="_blank" rel="noopener">${ext.label} ↗</a>
        <div class="video-frame" style="display:none;" data-video-frame="${idx}"></div>`;
      })()
    : '';
  return `
    <li class="piece">
      <p class="piece-title">${piece.title}</p>
      <p class="piece-composer">${piece.composer}</p>
      <p class="piece-desc">${piece.description}</p>
      ${videoBlock}
    </li>
  `;
}

function galleryTemplate(concert){
  const imgs = concert.gallery || [];
  if(!imgs.length) return '';
  const thumbs = imgs.map((src, i) =>
    `<img class="g-thumb" src="${src}" alt="${concert.title} — foto ${i+1}" data-src="${src}">`
  ).join('');
  return `<h3 class="g-title">Fotos del concert</h3><div class="g-grid">${thumbs}</div>`;
}

function openModal(index){
  const concert = currentData[index];
  if(!concert) return;
  lastFocused = document.activeElement;

  modalThumb.innerHTML = thumbHtml(concert);
  modalDate.textContent = concert.dateLabel;
  modalTitle.textContent = concert.title;
  modalVenue.textContent = concert.venue;
  modalDesc.textContent = concert.description;
  modalPieces.innerHTML = concert.pieces.map((p, idx) => pieceTemplate(p, idx)).join('');

  modalGallery.innerHTML = galleryTemplate(concert);
  modalGallery.querySelectorAll('.g-thumb').forEach(t => {
    t.addEventListener('click', () => openLightbox(t.getAttribute('data-src'), concert.title));
  });

  modalPieces.querySelectorAll('.video-toggle').forEach(vbtn => {
    vbtn.addEventListener('click', () => {
      const idx = vbtn.getAttribute('data-video-idx');
      const frame = vbtn.parentElement.querySelector(`[data-video-frame="${idx}"]`);
      const isShown = frame.style.display !== 'none';
      if(isShown){
        frame.style.display = 'none';
        frame.innerHTML = '';
        vbtn.textContent = 'Veure la gravació';
      } else {
        const piece = concert.pieces[idx];
        frame.innerHTML = `<iframe src="${toEmbedUrl(piece.embedUrl)}" title="${piece.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        frame.style.display = 'block';
        vbtn.textContent = 'Amagar la gravació';
      }
    });
  });

  overlay.classList.add('open');
  document.getElementById('modalClose').focus();
  document.addEventListener('keydown', onModalKeydown);
}

function closeModal(){
  overlay.classList.remove('open');
  document.removeEventListener('keydown', onModalKeydown);
  if(lastFocused) lastFocused.focus();
}

/* ---------------- gallery lightbox ---------------- */
function openLightbox(src, title){
  const img = lightbox.querySelector('img');
  img.src = src;
  img.alt = title || '';
  lightbox.classList.add('open');
}
function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.querySelector('img').src = '';
}
lightbox.addEventListener('click', closeLightbox);

function onModalKeydown(e){
  if(e.key === 'Escape'){
    if(lightbox.classList.contains('open')) closeLightbox();
    else closeModal();
  }
}

document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if(e.target === overlay) closeModal(); });

/* ---------------- scroller nav buttons ---------------- */
document.querySelector('.nav-prev').addEventListener('click', () => {
  trackEl.scrollBy({ left: -280, behavior: 'smooth' });
});
document.querySelector('.nav-next').addEventListener('click', () => {
  trackEl.scrollBy({ left: 280, behavior: 'smooth' });
});

yearFilterEl.addEventListener('change', () => render(yearFilterEl.value));

populateYearFilter();
renderCategoryButtons();
render('all');
