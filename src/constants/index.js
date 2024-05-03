import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  ai_pic,
  Power_BI,
  att,
  dat,
  car,
  cardio,
  iot,
  process,
  flood,
  aipic,
  java,
  dotnet,
  csharp2,
  sqlpic,
  pythonpic,
  power_bipic,
  angularpic1
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  // {
  //   id: 'contact',
  //   title: 'Contact',
  // },
  
  {
    id:'work',
    title:'Experience'
  },
  {
    id:'journal_papers',
    title:'Research'
  },
  {
    id:'ContactMe',
    title:'Personnal Info'
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'AI/ML Data Scientist',
    icon: ai_pic,
  },
  {
    title: 'PowerBI analyst',
    icon: Power_BI,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'AI',
    icon: aipic,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'DotNet',
    icon: dotnet,
  },
  {
    name: 'C Sharp',
    icon: csharp2,
  },
  {
    name: 'SQL',
    icon: sqlpic,
  },
  {
    name: 'Python',
    icon: pythonpic,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Power BI',
    icon: power_bipic,
  },
  {
    name: 'Angular',
    icon: angularpic1,
  },
];

const experiences = [
  {
    title: 'AI/ML scientist',
    company_name: 'NASA and NOAA',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2023 - May 2024',
  },
  {
    title: 'Services IT Dev Senior Associate',
    company_name: 'NTT Data',
    icon: microverse,
    iconBg: '#333333',
    date: 'Feb 2021 - June 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Zensar Technologies',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Nov 2020 - Feb 2021',
  },
  {
    title: 'Machine Learning Intern',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'June 2019 - July 2019',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Employee Attrition',
    description: 'Employee Attrition Prediction using Machine Learning',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: att,
    repo: 'https://github.com/KiranReddy12345/Employee-Attrition-Prediction',
    demo: 'https://github.com/KiranReddy12345/Employee-Attrition-Prediction',
  },
  {
    id: 'project-2',
    name: 'LinkedIn Privacy',
    description:
      'LinkedGuard: Safeguarding LinkedIn Privacy by Identifying Authentic Companies, and Scraping Resumes Accordingly',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: dat,
    repo: 'https://github.com/KiranReddy12345/Safeguarding-LinkedIn',
    demo: 'https://github.com/KiranReddy12345/Safeguarding-LinkedIn',
  },
  // {
  //   id: 'project-3',
  //   name: 'Math Magicians',
  //   description: 'This is a single-page calculator app built with React',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/shaqdeff/Math-Magicians',
  //   demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  // },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

const Journal_Papers = [
  {
    id: 'project-1',
    name: 'WSN & IoT',
    description: 'Wireless Sensor Networks and Internet of Things is a technical book authored by me. The primary focus of this book revolves around Internet of Things (IoT) and its integration with Wireless Sensor Networks (WSN). It delves into the intricacies of IoT, emphasizing its reliance on WSN as a network infrastructure. The book explores the practical applications of IoT in various real-time scenarios, showcasing the versatility and utility of this technology.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: iot,
    repo: 'https://iip.myinstamojo.com/product/3195899/wireless-sensor-networks-internet-of-things-836f0',
    demo: 'https://iip.myinstamojo.com/product/3195899/wireless-sensor-networks-internet-of-things-836f0',
  },
  {
    id: 'project-2',
    name: 'FLOOD DETECTING SYSTEM',
    description:
      'This is a paper which was written and published in International Research Journal of Engineering and Technology (IRJET)',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: flood,
    repo: 'https://www.irjet.net/archives/V7/i8/IRJET-V7I8505.pdf',
    demo: 'https://www.irjet.net/archives/V7/i8/IRJET-V7I8505.pdf',
  },
  {
    id: 'project-3',
    name: 'Design study on Algorithm',
    description: 'Design Research on Algorithm of Processing Time, Data Aggregation Time, Packet Delivery Ratio and Energy Consumption is a International Journal writtena dn published in International Journal of Recent Technology and Engineering (IJRTE) ISSN: 2277-3878, Volume-8, Issue-2S3, July 2019',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: process,
    repo: 'https://www.ijrte.org/wp-content/uploads/papers/v8i2S3/B11950782S319.pdf',
    demo: 'https://www.ijrte.org/wp-content/uploads/papers/v8i2S3/B11950782S319.pdf',
  },
  {
    id: 'project-4',
    name: 'Car Resale Prediction',
    description: `Prediction of Resale Value of the Car
    Using Linear Regression Algorithm was written and published in International Journal of Innovative Science and Research Technology
    ISSN No:-2456-2165`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: car,
    repo: 'https://ijisrt.com/assets/upload/files/IJISRT20JUL388.pdf',
    demo: 'https://ijisrt.com/assets/upload/files/IJISRT20JUL388.pdf',
  },
  {
    id: 'project-5',
    name: 'Cardiovascular Disease',
    description: 'Machine Learning Based System for Early Prediction of Cardiovascular Diseases is Patented',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cardio,
    repo: 'https://github.com/KiranReddy12345/Cardiovascular-Disease-Prediction/blob/main/DOC-20230623-WA0000..pdf',
    demo: 'https://github.com/KiranReddy12345/Cardiovascular-Disease-Prediction/blob/main/DOC-20230623-WA0000..pdf',
  },
];

export { services, technologies, experiences, projects, Journal_Papers };
