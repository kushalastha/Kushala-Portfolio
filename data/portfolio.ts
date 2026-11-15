export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  tools: string[];
} & (
  | { status: "Planned"; link?: never }
  | { status: "Completed"; link?: PortfolioLink }
);

export type PortfolioEducation = {
  id: string;
  qualification: string;
  institution: string;
  years?: string;
};

export type PortfolioCertification = {
  id: string;
  title: string;
  issuer: string;
};

export type PortfolioExperience = {
  id: string;
  organization: string;
  role: string;
  status: "Present" | "Previous";
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights: string[];
};

export type PortfolioSkillGroup = {
  id: "testing" | "tools" | "programming" | "automation";
  title: string;
  items: string[];
};

export type PortfolioAbout = {
  heading: string;
  paragraphs: string[];
  highlights: string[];
};

export type PortfolioData = {
  name: string;
  role: string;
  bio: string | null;
  email: string | null;
  location: string | null;
  linkedinUrl: string | null;
  about: PortfolioAbout;
  skills: PortfolioSkillGroup[];
  projects: PortfolioProject[];
  education: PortfolioEducation[];
  certifications: PortfolioCertification[];
  experience: PortfolioExperience[];
  links: PortfolioLink[];
};

// Only supplied facts belong here. Empty fields await verified portfolio content.
export const portfolio: PortfolioData = {
  name: "Kushala Shrestha",
  role: "Software QA Engineer",
  bio: "Passionate about delivering reliable, high-quality software through thoughtful testing, problem-solving, and continuous improvement.",
  email: "writetokushalashrestha@gmail.com",
  location: "Lalitpur, Nepal",
  linkedinUrl: "https://www.linkedin.com/in/kushala-shrestha33a178285/",
  about: {
    heading: "More than testing, it's about building better software.",
    paragraphs: [
      "I'm Kushala Shrestha, a Software Quality Assurance professional with hands-on experience in functional and API testing, test case design and execution, and defect management.",
      "I enjoy exploring software, understanding requirements, and anticipating risks. By collaborating with teams, I aim to improve products and help deliver reliable, user-friendly applications.",
      "I'm continuously expanding my technical knowledge, with a focus on test automation, emerging technologies, and AI-assisted testing practices.",
    ],
    highlights: ["Analytical Thinking", "Collaboration", "Continuous Learning"],
  },
  skills: [
    {
      id: "testing",
      title: "QA & Testing",
      items: ["Manual Testing", "Functional Testing", "Smoke Testing", "Sanity Testing", "Test Case Design & Execution"],
    },
    { id: "tools", title: "API & Tools", items: ["Postman", "Jira", "Trello"] },
    { id: "programming", title: "Programming", items: ["Python", "JavaScript", "SQL"] },
    { id: "automation", title: "Automation — Learning & Practice", items: ["Playwright", "Selenium coursework"] },
  ],
  projects: [
    {
      id: "api-testing",
      title: "API Testing",
      status: "Planned",
      tools: ["Postman"],
      description: "Building a documented API testing collection covering positive and negative scenarios, response assertions, and test execution.",
    },
    {
      id: "playwright-automation",
      title: "Playwright Automation",
      status: "Planned",
      tools: ["Playwright", "JavaScript"],
      description: "Developing end-to-end automation testing skills through maintainable test scripts, reusable testing patterns, and test reports.",
    },
    {
      id: "manual-qa-case-study",
      title: "Manual QA Case Study",
      status: "Planned",
      tools: ["Test Design", "Defect Reporting"],
      description: "Creating a complete manual testing case study with test scenarios, test cases, documented defects, and a testing summary.",
    },
  ],
  education: [
    {
      id: "bsc-csit",
      qualification: "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
      institution: "Academia International College, Gwarko",
      years: "2022–2026",
    },
    {
      id: "higher-secondary",
      qualification: "Science Stream (Higher Secondary)",
      institution: "Kathmandu Model College, Balkumari",
    },
    {
      id: "school",
      qualification: "School Education (Grades 1–10)",
      institution: "Middle Point English Boarding High School, Thasikhel",
    },
  ],
  certifications: [
    { id: "selenium", title: "Selenium Course", issuer: "Simplilearn" },
    { id: "software-testing", title: "Practical Software Testing", issuer: "Udemy" },
    { id: "mern", title: "MERN", issuer: "SkillSpark" },
  ],
  experience: [
    {
      id: "junior-qa",
      organization: "SumX Inc.",
      role: "Junior Software QA",
      status: "Present",
      highlights: [
        "Analyze functional requirements and design test cases.",
        "Execute functional, smoke, and sanity testing.",
        "Perform API testing using Postman.",
        "Identify, report, and track defects using Jira.",
        "Communicate with developers and product teams.",
      ],
    },
    {
      id: "qa-intern",
      organization: "SumX Inc.",
      role: "Software QA Intern",
      status: "Previous",
      highlights: [],
    },
  ],
  links: [{ label: "GitHub", href: "https://github.com/kushalastha" }],
};

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const heroContent = {
  label: "Software Quality Assurance",
  greeting: "Hello, I'm",
  actions: [
    { label: "Explore My Work", href: "#projects", variant: "primary" },
    { label: "Get in Touch", href: "#contact", variant: "secondary" },
  ],
  badges: ["Testing", "API Testing", "Automation Learning"],
} as const;

export const skillsContent = { heading: "My QA Toolkit." };

export const experienceContent = {
  heading: "My Career Journey.",
};

export const projectsContent = {
  heading: "Testing in Practice",
  introduction: "A growing collection of hands-on quality engineering projects, experiments, and practical learning.",
};

export const educationContent = { heading: "Academic Background" };
export const certificationsContent = { heading: "Professional Learning" };
export const contactContent = {
  heading: "Let's build better software together.",
  description: "Interested in discussing software testing, automation, quality engineering, or professional opportunities? I'd love to connect.",
};
