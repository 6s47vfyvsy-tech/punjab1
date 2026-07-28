# Punjab: Khalsa Raj to Today

A responsive illustrated static website about the shared history of Punjab in present-day India and Pakistan. The story begins with the golden age of the Khalsa Raj under Maharaja Ranjit Singh and continues through the Anglo-Sikh wars, British Punjab, anti-colonial movements, Partition, post-1947 development, conflict, migration and contemporary life.

## Features

- Opening feature on the Khalsa Raj and Lahore Darbar
- Filterable timeline with separate India, Pakistan and shared-history categories
- Balanced post-1947 sections for Punjab, India and Punjab, Pakistan
- Photo gallery using credited Wikimedia Commons images
- Responsive navigation and mobile layout
- Dedicated bibliography and photo-credit page
- No build tools or dependencies

## Run locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Files

- `index.html` — main website
- `styles.css` — layout, visual design and responsive rules
- `script.js` — timeline data, filters and mobile navigation
- `sources.html` — historical references and image credits
- `assets/images/` — location for optional offline image copies

## Image note

The included HTML loads photographs through Wikimedia Commons file redirects. Internet access is therefore required for images. For an offline edition, download each image listed on `sources.html`, place it in `assets/images/`, and change the image paths in `index.html`.

## License

The original website code may be reused for educational projects. Images and historical artworks retain the licenses shown on their source pages.
