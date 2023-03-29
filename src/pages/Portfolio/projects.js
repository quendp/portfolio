import p1_1 from "../../assets/proj/1/img1.jpg";
import p1_2 from "../../assets/proj/1/img2.jpg";
import p1_3 from "../../assets/proj/1/img3.jpg";
import p1_4 from "../../assets/proj/1/img4.jpg";

import p2_1 from "../../assets/proj/2/img1.jpg";
import p2_2 from "../../assets/proj/2/img2.jpg";
import p2_3 from "../../assets/proj/2/img3.jpg";

export const projects = [
  {
    id: 1,
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
    date: "2023-03-25",
    links: {
      github: "https://github.com/quendp/g4-mini-project-2",
      live: "https://lakbay.quendp.com/",
    },
  },
  {
    id: 2,
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
    date: "2023-03-25",
    links: {
      github: "https://github.com/quendp/portfolio",
      live: "https://quendp.com/",
    },
  },
];
