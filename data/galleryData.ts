export interface GalleryItem {
  id: string;
  title: string;
  category: "labs" | "classrooms" | "workshops" | "achievements";
  categoryLabel: string;
  src: string;
  alt: string;
  caption: string;
  aspectRatio: "16-9" | "4-3" | "3-4";
  featured?: boolean;
}

export const galleryCategories = [
  { key: "all", label: "All Photos" },
  { key: "labs", label: "Labs & Practical Training" },
  { key: "classrooms", label: "Classrooms & Campus" },
  { key: "workshops", label: "Workshops & Seminars" },
  { key: "achievements", label: "Student Achievements" }
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Advanced Software & Data Science Laboratory",
    category: "labs",
    categoryLabel: "Labs & Practical Training",
    src: "/images/gallery/lab_featured.jpg",
    alt: "Midas Institute advanced computer programming laboratory with students and mentor",
    caption: "Full-time student practical software development lab equipped with multi-monitor developer workstations and 1-on-1 mentor guidance.",
    aspectRatio: "16-9",
    featured: true
  },
  {
    id: "gallery-2",
    title: "Software Architecture & Cloud Lecture Session",
    category: "classrooms",
    categoryLabel: "Classrooms & Campus",
    src: "/images/gallery/classroom_lecture.jpg",
    alt: "Interactive software architecture classroom lecture with senior professor",
    caption: "Smart academic lecture classrooms designed for deep conceptual understanding of system architecture, databases, and algorithms.",
    aspectRatio: "4-3"
  },
  {
    id: "gallery-3",
    title: "Hands-on Data Science & Python Workshop",
    category: "workshops",
    categoryLabel: "Workshops & Seminars",
    src: "/images/gallery/workshop_hands_on.jpg",
    alt: "Students engaged in Python and Data Science hands-on project workshop",
    caption: "Specialized weekend technical workshops on Machine Learning, Power BI analytics, and real-world dataset modeling.",
    aspectRatio: "4-3"
  },
  {
    id: "gallery-4",
    title: "Collaborative Code Review & Peer Programming",
    category: "labs",
    categoryLabel: "Labs & Practical Training",
    src: "/images/gallery/peer_collaboration.jpg",
    alt: "Two students collaborating on web application code review",
    caption: "Fostering industry-standard collaborative engineering practices, peer code reviews, and pair programming on live projects.",
    aspectRatio: "3-4"
  },
  {
    id: "gallery-5",
    title: "Tech Career Summit & Industry Interaction",
    category: "workshops",
    categoryLabel: "Workshops & Seminars",
    src: "/images/gallery/seminar_session.jpg",
    alt: "Industry expert speaker addressing students at Midas tech career summit",
    caption: "Guest lectures and seminars with corporate IT leaders, providing students direct insights into hiring trends and technical standards.",
    aspectRatio: "16-9"
  },
  {
    id: "gallery-6",
    title: "Program Completion & Certification Felicitation",
    category: "achievements",
    categoryLabel: "Student Achievements",
    src: "/images/gallery/certificate_achieve.jpg",
    alt: "Student receiving official certificate of completion from institute mentor",
    caption: "Celebrating student milestones upon completing comprehensive technical training and university accredited programs.",
    aspectRatio: "4-3"
  }
];
