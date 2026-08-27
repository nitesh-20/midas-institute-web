export interface GalleryItem {
  id: string;
  title: string;
  category: "labs" | "events" | "achievements" | "infrastructure";
  categoryLabel: string;
  src: string;
  alt: string;
  caption: string;
  aspectRatio: "16-9" | "4-3" | "3-4";
  featured?: boolean;
}

export const galleryCategories = [
  { key: "all", label: "All Photographs" },
  { key: "labs", label: "Labs & Practical Training" },
  { key: "events", label: "Seminars & Orientations" },
  { key: "achievements", label: "Awards & Certifications" },
  { key: "infrastructure", label: "Campus & Library" }
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Classroom Coding & Technology Training Lab",
    category: "labs",
    categoryLabel: "Labs & Practical Training",
    src: "/images/midas/training/midas_lab_classroom_session.jpg",
    alt: "Midas Institute classroom and coding laboratory with mentor at whiteboard explaining algorithms",
    caption: "Full-time classroom and software development lab session at Midas Institute, with faculty explaining code logic on whiteboard alongside students on workstations.",
    aspectRatio: "16-9",
    featured: true
  },
  {
    id: "gallery-2",
    title: "Hands-On Software Lab & Practical Mentorship",
    category: "labs",
    categoryLabel: "Labs & Practical Training",
    src: "/images/midas/training/midas_lab_practical_training.jpg",
    alt: "Midas Institute practical coding session with students on laptops and desktops",
    caption: "Students engaged in hands-on practical software development and coding exercises with active mentor guidance in the Raipur campus lab.",
    aspectRatio: "4-3"
  },
  {
    id: "gallery-3",
    title: "Student Orientation in Academic Seminar Hall",
    category: "events",
    categoryLabel: "Seminars & Orientations",
    src: "/images/midas/events/midas_orientation_seminar_hall.jpg",
    alt: "Student batch orientation session under Midas Institute of Software Technology banner",
    caption: "New student batch orientation and technical curriculum roadmap session in the seminar hall under the official Midas banner.",
    aspectRatio: "4-3"
  },
  {
    id: "gallery-4",
    title: "Institutional Award at Education & Career Fair",
    category: "achievements",
    categoryLabel: "Awards & Certifications",
    src: "/images/midas/achievements/midas_award_felicitation.jpg",
    alt: "Midas Institute leadership receiving Education Excellence trophy at Dainik Bhaskar Career Fair",
    caption: "Midas Institute leadership receiving an Education & Career Excellence honor at the prestigious Dainik Bhaskar Education Fair in Raipur.",
    aspectRatio: "16-9"
  },
  {
    id: "gallery-5",
    title: "Technical Seminar & Cyber Security Presentation",
    category: "events",
    categoryLabel: "Seminars & Orientations",
    src: "/images/midas/events/midas_tech_seminar_presentation.jpg",
    alt: "Faculty speaker delivering IT industry and Cyber Security presentation to students",
    caption: "Industry seminar highlighting modern software development paradigms, cyber security standards, and IT recruitment requirements.",
    aspectRatio: "16-9"
  },
  {
    id: "gallery-6",
    title: "University Partnership & Felicitation Ceremony",
    category: "achievements",
    categoryLabel: "Awards & Certifications",
    src: "/images/midas/achievements/midas_university_partnership_ceremony.jpg",
    alt: "Midas Institute felicitation ceremony with Kalinga University academic partners",
    caption: "Institutional partner felicitation ceremony alongside Kalinga University leadership celebrating accredited degree pathways.",
    aspectRatio: "16-9"
  },
  {
    id: "gallery-7",
    title: "Group Code Review & Project Mentorship Lab",
    category: "labs",
    categoryLabel: "Labs & Practical Training",
    src: "/images/midas/training/midas_lab_group_mentorship.jpg",
    alt: "Students in collaborative software project review session with lead mentor",
    caption: "Collaborative project review and pair programming lab where students troubleshoot live codebase challenges with their mentor.",
    aspectRatio: "4-3"
  },
  {
    id: "gallery-8",
    title: "Official Course Certificate Distribution",
    category: "achievements",
    categoryLabel: "Awards & Certifications",
    src: "/images/midas/achievements/midas_certificate_distribution.jpg",
    alt: "Student receiving official MIST certificate of completion from faculty counselor",
    caption: "Awarding official certificates of completion to successful students upon finishing their rigorous technical training modules.",
    aspectRatio: "16-9"
  },
  {
    id: "gallery-9",
    title: "Student Library & Reference Learning Zone",
    category: "infrastructure",
    categoryLabel: "Campus & Library",
    src: "/images/midas/infrastructure/midas_library_study_group.jpg",
    alt: "Midas students reading IT books in the campus library and study lounge",
    caption: "Dedicated campus library and study area stocked with computer science textbooks, software engineering manuals, and career guides.",
    aspectRatio: "16-9"
  },
  {
    id: "gallery-10",
    title: "MIST Student Contingent at Career Fair",
    category: "events",
    categoryLabel: "Seminars & Orientations",
    src: "/images/midas/events/midas_career_admissions_fair.jpg",
    alt: "Midas student group attending the Career Potli educational event in Raipur",
    caption: "Midas student cohort participating in the Career Potli Admission Fair with university partner information brochures.",
    aspectRatio: "16-9"
  },
  {
    id: "gallery-11",
    title: "Campus Library Reading & Quiet Study Area",
    category: "infrastructure",
    categoryLabel: "Campus & Library",
    src: "/images/midas/infrastructure/midas_library_reading_zone.jpg",
    alt: "Student browsing reference materials in the Midas library",
    caption: "Quiet reading and reference lounge for self-paced study, technical documentation research, and certification preparation.",
    aspectRatio: "4-3"
  },
  {
    id: "gallery-12",
    title: "Midas Student & Faculty Team Delegation",
    category: "events",
    categoryLabel: "Seminars & Orientations",
    src: "/images/midas/institute/midas_student_team_event.jpg",
    alt: "Midas student and faculty team at technology event with official badges",
    caption: "Midas Institute student and faculty contingent proudly wearing official badges at a major regional technical summit.",
    aspectRatio: "16-9"
  }
];
