# Soroban Cookbook

[![CI](https://github.com/Soroban-Cookbook/Soroban_Cookbook_online/actions/workflows/ci.yml/badge.svg)](https://github.com/Soroban-Cookbook/Soroban_Cookbook_online/actions/workflows/ci.yml)
[![CD - Deploy to GitHub Pages](https://github.com/Soroban-Cookbook/Soroban_Cookbook_online/actions/workflows/deploy.yml/badge.svg)](https://github.com/Soroban-Cookbook/Soroban_Cookbook_online/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Docusaurus](https://img.shields.io/badge/built%20with-Docusaurus-3ECC5F?style=flat-square&logo=docusaurus)](https://docusaurus.io)
[![Stellar](https://img.shields.io/badge/powered%20by-Stellar-7B61FF?style=flat-square)](https://stellar.org)

A community-driven documentation site for [Soroban](https://developers.stellar.org/docs/smart-contracts) — Stellar's smart contract platform. Covers everything from environment setup to advanced contract patterns, written in Rust.

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development Scripts](#development-scripts)
- [Documentation Sections](#documentation-sections)
- [CI/CD Pipeline](#cicd-pipeline)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Resources](#resources)
- [License](#license)

---

## Overview

The Soroban Cookbook is a documentation website that helps developers learn Soroban smart contract development through:

- Progressive learning paths from beginner to advanced
- Real-world contract patterns and examples written in Rust
- Interactive code examples (planned)
- Dark mode support and responsive design

Built with [Docusaurus 3](https://docusaurus.io/) and deployed to GitHub Pages and Vercel.

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Soroban-Cookbook/Soroban_Cookbook_online.git
cd Soroban_Cookbook_online

# Install dependencies
cd documentation
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Project Structure

```
Soroban_Cookbook_online/
├── .github/
│   └── workflows/
│       ├── ci.yml              # Lint, typecheck, build checks
│       ├── deploy.yml          # GitHub Pages deployment
│       └── validate-setup.yml  # Setup validation
├── documentation/
│   ├── docs/                   # Markdown/MDX documentation content
│   │   ├── concepts/           # Core Soroban concepts
│   │   ├── getting-started/    # Setup and first contract guides
│   │   ├── patterns/           # Reusable contract patterns
│   │   └── design-system/      # UI component docs
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── css/                # Global styles and design tokens
│   │   └── pages/              # Custom Docusaurus pages
│   ├── static/                 # Static assets
│   ├── docusaurus.config.ts    # Site configuration
│   └── sidebars.ts             # Sidebar navigation config
├── CI_CD_PIPELINE.md
├── CONTRIBUTING.md
├── DEPLOYMENT.md
└── vercel.json
```

---

## Installation

### Prerequisites

- Node.js 20+
- Git

### Steps

```bash
git clone https://github.com/Soroban-Cookbook/Soroban_Cookbook_online.git
cd Soroban_Cookbook_online/documentation
npm install
```

To use npm instead:

```bash
npm install
```

---

## Development Scripts

Run these from the `documentation/` directory:

```bash
npm start            # Start dev server with live reload
npm run build        # Build for production
npm run serve        # Serve the production build locally
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint code quality checks
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format code with Prettier
npm run format:check # Check formatting without writing
```

### Pre-push checklist

```bash
cd documentation
npm ci
npm run format:check && npm run lint && npm run typecheck && npm run build
```

---

## Documentation Sections

| Section | Description |
|---|---|
| [Getting Started](documentation/docs/getting-started/) | Environment setup, first contract, testnet deployment |
| [Concepts](documentation/docs/concepts/) | Storage, authorization, events, and core architecture |
| [Patterns](documentation/docs/patterns/) | Reusable smart contract patterns |
| [Design System](documentation/docs/design-system/) | UI components, typography, and tokens |

### Adding New Content

1. Create a `.md` or `.mdx` file in the appropriate `documentation/docs/` subdirectory
2. Add frontmatter:

```mdx
---
sidebar_position: 1
title: My Pattern
description: Brief description of the pattern
---
```

3. Update `documentation/sidebars.ts` if needed for navigation

---

## CI/CD Pipeline

GitHub Actions runs automated checks on every pull request and push to `main`.

### CI checks (ci.yml)

| Job | What it checks |
|---|---|
| Lint & Format | Prettier formatting + ESLint |
| TypeScript Check | Type safety via `tsc` |
| Build Documentation | Full Docusaurus production build |
| Validate Deployment | Lockfile and workflow config validation |

### CD deployment (deploy.yml)

Automatically deploys to GitHub Pages on every push to `main`.

See [CI_CD_PIPELINE.md](CI_CD_PIPELINE.md) for full pipeline documentation.

---

## Deployment

### GitHub Pages (automatic)

Deploys automatically via GitHub Actions on push to `main`. Requires:

- Settings → Pages → Source set to "GitHub Actions"
- Settings → Actions → General → "Read and write permissions"

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Soroban-Cookbook/Soroban_Cookbook_online)

Import the repo in Vercel — it picks up `vercel.json` automatically.

### Manual trigger

Go to Actions → "CD - Deploy to GitHub Pages" → Run workflow.

See [DEPLOYMENT.md](DEPLOYMENT.md) for full deployment documentation.

---

## Contributing

Contributions are welcome. Ways to help:

- Add new contract examples or patterns
- Improve or fix existing documentation
- Enhance UI components
- Report bugs or suggest improvements

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines, code style, and the PR process.

---

## Roadmap

### Phase 1 — Setup (complete)

- [x] Docusaurus site with TypeScript
- [x] Core documentation structure
- [x] CI/CD pipeline
- [x] GitHub Pages + Vercel deployment

### Phase 2 — Content (in progress)

- [ ] Getting started guides
- [ ] Smart contract patterns
- [ ] Code examples with tests
- [ ] Best practices documentation

### Phase 3 — Interactivity

- [ ] Monaco Editor / live code playground
- [ ] Algolia DocSearch
- [ ] Difficulty badges

### Phase 4 — Advanced

- [ ] Server-side compilation API
- [ ] Real testnet deployment examples
- [ ] Video tutorials

---

## Resources

- [Soroban Documentation](https://developers.stellar.org/docs/smart-contracts)
- [Soroban SDK Reference](https://docs.rs/soroban-sdk)
- [Soroban Examples](https://github.com/stellar/soroban-examples)
- [Stellar Developer Portal](https://developers.stellar.org/)
- [Stellar Discord](https://discord.gg/stellardev)
- [Docusaurus Docs](https://docusaurus.io/docs)

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

Built by the community · Powered by [Stellar](https://stellar.org) · Written in Rust

