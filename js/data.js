const DATA = {

  // ── PERSONAL ──────────────────────────────────────────
  name:       "Ronit Shah",
  initials:   "RS",
  tagline:    "I build intelligent, production-ready AI systems across LLMs, RAG, Generative AI, and Computer Vision.",
  email:      "ronitshah350@gmail.com",
  phone:      "+91 7861907608",
  linkedin:   "https://linkedin.com/in/ronit-shah-b55b45283",
  github:     "https://github.com/ronit16",
  twitter:    "https://x.com/Ronit_Shah1601",
  resumeUrl:  "/assets/Ronit_Shah_Resume-1.pdf",

  // ── ROTATING ROLES (hero typing effect) ───────────────
  roles: [
    "AI / ML Engineer",
    "LLM & RAG Specialist",
    "Generative AI Developer",
    "Computer Vision Engineer",
    "Agentic AI Systems Builder",
  ],

  // ── HERO STATS ────────────────────────────────────────
  stats: [
    { num: "9.65",  label: "CGPA · B.Tech PDEU"   },
    { num: "3+",    label: "Production AI Projects" },
    { num: "10+",   label: "AI Tools & Frameworks"  },
    { num: "2",     label: "Industry Roles"         },
  ],

  // ── ABOUT ─────────────────────────────────────────────
  about: {
    paragraphs: [
      "I'm a versatile AI/ML Engineer specialising in large language models, RAG pipelines, and Generative AI — building intelligent systems that are production-ready, not just demo-ready. From agentic multi-agent workflows to multimodal applications, I bridge research and real-world deployment.",
      "My work spans agriculture, finance, EdTech, healthcare, and dental-clinic automation. I care about scalable architectures, low-latency inference, and making complex AI pipelines feel effortless for end users.",
    ],
    highlights: [
      "LLM & RAG pipeline design (LangChain, LangGraph, ADK)",
      "Multimodal AI — vision, speech, and text fusion",
      "Agentic AI systems with tool-calling & memory",
      "Cloud deployment: GCP, AWS, Firebase, Docker, CI/CD",
      "Computer Vision: segmentation, detection, georeferencing",
    ],
    achievements: [
      { icon: "🎓", text: "B.Tech Computer Engineering, CGPA 9.65 / 10 — PDEU" },
      { icon: "🏥", text: "Built omnichannel AI voice agent platform for dental clinics" },
      { icon: "🌾", text: "Krishi Maitri — AI platform serving real-time farmer insights" },
      { icon: "🛰️", text: "Geospatial AI intern at BISAG-N — SAM, YOLO, Mask-RCNN on satellite imagery" },
    ],
  },

  // ── SKILLS ────────────────────────────────────────────
  // level: 0–100  |  amber: true = amber colour bar
  skills: [
    {
      category: "LLM & Generative AI",
      icon: "🧠",
      items: [
        { name: "LangChain / LangGraph",             level: 90 },
        { name: "RAG Pipelines & Vector DBs",         level: 88 },
        { name: "Gemini / GPT / Prompt Engineering",  level: 87 },
        { name: "Agent Development Kit (ADK)",        level: 82 },
        { name: "ElevenLabs STT / TTS Integration",   level: 78 },
      ]
    },
    {
      category: "ML Frameworks & Deep Learning",
      icon: "⚡",
      items: [
        { name: "Python (Advanced)",            level: 95 },
        { name: "PyTorch / TensorFlow / Keras", level: 88 },
        { name: "CNN / RNN / LSTM / GAN / VAE", level: 82 },
        { name: "OpenCV / Computer Vision",     level: 85 },
        { name: "Scikit-learn",                 level: 84 },
      ]
    },
    {
      category: "Cloud & MLOps",
      icon: "☁️",
      items: [
        { name: "GCP (Cloud Run, Functions, Pub/Sub)", level: 85, amber: true },
        { name: "AWS (EC2, S3, Lambda)",               level: 75, amber: true },
        { name: "Firebase / Firestore",                level: 80, amber: true },
        { name: "Docker / CI-CD / Containerisation",   level: 82, amber: true },
        { name: "FastAPI / WebSockets",                level: 88, amber: true },
      ]
    },
    {
      category: "Computer Vision & Geospatial",
      icon: "👁️",
      items: [
        { name: "YOLOv8 / YOLOv10 / Mask-RCNN",     level: 83 },
        { name: "SAM / SAM2 (Segment Anything)",      level: 78 },
        { name: "DeepLabV3+ / U-Net / Detectron2",    level: 76 },
        { name: "Google Earth Engine (GEE)",           level: 80 },
        { name: "GDAL / QGIS / Georeferencing",       level: 72 },
      ]
    },
    {
      category: "Data & Backend",
      icon: "📊",
      items: [
        { name: "Pandas / NumPy / Feature Engineering", level: 90, amber: true },
        { name: "SQL / MongoDB",                         level: 80, amber: true },
        { name: "Node.js / TypeScript",                  level: 74, amber: true },
        { name: "React.js",                              level: 70, amber: true },
        { name: "Speech Processing / WebRTC",            level: 76, amber: true },
      ]
    },
    {
      category: "Specialised Applications",
      icon: "🎯",
      items: [
        { name: "NLP & Transformer Models",             level: 85 },
        { name: "Time Series Forecasting",              level: 78 },
        { name: "AttnGAN / Generative Image Models",   level: 74 },
        { name: "Multimodal AI (Vision + Speech + Text)", level: 82 },
        { name: "Agentic Workflow Orchestration",       level: 86 },
      ]
    },
  ],

  // ── EXPERIENCE ────────────────────────────────────────
  experience: [
    {
      role:    "Machine Learning Engineer",
      company: "Hyperlink Infosystem Pvt. Ltd.",
      period:  "Jan 2025 – Present",
      desc:    "Leading development of production AI systems — from omnichannel dental-clinic automation to an AI trading platform — using LLMs, agentic workflows, and scalable cloud deployment.",
      bullets: [
        "Led development of an AI-powered omnichannel support platform for dental clinics, automating inbound/outbound patient communication",
        "Built AI voice agents for appointment booking, insurance support, follow-ups, and missed-appointment recovery using ElevenLabs STT/TTS",
        "Designed stateful multi-agent workflows with LangChain & LangGraph — memory, tool-calling, and conditional routing",
        "Led development of Money Tree, an AI trading platform with real-time data pipelines, predictive models, coding agents, and AWS deployment",
        "Deployed scalable ML pipelines via FastAPI, Docker, and CI/CD covering NLP, object detection, and forecasting",
        "Built advanced deep learning / generative AI models: AttnGAN, CNN/RNN/LSTM/GAN/VAE architectures",
      ],
      tags: ["LangChain", "LangGraph", "FastAPI", "ElevenLabs", "Docker", "AWS", "RAG", "LLM"],
    },
    {
      role:    "Geospatial Analyst & Computer Vision Intern",
      company: "Bhaskaracharya Institute for Space Applications (BISAG-N)",
      period:  "May 2024 – Aug 2024",
      desc:    "Conducted research into satellite-image analysis, crop-stage detection, and farm boundary segmentation using state-of-the-art CV models on Google Earth Engine.",
      bullets: [
        "Investigated paddy crop classification and temporal-spatial analysis using Google Earth Engine (GEE)",
        "Integrated Segment Anything Model (SAM) for zero-shot segmentation on TIFF satellite images",
        "Comparative analysis of DeepLabV3+, Mask-RCNN, U-Net, and Detectron2 for farm boundary detection",
        "Trained Mask-RCNN on custom annotated datasets for farm detection; forest fire detection using MODIS datasets",
        "Explored NDVI / NDBI indices for vegetation health monitoring; deployed SAM2 and YOLOv10 for advanced detection",
      ],
      tags: ["GEE", "SAM", "SAM2", "YOLOv10", "Mask-RCNN", "U-Net", "GDAL", "Python"],
    },
  ],

  // ── PROJECTS ──────────────────────────────────────────
  //
  //  HOW TO ADD / EDIT A PROJECT
  //  ────────────────────────────
  //  Copy the template below, fill in the fields, and paste it into the array.
  //
  //  {
  //    title:    "Project Name",
  //    icon:     "🔥",            // single emoji shown on the card
  //    desc:     "One paragraph describing what it does and the impact.",
  //    tags:     ["Tag1", "Tag2", "Tag3"],   // tech stack — keep it ≤ 6
  //    category: "agentic",       // filter tab: "agentic" | "cv" | "multimodal" | "edtech"
  //    github:   "https://github.com/ronit16/repo",  // "" = hides the button
  //    demo:     "https://your-demo.com",            // "" = hides the button
  //  },
  //
  //  CATEGORIES (controls which filter tab shows the card)
  //    "agentic"    → LLM / RAG / Agentic AI / Trading / Voice
  //    "cv"         → Computer Vision / Geospatial / Satellite
  //    "multimodal" → Vision + Speech + Text projects
  //    "edtech"     → Education / HR / EdTech platforms
  //
  projects: [

    // ── Agentic AI ─────────────────────────────────────
    {
      title:    "Krishi Maitri — Farmer AI Platform",
      icon:     "🌾",
      desc:     "Farmer-focused AI platform integrating crop disease detection, market price updates, weather forecasting, and government scheme insights. Uses Agentic AI, RAG pipelines, vector databases, and Gemini-based generative AI for real-time personalised recommendations.",
      tags:     ["Agentic AI", "RAG", "Gemini", "GCP", "Firebase", "ADK"],
      category: "agentic",
      github:   "https://github.com/ronit16",
      demo:     "",
    },
    {
      title:    "Dental Clinic AI Voice Agent",
      icon:     "🏥",
      desc:     "Omnichannel AI support platform automating inbound and outbound patient communication for dental clinics. Stateful multi-agent orchestration with LangGraph, ElevenLabs STT/TTS, and Node.js integrations with clinic scheduling APIs.",
      tags:     ["LangGraph", "ElevenLabs", "FastAPI", "Node.js", "LLM"],
      category: "agentic",
      github:   "",
      demo:     "",
    },
    {
      title:    "Money Tree — AI Trading Platform",
      icon:     "📈",
      desc:     "AI-powered trading platform with real-time data pipelines, predictive deep learning models, coding agents, and AWS deployment. Features automated signal generation and intelligent portfolio recommendations.",
      tags:     ["AWS", "Deep Learning", "Time Series", "Python", "FastAPI"],
      category: "agentic",
      github:   "",
      demo:     "",
    },

    // ── Multimodal ─────────────────────────────────────
    {
      title:    "AI Study Assistant — Multimodal",
      icon:     "📚",
      desc:     "Full-stack AI web assistant for students to query academic questions via image or speech. Built with WebRTC for real-time camera/mic integration, Google Speech-to-Text, and Gemini multimodal API backed by GCP Cloud Functions and Pub/Sub.",
      tags:     ["Gemini", "WebRTC", "GCP", "FastAPI", "WebSockets", "TTS"],
      category: "multimodal",
      github:   "https://github.com/ronit16",
      demo:     "",
    },

    // ── EdTech ─────────────────────────────────────────
    {
      title:    "AI Solutions Suite — EdTech & HR",
      icon:     "🎓",
      desc:     "All-in-one AI platform for education and HR automation using LLMs, RAG, and agentic tool-calling. Includes a 24/7 Virtual Assistant, Interactive Lesson Planner, Recommendation Engine, Worksheet Generator, and resume parsing/scoring tools.",
      tags:     ["LangChain", "RAG", "GCP Cloud Run", "FastAPI", "Transformers"],
      category: "edtech",
      github:   "https://github.com/ronit16",
      demo:     "",
    },

    // ── Computer Vision ────────────────────────────────
    {
      title:    "Satellite Farm Segmentation",
      icon:     "🛰️",
      desc:     "Georeferenced farm boundary detection and crop-stage classification on satellite imagery using SAM, SAM2, YOLOv10, and Mask-RCNN on Google Earth Engine. Output pipelines include GDAL-compatible chunking, merging, and boundary smoothing.",
      tags:     ["SAM2", "YOLOv10", "Mask-RCNN", "GEE", "GDAL", "QGIS"],
      category: "cv",
      github:   "",
      demo:     "",
    },

  ],

  // ── EDUCATION ─────────────────────────────────────────
  education: [
    {
      icon:    "🎓",
      school:  "Pandit Deendayal Energy University (PDEU)",
      degree:  "Bachelor of Technology — Computer Engineering",
      period:  "Jul 2021 – May 2025",
      gpa:     "9.65 / 10.0",
      courses: "Deep Learning, NLP, Computer Vision, Data Structures & Algorithms, DBMS, OOPs, Linear Algebra, Statistics, Operating Systems",
    },
  ],

  // ── CONTACT SERVICES ──────────────────────────────────
  services: [
    "LLM Application Development",
    "RAG Pipeline Design & Deployment",
    "Agentic AI System Architecture",
    "Computer Vision Solutions",
    "Cloud ML Deployment (GCP / AWS)",
    "Generative AI Consulting",
    "AI Voice Agent Development",
    "Freelance / Contract ML Projects",
  ],

}; // ← end of DATA — that's all you need to edit!