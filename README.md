# Timestamp Finder — Marketing Site

Landing page for [Timestamp Finder](https://timestampfinder.com), a Chrome extension that lets you search YouTube video transcripts by keyword and jump straight to the moment it's said.

🔗 **Live site:** [timestampfinder.com](https://timestampfinder.com)
🧩 **Extension repo:** [`apps/extension`](../extension)

## Stack

- Static site hosted on Cloudflare
- Part of the `timestamp-finder` pnpm monorepo

## Development

```bash
# from repo root
pnpm install

# run the web app
pnpm --filter web dev
```

The site runs locally at `http://localhost:<port>`.

### Build

```bash
pnpm --filter web build
```

Output is deployed to Cloudflare on merge to `main`.

## Structure

```
apps/web/
├── public/           # static assets (favicon, og-image, etc.)
├── src/
│   ├── components/
│   ├── pages/
│   └── styles/
└── README.md
```

## Content notes

- **Privacy Policy** is linked in both the nav and footer — required for Chrome Web Store listing, don't remove.
- Primary CTA points to the Chrome Web Store; Firefox is secondary.
- Brand assets (favicon, icons) should stay in sync with the extension's icon set in `apps/extension`.

## Deployment

Pushes to `main` auto-deploy via Cloudflare. No manual deploy step required.

## License

MIT — see [LICENSE](../../LICENSE) in the repo root.