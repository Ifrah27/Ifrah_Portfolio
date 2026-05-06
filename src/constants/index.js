import {
  nitk,
  globalAi,
  heartguard,
  emotrackai,
  sawariyafashion,
  placeholder,
} from "../assets";

import {
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiPostman,
  SiGit,
  SiMysql,
  SiNetlify,
  SiJupyter,
  SiFlask,
  SiOpenai,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpencv,
  SiGooglecolab,
  SiStreamlit,
  SiLangchain,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import { BiBarChartAlt2, BiStats } from "react-icons/bi";
import { VscCode } from "react-icons/vsc";
import { FaBrain, FaRobot, FaUniversity } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";

export const resumeLink =
  "https://drive.google.com/file/d/1XRB0IHzMxb3uJGMVtAAfidFbm4UcNSqd/view?usp=sharing";
export const repoLink = "https://github.com/Ifrah27";

export const callToAction = "https://www.linkedin.com/in/ifrahqureshi/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "githubContributions",
    title: "Contributions",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: FaUniversity,
    title: "Acropolis Institute of Technology and Research, Indore",
    degree: "Btech - Computer science and Information Technology",
    duration: "2023 - 2027",
    content1: "Computer Science and Information Technology",
    content2: "", // Removed CGPA as requested
  },
];

// Split into Certificates and Achievements
export const certificates = [
  {
    id: "cert-1",
    icon: globalAi,
    event: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    position: "Oracle",
    content1: "Year: 2025",
    content2: "Professional level certification in OCI Data Science.",
  },
  {
    id: "cert-2",
    icon: globalAi,
    event: "AWS Cloud Practitioner",
    position: "AWS",
    content1: "Certified",
  },
  {
    id: "cert-3",
    icon: globalAi,
    event: "AWS Solutions Architect Associate",
    position: "AWS",
    content1: "Associate",
  },
  {
    id: "cert-4",
    icon: globalAi,
    event: "NVIDIA Deep Learning Certificate",
    position: "NVIDIA",
    content1: "Certified",
  },
  {
    id: "cert-5",
    icon: globalAi,
    event: "GenAI Academy 2.0",
    position: "Hack2Skill",
  },
  {
    id: "cert-6",
    icon: globalAi,
    event: "Data Science & Analytics",
    position: "HP Life",
    content1: "Completed",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: globalAi,
    event: "Best Research Paper Award",
    position: "Winner",
    content1: "NSSAFE Conference 2025",
  },
  {
    id: "a-2",
    icon: globalAi,
    event: "IEEE IGNITE 2025",
    position: "1st Runner-Up",
  },
  {
    id: "a-3",
    icon: globalAi,
    event: "Ideathon 2025",
    position: "2nd Runner-Up",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-2",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-5",
        icon: SiHtml5,
        name: "HTML5",
      },
      {
        id: "pl-6",
        icon: SiCss3,
        name: "CSS3",
      },
    ],
  },
  {
    title: "Data Science & ML",
    items: [
      {
        id: "ds-1",
        icon: FaBrain,
        name: "Machine Learning",
      },
      {
        id: "ds-2",
        icon: SiPytorch,
        name: "Deep Learning",
      },
      {
        id: "ds-3",
        icon: FaRobot,
        name: "NLP",
      },
      {
        id: "ds-4",
        icon: BiBarChartAlt2,
        name: "Data Analysis",
      },
      {
        id: "ds-5",
        icon: SiOpencv,
        name: "Computer Vision",
      },
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      {
        id: "lib-1",
        icon: SiNumpy,
        name: "NumPy",
      },
      {
        id: "lib-2",
        icon: SiPandas,
        name: "Pandas",
      },
      {
        id: "lib-3",
        icon: SiScikitlearn,
        name: "Scikit-learn",
      },
      {
        id: "lib-4",
        icon: SiTensorflow,
        name: "TensorFlow",
      },
      {
        id: "lib-5",
        icon: SiPytorch,
        name: "PyTorch",
      },
      {
        id: "lib-6",
        icon: BiBarChartAlt2,
        name: "Matplotlib",
      },
      {
        id: "lib-7",
        icon: BiStats,
        name: "Seaborn",
      },
      {
        id: "lib-8",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "lib-9",
        icon: SiStreamlit,
        name: "Streamlit",
      },
      {
        id: "lib-10",
        icon: SiLangchain,
        name: "LangChain",
      },
    ],
  },
  {
    title: "Databases & Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: VscCode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: SiGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: SiGooglecolab,
        name: "Google Colab",
      },
      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-8",
        icon: SiJupyter,
        name: "Jupyter",
      },
    ],
  },
];

