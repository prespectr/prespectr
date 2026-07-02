# prespectr.com

Marketing landing page for **Prespectr** — private digital intelligence & reputation
defense for high-profile individuals. Static site, deployed via GitHub Pages.

## Stack

Plain HTML / CSS / JS — no build step.

- `index.html` — page markup
- `styles.css` — all styling (deep-navy "intelligence desk" theme)
- `main.js` — scroll reveals, nav state
- `assets/` — recolored logo marks for dark backgrounds
- `CNAME` — custom domain (`prespectr.com`)

## Design

- **Type:** Spectral (display serif), Hanken Grotesk (sans), Space Mono (labels)
- **Palette:** deep navy `#254868` brand (sampled from logo) with a sharp gold accent
- **Motion:** radar sweep in hero, staggered scroll reveals, marquee ticker

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push to a GitHub repo.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`.
3. The `CNAME` file points the site at `prespectr.com`. In your DNS, add the four
   GitHub Pages `A` records (185.199.108–111.153) for the apex domain, and a
   `www` `CNAME` → `<user>.github.io`.
4. Enable **Enforce HTTPS** once the certificate provisions.
