// // next.config.js
// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
// const imagemin = require('imagemin');
// const imageminMozjpeg = require('imagemin-mozjpeg');

// (async () => {
//   await imagemin(['images/*/*/*.jpg'], 'public/images/*/*', {
//     use: [imageminMozjpeg([{ quality: 100 }])],
//   });

//   console.log('Images optimized');
// })();

// module.exports = withPlugins([
//   [
//     optimizedImages,
//     {
//       /* config for next-optimized-images */
//       optimizeImagesInDev: true,
//       mozjpeg: { quality: 100 },
//     },
//   ],
//   // your other plugins here
// ]);

module.exports = {
  images: {
    deviceSizes: [
      320,
      480,
      640,
      750,
      828,
      1080,
      1200,
      1920,
      2048,
      3840,
    ],
  },
};
