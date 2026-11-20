# Eventini Sign: modifications to Documenso

This repository is a modified version of [Documenso](https://github.com/documenso/documenso),
forked from tag `v2.22.0` (commit `d32d049165db230820465b4f566061ba8fa27012`).
It is distributed under the same license, the GNU Affero General Public License v3.0 (see `LICENSE`).
Code under `packages/ee` stays under the Documenso Commercial License and is not enabled.

Modified by Eventini LLC on 2026-11-19 (AGPL-3.0 section 5(a) notice). Changes are visual
theming only. No signing, auth, storage or data-handling logic was changed:

- Black-and-white theme tokens and Tailwind palette (`packages/ui/styles/theme.css`,
  `packages/tailwind-config/index.cjs`, `packages/lib/constants/theme.ts`); light mode forced in
  `apps/remix/app/root.tsx`.
- Eventini logo, wordmark, favicons and page titles (`apps/remix/app/components/general/branding-logo*.tsx`,
  `apps/remix/public/*`, `apps/remix/app/utils/meta.ts`).
- Sign-in copy and layout without the background pattern; marketing links replaced with an
  attribution + "Source" footer (`eventini-source-footer.tsx`, signing pages, email footer).
- Certificate / audit-log accent colors changed from green to ink.
- Branding polish (2026-11-19): user-visible product name "Documenso" replaced with "Eventini Sign" in UI copy,
  email subjects and templates (AGPL credit line kept); Eventini assets in `packages/assets`; green/blue/yellow
  Tailwind palettes mapped to ink grays; public header with the Eventini lockup on signer and error pages.

Repository changes (not app behaviour): upstream GitHub Actions workflows removed (they target Documenso's own
infrastructure); `docker/Dockerfile` base image pinned by digest.

Documenso is a trademark of Documenso, Inc. Eventini Sign is not affiliated with or endorsed by Documenso, Inc.
