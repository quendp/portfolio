import p1_1 from "../../assets/proj/1/img1.jpg";
import p1_2 from "../../assets/proj/1/img2.jpg";
import p1_3 from "../../assets/proj/1/img3.jpg";
import p1_4 from "../../assets/proj/1/img4.jpg";

import p2_1 from "../../assets/proj/2/img1.jpg";
import p2_2 from "../../assets/proj/2/img2.jpg";
import p2_3 from "../../assets/proj/2/img3.jpg";

import p3_1 from "../../assets/proj/3/img1.jpg";
import p3_2 from "../../assets/proj/3/img2.jpg";
import p3_3 from "../../assets/proj/3/img3.jpg";
import p3_4 from "../../assets/proj/3/img4.jpg";

import p4_1 from "../../assets/proj/4/img1.jpg";
import p4_2 from "../../assets/proj/4/img2.jpg";

import p5_1 from "../../assets/proj/5/img1.jpg";
import p5_2 from "../../assets/proj/5/img2.jpg";
import p5_3 from "../../assets/proj/5/img3.jpg";
import p5_4 from "../../assets/proj/5/img4.jpg";

import p6_1 from "../../assets/proj/6/img1.jpg";
import p6_2 from "../../assets/proj/6/img2.jpg";
import p6_3 from "../../assets/proj/6/img3.jpg";

import p7_1 from "../../assets/proj/7/img1.jpg";
import p7_2 from "../../assets/proj/7/img2.jpg";
import p7_3 from "../../assets/proj/7/img3.jpg";

