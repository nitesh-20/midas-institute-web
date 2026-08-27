import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, PhoneCall, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/common/Button";
import styles from "./HeroSection.module.css";

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Left: Strong Editorial Content */}
          <div className={styles.leftCol}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span>MIDAS INSTITUTE OF SOFTWARE TECHNOLOGY • RAIPUR</span>
            </div>

            <h1 className={styles.headline}>
              Build Skills That <span className={styles.redText}>Build Careers.</span>
            </h1>

            <p className={styles.subhead}>
              Raipur&apos;s premier software and technology education academy. With over <strong>11+ years of experience</strong>, we deliver practical, job-oriented training across Full Stack Web Development, Data Science, AI, DevOps, Cyber Security, and Accredited University Degree Programs.
            </p>

            <div className={styles.ctaRow}>
              <Button
                href="/courses"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Explore Courses
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
              >
                Talk to a Counsellor
              </Button>
            </div>

            {/* Grounded Key Facts */}
            <div className={styles.factsList}>
              <div className={styles.factItem}>
                <CheckCircle size={16} className={styles.factIcon} />
                <span>Hands-on Live Project Lab Training</span>
              </div>
              <div className={styles.factItem}>
                <CheckCircle size={16} className={styles.factIcon} />
                <span>Authorised University Training Partner</span>
              </div>
              <div className={styles.factItem}>
                <CheckCircle size={16} className={styles.factIcon} />
                <span>Integrated HR & Soft Skills Preparation</span>
              </div>
            </div>
          </div>

          {/* Right: Large Editorial Photography Composition */}
          <div className={styles.rightCol}>
            <div className={styles.imageCard}>
              {/* Educational Classroom / Lab Image */}
              <div className={styles.imageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Students collaborating and coding at Midas Institute of Software Technology Raipur"
                  className={styles.heroImage}
                />
              </div>

              {/* Floating Architectural Badge */}
              <div className={styles.floatingBadge}>
                <div className={styles.badgeIcon}>
                  <Building2 size={24} />
                </div>
                <div>
                  <p className={styles.badgeNumber}>11+ Years</p>
                  <p className={styles.badgeLabel}>Educational Excellence in Raipur</p>
                </div>
              </div>

              {/* Secondary Campus Strip */}
              <div className={styles.secondaryBadge}>
                <span>📍 SDS Chamber, Near Agrasen Chowk, Raipur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
