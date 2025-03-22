export interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
}

export async function getSkills(): Promise<Skill[]> {
  return [
    {
      name: "Java",
      category: "Programming Languages",
      description: "Experienced in building scalable and efficient backend systems using Java.",
      icon: "FaJava",
    },
    {
      name: "JavaScript",
      category: "Programming Languages",
      description: "Proficient in modern JavaScript for both frontend and backend development.",
      icon: "SiJavascript",
    },
    {
      name: "PHP",
      category: "Programming Languages",
      description: "Experienced in building web applications using PHP.",
      icon: "SiPhp",
    },
    {
      name: "Spring Boot",
      category: "Backend Development",
      description: "Experience in building microservices and enterprise applications with Spring Boot.",
      icon: "SiSpring",
    },
    {
      name: "MySQL",
      category: "Databases",
      description: "Proficient in designing and managing relational databases with MySQL.",
      icon: "SiMysql",
    },
    {
      name: "MongoDB",
      category: "Databases",
      description: "Experienced in NoSQL database management with MongoDB.",
      icon: "SiMongodb",
    },
    {
      name: "Express.js",
      category: "Backend Development",
      description: "Built RESTful APIs and backend services using Express.js.",
      icon: "SiExpress",
    },
    {
      name: "React.js",
      category: "Frontend Development",
      description: "Proficient in building dynamic and responsive user interfaces using React.js.",
      icon: "FaReact",
    },
    {
      name: "React Native",
      category: "Frontend Development",
      description: "Experienced in building cross-platform mobile applications using React Native.",
      icon: "FaReact",
    },
    {
      name: "Node.js",
      category: "Backend Development",
      description: "Skilled in developing server-side applications using Node.js.",
      icon: "FaNodeJs",
    },
    {
      name: "HTML",
      category: "Frontend Development",
      description: "Experienced in building web pages with HTML.",
      icon: "SiHtml5",
    },
    {
      name: "CSS",
      category: "Frontend Development",
      description: "Proficient in styling web pages using CSS.",
      icon: "SiCss3",
    },
    {
      name: "Bootstrap",
      category: "Frontend Development",
      description: "Experienced in building responsive designs using Bootstrap.",
      icon: "SiBootstrap",
    },
    {
      name: "Git",
      category: "Version Control",
      description: "Version control experience using Git for collaborative development.",
      icon: "FaGitAlt",
    },
    {
      name: "Docker",
      category: "DevOps",
      description: "Containerization experience using Docker.",
      icon: "FaDocker",
    },
    {
      name: "Jenkins",
      category: "DevOps",
      description: "Continuous integration and deployment experience with Jenkins.",
      icon: "SiJenkins",
    },
    {
      name: "Machine Learning",
      category: "AI/ML",
      description: "Basic knowledge of machine learning concepts and algorithms.",
      icon: "FaBrain",
    },
    {
      name: "OCI",
      category: "Cloud Platforms",
      description: "Experience with Oracle Cloud Infrastructure (OCI).",
      icon: "SiOracle",
    },
    {
      name: "GCP",
      category: "Cloud Platforms",
      description: "Experience using Google Cloud Platform services.",
      icon: "SiGooglecloud",
    },
    {
      name: "ThingsBoard IoT",
      category: "Cloud Platforms",
      description: "Experience with ThingsBoard IoT Cloud Platform for IoT solutions.",
      icon: "SiThingiverse",
    },
    {
      name: "TypeScript",
      category: "Programming Languages",
      description: "Proficient in TypeScript for building type-safe applications.",
      icon: "SiTypescript",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend Development",
      description: "Experienced in building modern and responsive UIs using Tailwind CSS.",
      icon: "SiTailwindcss",
    },
    {
      name: "Firebase",
      category: "Backend Development",
      description: "Experience in building real-time applications using Firebase.",
      icon: "SiFirebase",
    },
  ];
}