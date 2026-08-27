"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Award, GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./AcademicPartners.module.css";

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
                  <img
                    src={activePartner.logoUrl}
                    alt={`${activePartner.name} Official Logo`}
                    className={styles.activeLogoImg}
                  />
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
                        <img
                          src={partner.logoUrl}
                          alt={`${partner.name} Logo`}
                          className={styles.rowLogoImg}
                        />
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
