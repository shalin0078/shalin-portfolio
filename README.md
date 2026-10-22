# Shalin Rathod — Portfolio

A static personal portfolio built with HTML, CSS, and JavaScript. It has no build step: serve this directory as the web root.

## Preview locally

Open `index.html` in a browser, or run a local static web server from this directory.

## Update the content

Edit `content.js` to add or update certificate cards and headline/blog entries. Certificate scans belong in `assets/`; use their relative paths in each certificate's `image` field. Certificate cards open a detail view with the description and credential context.

## Deploy

Copy the contents of this directory to the web root configured for the portfolio's domain on the VPS. Configure the web server to serve `index.html` for `/` and enable HTTPS for the chosen domain. No application runtime or database is required.

## SEO setup

The page includes a descriptive title and summary, canonical URL, Open Graph and social-card metadata, connected `WebSite` and `Person` structured data, an SVG favicon, a 1200×630 social preview, `robots.txt`, and `sitemap.xml`. The hero portrait is served as WebP and certificate images are lazy-loaded. The canonical address is currently `https://www.shalinrathod.in/`. If deployment uses another domain or subdomain, update that address in `index.html`, `robots.txt`, and `sitemap.xml` before publishing, then redirect all alternate host and HTTP variants to the canonical HTTPS URL.

After the domain is live over HTTPS:

1. Verify the domain in Google Search Console and Bing Webmaster Tools.
2. Submit `/sitemap.xml` to both, then inspect the home page for crawl and indexing issues.
3. Use Bing Webmaster Tools' AI Performance report to watch for citations in Copilot and other supported answer surfaces as data becomes available.
4. Ask for third-party references from real collaborators, incubators, event organisers, and projects where Shalin contributed. Keep LinkedIn, GitHub, and the portfolio name, role, and links consistent.
5. Add a first-person case study for each shipped project with Shalin's role, the problem, what was built, technical choices, constraints, verified outcomes, and links to the live product or source. Keep concepts clearly labelled and avoid unsupported metrics.

Google says its AI Search uses the same crawlable, indexed content and foundational SEO systems, does not require special AEO/GEO markup or an `llms.txt` file, and does not guarantee indexing or display. Bing supports IndexNow for faster URL-change notifications; it is an optional addition after the final domain is confirmed.

The portfolio is a separate site; it does not modify the SMIDI Grow app in the parent workspace.
