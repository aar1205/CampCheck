#!/usr/bin/env node
/**
 * Generiert PNG-Favicons aus dem SVG
 * Nutzt sharp (bereits in Next.js enthalten)
 * 
 * Usage: node scripts/generate-png-icons.mjs
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mstile-150x150.png', size: 150 },
];

async function generateIcons() {
  console.log('🎨 Generiere PNG-Icons...\n');
  
  const svgPath = join(publicDir, 'icon.svg');
  const svgBuffer = readFileSync(svgPath);
  
  for (const { name, size } of sizes) {
    const outputPath = join(publicDir, name);
    
    try {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`  ✅ ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`  ❌ Fehler bei ${name}:`, error.message);
    }
  }
  
  console.log('\n🎉 Alle Icons generiert!');
  console.log(`📁 Gespeichert in: ${publicDir}`);
}

generateIcons().catch(err => {
  console.error('❌ Fehler:', err);
  process.exit(1);
});
