export const homePageData = {
  userName: "Muhammad Abdullah",
  imageSrc: "/me.jpg",
  jobTitles: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI Enthusiast",
    "MERN Stack Specialist",
    "Next.js Expert",
    "Generative AI Developer",
    "Backend Engineer",
    "Frontend Wizard",
    "Cloud Innovator",
    "Tech Explorer",
  ],
  shortIntro: [
    "Hi, I’m Muhammad Abdullah, a dedicated software engineer with over two years of hands-on experience in crafting innovative and scalable web solutions. Currently pursuing my Bachelor's in Computer Science from Karachi University, I’ve built expertise in cutting-edge technologies like the MERN stack, Generative AI, Next.js, and Nest.js. I thrive on solving complex problems and bringing ideas to life through clean, efficient code.",
    "Throughout my journey, I’ve worked on diverse projects, including AI-driven platforms, HRM systems, and e-commerce solutions. My work reflects a commitment to excellence, leveraging tools like OpenAI APIs, Firebase, AWS, and Tailwind CSS to deliver impactful user experiences. Beyond coding, I’m a gaming and cricket enthusiast who enjoys exploring the latest advancements in technology to expand my skill set and stay ahead in this ever-evolving field.",
  ],
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/MuhammadAbdullah780",
      text: "My Github",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/muhammad-abdullah780/",
      text: "My LinkedIn",
    },
    {
      platform: "upwork",
      url: "https://www.upwork.com/freelancers/~0150e5f2a03338ed23",
      text: "My Upwork",
    },
  ],
  sections: {
    education: {
      sectionTitle: "Education",
      history: [
        {
          title: "University of Karachi",
          timeline: "Jan 2021 - Present",
          imageUrl: "/education/uok.png",
          subTitle: "Bachelor's in Computer Science (BSCS)",
          description: `Currently pursuing my Bachelor's in Computer Science at UBIT, 
          where I've developed a strong foundation in OOP, Database Management Systems, SQL, and full-stack development. 
          My journey includes mastering modern technologies like MERN, Generative AI, and Python to excel in the tech industry.`,
        },
        {
          title: "PECHS Govt Science College",
          timeline: "2019 - 2021",
          imageUrl: "/education/pechs.jpg",
          subTitle: "Intermediate in Pre-Engineering",
          description: `Completed my FSC in Pre-Engineering, building a strong analytical 
          and problem-solving foundation essential for my technical education and career.`,
        },
        {
          title: "Karachi Folk's High School",
          timeline: "2006 - 2019",
          imageUrl: "/education/kfhs.jpg",
          subTitle: "Matriculation",
          description: `Achieved a solid academic base during my matriculation years, 
          cultivating a passion for technology and innovation that guided my career path.`,
        },
      ],
    },
    experience: {
      sectionTitle: "Experience",
      history: [
        {
          title: "Expedey",
          timeline: "April 2023 - Present",
          imageUrl: "/experience/expedey.jpg",
          subTitle: "Software Engineer",
          location: "Karachi, Pakistan",
          description: `Working as a Software Engineer, leveraging modern web technologies like MERN stack, 
          Next.js, and Nest.js to develop scalable and efficient applications. Focused on integrating Generative AI, 
          building APIs, and ensuring seamless user experiences for dynamic platforms.`,
          skillsEarned: [
            "MERN",
            "Next.js",
            "Nest.js",
            "Generative AI",
            "Python",
            "AWS",
          ],
        },
      ],
    },
    skills: {
      sectionTitle: "My Skills",
      /**
       * @todo: right now uploading some random skill but replace later on.
       */
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "React JS",
        "Next JS",
        "Tailwind CSS",
        "Scss",
        "Node JS",
        "Express JS",
        "Mongodb",
        "Langchain",
        "Fast API",
        "Python",
        "Firebase",
        "Nest JS",
        "AWS",
        "Generative AI",
        "LLMS",
        "Open AI",
      ],
    },
    projects: {
      sectionTitle: "Recent Works",
      recentProjects: [
        // Proposal Automation
        {
          description: `An AI-powered proposal automation platform designed to assist users in crafting personalized, high-quality proposals with minimal effort. Integrates OpenAI API and LangChain.`,
          endDate: "Dec 2023",
          startDate: "Nov 2023",
          imgAlt: "Proposal Automation",
          imgSrc: "/me.avif",
          title: "Proposal Automation Platform",
          skillsUsed: [
            "Next.js",
            "OpenAI",
            "LangChain",
            "MongoDB",
            "Generative AI",
          ],
          liveUrl: "https://proposal-demo-frontend.vercel.app",
          // githubUrl:
          //   "https://github.com/MuhammadAbdullah780/proposal-demo-frontend",
        },
        // Pricemoov
        {
          description: `A global platform providing price management and optimization solutions. Built using Gatsby, Contentful, and GSAP, with integrations like HubSpot Forms and Google Captcha.`,
          endDate: "Feb 2023",
          startDate: "Jan 2023",
          imgAlt: "Pricemoov",
          imgSrc: "/me.avif",
          title: "Pricemoov",
          skillsUsed: [
            "Gatsby",
            "Contentful",
            "Tailwind CSS",
            "GSAP",
            "HubSpot",
            "Google Captcha",
          ],
          liveUrl: "https://pricemoov.com",
          // githubUrl: "https://github.com/MuhammadAbdullah780/pricemoov",
        },
        // HRM
        {
          description: `A system designed to streamline HR operations with features like role-based authentication, API integrations, and dynamic roles authorization. Built with Next.js, Nest.js, and MongoDB.`,
          endDate: "Dec 2023",
          startDate: "Apr 2023",
          imgAlt: "HRM System",
          imgSrc: "/me.avif",
          title: "HRM System",
          skillsUsed: [
            "Next.js",
            "Nest.js",
            "MongoDB",
            "Ant Design",
            "JWT Authentication",
            "Slack API",
          ],
          // liveUrl: "https://hrm-system-muhammadabdullah780.vercel.app",
          // githubUrl: "https://github.com/MuhammadAbdullah780/hrm-system",
        },
        // We Fresh
        {
          description: `A food ordering platform for groceries, cafes, and restaurants designed with seamless navigation and user experience. Built with Next.js and Contentful.`,
          endDate: "Jan 2023",
          startDate: "Jan 2023",
          imgAlt: "WeFresh",
          imgSrc: "/me.avif",
          title: "WeFresh",
          skillsUsed: ["Next.js", "Contentful", "Tailwind CSS"],
          liveUrl: "https://wefreshnextjs.netlify.app",
          githubUrl: "https://github.com/MuhammadAbdullah780/we-fresh-nextjs",
        },
        // Instagram Clone
        {
          description: `An Instagram clone built with modern web technologies, replicating Instagram's core functionalities such as dynamic user feeds, real-time interactions, and profile management.`,
          endDate: "Jun 2023",
          startDate: "Mar 2023",
          imgAlt: "Instagram Clone",
          imgSrc: "/me.avif",
          title: "Instagram Clone",
          skillsUsed: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "JWT Authentication",
            "Material UI",
          ],
          liveUrl: "https://instagram-mern-muhammadabdullah780.vercel.app",
          githubUrl: "https://github.com/MuhammadAbdullah780/instagram-mern",
        },
      ],
    },
  },
};
