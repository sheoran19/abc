module.exports = {
  siteTitle: 'Deepak Sheoran | Jr. Data Scientist',
  siteDescription:
    'Deepak Sheoran is a Machine Learning Intern, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Deepak Sheoran, Deepak, Sheoran, itech01, Data Science, Machine Learning, NLP, Deep Learning, Chandigarh, iNeuron.ai, PurpleTalk, Chandigarh University, Haryana',
  siteUrl: 'https://sheoran19.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Deepak Sheoran',
  location: 'Chandigarh, India',
  email: 'djkdeepakjatt@gmail.com',
  github: 'https://github.com/sheoran19',
  twitterHandle: '@sheoran_dsk',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sheoran19',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/deepak-sheoran/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ds_deepak.19/?hl=en',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sheoran_dsk',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
