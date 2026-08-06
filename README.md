# Timestamp Finder — Marketing Site

Source for [timestampfinder.com](https://timestampfinder.com), the marketing site for **Timestamp Finder** — search any YouTube video's transcript by keyword and jump straight to the moment it's said.

🔗 **Product:** [timestampfinder.com](https://timestampfinder.com)
🧩 **Get the extension:** [Chrome Web Store](#) · Firefox (coming soon)

This folder is the source for the live site — kept here for version history and as part of the product record, not as a template meant for others to spin up.

## What this is

Timestamp Finder is a live, shipped product. This repo documents how it's built; it isn't an invite to fork, self-host, or run a competing instance. See [LICENSE](../../LICENSE) for terms.

## Stack

- Static site hosted on Cloudflare
- Part of the `timestamp-finder` monorepo, alongside the [extension](../extension)

## Structure

```
apps/web/
├── public/           # favicon, og-image, brand assets
├── src/
│   ├── components/
│   ├── pages/
│   └── styles/
└── README.md
```

## Notes

- **Privacy Policy** is linked in both nav and footer — required for the Chrome Web Store listing.
- Primary CTA is the Chrome Web Store; Firefox is secondary.
- Brand assets (favicon, icons) stay in sync with the extension icon set.
- Deploys to Cloudflare automatically on merge to `main`.

## License

See [LICENSE](../../LICENSE) in the repo root.