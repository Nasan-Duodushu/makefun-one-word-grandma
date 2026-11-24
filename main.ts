// One Word From Grandma: exactly one word — the word a grandma would text
// about AI, equal parts wonder and suspicion.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), 'Witchcraft');
