import {
  backend,
  web,
  python,
  sql,
  r,
  tableau,
  powerbi,
  excel,
  jupyter,
  pandas,
  numpy,
  scikit,
  snowflake,
  market_predict,
} from "../assets";

import nileUni from "../assets/institutions/nile-uni.png";
import nilePreneurs from "../assets/institutions/nile-preneurs.png";
import nileResearch from "../assets/institutions/nile-research.png";
import tum from "../assets/institutions/tum.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    url: "https://github.com/asmaaselghetany",
    color: "#333333"
  },
  {
    name: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    url: "https://www.linkedin.com/in/asmaaselghetany/",
    color: "#0077B5"
  },
  {
    name: "LeetCode",
    icon: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
    url: "https://leetcode.com/u/AAsmaa22/",
    color: "#FFA116"
  }
];

const services = [
  {
    title: 'Data Cleaning & Preparation',
    icon: web,
  },
  {
    title: 'Data Visualization',
    icon: web,
  },
  {
    title: 'Exploratory Data Analysis (EDA)',
    icon: web,
  },
  {
    title: 'Reporting & Business Insights',
    icon: web,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Scikit-learn",
    icon: scikit,
  },
  {
    name: "Snowflake",
    icon: snowflake,
  },
];

const experiences = [
  {
    title: 'Bachelor in Computer Science',
    company_name: 'Nile University',
    icon: nileUni,  
    iconBg: '#FFFFFF',
    date: 'Sept 2018 - April 2022',
    points: [
      'Graduated with a 1.1 CGPA and received a Full Merit Scholarship for Academic Excellence.',
      'Achieved 1st place in the Media Informatics Track for the best graduation project.',
      'Recognized on the President\'s Honor List twice and Dean\'s Honor List twice.',
      'Published research on Automated Dental Diagnosis using Deep Learning at ICCES and Cambridge University.',
    ],
  },
  {
    title: 'Data Analyst Trainee',
    company_name: 'Nile Preneurs Incubator',
    icon: nilePreneurs,  
    iconBg: '#FFFFFF',
    date: 'June 2019 - Aug 2019',
    points: [
      'Designed a visual identity for a startup brand using market research insights.',
      'Developed digital assets including logos, social media content, and marketing materials.',
      'Collaborated with stakeholders to ensure alignment between branding and business strategy.',
    ],
  },
  {
    title: 'Junior Research Assistant',
    company_name: 'Nile University Research Center',
    icon: nileResearch,  
    iconBg: '#FFFFFF',
    date: 'June 2022 - Oct 2022',
    points: [
      'Developed AI-powered predictive analytics models to enhance pre-operative assessment methods for mini-Aortic Valve Replacement (AVR) surgeries.',
      'Conducted in-depth research on advanced data analysis techniques to improve surgical decision-making and patient outcomes.',
      'Collaborated with medical professionals, data scientists, and engineers to bridge the gap between AI and healthcare innovations.',
    ],
  },
  {
    title: 'Master in Informatics',
    company_name: 'Technical University of Munich (TUM)',
    icon: tum, 
    iconBg: '#FFFFFF',
    date: 'April 2023 - Present',
    points: [
      'Specializing in Machine Learning and Analytics, with a minor in Database and Information Systems.',
      'Developing expertise in big data processing, predictive analytics, and cloud computing.',
      'Working on hands-on projects, including Bundesliga big data analysis using PySpark & SQL.',
      'Expanding knowledge in AI-driven decision-making, statistical modeling, and business intelligence tools.',
    ],
  },
];

