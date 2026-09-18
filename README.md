# Arxiu de Concerts — band timeline site

A self-contained starting point for an interactive concert timeline with embedded performance videos.

## Files

- `index.html` — the page structure
- `style.css` — all styling (colors, layout, timeline, modal)
- `data.js` — **your content lives here.** One object per concert, with a list of pieces played and a video embed link for each.
- `script.js` — the logic that renders the timeline and powers the click-to-open detail modal
- `assets/` — put your real concert/band photos here once you have them

## Editing your content

Open `data.js`. Each concert looks like this:

```js
{
  date: "2026-11-21",              // YYYY-MM-DD, used for sorting/filtering
  dateLabel: "21 nov. 2026",       // however you want the date displayed
  title: "Concert de Santa Cecília",
  venue: "Teatre de l'Ateneu Municipal",
  photo: "",                       // e.g. "assets/santa-cecilia-2026.jpg" once you have one
  gallery: ["assets/1.jpg", "assets/2.jpg"],  // optional images of the concert, shown in the detail view
  description: "A short paragraph about the concert.",
  pieces: [
    {
      title: "Piece name",
      composer: "Composer name",
      description: "A sentence or two about the piece.",
      embedUrl: "https://www.youtube.com/embed/VIDEO_ID"   // or a Vimeo/Drive embed link
    }
  ]
}
```

To add a new concert, copy one of the existing objects, change the values, and add it to the `CONCERTS` array — no other code needs to change.

### Getting embed links
- **YouTube:** on the video, click Share → Embed, and copy just the `src` URL from the `<iframe>` (looks like `https://www.youtube.com/embed/VIDEO_ID`). Short share links (`https://youtu.be/VIDEO_ID`) and `youtube.com/watch?v=...` links also work — the page converts them automatically. If a video's owner disables embedding, it can't play inline; the "Obrir a YouTube" link next to it still opens it in a new tab.
- **Vimeo:** click Share → Embed, same idea (`https://player.vimeo.com/video/VIDEO_ID`).
- **Google Drive:** get the shareable link, take the file ID from it, and use `https://drive.google.com/file/d/FILE_ID/preview`.

Leave `embedUrl: ""` (or omit the field) on a piece that has no recording — the "Veure la gravació" button won't appear for it.

### Adding photos
Drop image files into `assets/`, then set `photo: "assets/your-file.jpg"` on the matching concert. Leave it as `""` to keep the placeholder graphic.

For extra pictures of a concert (shown under "Fotos del concert" in the detail view), list them in the `gallery` array — each is a path to a file in `assets/` (or any URL). Clicking a thumbnail opens it full-screen.

## Running it locally
No build step needed. **Important:** don't open `index.html` directly via `file://` (e.g. double-clicking it) — without an HTTP origin, the YouTube video player will show **"video player configuration error"** and the page may block the scripts. Serve the folder over HTTP instead, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Publishing it for free
Push this folder to a GitHub repository and turn on **GitHub Pages** (Settings → Pages → deploy from branch), or drag the folder into **Netlify Drop** (netlify.com/drop). Either gives you a free public URL, and updates whenever you push new changes.
