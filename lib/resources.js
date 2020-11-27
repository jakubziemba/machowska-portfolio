const paintings = [
  {
    id: 0,
    title: 'Shape I / 2020',
    materials: 'Acrylic / Printing Ink on canvas.',
    size: '100 x 70 cm',
    path: [
      `/images/paintings/shape-1-2020/1.jpg`,
      `/images/paintings/shape-1-2020/2.jpg`,
    ],
  },
  {
    id: 1,
    title: 'Abstraction / 2019',
    materials: 'Acrylic / Printing Ink on paperboard.',
    size: '50 x 70 cm',
    path: [
      '/images/paintings/abstraction-2019/1.jpg',
      '/images/paintings/abstraction-2019/2.jpg',
    ],
  },
  {
    id: 2,
    title: 'The Sun / 2020',
    materials: 'Oil on paper',
    size: '14,8 x 21 cm',
    path: [
      '/images/paintings/the-sun-2020/1.jpg',
      '/images/paintings/the-sun-2020/2.jpg',
    ],
  },
];

const graphicArt = [
  {
    id: 0,
    title: 'Tamed element I / 2018',
    materials: 'Dry point on paper',
    size: '70 x 100 cm',
    path: [
      '/images/graphicArt/tamed-element-1-2018/1.jpg',
      '/images/graphicArt/tamed-element-1-2018/2.jpg',
    ],
  },
  {
    id: 1,
    title: 'Tamed element VIII / 2018',
    materials: 'Dry point on paper',
    size: '70 x 100 cm',
    path: [
      '/images/graphicArt/tamed-element-8-2018/1.jpg',
      '/images/graphicArt/tamed-element-8-2018/2.jpg',
    ],
  },
  {
    id: 2,
    title: 'Tamed element VII / 2018',
    materials: 'Dry point on paper',
    size: '70 x 100 cm',
    path: [
      '/images/graphicArt/tamed-element-7-2018/1.jpg',
      '/images/graphicArt/tamed-element-7-2018/2.jpg',
    ],
  },
  {
    id: 3,
    title: 'Tamed element III / 2016',
    materials: 'Dry point on paper',
    size: '70 x 100 cm',
    path: [
      '/images/graphicArt/tamed-element-3-2016/1.jpg',
      '/images/graphicArt/tamed-element-3-2016/2.jpg',
    ],
  },
  {
    id: 4,
    title: 'Shape (No.1) /  2020',
    materials: 'Litography on paper',
    size: '28,5 x 37,5 cm',
    path: [
      '/images/graphicArt/shape-no1-2020/1.jpg',
      '/images/graphicArt/shape-no1-2020/2.jpg',
    ],
  },
  {
    id: 5,
    title: 'Mistake / 2019',
    materials: 'Diptych / Litography on paper',
    size: '50 x 70 cm',
    path: [
      '/images/graphicArt/mistake-2019/1.jpg',
      '/images/graphicArt/mistake-2019/2.jpg',
    ],
  },
  {
    id: 6,
    title: 'Shape (No.2) /  2020',
    materials: 'Litography on paper',
    size: '28,5 x 37,5 cm',
    path: [
      '/images/graphicArt/shape-no2-2020/1.jpg',
      '/images/graphicArt/shape-no2-2020/2.jpg',
    ],
  },
  {
    id: 7,
    title: 'Mountain landscape (No.1) / 2019',
    materials: 'Printing Ink on paperboard',
    size: '50 x 70 cm',
    path: ['/images/graphicArt/mountain-landscape-no1-2019/1.jpg'],
  },
  {
    id: 8,
    title: 'Mountain landscape (No.2) / 2019',
    materials: 'Printing Ink on paperboard',
    size: '50 x 70 cm',
    path: ['/images/graphicArt/mountain-landscape-no2-2019/1.jpg'],
  },
];

const posters = [
  {
    id: 0,
    title: 'Poster I / 2020',
    materials: 'Art print',
    size: '50 x 70 cm',
    path: [
      '/images/posters/poster-1-2020/1.png',
      '/images/posters/poster-1-2020/2.png',
    ],
  },
  {
    id: 1,
    title: 'Poster II / 2020',
    materials: 'Art print',
    size: '50 x 70 cm',
    path: [
      '/images/posters/poster-2-2020/1.png',
      '/images/posters/poster-2-2020/2.png',
    ],
  },
  {
    id: 2,
    title: 'Poster III / 2020',
    materials: 'Art print',
    size: '50 x 70 cm',
    path: [
      '/images/posters/poster-3-2020/1.png',
      '/images/posters/poster-3-2020/2.png',
    ],
  },
];

