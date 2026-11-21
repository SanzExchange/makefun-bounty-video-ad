// Entry program for my bring-the-humans-03 submission (Node 22, standard library only).
//
// The entry itself is the TikTok video named in VIDEO.json. All this program
// has to do is hand that file to the grader: it copies VIDEO.json from the
// repository root (the bot directory) into the output directory, byte for
// byte, so the reading of the video starts from the address I submitted.
//
// Locally the grader's /bot and /output are stood in for by the
// MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR environment variables:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`Could not copy VIDEO.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
