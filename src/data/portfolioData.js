import foodDeliveryImg from '../assets/food-delivery-app.png';
import whatsappUiImg from '../assets/whatsapp-ui-design.png';

export const personalInfo = {
  name: "Ramakrishnan M",
  role: "Generative AI & Full-Stack Developer",
  tagline: "Building Intelligent AI Solutions & Scalable Web Applications",
  subhead: "Computer Science Engineering graduate with hands-on experience in Generative AI, NLP, RAG, LLMs, Full-Stack MERN development, and AWS Cloud.",
  location: "Dindigul, Tamil Nadu, India",
  email: "ramkrishnanm.dev@gmail.com",
  linkedin: "https://linkedin.com/in/ramakrishnan-m-5211842a0",
  github: "https://github.com/MRam2006",
  availability: "Open for Generative AI, Full-Stack, and Cloud Engineering Roles",
  stats: [
    { label: "RAG Groundedness", value: "5/5 Score" },
    { label: "Corpus Processed", value: "4,114 Pages" },
    { label: "SQL Problems Solved", value: "40+ LeetCode" },
    { label: "Cloud Certifications", value: "AWS Certified" }
  ]
};

export const aboutData = {
  bio: `I am a Computer Science Engineering graduate with a strong foundation in Generative AI and NLP. My hands-on experience spans Transformers, LLMs, Prompt Engineering, Retrieval-Augmented Generation (RAG), vector databases, similarity search, agentic workflows, and Model Context Protocol (MCP) concepts.

Alongside that, I build full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and deploy with AWS cloud services including EC2, S3, IAM, VPC, RDS, and Lambda.

I enjoy turning complex technical ideas into practical, production-ready software and am seeking opportunities in Generative AI development, full-stack engineering, and cloud-backed application work.`,
  cards: [
    { title: "Computer Science Engineering Graduate", desc: "Solid algorithmic and computer science foundations with an Anna University degree.", icon: "GraduationCap" },
    { title: "Generative AI & NLP", desc: "Hands-on experience with RAG, Transformers, embeddings, vector databases, and agentic workflows.", icon: "Brain" },
    { title: "Full-Stack MERN Development", desc: "Production-ready web APIs, React interfaces, JWT authentication, and MongoDB design.", icon: "Code2" },
    { title: "AWS Cloud Infrastructure", desc: "Certified knowledge of AWS EC2, S3, IAM, VPC, RDS, and Lambda deployment.", icon: "Cloud" },
    { title: "Machine Learning & NLP Projects", desc: "Benchmarking sentiment pipelines, embedding models, and deep learning research projects.", icon: "Cpu" }
  ]
};

export const skillsCategories = [
  {
    id: "genai",
    title: "Generative AI & NLP",
    icon: "Sparkles",
    skills: [
      { name: "Transformers", level: "Advanced" },
      { name: "LLMs", level: "Advanced" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "RAG", level: "Advanced" },
      { name: "Vector Databases", level: "Proficient" },
      { name: "Similarity Search", level: "Proficient" },
      { name: "Agentic AI", level: "Proficient" },
      { name: "MCP", level: "Proficient" }
    ]
  },
  {
    id: "ml",
    title: "Machine Learning / Data",
    icon: "LineChart",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "Machine Learning", level: "Proficient" },
      { name: "Deep Learning", level: "Proficient" },
      { name: "Pandas", level: "Proficient" },
      { name: "Word2Vec / Embeddings", level: "Proficient" }
    ]
  },
  {
    id: "web",
    title: "Web Development",
    icon: "Layout",
    subtitle: "MERN Full-Stack",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Node.js", level: "Proficient" },
      { name: "Express.js", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "REST APIs", level: "Advanced" },
      { name: "JWT", level: "Proficient" }
    ]
  },
  {
    id: "cloud",
    title: "AWS Cloud",
    icon: "CloudLightning",
    skills: [
      { name: "EC2", level: "Proficient" },
      { name: "S3", level: "Proficient" },
      { name: "IAM", level: "Proficient" },
      { name: "VPC", level: "Proficient" },
      { name: "RDS", level: "Proficient" },
      { name: "Lambda", level: "Proficient" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "Figma", level: "Proficient" },
      { name: "Postman", level: "Proficient" },
      { name: "VS Code", level: "Advanced" }
    ]
  }
];

