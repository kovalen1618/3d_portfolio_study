import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  csharp,
  nodejs,
  git,
  figma,
  firebase,
  thecoderschool,
  priora,
  threejs,
  dotNet,
  masterycoding,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Coding Instructor",
    icon: web,
  },
];

const technologies = [
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotNet,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Coding Instructor",
    company_name: "The Coder School",
    icon: thecoderschool,
    iconBg: "#383E56",
    date: "Aug 2021 - Mar 2022",
    points: [
      "Teaching children ages 7 to 18 relevant skills in coding with languages such as Python, JavaScript, and C#.",
      "Collaborating with other coding instructors to create a high-quality learning environment for students.",
      "Participating in code reviews and providing constructive feedback to students.",
      "Mentoring future instructors to help the company grow with our ideals in mind.",
    ],
  },
  {
    title: "Academic Services Specialist",
    company_name: "Mastery Coding",
    icon: masterycoding,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Feb 2023",
    points: [
      "Giving large virtual lectures to students grade 5 to 12 in fundamentals of web and game development.",
      "Performing code reviews with students in HTML/CSS, JavaScript, and the p5.js library to help them create outstanding projects.",
      "Creating computer science and eSports curriculm for students grades 2 to 5 at a level that young minds can easily grasp and be motivated to learn from.",
      "Mentoring future coding instructors within the company and leading them through vital team meetings.",
    ],
  },
];

const projects = [
  {
    name: "Priora",
    description:
      "Web application made for users to increase their productivity and organize their workflows by making them adhere to the mindset of prioritizing one task at a time",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: priora,
    source_code_link: "https://github.com/kovalen1618/priora",
  },
];

export { services, technologies, experiences, testimonials, projects };