import React from "react";
import Link from "next/link";
import { Building2, Award, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./AcademicPartners.module.css";

export const AcademicPartners: React.FC = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.headerArea}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>INSTITUTIONAL ACCREDITATIONS</span>
          </div>

          <h2 className={styles.title}>
            Academic <span className={styles.redText}>Partnerships</span>
          </h2>

          <p className={styles.subtitle}>
            Midas Institute of Software Technology is recognized as an official Authorised Training Partner delivering recognized degree programs, diplomas, and certifications in collaboration with leading universities.
          </p>
        </div>

        {/* Sophisticated Horizontal Arrangement */}
        <div className={styles.partnerRow}>
          {siteConfig.partners.map((partner) => (
            <div key={partner.name} className={styles.partnerItem}>
              <div className={styles.iconCircle}>
                <Building2 size={26} className={styles.buildingIcon} />
              </div>
              <div className={styles.partnerInfo}>
                <h3 className={styles.partnerName}>{partner.name}</h3>
                <span className={styles.authBadge}>Authorised Training Partner</span>
                <p className={styles.partnerDesc}>{partner.description}</p>
                <span className={styles.partnerLoc}>📍 {partner.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Degree Link Action */}
        <div className={styles.footerAction}>
          <div className={styles.degreeNotice}>
            <Award size={18} className={styles.awardIcon} />
            <span>Interested in UGC-recognized MBA, BBA, or B.Com degree programs?</span>
          </div>
          <Link href="/courses/university-degree-programs" className={styles.viewDegreesLink}>
            <span>View University Programs</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