export const projectsData = [
  {
    id: "rag-medical",
    title: "RAG-Based Medical Knowledge Assistant",
    category: "Generative AI | RAG | NLP",
    catFilter: "genai",
    featured: true,
    shortDesc: "Retrieval-Augmented Generation pipeline built over the 4,114-page Merck Manuals medical reference with 8,757 vector segments.",
    longDesc: "Built a Retrieval-Augmented Generation pipeline over the 4,114-page Merck Manuals medical reference. The document corpus was divided into 8,757 segments, embedded using MiniLM and stored in a Chroma vector database with top-5 similarity retrieval. An LLM-judge evaluation achieved a 5/5 groundedness score across queries covering sepsis, surgery, dermatology and neurology, outperforming an ungrounded prompt-only baseline.",
    metrics: [
      { label: "Document Length", val: "4,114 Pages" },
      { label: "Chroma Segments", val: "8,757 Chunks" },
      { label: "Retrieval K", val: "Top-5 Vector Search" },
      { label: "LLM Groundedness", val: "5/5 Score" }
    ],
    tech: ["RAG", "MiniLM", "ChromaDB", "Vector Embeddings", "LLMs", "NLP", "Python", "LangChain"],
    github: "https://github.com/MRam2006/RAG-Based-Medical-Knowledge-Assistant-For-Clinical-Decision-Support.git",
    live: null
  },
  {
    id: "stock-sentiment",
    title: "Stock Market News Sentiment Analysis",
    category: "Machine Learning | NLP | Sentiment Analysis",
    catFilter: "ml",
    featured: true,
    shortDesc: "Benchmarked 4 sentiment-classification pipelines using Word2Vec and BAAI/bge-base-en-v1.5 embeddings for financial market news.",
    longDesc: "Built and benchmarked four sentiment-classification pipelines using Word2Vec and BAAI/bge-base-en-v1.5 embeddings combined with Random Forest and Neural Network models. The project used 349 labeled financial news articles. The best-performing pipeline achieved 50% test accuracy and 0.44 F1 score, improving over the Word2Vec baseline of 42.9% accuracy.",
    metrics: [
      { label: "Dataset Size", val: "349 Labeled Articles" },
      { label: "Pipelines Tested", val: "4 Architectures" },
      { label: "Test Accuracy", val: "50.0% (vs 42.9%)" },
      { label: "F1 Score", val: "0.44 Macro F1" }
    ],
    tech: ["Python", "NLP", "Word2Vec", "BGE Embeddings", "Random Forest", "Neural Networks", "Pandas", "Scikit-Learn"],
    github: "https://github.com/MRam2006/AI-Driven-Sentiment-Analysis-for-Stock-Price-Prediction-using-News-Data.git",
    live: null
  },
  {
    id: "agentic-news-food",
    title: "AI-Powered News Discovery Agent & Food Delivery Chatbot",
    category: "Agentic AI | LLM | MCP",
    catFilter: "agentic",
    featured: true,
    shortDesc: "Intelligent agentic applications using LLM reasoning and Model Context Protocol for contextual tool interaction.",
    longDesc: "Developed agentic AI applications using LLM-based reasoning and Model Context Protocol (MCP) concepts to create intelligent applications capable of interacting with external tools, contextual data sources, and automated task execution workflows.",
    metrics: [
      { label: "Reasoning Loop", val: "LLM Agent" },
      { label: "Protocol Standard", val: "MCP Compliant" },
      { label: "Tool Integration", val: "Multi-Tool Binding" }
    ],
    tech: ["LLMs", "Agentic AI", "MCP", "Prompt Engineering", "Python", "Tool Calling"],
    github: "https://github.com/MRam2006",
    live: null
  },
  {
    id: "dna-codec",
    title: "AI-Based DNA Codec Prediction: Twin-Sister AI Architecture",
    category: "AI/ML | Deep Learning | Final Year Project",
    catFilter: "deeplearning",
    featured: true,
    badge: "Final Year Project | Team of 4",
    shortDesc: "Computational gene therapy pipeline pairing DNABERT-2 / HyenaDNA with DeepMind Enformer and compliance validator engine.",
    longDesc: "Designed a computational pipeline combining DNABERT-2 / HyenaDNA with DeepMind Enformer and a compliance-focused Final Validator Engine covering EU MDR, IVDR and HIPAA regulatory considerations for gene therapy predictive modeling.",
    metrics: [
      { label: "Architecture", val: "Twin-Sister AI" },
      { label: "Genomic Models", val: "DNABERT-2 & HyenaDNA" },
      { label: "Regulatory Engine", val: "MDR / IVDR / HIPAA" }
    ],
    tech: ["DNABERT-2", "HyenaDNA", "DeepMind Enformer", "Deep Learning", "PyTorch", "Python"],
    github: "https://github.com/MRam2006",
    live: null
  },
  {
    id: "mern-auth",
    title: "Full-Stack MERN Authentication System",
    category: "Full-Stack Development",
    catFilter: "mern",
    featured: false,
    shortDesc: "Secure authentication framework built with JWT, bcrypt encryption, protected routes, and RESTful API endpoints.",
    longDesc: "Built a secure authentication system using JWT-based authentication, bcrypt password encryption, RESTful APIs and protected routes using MongoDB, Express.js, React.js and Node.js.",
    metrics: [
      { label: "Security", val: "JWT & Bcrypt" },
      { label: "API Standard", val: "RESTful JSON" },
      { label: "State Sync", val: "Context / Hooks" }
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "bcrypt", "Tailwind CSS"],
    github: "https://github.com/MRam2006",
    live: null
  },
  {
    id: "aws-cloud-deploy",
    title: "AWS Cloud Infrastructure & Deployment Project",
    category: "AWS | Cloud Computing",
    catFilter: "cloud",
    featured: false,
    shortDesc: "High-availability deployment on Amazon EC2 with S3 buckets, IAM security roles, and customized VPC networking.",
    longDesc: "Deployed full-stack applications using Amazon EC2, configured secure S3 storage buckets and IAM roles, and designed a custom VPC architecture for network isolation and cost efficiency.",
    metrics: [
      { label: "Compute", val: "Amazon EC2" },
      { label: "Object Storage", val: "Amazon S3" },
      { label: "Security & Net", val: "IAM & Custom VPC" }
    ],
    tech: ["AWS EC2", "AWS S3", "AWS IAM", "AWS VPC", "Cloud Architecture", "Linux Shell"],
    github: "https://github.com/MRam2006",
    live: null
  },
  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    category: "UI/UX Design",
    catFilter: "uiux",
    featured: true,
    image: foodDeliveryImg,
    gallery: [foodDeliveryImg],
    shortDesc: "Complete mobile user interface design for an on-demand food delivery app featuring modern discovery, restaurant menus, cart, and checkout tracking.",
    longDesc: "End-to-end mobile user interface design system created in Figma for an on-demand food delivery mobile application (Crave Express). Features modern UI components, authentication flows, visual food menus, category filtering, cart management, checkout map tracking, and user profile management.",
    tech: ["Figma", "UI/UX Design", "Mobile App Design", "Wireframing", "Prototyping"],
    figmaUrl: "https://www.figma.com/design/AOGizcRrYbvDF3eXuKqcVD/Food-Delivery-App?node-id=0-1&t=1wkUgXNPoSvN4Xg3-1",
    github: null,
    live: null
  },
  {
    id: "socialmedia-analytics",
    title: "Social Media Analytics",
    category: "Python | Data Analytics",
    catFilter: "ml",
    featured: false,
    shortDesc: "Data analytics project using Python to analyze and extract insights from social media metrics.",
    longDesc: "Data analytics project built with Python to analyze social media data, explore user engagement patterns, and evaluate interaction metrics.",
    tech: ["Python", "Data Analytics"],
    github: "https://github.com/MRam2006/socialmedia-analytics.git",
    live: null
  },
  {
    id: "swiggy-sql-analysis",
    title: "Swiggy SQL Analysis",
    category: "SQL | Data Analysis",
    catFilter: "ml",
    featured: false,
    shortDesc: "SQL data analysis examining food delivery orders, restaurant performance, and customer ordering patterns.",
    longDesc: "SQL-based data analysis analyzing Swiggy datasets to extract business insights regarding customer ordering frequency, restaurant sales, and delivery data.",
    tech: ["SQL", "Data Analysis"],
    github: "https://github.com/MRam2006/swiggy-sql-analysis.git",
    live: null
  },
  {
    id: "whatsapp-ui-design",
    title: "WhatsApp UI Design",
    category: "UI/UX Design",
    catFilter: "uiux",
    featured: true,
    image: whatsappUiImg,
    gallery: [whatsappUiImg],
    shortDesc: "Comprehensive Android mobile messaging application UI design and layout system built with precision components in Figma.",
    longDesc: "Full Android mobile application user interface design for WhatsApp in Figma. Encompasses splash screens, phone authentication and OTP verification interfaces, clean chat listing with search, rich interactive chat view, status updates, communities hub, and voice/video calling screens.",
    tech: ["Figma", "UI/UX Design", "Android UI", "Design Systems", "Prototyping"],
    figmaUrl: "https://www.figma.com/design/Ye5INanxIb0ezPivZfYKbE/whatsapp?node-id=0-1&t=l3cgA20fRLhskOXO-1",
    github: null,
    live: null
  }
];

