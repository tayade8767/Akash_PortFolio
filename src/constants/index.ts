import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  expressjs,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  refocus,
  youtube,
  shopify,
  backend_youtube,
  refokusimg,
  instaweb,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competative Programming",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express Js",
    icon: expressjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Refokus",
    icon: refocus,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "Implemented a productivity application using React hooks and Context API.",
      "Developed data visualization features with D3.js, achieving a 98% Lighthouse performance score.",
      "Optimized UI for fast loading and responsiveness, ensuring seamless user experience.",
      "Collaborated with the team to improve code quality and ensure cross-browser compatibility.",
    ],
  },
  {
    title: "Backend Developer",
    companyName: "BackEnd YouTube",
    icon: youtube,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Built a robust backend architecture for a YouTube clone using Node.js and Express.js.",
      "Implemented OAuth 2.0 authentication and integrated AWS S3 for media storage.",
      "Optimized video streaming performance using Redis caching and load balancing.",
      "Developed APIs to support media uploads and streaming, enhancing user experience for 10,000+ concurrent users.",
    ],
  },
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "InstaWeb",
    description:
      "A full-stack social media platform built with the MERN stack, featuring real-time notifications, JWT authentication, and responsive UI for a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: instaweb,
    sourceCodeLink: "https://github.com/tayade8767/Instagram",
  },
  {
    name: "Refokus",
    description:
      "A productivity application built with React hooks and Context API, featuring data visualization with D3.js and achieving high performance with a 98% Lighthouse score.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "d3.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: refokusimg,
    sourceCodeLink: "https://refokus-clone-murex.vercel.app/",
  },
  {
    name: "BackEnd YouTube",
    description:
      "A robust backend for a YouTube clone built with Node.js and Express.js, implementing OAuth 2.0 authentication and supporting media storage with AWS S3.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: backend_youtube,
    sourceCodeLink: "https://github.com/tayade8767/BackEnd_Youtube",
  },  
];

export { services, technologies, experiences, testimonials, projects };
