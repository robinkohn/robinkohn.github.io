# T & R Formwork — Website

A static, mobile-first website for T & R Formwork (Perth, WA), built with plain HTML/CSS/JS — no build step, no backend. Ready to push straight to GitHub Pages.

## Quick start — get this live in 5 minutes

1. Create a new **public** GitHub repository (e.g. `tandrformwork-website`).
2. Upload every file in this folder to the root of that repository (drag-and-drop works fine on github.com, or use the git commands below).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Click **Save**. GitHub will publish the site at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

Using git from the command line instead:
```bash
cd site
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```
Then do steps 3–5 above.

(Optional) To use your own domain instead of the `github.io` address: add it under the same **Settings → Pages** screen, and create a `CNAME` DNS record pointing to `<your-username>.github.io`.

## Before you publish — replace placeholders

The site is fully built and functional, but ships with a few placeholders that **should be updated** before going live:

| What | Where | Replace with |
|---|---|---|
| Images | `assets/images/*.svg` | Real photos of recent jobs — see "Adding real photos" below. |
| Phone numbers | `index.html` — search for `0400 000 000` and `0400 000 001` | Real numbers, in `tel:+61...` format for the link and human-readable format for the visible text. |
| Email addresses | `index.html` — search for `tandrformwork.com.au` | Real email addresses for Toby and Roger. |
| Domain | `index.html` — search for `tandrformwork.com.au` (canonical link, Open Graph tags, and the structured-data script near the top of `<head>`), plus `robots.txt` and `sitemap.xml` | Your real domain, once you have one. |

## Adding real photos

1. Export photos at roughly **1200×900px** (4:3), optimised as `.jpg` (quality ~75–80) or `.webp` for smaller file size.
2. Drop them into `assets/images/`, e.g. `project-01.jpg`.
3. In `index.html`, update each `<img src="assets/images/project-01.svg" ...>` to point at your new file, and write a real, specific `alt` description (e.g. `alt="Suspended slab formwork, Osborne Park"`) — descriptive alt text also helps the site rank in Google Image search.
4. Do the same for `hero-bg` (wide, ~1920×1200) and `about` (portrait, ~1000×1200).
5. Delete the placeholder `.svg` files once replaced.

## Local preview

No build tools required. Either:

- Open `index.html` directly in a browser, or
- Run a tiny local server (recommended, avoids some path quirks):
  ```bash
  cd site
  python3 -m http.server 8000
  ```
  Then visit `http://localhost:8000`.

## Getting in touch

There's no contact form — visitors reach Toby or Roger directly via the phone and email links in the Contact section (and via the header/hero call-to-action, which scrolls down to Contact). These use `tel:` and `mailto:` links, so no backend or third-party form service is needed.

## What's been done for SEO

- **Title & meta description** targeted at "formwork Perth" and the core services, under Google's recommended length.
- **Semantic content** covering the phrases people actually search for: suspended slab formwork ("temporary moulds and support frameworks for elevated concrete floors"), architectural concrete (off-form elements, radius/curved walls, specialised upstands), custom stairs, and residential builds — each with its own heading in the Services section, not just keywords stuffed into one paragraph.
- **Structured data** (JSON-LD, in `<head>`) marking the business up as a `GeneralContractor` with its services, founders, founding date and service area — this is what lets Google show rich results (like a knowledge panel or service list) instead of just a blue link.
- **`robots.txt`** and **`sitemap.xml`** at the site root so search engines can find and crawl the site immediately — update the domain inside both once you have one.
- **Canonical URL, Open Graph and Twitter card tags** so links shared on social media or messaging apps show a proper preview instead of a bare URL.
- **One `<h1>` per page, one `<h2>` per section**, descriptive `alt` text on every image, and a semantic `<address>` in the footer — all things Google's crawler uses to understand page structure.
- **Fast, lightweight, and mobile-friendly** — no frameworks or render-blocking scripts, and Google uses mobile page experience as a ranking factor.

**One thing you'll need to do yourself:** once the site is live at its real domain, submit `sitemap.xml` to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters) — this is free and is what actually gets a brand-new site indexed quickly, rather than waiting for Google to stumble across it.

## File structure

```
index.html          Page markup (all sections)
css/style.css        All styling — mobile-first, with tablet/desktop breakpoints
js/main.js           Mobile nav toggle, gallery lightbox
assets/images/       Images (currently placeholder graphics — see above)
assets/favicon.svg   Browser tab icon
robots.txt           Crawler rules + sitemap pointer
sitemap.xml          Lists the page(s) for search engines to crawl
```

## Notes

- Fonts (Barlow / Barlow Condensed) load from Google Fonts via CDN — the only external dependency.
- No frameworks, no npm install, no build step.
- Tested layout breakpoints: mobile (<640px), tablet (640–899px), small laptop (900–1199px), desktop (≥1200px).
