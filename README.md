# LINGSSOFT Site

Official LINGSSOFT homepage (Creative Tim template based)

## Overview
This repository hosts the official LINGSSOFT website built on Creative Tim’s Material Kit template. The template was purchased, and all template sources and design assets remain under Creative Tim copyright.

## Quick Start
- Recommended Node.js: v20+
- Package manager: npm (the repo ships with `package-lock.json`)

Install & run the dev server:
```bash
# Clean install (recommended for CI/builds)
npm ci

# Development server
npm start
```

Production build:
```bash
npm run build
# Output is generated under build/
```

Simple static preview (local testing):
```bash
# Serve without a global install
npx serve -s build -l 3002
```

## Environment Variables
- Keep secrets and environment-specific values in `.env` and document them via `.env.example`.
- Never commit `.env`; it is already ignored by `.gitignore`.

## License & Notices
- This project uses a paid Creative Tim premium template. A purchased license (e.g., Freelancer) lets you modify the sources for your project but prohibits redistributing the template files or reselling it as a template.
- If you need broader team access or redistribution rights, consider upgrading the license tier (Startup / Company / Enterprise).
- Full terms: https://www.creative-tim.com/license

## Recommended Maintenance
1. Run `npm audit` regularly to monitor security issues.
2. Plan a future migration from CRA (`react-scripts`) to a modern bundler such as Vite for faster builds and smaller bundles.
3. Keep the `homepage` field aligned with the actual deployment URL (currently `https://www.lingssoft.com` in `package.json`).

## Docker / CI Notes
- If you already have Dockerfile/docker-compose definitions, make sure CI uses `node:20`, runs `npm ci`, and then `npm run build`.
