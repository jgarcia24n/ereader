// Simple icon generator using Canvas API
// Run with: node generate-icons.js

const fs = require('fs');
const { createCanvas } = require('canvas');

function generateIcon(size, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#2563eb');
  gradient.addColorStop(1, '#1e40af');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // Book icon (scaled proportionally)
  const scale = size / 192;
  ctx.fillStyle = 'white';
  ctx.fillRect(50 * scale, 40 * scale, 92 * scale, 112 * scale);
  ctx.fillStyle = '#2563eb';
  ctx.fillRect(55 * scale, 45 * scale, 82 * scale, 102 * scale);
  ctx.fillStyle = 'white';
  ctx.fillRect(65 * scale, 60 * scale, 30 * scale, 4 * scale);
  ctx.fillRect(65 * scale, 75 * scale, 50 * scale, 4 * scale);
  ctx.fillRect(65 * scale, 90 * scale, 50 * scale, 4 * scale);
  ctx.fillRect(65 * scale, 105 * scale, 40 * scale, 4 * scale);

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
  console.log(`✓ Created ${filename} (${size}x${size})`);
}

// Generate both icons
try {
  generateIcon(192, 'icon-192.png');
  generateIcon(512, 'icon-512.png');
  console.log('\n✅ Icons generated successfully!');
} catch (error) {
  console.error('❌ Error:', error.message);
  console.log('\nTo use this script:');
  console.log('1. npm install canvas');
  console.log('2. node generate-icons.js');
}
