import { Inter_Tight, Source_Serif_4, JetBrains_Mono } from 'next/font/google';

/**
 * Typography stack.
 *
 * Production licensing upgrade path (Klim Type Foundry):
 *  · Söhne replaces Inter Tight   — klim.co.nz/typefaces/soehne
 *  · Tiempos Text replaces Source Serif 4 — klim.co.nz/typefaces/tiempos-text
 *  · Söhne Mono replaces JetBrains Mono   — klim.co.nz/typefaces/soehne-mono
 *
 * To swap: place font files in /public/fonts/, replace the imports below
 * with next/font/local equivalents. Keep the CSS variable names unchanged —
 * the rest of the system reads only from --font-sans, --font-serif, --font-mono.
 */

export const fontSans = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  display: 'swap',
  variable: '--font-sans',
});

export const fontSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
});

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

export const fontClassNames = [
  fontSans.variable,
  fontSerif.variable,
  fontMono.variable,
].join(' ');