const certificates = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "January 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/GOOGLE-DATA-ANALYTICS",
    category: "Data Analysis",
    logoHeight: "h-16",
    linkHeight: "h-8",
    logoMargin: "mb-4",
    linkMargin: "mt-4",
    cardPadding: "p-6",
    contentSpacing: "space-y-4",
    titleSize: "text-lg",
    issuerSize: "text-sm",
    dateSize: "text-sm"
  },
  {
    title: "IBM Data Analyst Professional Certificate",
    issuer: "Coursera",
    date: "December 2023",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/IBM-DATA-ANALYST",
    category: "Data Analysis",
    logoHeight: "h-16",
    linkHeight: "h-8",
    logoMargin: "mb-4",
    linkMargin: "mt-4",
    cardPadding: "p-6",
    contentSpacing: "space-y-4",
    titleSize: "text-lg",
    issuerSize: "text-sm",
    dateSize: "text-sm"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "November 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/Z5738AKAJ1XA",
    category: "Machine Learning",
    logoHeight: "h-16",
    linkHeight: "h-8",
    logoMargin: "mb-4",
    linkMargin: "mt-4",
    cardPadding: "p-6",
    contentSpacing: "space-y-4",
    titleSize: "text-lg",
    issuerSize: "text-sm",
    dateSize: "text-sm"
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "Coursera",
    date: "September 2021",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/BPU78MRV3WH4",
    category: "Machine Learning",
    logoHeight: "h-16",
    linkHeight: "h-8",
    logoMargin: "mb-4",
    linkMargin: "mt-4",
    cardPadding: "p-6",
    contentSpacing: "space-y-4",
    titleSize: "text-lg",
    issuerSize: "text-sm",
    dateSize: "text-sm"
  },
  {
    title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    issuer: "Coursera",
    date: "September 2021",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/E7MXDFRKZDN4",
    category: "Machine Learning",
    logoHeight: "h-16",
    linkHeight: "h-8",
    logoMargin: "mb-4",
    linkMargin: "mt-4",
    cardPadding: "p-6",
    contentSpacing: "space-y-4",
    titleSize: "text-lg",
    issuerSize: "text-sm",
    dateSize: "text-sm"
  },
  {
    title: "Structuring Machine Learning Projects",
    issuer: "Coursera",
    date: "September 2021",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/NRB3Q9UZBRKP",
    category: "Machine Learning",
    logoHeight: "h-16",
    linkHeight: "h-8",
    logoMargin: "mb-4",
    linkMargin: "mt-4",
    cardPadding: "p-6",
    contentSpacing: "space-y-4",
    titleSize: "text-lg",
    issuerSize: "text-sm",
    dateSize: "text-sm"
  }
];

const projects = [
  {
    name: "Automated Google Search",
    description: "A Python script that automates Google search queries and retrieves top results.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient"
      },
      {
        name: "Web Scraping",
        color: "green-text-gradient"
      },
      {
        name: "Automation",
        color: "pink-text-gradient"
      }
    ],
    image: market_predict,
    source_code_link: "https://github.com/asmaaselghetany/Automated-Google-Search"
  },
  {
    name: "Credit Card Fraud Detection",
    description: "A Jupyter Notebook project focused on detecting fraudulent credit card transactions using machine learning techniques.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient"
      },
      {
        name: "Fraud Detection",
        color: "green-text-gradient"
      },
      {
        name: "Jupyter Notebook",
        color: "pink-text-gradient"
      }
    ],
    image: market_predict,
    source_code_link: "https://github.com/asmaaselghetany/Credit-Card-Fraud-Detection"
  },
  {
    name: "Eyes Classification",
    description: "A project that classifies eye images using deep learning models implemented in Jupyter Notebook.",
    tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient"
      },
      {
        name: "Image Classification",
        color: "green-text-gradient"
      },
      {
        name: "Jupyter Notebook",
        color: "pink-text-gradient"
      }
    ],
    image: market_predict,
    source_code_link: "https://github.com/asmaaselghetany/Eyes-Classification"
  },
  {
    name: "German Credit Analysis",
    description: "A comprehensive analysis of German credit data to assess credit risk and predict default probability.",
    tags: [
      {
        name: "Data Analysis",
        color: "blue-text-gradient"
      },
      {
        name: "Risk Assessment",
        color: "green-text-gradient"
      },
      {
        name: "Python",
        color: "pink-text-gradient"
      }
    ],
    image: market_predict,
    source_code_link: "https://github.com/asmaaselghetany/German-Credit-Analysis"
  },
  {
    name: "Weather Data Insights",
    description: "A project analyzing and visualizing weather data patterns using Python and data visualization tools.",
    tags: [
      {
        name: "Data Visualization",
        color: "blue-text-gradient"
      },
      {
        name: "Python",
        color: "green-text-gradient"
      },
      {
        name: "Data Analysis",
        color: "pink-text-gradient"
      }
    ],
    image: market_predict,
    source_code_link: "https://github.com/asmaaselghetany/Weather-Data-Insights"
  },
  {
    name: "Top 100 Spotify Podcasts in Germany Data Analysis Project",
    description: "An analysis of the top 100 Spotify podcasts in Germany, uncovering trends and patterns in podcast popularity.",
    tags: [
      {
        name: "Data Analysis",
        color: "blue-text-gradient"
      },
      {
        name: "Spotify API",
        color: "green-text-gradient"
      },
      {
        name: "Python",
        color: "pink-text-gradient"
      }
    ],
    image: market_predict,
    source_code_link: "https://github.com/asmaaselghetany/Top-100-Spotify-Podcasts-in-Germany-Data-Analysis-Project"
  },
  {
    name: "Automated Mail Sender",
    description: "A Python script for automating email sending with customizable templates and scheduling capabilities.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient"
      },
      {
        name: "Automation",
        color: "green-text-gradient"
      },
      {
        name: "Email",
        color: "pink-text-gradient"
      }
    ],
    image: market_predict,
    source_code_link: "https://github.com/asmaaselghetany/Automated-Mail-Sender"
  }
];

export { services, technologies, experiences, certificates, projects };
