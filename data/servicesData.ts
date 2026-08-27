export interface ServiceItem {
  id: string;
  title: string;
  category: "Training" | "Software Development" | "Digital Solutions" | "CSR & Community";
  tagline: string;
  description: string;
  features: string[];
  iconName: string;
  ctaText: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "technical-training",
    title: "Technical & Skill-Based IT Training",
    category: "Training",
    tagline: "Classroom and online instructor-led courses across cutting-edge IT stacks.",
    description: "Industry-aligned technical curriculum covering Full Stack Engineering, Data Science, AI, DevOps, Cyber Security, and Cloud. Designed to take learners from foundational concepts to production-grade implementation through live labs and real-time mentoring.",
    features: [
      "Hands-on lab sessions with real-world scenarios",
      "Industry-expert faculty with 11+ years institutional legacy",
      "Flexible learning modes: Classroom & Interactive Online",
      "Custom corporate upskilling modules for enterprises and colleges"
    ],
    iconName: "Terminal",
    ctaText: "Explore Courses"
  },
  {
    id: "internship-programs",
    title: "Summer & Industrial Internship Programs",
    category: "Training",
    tagline: "Bridge theoretical education with real IT industry project delivery.",
    description: "Our structured internship programs immerse students into active live projects, Agile sprint cycles, Git workflows, and client deliverables. Students gain verified project experience and an official internship certificate to kickstart their tech careers.",
    features: [
      "Live project allocation with mentor guidance",
      "Agile team workflows, code reviews, and Git collaboration",
      "Official Internship Certificate upon project completion",
      "Direct pathway to corporate placement readiness"
    ],
    iconName: "Briefcase",
    ctaText: "Apply for Internship"
  },
  {
    id: "software-development",
    title: "Website & Mobile Application Development",
    category: "Software Development",
    tagline: "Full-cycle digital product engineering for businesses, startups, and enterprises.",
    description: "From modern web applications built on React and Next.js to native and cross-platform mobile apps (Flutter, React Native, iOS, Android), Midas delivers robust, scalable, and responsive custom software solutions.",
    features: [
      "Custom Web Applications & Portals (React, Next.js, Node.js)",
      "Native & Cross-Platform Mobile Apps (Flutter, Swift, Kotlin)",
      "Database Architecture & Secure RESTful API Development",
      "Cloud Deployment, DevOps CI/CD, and Maintenance"
    ],
    iconName: "Layers",
    ctaText: "Discuss a Project"
  },
  {
    id: "digital-presence",
    title: "Web & Digital Presence Solutions",
    category: "Digital Solutions",
    tagline: "Build a high-impact online brand identity that drives discovery and engagement.",
    description: "Complete digital presence engineering including SEO-optimized corporate websites, brand identity design, landing page optimization, and technical performance tuning to ensure your brand stands out in the digital ecosystem.",
    features: [
      "SEO-friendly, ultra-fast responsive website development",
      "Brand identity design and UI/UX design systems",
      "Domain setup, high-speed hosting, and SSL security",
      "Local business search engine optimization (Raipur & beyond)"
    ],
    iconName: "Globe",
    ctaText: "Elevate Your Brand"
  },
  {
    id: "social-media-marketing",
    title: "Social Media & Growth Marketing",
    category: "Digital Solutions",
    tagline: "Strategic social campaigns and content marketing to reach your target audience.",
    description: "Targeted digital marketing solutions across Meta, LinkedIn, Google, and video channels to generate qualified leads, elevate brand awareness, and foster audience engagement.",
    features: [
      "Strategic campaign planning and audience targeting",
      "Content creation, graphic design, and brand storytelling",
      "Paid ad campaign management (Meta Ads, Google Ads)",
      "Analytics reporting and performance optimization"
    ],
    iconName: "TrendingUp",
    ctaText: "Consult Our Team"
  },
  {
    id: "scholarship-csr",
    title: "Akida Welfare & SSV Group Scholarship",
    category: "CSR & Community",
    tagline: "Fee subsidy up to 50% for deserving and financially challenged students.",
    description: "In partnership with Akida Welfare Foundation and supported by SSV Group, Midas Institute offers need-based fee scholarships covering up to 50% of tuition for degree and technical certification programs to empower underprivileged youth.",
    features: [
      "Up to 50% tuition fee coverage on select degree & diploma programs",
      "Dedicated mentorship and placement coaching",
      "Transparent need-based evaluation process",
      "Committed to social impact and accessible education in Chhattisgarh"
    ],
    iconName: "HeartHandshake",
    ctaText: "Check Scholarship Eligibility"
  }
];