export const experienceData = [
  {
    role: "MERN Stack Developer Intern",
    company: "Main Flow Services and Technologies Pvt. Ltd.",
    period: "July 2025 – August 2025",
    type: "Internship",
    points: [
      "Built responsive MERN applications with modern user interfaces and state management.",
      "Developed end-to-end CRUD functionality and robust JWT authentication modules.",
      "Designed and documented structured REST APIs for seamless client-server communication.",
      "Gained practical experience deploying modules with AWS EC2, S3, and IAM roles."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "AWS EC2", "AWS S3"]
  },
  {
    role: "AWS Cloud Intern",
    company: "Cultus Skilling and Job Tech",
    period: "August 2025 – November 2025",
    type: "Internship",
    points: [
      "Worked hands-on with core AWS cloud services including EC2, S3, IAM, VPC, RDS, and Lambda.",
      "Analyzed and implemented cloud cost-optimization strategies and resource auto-scaling rules.",
      "Gained practical exposure to cloud infrastructure provisioning, security groups, and deployment workflows."
    ],
    tech: ["AWS EC2", "AWS S3", "AWS IAM", "AWS VPC", "AWS RDS", "AWS Lambda", "Cloud Security"]
  }
];

export const trainingData = {
  title: "Generative AI & Data Science Placement Training",
  institution: "RVS College of Arts & Science, Coimbatore",
  period: "May 2026 – September 2026",
  topics: [
    "Python", "SQL", "Machine Learning", "Deep Learning", "NLP",
    "Transformers", "LLMs", "Prompt Engineering", "RAG", "Agentic AI Workflows"
  ],
  achievement: "Solved 40+ SQL problems on LeetCode with optimized query logic."
};

export const educationData = {
  degree: "Bachelor of Engineering — Computer Science Engineering",
  institution: "RVS Group of Institutions, Dindigul",
  university: "Anna University",
  period: "2022 – 2026",
  highlights: [
    "Specialization in Computer Science & AI-focused coursework",
    "Final Year Research Project on Twin-Sister AI Architecture for Gene Therapy Codec Prediction",
    "Active member of Technical AI & Coding clubs"
  ]
};

export const certificationsData = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Certified",
    badge: "Official AWS Credential",
    desc: "Validates overall understanding of AWS Cloud platform, core services, security, architecture principles, and cost-optimization practices.",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  }
];
