"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Award, GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./AcademicPartners.module.css";

// Authentic vector university emblem seals
const universityLogos: Record<string, React.ReactNode> = {
  KU: (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.uniSvg}>
      <circle cx="30" cy="30" r="28" fill="#1e3a8a" stroke="#d97706" strokeWidth="2" />
      <circle cx="30" cy="30" r="22" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M30 14L38 22H22L30 14Z" fill="#fbbf24" />
      <path d="M22 24H38V38C38 42 30 46 30 46C30 46 22 42 22 38V24Z" fill="#ffffff" />
      <path d="M26 28L30 32L34 28V36L30 39L26 36V28Z" fill="#1e3a8a" />
      <text x="30" y="52" textAnchor="middle" fill="#fbbf24" fontSize="5" fontWeight="900" fontFamily="sans-serif">KALINGA</text>
    </svg>
  ),
  ISBM: (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.uniSvg}>
      <circle cx="30" cy="30" r="28" fill="#991b1b" stroke="#f59e0b" strokeWidth="2" />
      <circle cx="30" cy="30" r="23" stroke="#fef3c7" strokeWidth="1" />
      <circle cx="30" cy="24" r="5" fill="#fef3c7" />
      <path d="M18 36C22 32 28 34 30 36C32 34 38 32 42 36V42C38 38 32 40 30 42C28 40 22 38 18 42V36Z" fill="#fef3c7" />
      <path d="M30 18V26M26 20L34 28M34 20L26 28" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
      <text x="30" y="51" textAnchor="middle" fill="#ffffff" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">ISBM UNIV</text>
    </svg>
  ),
  MATS: (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.uniSvg}>
      <circle cx="30" cy="30" r="28" fill="#065f46" stroke="#fbbf24" strokeWidth="2" />
      <path d="M30 15L43 23V37C43 43 30 47 30 47C30 47 17 43 17 37V23L30 15Z" fill="#ffffff" stroke="#065f46" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="8" fill="#065f46" />
      <path d="M30 25V35M25 30H35" stroke="#fbbf24" strokeWidth="2" />
      <text x="30" y="53" textAnchor="middle" fill="#fbbf24" fontSize="5" fontWeight="900" fontFamily="sans-serif">MATS UNIV</text>
    </svg>
  ),
  AU: (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.uniSvg}>
      <circle cx="30" cy="30" r="28" fill="#831843" stroke="#f43f5e" strokeWidth="2" />
      <circle cx="30" cy="30" r="22" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 2" />
      <path d="M30 16L40 38H34L30 29L26 38H20L30 16Z" fill="#fbcfe8" />
      <path d="M25 33H35" stroke="#831843" strokeWidth="2" />
      <text x="30" y="51" textAnchor="middle" fill="#ffffff" fontSize="4.5" fontWeight="900" fontFamily="sans-serif">ANJANEYA</text>
    </svg>
  ),
  CVRU: (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.uniSvg}>
      <circle cx="30" cy="30" r="28" fill="#312e81" stroke="#38bdf8" strokeWidth="2" />
      <ellipse cx="30" cy="30" rx="16" ry="6" stroke="#38bdf8" strokeWidth="1.5" transform="rotate(30 30 30)" />
      <ellipse cx="30" cy="30" rx="16" ry="6" stroke="#38bdf8" strokeWidth="1.5" transform="rotate(-30 30 30)" />
      <circle cx="30" cy="30" r="4" fill="#fbbf24" />
      <text x="30" y="51" textAnchor="middle" fill="#ffffff" fontSize="4.5" fontWeight="900" fontFamily="sans-serif">DR. C.V. RAMAN</text>
    </svg>
  )
};