//EXHIBITION CONTENT

// Prizes
const prizes = [
  {
    year: 2020,
    entries: [
      {
        body:
          'Scholarships for the artistic achievements, from the Minister of Science and Higher Education',
        location: 'Warsaw, Poland',
      },
      {
        body:
          'Scholarships for the artistic achievements, from the Rector of the Maria Grzegorzewska University in Warsaw',
        location: 'Warsaw, Poland',
      },
    ],
  },
  {
    year: 2019,
    entries: [
      {
        body:
          'Scholarships for the artistic achievements, the Rector of Maria Grzegorzewska University in Warsaw',
        location: 'Warsaw, Poland',
      },
      {
        body:
          'Scholarships for the artistic achievements, from the Capital City of Warsaw',
        location: 'Warsaw, Poland',
      },
    ],
  },
  {
    year: 2018,
    entries: [
      {
        body:
          'Scholarships for the artistic achievements, from the Rector of the Maria Grzegorzewska University in Warsaw',
        location: 'Warsaw, Poland',
      },
      {
        year: 2018,
        body:
          'Scholarships for the artistic achievements, from the Capital City of Warsaw',
        location: 'Warsaw, Poland',
      },
    ],
  },
  {
    year: 2017,
    entries: [
      {
        body:
          'Scholarships for the artistic achievements, from the Rector of the Maria Grzegorzewska University in Warsaw',
        location: 'Warsaw, Poland',
      },
      {
        year: 2017,
        body:
          'Scholarships for the artistic achievements, from the Capital City of Warsaw',
        location: 'Warsaw, Poland',
      },
    ],
  },
  {
    year: 2016,
    entries: [
      {
        body: 'Art competition, First Prize',
        location:
          'The Maria Grzegorzewska University in  Warsaw, Poland',
      },
    ],
  },
];

// Solo Exhibition
const soloExhibition = [
  {
    year: 2019,
    entries: [
      {
        body:
          'Between nature and abstraction - an attempt to tame the element of nature',
        location: 'Foundation “Life Poland", Warsaw, Poland',
      },
      {
        body: 'Between Masada and Łysica',
        location: 'Foundation “Life Poland", Warsaw, Poland',
      },
    ],
  },
];

// Group Exhibition
const groupExhibition = [
  {
    year: 2019,
    entries: [
      {
        body: 'Drawing with natural materials',
        location: 'Institute of Art Education, Warsaw, Poland',
      },
      {
        body: "Bachelor's diplomas 2018",
        location: 'APS Gallery, Warsaw, Poland',
      },
    ],
  },
  {
    year: 2018,
    entries: [
      {
        body: 'Movement, Still, Light, Space',
        location:
          'Oval lounge, Institute of Art Education, Warsaw, Poland',
      },
      {
        year: 2018,
        body: 'Warsaw - Scheersberg, ',
        location:
          'Oval lounge, Institute of Art Education, Warsaw, Poland',
      },
    ],
  },
  {
    year: 2017,
    entries: [
      {
        body: 'Projection',
        location:
          'Winter International Academy of Scheersberg, Scheersberg, Germany',
      },
      {
        year: 2017,
        body: 'Art works',
        location: 'Warsaw Cultural Education Centre, Warsaw, Poland',
      },
      {
        year: 2017,
        body: 'End-of-year exhibition',
        location: 'Institute of Art Education, Warsaw, Poland',
      },
      {
        year: 2017,
        body: 'Scheersberg',
        location:
          'Oval lounge, Institute of Art Education, Warsaw, Poland',
      },
      {
        year: 2017,
        body: 'Hasior Express',
        location: 'APS Gallery, Warsaw, Poland',
      },
      {
        year: 2017,
        body: 'Prochownia Port',
        location: 'Warsaw Cultural Education Centre, Warsaw, Poland',
      },
      {
        year: 2017,
        body:
          'I work for a week and I only have a black box with the ground',
        location:
          'Władysław Hasior Gallery in Zakopane (branch of the Tatra Museum), Poland',
      },
    ],
  },
  {
    year: 2016,
    entries: [
      {
        body: 'The art of duplication',
        location: 'Art Cafe "Bez Krępacji", Warsaw, Poland',
      },
    ],
  },
];

export {
  paintings,
  graphicArt,
  posters,
  prizes,
  soloExhibition,
  groupExhibition,
};
