# Aron Sai

A minimal, permanently dark hub linking to live GitHub Pages projects and the
[aronsai GitHub profile](https://github.com/aronsai). Plain HTML and CSS; no
JavaScript, dependencies, or build step.

## Preview

From this repository's root, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ and http://127.0.0.1:8000/404.html.
Python's preview server uses its own response for missing URLs; GitHub Pages
serves the custom `404.html` for those requests.

## Update links

Edit the list in `index.html`. Use the project's live HTTPS Pages URL and a short
project name, and keep the GitHub profile link last. Links open in the same tab.
Verify each destination before adding it. Shared styles live in `css/main.css`.

## Publishing

Production URL: https://aronsai.github.io/.

For branch-root publishing, configure this repository's GitHub **Settings → Pages**
to **Deploy from a branch**, branch **master**, folder **/(root)**. After review,
push changes to that branch to publish. No build command is required; `.nojekyll`
bypasses Jekyll processing. Check the Pages deployment and live links after publishing.

This is a root-domain site, with no repository URL prefix. The 404 page uses
root-relative stylesheet and home links so it also works for missing nested paths.
If moving to a project URL or subdirectory, update those root-relative paths.
