// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      optimizeImagesInDev: true,
      mozjpeg: { quality: 100 },
    },
  ],
  [imagemin],
  [imageminMozjpeg],
  // your other plugins here
]);