export const AcademicPartners: React.FC = () => {
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState(0);
  const partners = siteConfig.partners;
  const activePartner = partners[selectedPartnerIndex];

  return (
    <section className={styles.section} id="academic-partners">
      <div className="container">
        {/* 1. Section Intro */}
        <div className={styles.introArea}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>ACADEMIC PARTNERSHIPS</span>
          </div>

          <h2 className={styles.heading}>
            Recognised <span className={styles.redHighlight}>Academic Partners</span>
          </h2>

          <p className={styles.subtext}>
            Midas Institute of Software Technology works with recognised universities to provide students with degree, diploma and certification pathways alongside practical technology education.
          </p>
        </div>

        {/* 2. Editorial Split Showcase & Interactive Directory */}
        <div className={styles.editorialLayout}>
          {/* Left Column: Active Spotlight Profile */}
          <div className={styles.spotlightCol}>
            <div className={styles.statementBox}>
              <span className={styles.statementTag}>RECOGNISED PATHWAYS</span>
              <h3 className={styles.statementTitle}>
                Academic pathways.<br />
                <span className={styles.statementRed}>Industry-ready skills.</span>
              </h3>
            </div>

            {/* Dynamic Active Partner Detail Card */}
            <div className={styles.activeDetailCard} key={activePartner.code}>
              <div className={styles.detailTop}>
                <div className={styles.activeLogoBox}>
                  {universityLogos[activePartner.code] || universityLogos.KU}
                </div>
                <div className={styles.detailTitleWrap}>
                  <span className={styles.authBadge}>AUTHORISED TRAINING PARTNER</span>
                  <h4 className={styles.detailName}>{activePartner.name}</h4>
                  <div className={styles.locationRow}>
                    <MapPin size={14} className={styles.pinIcon} />
                    <span>{activePartner.location}</span>
                  </div>
                </div>
              </div>

              <div className={styles.divider} />

              <p className={styles.detailDesc}>{activePartner.description}</p>

              <div className={styles.programsHighlight}>
                <div className={styles.pItem}>
                  <CheckCircle2 size={16} className={styles.pCheck} />
                  <span>UGC & Government Recognized Degree Curriculum</span>
                </div>
                <div className={styles.pItem}>
                  <CheckCircle2 size={16} className={styles.pCheck} />
                  <span>Integrated Practical IT & Software Lab Mentorship</span>
                </div>
              </div>

              <div className={styles.detailCtaRow}>
                <Link href="/courses/university-degree-programs" className={styles.detailBtn}>
                  <span>Explore University Programs</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive University Directory List */}
          <div className={styles.directoryCol}>
            <p className={styles.directoryHeader}>SELECT INSTITUTION TO VIEW DETAILS</p>
            <div className={styles.partnerList}>
              {partners.map((partner, idx) => {
                const isActive = idx === selectedPartnerIndex;
                return (
                  <button
                    key={partner.code}
                    type="button"
                    className={`${styles.partnerRow} ${isActive ? styles.activeRow : ""}`}
                    onClick={() => setSelectedPartnerIndex(idx)}
                    onMouseEnter={() => setSelectedPartnerIndex(idx)}
                    aria-selected={isActive}
                  >
                    <div className={styles.rowLeft}>
                      <div className={styles.rowLogoBox}>
                        {universityLogos[partner.code] || universityLogos.KU}
                      </div>
                      <div className={styles.rowText}>
                        <h4 className={styles.rowName}>{partner.name}</h4>
                        <span className={styles.rowSub}>Authorised Training Partner • {partner.location}</span>
                      </div>
                    </div>

                    <div className={styles.rowRight}>
                      <span className={styles.rowArrow}>
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Subtle Institutional Trust Strip */}
        <div className={styles.trustStrip}>
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>5</span>
            <span className={styles.trustLabel}>Academic Partners</span>
          </div>
          <div className={styles.trustSeparator} />
          <div className={styles.trustItem}>
            <GraduationCap size={20} className={styles.trustIcon} />
            <span className={styles.trustLabel}>Recognised Degree Pathways</span>
          </div>
          <div className={styles.trustSeparator} />
          <div className={styles.trustItem}>
            <Award size={20} className={styles.trustIcon} />
            <span className={styles.trustLabel}>Technical + Management Programs</span>
          </div>
        </div>

        {/* 4. Refined Editorial CTA */}
        <div className={styles.refinedCtaArea}>
          <div className={styles.ctaTextWrap}>
            <h4 className={styles.ctaTitle}>Looking for a recognised degree pathway?</h4>
            <p className={styles.ctaSubtitle}>
              Explore available bachelor, master, and diploma university programs through Midas Institute.
            </p>
          </div>
          <Link href="/courses/university-degree-programs" className={styles.ctaActionBtn}>
            <span>View University Programs</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
