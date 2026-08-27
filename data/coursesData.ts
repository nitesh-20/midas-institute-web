export interface CourseModule {
  title: string;
  items: string[];
}

export interface Course {
  slug: string;
  name: string;
  shortName: string;
  category: "Data & AI" | "Web & Software" | "Mobile Engineering" | "Cloud & Security" | "Finance & ERP" | "University Degrees" | "Career & Soft Skills";
  categoryBadge: string;
  tagline: string;
  description: string;
  highlightPills: string[];
  technologies: string[];
  durationPlaceholder: string;
  prerequisites: string;
  careerOutcomes: string[];
  learningPillars: string[];
  modules: CourseModule[];
  sources: ("Brochure" | "Website")[];
  featured: boolean;
  iconName: string;
}

export const coursesData: Course[] = [
  {
    slug: "data-science-ai",
    name: "Data Science & Artificial Intelligence",
    shortName: "Data Science & AI",
    category: "Data & AI",
    categoryBadge: "High Growth Track",
    tagline: "Master Python, Machine Learning, Deep Learning & Predictive Analytics on Live Projects.",
    description: "An intensive industry-aligned specialization in data engineering, statistical modeling, machine learning algorithms, deep neural networks, and business intelligence dashboards.",
    highlightPills: ["Python & DSA", "ML & Deep Learning", "Power BI & SQL", "Cloud Foundations"],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "SQL",
      "MySQL",
      "Git",
      "GitHub",
      "Machine Learning",
      "Neural Networks",
      "AWS / Azure / GCP"
    ],
    durationPlaceholder: "3–6 Months [CONTENT REQUIRED FROM INSTITUTE]",
    prerequisites: "Open to graduates, undergraduates, engineers, and analytical minds. No prior coding required.",
    careerOutcomes: [
      "Data Scientist",
      "Machine Learning Engineer",
      "AI Solutions Associate",
      "Business Intelligence Analyst",
      "Big Data Specialist"
    ],
    learningPillars: [
      "Python programming fundamentals with statistical computation",
      "Exploratory Data Analysis (EDA) with Pandas, NumPy, Seaborn",
      "Supervised & Unsupervised Machine Learning models",
      "Neural Networks, Deep Learning & AI introduction",
      "Interactive enterprise dashboard building in Power BI",
      "Relational querying and complex data manipulation in SQL"
    ],
    modules: [
      {
        title: "Module 1: Advanced Excel & Business Analytics Foundation",
        items: [
          "Advanced formulas, nested lookups (XLOOKUP, VLOOKUP, INDEX/MATCH)",
          "Pivot tables, slicers, dynamic named ranges and reporting macros",
          "MIS reporting architectures and business KPI tracking"
        ]
      },
      {
        title: "Module 2: Python Programming & Data Structures (DSA)",
        items: [
          "Core Python syntax, functional programming, OOP principles",
          "Data structures & algorithms (Arrays, Stacks, Queues, Hash Tables)",
          "Exception handling, file I/O, API integration with Python"
        ]
      },
      {
        title: "Module 3: Scientific Computing & Visualization Stack",
        items: [
          "NumPy with statistical analysis and multidimensional arrays",
          "Pandas: DataFrames, data cleaning, transformations and joins",
          "Matplotlib & Seaborn: statistical distributions, heatmaps, subplots",
          "Version control with Git and team collaboration on GitHub"
        ]
      },
      {
        title: "Module 4: Relational Databases & SQL Querying",
        items: [
          "SQL & MySQL database design and normalization",
          "Complex multi-table joins, subqueries, CTEs, and window functions",
          "Connecting Python to SQL databases for automated data pipelines"
        ]
      },
      {
        title: "Module 5: Power BI & Business Intelligence",
        items: [
          "Data modeling, star schemas, Power Query data transformation",
          "DAX (Data Analysis Expressions) calculated measures and columns",
          "Executive dashboards, dynamic drill-throughs, and interactive reports"
        ]
      },
      {
        title: "Module 6: Machine Learning, AI & Deep Learning",
        items: [
          "Supervised learning: Linear/Logistic Regression, Decision Trees, Random Forests",
          "Unsupervised learning: K-Means clustering, PCA dimensionality reduction",
          "Neural Networks & Deep Learning foundations",
          "Domain analytics in Business, Finance, Healthcare, and Retail",
          "Cloud deployment basics on AWS, Azure & GCP"
        ]
      }
    ],
    sources: ["Brochure", "Website"],
    featured: true,
    iconName: "Brain"
  },
  {
    slug: "data-analytics",
    name: "Data Analytics & Business Intelligence",
    shortName: "Data Analytics",
    category: "Data & AI",
    categoryBadge: "In-Demand",
    tagline: "Transform Raw Business Data into Executive Dashboards & Strategic Intelligence.",
    description: "Equips learners with advanced spreadsheet modeling, SQL database querying, Power BI report authoring, and Python analytical libraries to solve real enterprise problems.",
    highlightPills: ["Advanced Excel", "Power BI", "SQL Databases", "Python Analytics"],
    technologies: ["Excel", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "SQL", "Git", "GitHub"],
    durationPlaceholder: "3–6 Months [CONTENT REQUIRED FROM INSTITUTE]",
    prerequisites: "Basic computer familiarity; ideal for commerce, science, and engineering backgrounds.",
    careerOutcomes: [
      "Data Analyst",
      "BI Developer",
      "MIS Reporting Executive",
      "Operations Analyst"
    ],
    learningPillars: [
      "Mastery of Advanced Excel data modeling and forecasting",
      "SQL extraction, aggregation, and performance tuning",
      "End-to-end interactive Power BI dashboard generation",
      "Python data manipulation with Pandas and NumPy"
    ],
    modules: [
      {
        title: "Module 1: Master Excel for Business Intelligence",
        items: [
          "Data cleaning, conditional calculations, array formulas",
          "Interactive dashboarding, Pivot charts, conditional formatting",
          "Scenario analysis, Goal Seek, and Solver tools"
        ]
      },
      {
        title: "Module 2: SQL & Database Querying",
        items: [
          "DDL, DML, DQL syntax and table constraints",
          "Aggregations, GROUP BY, HAVING, and window analytics",
          "Stored procedures, views, and index optimization"
        ]
      },
      {
        title: "Module 3: Python for Analytics",
        items: [
          "Python data types, control flow, functions",
          "Pandas data wrangling, handling missing values, pivoting",
          "Matplotlib & Seaborn chart creation and styling",
          "Git & GitHub workflow"
        ]
      },
      {
        title: "Module 4: Power BI Enterprise Dashboards",
        items: [
          "Power Query ETL (Extract, Transform, Load)",
          "Building robust data models with one-to-many relationships",
          "Writing DAX measures (CALCULATE, FILTER, TIME INTELLIGENCE)",
          "Publishing and sharing dashboards in Power BI service"
        ]
      }
    ],
    sources: ["Brochure"],
    featured: true,
    iconName: "BarChart3"
  },
  {
    slug: "full-stack-web-development",
    name: "Full Stack Web Development",
    shortName: "Full Stack Development",
    category: "Web & Software",
    categoryBadge: "Flagship Program",
    tagline: "Master Modern Front-End Frameworks, Robust Back-End APIs & Cloud Databases.",
    description: "A complete professional engineering track covering modern HTML5/CSS3/JavaScript, React.js, Next.js, and back-end specialization across Node.js/Express, Python/Django, or Java/Spring Boot.",
    highlightPills: ["React & Next.js", "Node.js / Django / Java", "MongoDB & MySQL", "RESTful APIs"],
    technologies: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript (ES6+)",
      "Git & GitHub",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Python / Django",
      "Java / Spring Boot",
      "RESTful API",
      "MySQL",
      "MongoDB"
    ],
    durationPlaceholder: "3–6 Months [CONTENT REQUIRED FROM INSTITUTE]",
    prerequisites: "Beginner-friendly. Suitable for BCA, MCA, B.Tech, B.Sc or career changers.",
    careerOutcomes: [
      "Full Stack Developer",
      "Front-End Engineer",
      "Back-End API Developer",
      "MERN / MEAN Stack Specialist",
      "Software Engineer"
    ],
    learningPillars: [
      "Pixel-perfect responsive UI creation with modern CSS and Tailwind",
      "Single Page Applications (SPAs) and SSR with React.js and Next.js",
      "Modular back-end RESTful API creation and authentication",
      "Relational and Document-based database design in MySQL & MongoDB",
      "Live client-ready web application deployment"
    ],
    modules: [
      {
        title: "Module 1: Modern Front-End Foundations",
        items: [
          "Semantic HTML5, CSS3, Flexbox, Grid, Responsive Web Design",
          "Tailwind CSS and Bootstrap UI component systems",
          "Modern JavaScript (ES6+): Closures, Promises, Async/Await, Fetch API",
          "Version Control with Git & GitHub branching strategies"
        ]
      },
      {
        title: "Module 2: React.js & Next.js Advanced Front-End",
        items: [
          "React component architecture, JSX, Props, State, and Hooks",
          "Context API and Global State Management",
          "Next.js App Router, Server Components, SSR, and API routes",
          "Form validation, routing, and animated transitions"
        ]
      },
      {
        title: "Module 3: Back-End Engineering (Multi-Track Choice)",
        items: [
          "Track A: Node.js, Express.js & Asynchronous Event Loop",
          "Track B: Python, Django, ORM & Django REST Framework",
          "Track C: Java, Spring Boot, Dependency Injection & JPA/Hibernate",
          "JWT Authentication, middleware, and role-based access control",
          "RESTful API specification and Postman testing"
        ]
      },
      {
        title: "Module 4: Databases & Full-Stack Deployment",
        items: [
          "Relational modeling in MySQL with ACID transactions",
          "NoSQL document database architecture with MongoDB & Mongoose",
          "End-to-end full stack project integration, CORS, and deployment"
        ]
      }
    ],
    sources: ["Brochure", "Website"],
    featured: true,
    iconName: "Code2"
  },
  {
    slug: "mobile-app-development",
    name: "Mobile Application Development (Native & Cross-Platform)",
    shortName: "Mobile App Development",
    category: "Mobile Engineering",
    categoryBadge: "High Demand",
    tagline: "Build High-Performance Native iOS, Native Android, Flutter & React Native Apps.",
    description: "Complete mobile development program featuring dedicated tracks for Android Native (Kotlin/Java in Android Studio), iOS Native (Swift & SwiftUI in Xcode), Flutter (Dart), and React Native.",
    highlightPills: ["Android Studio & Kotlin", "iOS Swift & SwiftUI", "Flutter Dart", "React Native"],
    technologies: [
      "Android Studio",
      "Java",
      "Kotlin",
      "XML",
      "Xcode",
      "Swift",
      "UIKit",
      "SwiftUI",
      "Flutter",
      "Dart",
      "React Native",
      "JavaScript",
      "Node.js",
      "PHP",
      "REST APIs",
      "MySQL",
      "MongoDB"
    ],
    durationPlaceholder: "3–6 Months [CONTENT REQUIRED FROM INSTITUTE]",
    prerequisites: "Basic programming understanding in any language.",
    careerOutcomes: [
      "Android Developer",
      "iOS Developer",
      "Flutter Developer",
      "React Native Mobile Engineer",
      "Mobile Solutions Consultant"
    ],
    learningPillars: [
      "Native Android architecture with XML, Kotlin, and Gradle",
      "Native iOS architecture with Swift, UIKit, and SwiftUI declarative UI",
      "Cross-platform Flutter app development with Dart widgets",
      "Cross-platform React Native development with JavaScript and Flexbox",
      "RESTful API backend connection and local SQLite / remote database sync"
    ],
    modules: [
      {
        title: "Track A1: Android Native Development (Android Studio)",
        items: [
          "Android Studio environment, SDK tools, and Gradle builds",
          "UI design with XML layouts, ConstraintLayout, and Material Design",
          "Programming with Java and Kotlin (Coroutines, Data Classes)",
          "Connecting to PHP / Node.js backend via REST APIs",
          "Database integration: SQLite, Room, MySQL / MongoDB"
        ]
      },
      {
        title: "Track A2: iOS Native Development (Xcode)",
        items: [
          "Xcode environment, CocoaPods, Swift package manager",
          "Language: Swift (Optionials, Protocols, Generics, Concurrency)",
          "UI Frameworks: UIKit Storyboards & modern SwiftUI declarative views",
          "Networking with URLSession and RESTful JSON parsing",
          "CoreData and remote database integration (MySQL / MongoDB)"
        ]
      },
      {
        title: "Track B1: Flutter Cross-Platform Development",
        items: [
          "Dart programming language fundamentals and OOP",
          "Flutter widget tree: Stateless & Stateful widgets, navigation",
          "State management patterns (Provider, Riverpod, BLoC)",
          "Connecting with PHP / Node.js REST APIs",
          "Database integration (MySQL, MongoDB, Hive, SQLite)"
        ]
      },
      {
        title: "Track B2: React Native Cross-Platform Development",
        items: [
          "React Native CLI and Expo toolchains",
          "UI components, Flexbox styling, and gesture handling",
          "JavaScript mobile architecture and state handling",
          "Asynchronous API calls and secure storage",
          "Backend connectivity with Node.js and database sync"
        ]
      }
    ],
    sources: ["Brochure", "Website"],
    featured: true,
    iconName: "Smartphone"
  },
  {
    slug: "devops-cloud-engineering",
    name: "DevOps & Cloud Infrastructure Engineering",
    shortName: "DevOps Engineering",
    category: "Cloud & Security",
    categoryBadge: "Enterprise Track",
    tagline: "Master Linux Administration, CI/CD Pipelines, Docker, Kubernetes & Terraform.",
    description: "Comprehensive system engineering and infrastructure automation course covering Linux server administration, network services, containerization, infrastructure as code, and automated deployment pipelines.",
    highlightPills: ["Linux Administration", "Docker & Kubernetes", "Jenkins CI/CD", "Ansible & Terraform"],
    technologies: [
      "Linux",
      "Linux Server Administration",
      "DNS / NAS / Firewalls",
      "Ansible",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Maven",
      "Jenkins",
      "Git & GitHub"
    ],
    durationPlaceholder: "3–6 Months [CONTENT REQUIRED FROM INSTITUTE]",
    prerequisites: "Basic IT knowledge or computer science background.",
    careerOutcomes: [
      "DevOps Engineer",
      "Cloud Infrastructure Specialist",
      "Linux System Administrator",
      "Site Reliability Engineer (SRE)",
      "Build & Release Engineer"
    ],
    learningPillars: [
      "Command-line Linux server configuration, permissions, and security",
      "Network infrastructure: DNS, Web Servers, NAS, and Firewalls",
      "Containerization of microservices with Docker",
      "Cluster orchestration and deployment with Kubernetes",
      "Automated CI/CD workflows using Jenkins and Git",
      "Infrastructure as Code (IaC) with Terraform and configuration with Ansible"
    ],
    modules: [
      {
        title: "Module 1: Linux Server Administration & Networking",
        items: [
          "Linux file systems, process management, shell scripting",
          "User administration, permissions, SSH security, and cron jobs",
          "Networking services: DNS configuration, Web Server setup (Apache/Nginx)",
          "Network Attached Storage (NAS), firewalls (iptables/UFW), and system logs"
        ]
      },
      {
        title: "Module 2: Version Control & CI/CD Automation",
        items: [
          "Git branching, merges, pull requests, and GitHub Actions",
          "Maven build automation for Java/Enterprise applications",
          "Jenkins installation, pipelines as code (Jenkinsfile), and webhooks",
          "Automated testing and build artifact archiving"
        ]
      },
      {
        title: "Module 3: Containerization & Orchestration",
        items: [
          "Docker architecture, Dockerfile authoring, multi-stage builds",
          "Docker Compose for multi-container application stacks",
          "Kubernetes architecture: Pods, Services, Deployments, ConfigMaps",
          "Kubernetes ingress controllers, auto-scaling, and cluster management"
        ]
      },
      {
        title: "Module 4: Infrastructure as Code (IaC) & Configuration",
        items: [
          "Ansible playbooks, roles, inventory management, and remote execution",
          "Terraform providers, state files, HCL syntax, and cloud provisioning",
          "End-to-end automated DevOps project pipeline"
        ]
      }
    ],
    sources: ["Brochure", "Website"],
    featured: true,
    iconName: "Cloud"
  },
  {
    slug: "cyber-security-ethical-hacking",
    name: "Cyber Security & Ethical Hacking",
    shortName: "Cyber Security & Hacking",
    category: "Cloud & Security",
    categoryBadge: "High Security",
    tagline: "Master Network Security, Offensive Penetration Testing & Defensive Perimeter Shielding.",
    description: "Dual-perspective security training combining defensive network protection with offensive ethical penetration testing using Kali Linux, Python exploit scripts, firewalls, and CCNA fundamentals.",
    highlightPills: ["Kali Linux", "CCNA Networking", "Penetration Testing", "Python for Malware"],
    technologies: [
      "CCNA",
      "Network Security",
      "Firewall Technology",
      "Python for Hackers",
      "Penetration Testing (Offensive & Defensive)",
      "Server for Hackers",
      "Kali Linux (Everything Edition)",
      "Social Engineering"
    ],
    durationPlaceholder: "3–6 Months [CONTENT REQUIRED FROM INSTITUTE]",
    prerequisites: "Familiarity with operating systems and basic networking concepts.",
    careerOutcomes: [
      "Cyber Security Analyst",
      "Ethical Hacker / Penetration Tester",
      "SOC Analyst",
      "Information Security Specialist",
      "Network Security Engineer"
    ],
    learningPillars: [
      "CCNA-level routing, switching, and protocol security",
      "Firewall architecture, IDS/IPS, and defensive hardening",
      "Offensive penetration testing methodologies and vulnerability assessment",
      "Kali Linux security toolkit mastery (Nmap, Wireshark, Metasploit, Burp)",
      "Python scripting for security automation and malware analysis",
      "Social engineering threat identification and defense"
    ],
    modules: [
      {
        title: "Module 1: CCNA & Network Security Foundations",
        items: [
          "TCP/IP protocol suite, subnetting, packet analysis with Wireshark",
          "Routers, switches, VLANs, and network access control lists (ACLs)",
          "Firewall technologies, proxy servers, and perimeter defense systems"
        ]
      },
      {
        title: "Module 2: Defensive Cyber Security & Server Hardening",
        items: [
          "Server configuration for hackers, auditing, and hardening",
          "Vulnerability detection, patch management, and mitigation",
          "Defensive penetration testing and security compliance"
        ]
      },
      {
        title: "Module 3: Offensive Ethical Hacking & Kali Linux",
        items: [
          "Kali Linux (Kali Everything Edition) exploration and tools",
          "Information gathering, scanning, enumeration (Nmap, Nikto)",
          "Exploitation frameworks (Metasploit) and vulnerability scanning",
          "Web application security, SQL injection, XSS, and authentication bypass"
        ]
      },
      {
        title: "Module 4: Python for Hackers & Social Engineering",
        items: [
          "Python socket programming, custom port scanners, and automation",
          "Malware analysis basics and signature detection",
          "Social engineering techniques (Defensive + Offensive)",
          "Reporting vulnerabilities and ethical disclosure guidelines"
        ]
      }
    ],
    sources: ["Brochure", "Website"],
    featured: true,
    iconName: "ShieldAlert"
  },
  {
    slug: "financial-tally-sap",
    name: "Financial Basics, Tally Prime with GST & SAP ERP",
    shortName: "Tally Prime & SAP ERP",
    category: "Finance & ERP",
    categoryBadge: "Corporate Ready",
    tagline: "Practical Accounting, GST Filing, Financial MIS & SAP ERP Modules.",
    description: "Industry-standard business accounting and enterprise resource planning course covering Tally Prime with GST compliance, advanced financial Excel, and SAP ERP Functional & Technical modules.",
    highlightPills: ["Tally Prime GST", "SAP ERP FI", "Advanced MIS Excel", "GST Returns"],
    technologies: [
      "Tally Prime",
      "GST Portal",
      "SAP ERP",
      "SAP Financial Accounting (FI)",
      "SAP Functional Module",
      "SAP Technical Module",
      "Advanced Excel",
      "MIS Reporting"
    ],
    durationPlaceholder: "2–4 Months [CONTENT REQUIRED FROM INSTITUTE]",
    prerequisites: "Open to B.Com, M.Com, BBA, MBA, and non-technical students.",
    careerOutcomes: [
      "Corporate Accountant",
      "GST Consultant & Tax Executive",
      "SAP FI Associate",
      "Financial MIS Executive",
      "Accounts Manager"
    ],
    learningPillars: [
      "Real-world voucher entry, ledger management, and inventory in Tally Prime",
      "End-to-end GST invoicing, input tax credit (ITC), and return preparation",
      "SAP ERP architecture, navigation, and core organizational structures",
      "SAP Functional (Financial Accounting) and Technical module overview",
      "Advanced Excel for balance sheets, profit & loss, and audit reports"
    ],
    modules: [
      {
        title: "Module 1: Tally Prime Fundamentals & Inventory",
        items: [
          "Company creation, chart of accounts, groups and ledgers",
          "Voucher entries (Payment, Receipt, Contra, Journal, Sales, Purchase)",
          "Inventory management: stock groups, categories, units of measure, batches"
        ]
      },
      {
        title: "Module 2: GST Compliance & Taxation",
        items: [
          "GST setup in Tally Prime: CGST, SGST, IGST, RCM",
          "Generating GST-compliant invoices and e-Way bills",
          "GSTR-1, GSTR-3B preparation, reconciliation, and audit reports",
          "TDS/TCS fundamentals and payroll accounting in Tally"
        ]
      },
      {
        title: "Module 3: Advanced Excel & Financial MIS",
        items: [
          "Financial functions (PMT, NPV, IRR, SLN), financial modeling",
          "Automated reconciliation, Pivot dashboards, and MIS statements",
          "Data validation, audit protection, and macro automation"
        ]
      },
      {
        title: "Module 4: SAP ERP Systems (Functional & Technical)",
        items: [
          "Introduction to SAP ERP ecosystem and enterprise integration",
          "SAP Functional Modules: SAP Financial Accounting (SAP FI)",
          "General Ledger, Accounts Payable (AP), Accounts Receivable (AR)",
          "SAP Technical Modules overview and business workflows"
        ]
      }
    ],
    sources: ["Brochure", "Website"],
    featured: false,
    iconName: "Calculator"
  },
  {
    slug: "communication-soft-skills",
    name: "Communication & Soft Skills (HR Round Preparation)",
    shortName: "Soft Skills & HR Prep",
    category: "Career & Soft Skills",
    categoryBadge: "Career Accelerator",
    tagline: "Master Corporate Communication, Resume Polish, Group Discussions & Mock Interviews.",
    description: "Specialized professional readiness training designed to transform technical students into confident, articulate corporate professionals ready to clear multi-stage HR and managerial rounds.",
    highlightPills: ["Resume Writing", "Mock Interviews", "Group Discussions", "Business Emails"],
    technologies: [
      "ATS Resume Formatting",
      "Email Writing Standards",
      "Presentation Tools",
      "Interview Simulators",
      "Body Language Frameworks"
    ],
    durationPlaceholder: "Integrated / 4–8 Weeks [CONTENT REQUIRED FROM INSTITUTE]",
    prerequisites: "Open to all enrolled students and job seekers.",
    careerOutcomes: [
      "Confident Corporate Communicator",
      "Interview-Ready Job Candidate",
      "Effective Team Collaborator"
    ],
    learningPillars: [
      "ATS-compliant professional resume and portfolio writing",
      "Telephonic and video call professional etiquette",
      "Creating and delivering high-impact business presentations",
      "Polished report writing and business email communication",
      "Executive body language, grooming, and dress code",
      "English grammar, technical vocabulary, and personal introductions",
      "Live Group Discussion (GD) drills with real-time feedback",
      "One-on-one Mock Interviews simulating top corporate hiring rounds"
    ],
    modules: [
      {
        title: "Module 1: Professional Writing & Profile Building",
        items: [
          "ATS-optimized resume building and LinkedIn profile craft",
          "Report writing and executive business email formatting",
          "Cover letters and professional follow-up communications"
        ]
      },
      {
        title: "Module 2: Verbal & Non-Verbal Business Presence",
        items: [
          "Grammar enhancement, technical vocabulary, and clarity",
          "Telephonic conversation skills and voice modulation",
          "Creating presentations and slide delivery confidence",
          "Body language, posture, eye contact, and 'What To Wear' corporate attire"
        ]
      },
      {
        title: "Module 3: Interview Mastery & Types of Interviews",
        items: [
          "Crafting the perfect 'About Yourself' elevator pitch",
          "Navigating different types of interviews (Technical, Managerial, HR)",
          "Behavioral interview frameworks (STAR method)",
          "Handling tricky questions, salary discussions, and counter-questions"
        ]
      },
      {
        title: "Module 4: Group Discussions & Mock Interviews",
        items: [
          "Group Discussion (GD) rules, initiation, summarization, and moderation",
          "Handling abstract, factual, and case-study GD topics",
          "Personal Interview (PI) live drills",
          "Comprehensive multi-round Mock Interviews with panel feedback"
        ]
      }
    ],
    sources: ["Brochure"],
    featured: false,
    iconName: "Users"
  },
  {
    slug: "university-degree-programs",
    name: "University Degree & Management Programs",
    shortName: "University Degrees",
    category: "University Degrees",
    categoryBadge: "UGC Affiliated",
    tagline: "Recognized Bachelor & Master Degrees and Professional Certificates via Partner Universities.",
    description: "Official higher education pathways delivered in collaboration with Authorised University Partners including Kalinga University, ISBM University, MATS University, Anjaneya University, and Dr. C.V. Raman University.",
    highlightPills: ["MBA & EMBA", "BBA & B.Com", "Digital Marketing", "Hospital & Hotel Mgmt"],
    technologies: [
      "Business Analytics",
      "Digital Marketing",
      "Financial Management",
      "Hospital Administration",
      "Hospitality Systems"
    ],
    durationPlaceholder: "1 Year to 3 Years [CONTENT REQUIRED FROM INSTITUTE]",
    prerequisites: "10+2 for Bachelor programs; Graduation for Master/Executive programs as per university norms.",
    careerOutcomes: [
      "Business Administration Professional",
      "Digital Marketing Manager",
      "Hospitality Executive",
      "Hospital Administrator",
      "Financial Advisor"
    ],
    learningPillars: [
      "Accredited university syllabus delivered with practical training support",
      "Executive and regular learning modes suitable for working professionals",
      "Comprehensive exam preparation and continuous academic guidance",
      "Global certificates and skill development integration"
    ],
    modules: [
      {
        title: "Management & Post-Graduate Degrees",
        items: [
          "Masters in Business Administration (MBA)",
          "Executive Masters in Business Administration (EMBA)",
          "Bachelor Program in Business Administration (BPBA / BBA)",
          "Bachelor Program in Commerce (B.Com)"
        ]
      },
      {
        title: "Professional Certification Courses",
        items: [
          "Certificate Course in Digital Marketing (C.D.M.)",
          "Certified Financial Advisor (C.F.A.)",
          "Certificate Course in Sales and Marketing (C.S.M.)"
        ]
      },
      {
        title: "Industry Specific Specializations",
        items: [
          "Certificate in Hotel Management (C.H.M.)",
          "Certificate in Travel and Tourism Management",
          "Certificate in Hospital Administration (C.H.A.)"
        ]
      }
    ],
    sources: ["Brochure"],
    featured: false,
    iconName: "GraduationCap"
  }
];