export const projects = [
  {
    id: 1,
    relevance: 7,
    images: [
      { id: 1, file: p1_1 },
      { id: 2, file: p1_2 },
      { id: 3, file: p1_3 },
      { id: 4, file: p1_4 },
    ],
    title: "Lakbay Travel Agency v3",
    description:
      "A full-stack responsive travel agency website created using React JS, Node JS, Sequelize, and JWT Authentication and was deployed in Hostinger and Railway App. ",
    role: [
      "Lead the team to develop a full-stack responsive travel agency website using React JS, Node JS, Sequelize, and was deployed in Hostinger and Railway App.",
      "Implemented role-based authentication system using JSON Web Tokens with custom dynamic dashboard for each role (user, travel agent, and administrator).",
      "Created a booking system for users where they can book tours to various destinations with multiple packages to choose from.",
      "Merged 19 pull requests and handled all merge conflicts of other members while contributing 138 commits to the project.",
      "Distributed coding and non-coding tasks to each member using Trello and provided a detailed guide for each member to follow.",
    ],
    features: [
      "Membership system (log in/log out)",
      "Role-based Authentication",
      "Form Validation on all forms",
      "Booking system",
      "Admin Dashboard (exclusive to admin account)",
      "Travel Agent Dashboard (exclusive to travel agent account)",
      "User Dashboard (exclusive to user account)",
      "Persitent login",
      "Responsive design",
      "Modern and Interactive UI",
    ],
    type: "full-stack",
    tech: [
      ["JavaScript", "javascript"],
      ["React JS", "react"],
      ["Node JS", "nodedotjs"],
      ["Express JS", "express"],
      ["Sequelize", "sequelize"],
      ["JWT", "jsonwebtokens"],
      ["HTML 5", "html5"],
      ["CSS 3", "css3"],
      ["Bootstrap", "bootstrap"],
    ],
    date: "2023-03-28",
    links: {
      github: "https://github.com/quendp/g4-mini-project-2",
      live: "https://lakbay.quendp.com/",
    },
  },
  {
    id: 2,
    relevance: 6,
    images: [
      { id: 1, file: p2_1 },
      { id: 2, file: p2_2 },
      { id: 3, file: p2_3 },
    ],
    title: "Personal Portfolio Website",
    description:
      "A responsive front-end website created using React JS, Tailwind CSS, and Framer motion with a tech-theme user interface.",
    role: ["Solo Project"],
    features: [
      "Fully responsive",
      "Modern & tech inspired user interface",
      "Custom animations",
      "Entrance animations",
      "Page transitions",
    ],
    type: "front-end",
    tech: [
      ["JavaScript", "javascript"],
      ["React JS", "react"],
      ["Node JS", "nodedotjs"],
      ["HTML 5", "html5"],
      ["CSS 3", "css3"],
      ["Tailwind CSS", "tailwindcss"],
      ["Git", "git"],
    ],
    date: "2023-03-30",
    links: {
      github: "https://github.com/quendp/portfolio",
      live: "https://quendp.com/",
    },
  },
  {
    id: 3,
    relevance: 4,
    images: [
      { id: 1, file: p3_1 },
      { id: 2, file: p3_2 },
      { id: 3, file: p3_3 },
      { id: 4, file: p3_4 },
    ],
    title: "Lakbay Travel Agency v1",
    description:
      "A responsive multi-page travel agency website created using vanilla javascript with advanced animations, page transitions, loader page, scroll animations, and many more.",
    role: ["Solo Project"],
    features: [
      "Fully responsive",
      "Contact and Booking form",
      "Advanced animations",
      "Page loader and transitions",
      "Scroll animations",
      "Full screen navigation menu",
      "Header effects",
      "Contact form",
    ],
    type: "front-end",
    tech: [
      ["JavaScript", "javascript"],
      ["HTML 5", "html5"],
      ["CSS 3", "css3"],
      ["Bootstrap", "bootstrap"],
      ["Git", "git"],
    ],
    date: "2023-01-14",
    links: {
      github: "https://github.com/quendp/lakbay-travel-agency",
      live: "https://quendp.github.io/lakbay-travel-agency/index.html",
    },
  },
  {
    id: 4,
    relevance: 3,
    images: [
      { id: 1, file: p4_1 },
      { id: 2, file: p4_2 },
    ],
    title: "3D Calculator",
    description:
      "An interactive and responsive web calculator with an additional color mode made using Vanilla JavaScript and Pure CSS aside from the wooden background.",
    role: ["Solo Project"],
    features: [
      "Fully responsive",
      "Can handle complex math expressions",
      "Can work with nested exponents, squareroots, etc.",
      "Multi-theme",
      "3d design",
      "Every object, the calculator, pencil, paper, and about button, is made with pure CSS (aside from wooden image background)",
    ],
    type: "front-end",
    tech: [
      ["JavaScript", "javascript"],
      ["HTML 5", "html5"],
      ["CSS 3", "css3"],
      ["Git", "git"],
    ],
    date: "2022-12-12",
    links: {
      github: "https://github.com/quendp/calculator-math-game",
      live: "https://quendp.github.io/calculator-math-game/",
    },
  },
  {
    id: 5,
    relevance: 2,
    images: [
      { id: 1, file: p5_1 },
      { id: 2, file: p5_2 },
      { id: 3, file: p5_3 },
      { id: 4, file: p5_4 },
    ],
    title: "Multi-step HTML Forms Demonstration",
    description:
      "A responsive static website which demonstrates the usage of multi-step HTML forms with vanilla javascript validation, parallax effects, and advanced animation.",
    role: ["Solo Project"],
    features: [
      "Fully responsive",
      "Parallax Effect",
      "JavaScript Form Validation",
      "User-interactivity",
      "CSS animations",
      "Dark theme",
    ],
    type: "front-end",
    tech: [
      ["JavaScript", "javascript"],
      ["HTML 5", "html5"],
      ["CSS 3", "css3"],
      ["Git", "git"],
    ],
    date: "2022-11-24",
    links: {
      github: "https://github.com/quendp/html-forms",
      live: "https://quendp.github.io/html-forms/",
    },
  },
  {
    id: 6,
    relevance: 1,
    images: [
      { id: 1, file: p6_1 },
      { id: 2, file: p6_2 },
      { id: 3, file: p6_3 },
    ],
    title: "What is HTML?",
    description:
      "A responsive static website which shows the features, functionalities, and usage of HTML and its tags and elements, designed using CSS flexbox. ",
    role: ["Solo Project"],
    features: [
      "Fully responsive",
      "Video Hero Section",
      "CSS Flexbox",
      "Dark theme",
    ],
    type: "front-end",
    tech: [
      ["HTML 5", "html5"],
      ["CSS 3", "css3"],
      ["Git", "git"],
    ],
    date: "2022-11-12",
    links: {
      github: "https://github.com/quendp/HTML-basics",
      live: "https://quendp.github.io/HTML-basics/",
    },
  },
  {
    id: 7,
    relevance: 1,
    images: [
      { id: 1, file: p7_1 },
      { id: 2, file: p7_2 },
      { id: 3, file: p7_3 },
    ],
    title: "Static website using pure table layout",
    description:
      "A semi-responsive static website which demonstrates how to use pure HTML tables for website layouts. ",
    role: ["Solo Project"],
    features: ["Table layout", "Light theme", "Tablet Responsive"],
    type: "front-end",
    tech: [
      ["HTML 5", "html5"],
      ["CSS 3", "css3"],
      ["Git", "git"],
    ],
    date: "2022-11-11",
    links: {
      github: "https://github.com/quendp/table-layout",
      live: "https://quendp.github.io/table-layout/",
    },
  },
];
