# Senem Kurtulmus · Portfolio

Personal portfolio of **Senem Kurtulmus**, Full-Stack Web Developer (PHP, Node.js, WordPress), built after a career change from dental healthcare to IT.

**Live site:** https://snmkrtlms.github.io/

## Highlights

- **Bilingual (FR/EN):** the language follows the browser on the first visit (French browsers get French, everything else gets English), and the visitor's choice is remembered.
- **Project carousel:** infinite loop, keyboard, swipe and dot navigation, lazy-loaded video previews (only the active card plays; paused when off-screen or when reduced motion is requested).
- **Contact form:** the email address is never exposed on the page. Messages are sent through [Formspree](https://formspree.io/), with client-side validation and a honeypot field against bots.
- **Responsive and accessible:** mobile-first layout, no horizontal overflow, "Skip to content" link, visible focus states, ARIA labels, `inert` on inactive carousel cards, `prefers-reduced-motion` support.
- **SEO and sharing:** Open Graph and Twitter tags, JSON-LD `Person` data, `sitemap.xml`, `robots.txt`, custom 404 page.

## Built with

- HTML5, CSS3 and vanilla JavaScript, with no framework and no build step
- Google Fonts (Geist, JetBrains Mono)
- Hosted on GitHub Pages

## Project structure

```
.
├── index.html        # Page structure and content
├── style.css         # All styles
├── script.js         # i18n, carousel, navigation, contact form
├── 404.html          # Custom not-found page (self-contained styles)
├── sitemap.xml
├── robots.txt
├── google….html      # Google Search Console verification
└── images/           # Logos, favicons, og-image, project screenshots and videos
```

## Run it locally

No installation needed. From the project folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Using a local server (rather than opening `index.html` directly) makes the video previews and relative paths behave like they do online.

## Editing notes

- **Texts:** all visible texts live in the `copy` object at the top of `script.js` (`fr` and `en`) and are linked to the HTML through `data-i18n` attributes.
- **Projects:** add a new `<article class="project">` inside `#projectTrack` in `index.html`, with its image or video in `images/` (2:1 ratio, 720×360 px for videos).
- **Cache:** after changing `style.css` or `script.js`, bump the `?v=` number in `index.html` so visitors get the new version.
- **404 page:** it uses absolute paths starting with `/`; update them if the site moves to another address or a custom domain.

## Contact

Use the contact form on the [portfolio](https://snmkrtlms.github.io/#contact) or find me on [LinkedIn](https://www.linkedin.com/in/senem-kurtulmus) and [GitHub](https://github.com/snmkrtlms).

## License

© Senem Kurtulmus. All rights reserved. The code and content of this repository are shown for portfolio purposes and may not be reused without permission.