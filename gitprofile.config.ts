// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'rizkiwibu', // Your GitHub org/user name. (This is the only required config)
  },

  base: '',

  projects: {
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'REST API',
          description: 'REST API publik dengan berbagai fitur gratis.',
          imageUrl: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-api-web-flaticons-lineal-color-flat-icons.png',
          link: 'https://restapi.rizk.my.id',
        },
        {
          title: 'Uploader',
          description: 'Layanan upload file mudah dan cepat.',
          imageUrl: 'https://img.icons8.com/external-flat-icons-pause-08/512/external-upload-multimedia-flat-icons-pause-08.png',
          link: 'https://uploader.rizk.my.id',
        },
        {
          title: 'TikTok Downloader',
          description: 'Download video, foto, dan story TikTok dengan detail lengkap.',
          imageUrl: 'https://img.icons8.com/color/512/tiktok--v1.png',
          link: 'https://tiktokdl.rizk.my.id',
        },
        {
          title: 'Bot WhatsApp',
          description: 'Bot WhatsApp multifungsi (nomor akan ditambahkan).',
          imageUrl: 'https://img.icons8.com/color/512/whatsapp--v1.png',
          link: '#',
        },
      ],
    },
  },

  seo: {
    title: 'Portofolio of irfan',
    description: '',
    imageURL: '',
  },

  social: {
    linkedin: 'ありません',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: 'ありません',
    instagram: 'ikykunnnn',
    reddit: '',
    threads: '',
    youtube: 'RIZKIIRFAN',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'irfanwibu88@gmail.com',
  },

  resume: {
    fileUrl: 'https://drive.google.com/drive/folders/1v7BLEBGO4eC6DmkyZJljecWYHZ0oA?usp=sharing',
  },

  skills: ['Still Learning'],

  educations: [
    {
      institution: 'SMK MUHAMMADIYAH 3 WELERI',
      degree: 'Teknik dan Bisnis Sepeda Motor',
      from: '2021',
      to: '2024',
    },
    {
      institution: 'SMP 3 WELERI',
      degree: '-',
      from: '2018',
      to: '2021',
    },
  ],

  blog: {
    source: '',
    username: '',
    limit: 2,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'valentine',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with <a 
     class="text-primary" href="https://github.com/rizkiwibu"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