// Removed Experience Section as requested
export const experiences = [];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "HeartGuard – Heart Disease Risk Prediction",
    github: "https://github.com/Ifrah27/Heart_Disease_Risk_Prediction_project",
    link: "https://aiheartguard.streamlit.app/",
    image: heartguard,
    content:
      "An AI-powered clinical tool for predicting heart disease risk using machine learning. Features a clean dark-theme UI with one-hot encoded inputs and real-time risk assessment.",
    stack: [
      {
        id: "proj1-icon-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "proj1-icon-2",
        icon: SiStreamlit,
        name: "Streamlit",
      },
      {
        id: "proj1-icon-3",
        icon: SiScikitlearn,
        name: "Scikit-learn",
      },
      {
        id: "proj1-icon-4",
        icon: SiPandas,
        name: "Pandas",
      },
    ],
  },
  {
    id: "project-2",
    title: "EmoTrackAI – Sentiment Analysis",
    github: "https://github.com/Ifrah27/EmoTrackAI",
    link: "https://github.com/Ifrah27/EmoTrackAI",
    image: emotrackai,
    content:
      "A deep learning-based emotion and sentiment analysis application. Classifies text into multiple emotion categories using NLP models with an interactive visualization dashboard.",
    stack: [
      {
        id: "proj2-icon-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "proj2-icon-2",
        icon: SiTensorflow,
        name: "TensorFlow",
      },
      {
        id: "proj2-icon-3",
        icon: RiGeminiFill,
        name: "NLP",
      },
      {
        id: "proj2-icon-4",
        icon: SiStreamlit,
        name: "Streamlit",
      },
    ],
  },
  {
    id: "project-3",
    title: "Sawariya Fashion – E-Commerce Platform",
    github: "https://github.com/Ifrah27/sawariya-fashion",
    link: "https://sawariya-fashion.netlify.app/",
    image: sawariyafashion,
    content:
      "A premium fashion e-commerce web application featuring a store locator with Google Maps integration, developer team showcase, and responsive luxury UI design.",
    stack: [
      {
        id: "proj3-icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "proj3-icon-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "proj3-icon-3",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "proj3-icon-4",
        icon: SiNetlify,
        name: "Netlify",
      },
    ],
  },
  {
    id: "project-4",
    title: "LexiContract – AI Legal Analyzer",
    github: "https://github.com/Ifrah27/LexiContact",
    link: "https://github.com/Ifrah27/LexiContact",
    image: heartguard,
    content:
      "A RAG-based AI legal contract analyzer that extracts, deduplicates, and summarizes legal clauses with executive risk summaries using a modern SaaS dark-theme dashboard.",
    stack: [
      {
        id: "proj4-icon-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "proj4-icon-2",
        icon: SiLangchain,
        name: "LangChain",
      },
      {
        id: "proj4-icon-3",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "proj4-icon-4",
        icon: SiStreamlit,
        name: "Streamlit",
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Projects",
    value: "10+",
  },
  {
    id: "stats-2",
    title: "Certifications",
    value: "10+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "3+",
  },
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
  {
    id: "ec-1",
    organisation: "IEEE TEMS Student Branch Chapter",
    title: "Chair",
    duration: "Present",
    logo: placeholder,
    content: [
      {
        text: "Serving as Chair of the IEEE TEMS Student Chapter, leading strategic planning, overseeing operations, and organizing impactful technical and professional development events.",
        link: "",
      },
    ],
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/ifrahqureshi/",
  },
  {
    id: "social-media-2",
    icon: SiGithub,
    link: "https://github.com/Ifrah27",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:ifrahqureshi27@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Ifrah Qureshi",
  githubUsername: "Ifrah27",
  tagLine:
    "Data Scientist | Machine Learning Engineer | AI Enthusiast",
  intro:
    "I am a passionate Data Scientist with a strong interest in extracting meaningful insights from data and building intelligent systems using machine learning and artificial intelligence. I enjoy working on real-world problems where data can drive impactful decisions. My experience includes building machine learning models, performing data analysis, and developing end-to-end data-driven solutions. I have worked on projects involving IoT-based data monitoring systems, predictive analytics, and data preprocessing pipelines. I am skilled in Python, data visualization, and model development, and I continuously explore new techniques in machine learning and AI. My goal is to leverage data science to create scalable, impactful solutions and contribute to innovation in technology.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "Ifrah27/Heart-Disease-Prediction",
  "Ifrah27/EmoTrackAI",
];
