"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BookOpen, Layers, Sparkles } from "lucide-react";
import { coursesData, Course } from "@/data/coursesData";
import { Button } from "@/components/common/Button";
import styles from "./EditorialCourseExplorer.module.css";

const tracks = [
  {
    id: "01",
    label: "Full Stack Web Development",
    categoryKey: "Web & Software",
    courseSlug: "full-stack-web-development",
    image: "/images/midas/training/midas_lab_classroom_session.jpg"
  },
  {
    id: "02",
    label: "Data Science & Artificial Intelligence",
    categoryKey: "Data & AI",
    courseSlug: "data-science-ai",
    image: "/images/midas/training/midas_lab_group_mentorship.jpg"
  },
  {
    id: "03",
    label: "Cyber Security & Ethical Hacking",
    categoryKey: "Cloud & Security",
    courseSlug: "cyber-security-ethical-hacking",
    image: "/images/midas/events/midas_tech_seminar_presentation.jpg"
  },
  {
    id: "04",
    label: "DevOps & Cloud Infrastructure",
    categoryKey: "Cloud & Security",
    courseSlug: "devops-cloud-engineering",
    image: "/images/midas/training/midas_lab_practical_training.jpg"
  },
  {
    id: "05",
    label: "Mobile Application Engineering",
    categoryKey: "Mobile Engineering",
    courseSlug: "mobile-app-development",
    image: "/images/midas/training/midas_lab_group_mentorship.jpg"
  },
  {
    id: "06",
    label: "Financial Basics, Tally & SAP ERP",
    categoryKey: "Finance & ERP",
    courseSlug: "financial-tally-sap",
    image: "/images/midas/infrastructure/midas_library_study_group.jpg"
  },
  {
    id: "07",
    label: "University Management & Degrees",
    categoryKey: "University Degrees",
    courseSlug: "university-degree-programs",
    image: "/images/midas/achievements/midas_university_partnership_ceremony.jpg"
  }
];

export const EditorialCourseExplorer: React.FC = () => {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

  const currentTrack = tracks[activeTrackIndex];
  const activeCourse = coursesData.find((c) => c.slug === currentTrack.courseSlug) || coursesData[0];

  return (
    <section className={`section ${styles.section}`} id="programs">
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerArea}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>ACADEMIC CURRICULUM</span>
          </div>
          <h2 className={styles.title}>
            Explore Your <span className={styles.redText}>Academic Path</span>
          </h2>
          <p className={styles.subtitle}>
            Select a discipline below to examine its verified curriculum modules, technology toolchains, and career pathways.
          </p>
        </div>

        {/* Explorer Layout: Left List + Right Showcase */}
        <div className={styles.explorerGrid}>
          {/* Left: Numbered Track Selector */}
          <div className={styles.trackNav}>
            {tracks.map((t, idx) => {
              const isActive = idx === activeTrackIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  className={`${styles.navItem} ${isActive ? styles.activeNavItem : ""}`}
                  onClick={() => setActiveTrackIndex(idx)}
                >
                  <span className={styles.navNumber}>{t.id}</span>
                  <span className={styles.navLabel}>{t.label}</span>
                  <ArrowRight size={16} className={styles.navArrow} />
                </button>
              );
            })}
          </div>

          {/* Right: Rich Editorial Program Showcase */}
          <div className={styles.showcasePanel}>
            <div className={styles.showcaseImageFrame}>
              <img
                src={currentTrack.image}
                alt={activeCourse.name}
                className={styles.showcaseImage}
              />
              <div className={styles.categoryPill}>
                <span>{activeCourse.category}</span>
              </div>
            </div>

            <div className={styles.showcaseBody}>
              <h3 className={styles.courseName}>{activeCourse.name}</h3>
              <p className={styles.courseTagline}>{activeCourse.tagline}</p>
              <p className={styles.courseDescription}>{activeCourse.description}</p>

              {/* Technologies Strip */}
              <div className={styles.techSection}>
                <p className={styles.techHeading}>CORE TECHNOLOGIES & TOOLS:</p>
                <div className={styles.techBadges}>
                  {activeCourse.technologies.slice(0, 8).map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                  {activeCourse.technologies.length > 8 && (
                    <span className={styles.techMore}>
                      +{activeCourse.technologies.length - 8} more
                    </span>
                  )}
                </div>
              </div>

              {/* Curriculum Overview */}
              <div className={styles.curriculumPreview}>
                <p className={styles.curriculumHeading}>
                  <BookOpen size={15} />
                  <span>Curriculum Breakdown ({activeCourse.modules.length} Core Modules):</span>
                </p>
                <div className={styles.moduleList}>
                  {activeCourse.modules.slice(0, 3).map((m, i) => (
                    <div key={i} className={styles.moduleItem}>
                      <span className={styles.moduleDot} />
                      <span>{m.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className={styles.showcaseFooter}>
                <Button
                  href={`/courses/${activeCourse.slug}`}
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight size={16} />}
                >
                  View Complete Syllabus
                </Button>

                <Link href="/courses" className={styles.allCoursesLink}>
                  Browse All 13 Programs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
