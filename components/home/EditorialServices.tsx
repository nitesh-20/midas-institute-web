"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./EditorialServices.module.css";

const services = [
  {
    num: "01",
    title: "Technical & Skill-Based IT Training",
    category: "Training & Education",
    desc: "Classroom and online instructor-led courses across Full Stack Web Development, Data Science, AI, DevOps, Cyber Security, and Cloud systems with hands-on lab projects.",
    actionLink: "/courses",
    actionLabel: "Explore Training Tracks"
  },
  {
    num: "02",
    title: "Website & Mobile Application Development",
    category: "Software Engineering",
    desc: "Full-cycle digital product engineering for enterprises and startups. Building responsive web applications (React/Next.js) and native/cross-platform mobile apps (Flutter/iOS/Android).",
    actionLink: "/services",
    actionLabel: "Discuss Engineering Services"
  },
  {
    num: "03",
    title: "Web & Digital Presence Solutions",
    category: "Digital Transformation",
    desc: "End-to-end digital identity creation including high-speed corporate websites, UI/UX design systems, SEO optimization for local search visibility, and domain architecture.",
    actionLink: "/services",
    actionLabel: "Learn About Web Presence"
  },
  {
    num: "04",
    title: "Social Media & Growth Marketing",
    category: "Marketing & Strategy",
    desc: "Strategic audience targeting, lead generation campaigns across Meta, Google Ads, and LinkedIn, and measurable brand growth for educational and commercial institutions.",
    actionLink: "/services",
    actionLabel: "Explore Growth Services"
  },
  {
    num: "05",
    title: "Akida Welfare Foundation CSR Scholarships",
    category: "Community & Education Access",
    desc: "In partnership with Akida Welfare Foundation and supported by SSV Group, Midas provides up to 50% tuition scholarships on degree and diploma programs for deserving candidates.",
    actionLink: "/internship",
    actionLabel: "View Scholarship Details"
  }
];

export const EditorialServices: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerArea}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>INSTITUTIONAL & COMMERCIAL CAPABILITIES</span>
          </div>

          <h2 className={styles.title}>
            Educational & <span className={styles.redText}>Enterprise Services</span>
          </h2>

          <p className={styles.subtitle}>
            Verified institutional capabilities spanning professional student bootcamps, custom software delivery, digital growth, and community scholarships.
          </p>
        </div>

        {/* Large Numbered Editorial Rows */}
        <div className={styles.servicesList}>
          {services.map((svc, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={svc.num}
                className={`${styles.serviceRow} ${isHovered ? styles.activeRow : ""}`}
                onMouseEnter={() => setHoveredIndex(idx)}
              >
                <div className={styles.rowMain}>
                  <span className={styles.rowNum}>{svc.num}</span>

                  <div className={styles.rowTitleBlock}>
                    <span className={styles.rowCategory}>{svc.category}</span>
                    <h3 className={styles.rowTitle}>{svc.title}</h3>
                  </div>

                  <p className={styles.rowDesc}>{svc.desc}</p>

                  <div className={styles.rowAction}>
                    <Link href={svc.actionLink} className={styles.actionBtn}>
                      <span>{svc.actionLabel}</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
