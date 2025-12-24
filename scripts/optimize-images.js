import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  hero: {
    input: path.join(__dirname, '../src/assets/tim-foster-RI5vBBS77fQ-unsplash.jpg'),
    outputDir: path.join(__dirname, '../src/assets/hero'),
    sizes: [640, 768, 1024, 1280, 1920, 2560],
    formats: [
      { ext: 'webp', quality: 75 },
      { ext: 'jpg', quality: 80 }
    ]
  },
  trailMap: {
    input: path.join(__dirname, '../src/assets/Cedar_Bay_fatbike_trail_map_2021.png'),
    outputDir: path.join(__dirname, '../src/assets/trail-map'),
    sizes: [640, 1024, 1920],
    formats: [
      { ext: 'webp', quality: 85 },
      { ext: 'png', quality: 85 }
    ]
  },
  logo: {
    input: path.join(__dirname, '../src/assets/CBTCo-cropped.png'),
    outputDir: path.join(__dirname, '../src/assets/logo'),
    sizes: [160],
    formats: [
      { ext: 'webp', quality: 80 },
      { ext: 'png', quality: 80 }
    ]
  },
  ogImage: {
    input: path.join(__dirname, '../public/og-image.jpg'),
    outputDir: path.join(__dirname, '../public'),
    sizes: [1200],
    formats: [
      { ext: 'webp', quality: 80 },
      { ext: 'jpg', quality: 80 }
    ],
    resize: { width: 1200, height: 630, fit: 'cover' }
  }
};

async function optimizeImages() {
  console.log('🎨 Starting image optimization...\n');

  for (const [name, options] of Object.entries(config)) {
    console.log(`📸 Processing ${name}...`);

    // Create output directory
    await fs.mkdir(options.outputDir, { recursive: true });

    // Get original file size
    const stats = await fs.stat(options.input);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`   Original size: ${originalSize} MB`);

    let totalOutputSize = 0;

    for (const size of options.sizes) {
      for (const format of options.formats) {
        const filename = name === 'ogImage'
          ? `og-image-optimized.${format.ext}`
          : name === 'logo'
            ? `logo.${format.ext}`
            : `${name}-${size}w.${format.ext}`;

        const outputPath = path.join(options.outputDir, filename);

        let pipeline = sharp(options.input);

        // Handle special resize for OG image
        if (options.resize) {
          pipeline = pipeline.resize(options.resize);
        } else {
          pipeline = pipeline.resize(size, null, {
            withoutEnlargement: true,
            fit: 'inside'
          });
        }

        // Apply format and quality
        if (format.ext === 'webp') {
          pipeline = pipeline.webp({ quality: format.quality });
        } else if (format.ext === 'jpg' || format.ext === 'jpeg') {
          pipeline = pipeline.jpeg({ quality: format.quality, mozjpeg: true });
        } else if (format.ext === 'png') {
          pipeline = pipeline.png({ quality: format.quality, compressionLevel: 9 });
        }

        await pipeline.toFile(outputPath);

        const outputStats = await fs.stat(outputPath);
        const outputSize = (outputStats.size / 1024).toFixed(2);
        totalOutputSize += outputStats.size;

        console.log(`   ✓ Created ${filename} (${outputSize} KB)`);
      }
    }

    const totalOutputMB = (totalOutputSize / 1024 / 1024).toFixed(2);
    const reduction = ((1 - totalOutputSize / stats.size) * 100).toFixed(1);
    console.log(`   Total output: ${totalOutputMB} MB (${reduction}% reduction)\n`);
  }

  console.log('✅ Image optimization complete!');
}

optimizeImages().catch(error => {
  console.error('❌ Error optimizing images:', error);
  process.exit(1);
});
