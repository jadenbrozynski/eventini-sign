import type { TCssVarsSchema } from '../types/css-vars';

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * KEEP THIS FILE IN SYNC WITH `packages/ui/styles/theme.css`.
 *
 * These are the light-mode default values for the CSS custom properties
 * defined under `:root` in the theme stylesheet, exposed here as hex strings
 * so they can be used as defaults for colour-picker UI components and other
 * places that don't render through CSS variables.
 *
 * If you change a value in `theme.css`, update it here too. There is NO
 * automated check linking the two files; they have drifted historically
 * and will drift again unless you update both.
 *
 * Computed via `colord({ h, s, l }).toHex()` — see the inline HSL comments
 * for the source-of-truth values from `theme.css`.
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
export const DEFAULT_BRAND_COLORS = {
  background: '#ffffff', //              0 0% 100%
  foreground: '#1c1f24', // Eventini
  muted: '#f6f7f9', // Eventini
  mutedForeground: '#6b707d', // Eventini
  popover: '#ffffff', //                 0 0% 100%
  popoverForeground: '#1c1f24', // Eventini
  card: '#ffffff', //                    0 0% 100%
  cardBorder: '#dbdde3', // Eventini
  cardForeground: '#1c1f24', // Eventini
  fieldCard: '#f6f7f9', // Eventini
  fieldCardBorder: '#1c1f24', // Eventini
  fieldCardForeground: '#1c1f24', // Eventini
  widget: '#f7f7f7', //                  0 0% 97%
  widgetForeground: '#f2f2f2', //        0 0% 95%
  border: '#dbdde3', // Eventini
  input: '#dbdde3', // Eventini
  primary: '#1c1f24', // Eventini
  primaryForeground: '#ffffff', // Eventini
  secondary: '#f3f4f6', // Eventini
  secondaryForeground: '#1c1f24', // Eventini
  accent: '#f3f4f6', // Eventini
  accentForeground: '#1c1f24', // Eventini
  destructive: '#ff0000', //             0 100% 50%
  destructiveForeground: '#f8fafc', //   210 40% 98%
  ring: '#1c1f24', // Eventini
  warning: '#e1cb05', //                 54 96% 45%
  envelopeEditorBackground: '#f8fafc', //210 40% 98.04%
  // `cardBorderTint` is intentionally excluded from the colour-picker UI:
  // unlike the rest of these tokens it is consumed via `rgb(var(--token))`
  // (not `hsl(...)`) and stored as raw RGB triplets in `theme.css`. It does
  // not flow through `toNativeCssVars` and is not user-customisable from the
  // branding form. `radius` is a length, not a colour, so it lives in
  // `DEFAULT_BRAND_RADIUS` below.
} as const satisfies Record<keyof Omit<TCssVarsSchema, 'radius' | 'cardBorderTint'>, string>;

export const DEFAULT_BRAND_RADIUS = '0.5rem';
