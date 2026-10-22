# Shalin Rathod — Portfolio

A static personal portfolio built with HTML, CSS, and JavaScript. It has no build step: serve this directory as the web root.

## Preview locally

Open `index.html` in a browser, or run a local static web server from this directory.

## Update the content

Edit `content.js` to add or update certificate cards and headline/blog entries. Certificate scans belong in `assets/`; use their relative paths in each certificate's `image` field. Certificate cards open a detail view with the description and credential context.

## Deploy

Copy the contents of this directory to the web root configured for the portfolio's domain on the VPS. Configure the web server to serve `index.html` for `/` and enable HTTPS for the chosen domain. No application runtime or database is required.

The portfolio is a separate site; it does not modify the SMIDI Grow app in the parent workspace.
