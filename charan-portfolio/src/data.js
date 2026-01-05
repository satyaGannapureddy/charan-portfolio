// src/data.js

export const profile = {
  name: "",
  title: "Charan Gannapureddy",
  location: "Baltimore, MD",
  degree: "MPS in Data Science — UMBC",
  gpa: "4.0",
  email: "charangannapureddy77@gmail.com",
  links: {
    github: "https://github.com/satyaGannapureddy",
    linkedin: "https://www.linkedin.com/in/satya-gannapureddy/",
    resume: "/Charan_Resume.pdf", // put PDF inside /public with this exact name
  },
  tagline:
    "I am a Data Science graduate currently seeking opportunities as a Data Analyst, Data Scientist, Business Analyst, and Machine Learning Engineer.",
  about:
    "I’m a Data Science graduate student at the University of Maryland, Baltimore County (UMBC) with a 4.0 GPA and hands-on internship experience in data science and analytics. I have worked extensively on large-scale data cleaning and validation, automated ETL workflows, and exploratory data analysis to ensure reliable, high-quality datasets. My experience also includes building and evaluating predictive machine learning models, with exposure to NLP and deep learning through academic and project-based work. In parallel, I design and develop interactive dashboards using Tableau to translate complex analyses into clear, actionable insights for stakeholders. Across my projects and internships, I focus on turning raw data into decision-ready outputs by combining analytics, modeling, and visualization. I am actively seeking opportunities in data analytics, data science, business analytics, and machine learning engineering where I can contribute across the full data lifecycle from data preparation to deployment.",
  stats: [
    { label: "Records cleaned/validated", value: "500K+" },
    { label: "ETL time reduced", value: "30–40%" },
    { label: "Reported model accuracy", value: "Up to 98%" },
  ],
};

// ✅ This is what App.jsx expects
// ✅ This is what App.jsx expects
export const tech = {
  "Programming Languages": ["Python", "SQL", "R"],

  "Data Processing & Engineering": [
    "ETL Pipelines",
    "Exploratory Data Analysis (EDA)",
    "Pandas",
    "NumPy",
    "Statistical Modeling",
    "Data Analysis Techniques",
    "Analytical Skills",
    "Report Building",
    "Data Science Fundamentals",
    "Basic Computer Skills",
    "Ethical Standards"
  ],

  "Machine Learning": [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "Predictive Modeling",
    "Model Building",
    "Feature Engineering",
    "Clustering",
    "Neural Networks"
  ],

  "Data Visualization & BI": [
    "Power BI",
    "Tableau",
    "Excel",
    "Matplotlib",
    "Seaborn"
  ],

  "Microsoft Office": [
    "Microsoft Word",
    "Excel (Pivot Tables)",
    "PowerPoint"
  ],

  "Database Management": [
    "PostgreSQL",
    "MySQL"
  ]
};


export const services = [
  {
    title: "ML / NLP Solutions",
    desc: "Text classification, embeddings, model evaluation, and explainability with clean pipelines.",
  },
  {
    title: "Data Analytics",
    desc: "EDA, KPI tracking, and insights that translate data into clear decisions.",
  },
  {
    title: "Dashboards",
    desc: "Tableau/Power BI dashboards for stakeholders with well-designed metrics and filters.",
  },
  {
    title: "Data Cleaning + ETL",
    desc: "Reliable data prep workflows, schema design, and automated extraction/transform steps.",
  },
];

export const projects = [
  {
    name: "UMBC DATA606 Capstone — Fake Job Posting Detection",
    desc: "End-to-end NLP system to detect fraudulent job postings using embeddings + ML, with explainability.",
    bullets: [
      "Trained multiple models (XGBoost, RF, Logistic Regression, LinearSVC) with strong performance.",
      "Improved minority-class recall using SMOTE (reported 35% → 82–91%).",
      "Used SentenceTransformer/LLM embeddings + SHAP for interpretability.",
    ],
    tags: ["Python", "NLP", "XGBoost", "Embeddings", "SHAP", "Streamlit"],
    links: {
      github: "https://github.com/satyaGannapureddy/UMBC-DATA606-Capstone",
      live: "",
    },
  },
  {
    name: "COVID-19 Prediction using X-ray Images",
    desc: "Deep learning project to classify COVID-19 from X-ray images using CNN and MobileNet, deployed with Flask.",
    bullets: [
      "Trained CNN and MobileNet models (reported 91% and 88% accuracy).",
      "Applied preprocessing and overfitting control techniques.",
      "Deployed as a Flask application for real-time prediction.",
    ],
    tags: ["Python", "Deep Learning", "CNN", "MobileNet", "Flask"],
    links: {
      github: "https://github.com/satyaGannapureddy/Covid-19-Prediction-using-x-ray-images",
      live: "",
    },
  },
  {
    name: "Traffic Signal Detection using Deep Learning",
    desc: "Computer vision pipeline to detect traffic signals for driving-assistance use cases.",
    bullets: [
      "Built a deep learning based detection workflow and evaluation.",
      "Focused on practical computer vision model development steps.",
    ],
    tags: ["Python", "Computer Vision", "Deep Learning"],
    links: {
      github: "https://github.com/satyaGannapureddy/Traffic-Signal-Detection-using-Deep-Learning",
      live: "",
    },
  },
  {
    name: "Amazon Fine Food Reviews — Sentiment Analysis",
    desc: "NLP project on Amazon fine food reviews for sentiment classification and text analysis.",
    bullets: [
      "Performed text preprocessing and feature extraction.",
      "Built models for sentiment prediction and evaluation.",
    ],
    tags: ["Python", "NLP", "Text Processing"],
    links: {
      github: "https://github.com/satyaGannapureddy/Amazon-Fine-Food-reviews",
      live: "",
    },
  },
];
