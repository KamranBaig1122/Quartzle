import { PortfolioProject } from '../components/PortfolioModal';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "World Food Recepie",
    category: "AI & Web Development",
    thumbnail: "/AI-Recepie/1.png",
    images: ["/AI-Recepie/1.png"],
    description: "World Food Recipes is an AI-powered recipe generation platform that helps users instantly create personalized recipes based on available ingredients, preferences, and cuisines. " +

    "The platform removes friction by offering no-login, free, and offline-friendly access, making it ideal for casual users, home cooks, and food enthusiasts.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "AWS"],
    link: "https://worldfoodrecipes.sbs/",
    duration: "2 month"
  },
  {
    id: 2,
    title: "AI Architecture",
    category: "AI & Web Development",
    thumbnail: "/AI-Architecture/1.png",
    images: ["/AI-Architecture/1.png","/AI-Architecture/2.png","/AI-Architecture/3.png","/AI-Architecture/4.png"],
    description: "AI-Architectures is an AI-driven architectural visualization platform that transforms concept sketches, massing models, and architectural prompts into high-quality, photorealistic renders. " +

    "The platform focuses on Before → After transformations, enabling architects, designers, and real-estate professionals to visualize exterior, interior, courtyard, and urban housing concepts with consistent camera angles and composition.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "AWS", "Django"],
    link: "https://ai-architectures.com/",
    duration: "5 month"
  },
  {
    id: 3,
    title: "DMFT System",
    category: "AI & Web Development",
    thumbnail: "/DMFT System/1.png",
    images: ["/DMFT System/1.png","/DMFT System/2.png","/DMFT System/3.png","/DMFT System/4.png","/DMFT System/5.png","/DMFT System/6.png"],
    description: "The DMFT System automates dental images analysis using YOLO and Faster R-CNN to detect decayed, missing, and filled teeth. Built with Flask, it provides fast, accurate results for dentists. " +

    "🔹 AI-Powered Detection – Identifies dental anomalies with high precision" +
    "🔹 Flask-Based API – Enables seamless integration with web apps" +
    "🔹 Fast & Reliable – Delivers quick and accurate results" +
    "🔹 User-Friendly – Easily integrates into clinical workflows" +

    "This system improves dental diagnosis efficiency and reduces manual effort.",
    technologies: ["Flask", "YOLO", "Faster R-CNN", "Deep Learning", "machine learning", "Object Detection", "Computer Vision"],
    duration: "6 months"
  },
  {
    id: 4,
    title: "AI-Powered Story Creation & Reading Platform",
    category: "AI & Web Development",
    thumbnail: "/AI-Story/1.png",
    images: ["/AI-Story/1.png"],
    description: "StorAI is a modern, AI-inspired storytelling web platform that allows users to read, explore, and create engaging stories through a clean and intuitive interface. The platform is designed with a strong focus on user experience, visual storytelling, and scalability. " +

    "It supports free stories, user-generated stories, and story creation workflows, making it suitable for content platforms, educational apps, and creative communities.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
    link: "https://storai-preview.vercel.app/",
    duration: "1 months"
  },
];
