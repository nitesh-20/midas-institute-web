import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake, 
  Layers, 
  Briefcase,
  Users2
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/common/Button";
import { CtaBanner } from "@/components/home/CtaBanner";
import styles from "./About.module.css";

export const metadata: Metadata = {
  title: "About Midas Institute | 11+ Years of Software Education in Raipur",
  description: "Learn about Midas Institute of Software Technology — Raipur's established software engineering and data science training academy and authorised university partner.",
  alternates: {
    canonical: "https://www.midastechnologies.in/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="INSTITUTIONAL PROFILE"
        title="11+ Years of Technical"
        highlightWord="Education in Raipur"
        description="MIDAS INSTITUTE OF SOFTWARE TECHNOLOGY (MIST) provides career-driven software engineering, data science, and accredited university degree programs with hands-on lab mentorship."
        breadcrumbs={[{ name: "About Us" }]}
      />

      {/* Narrative Split: The Midas Story */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <span className={styles.label}>OUR MISSION & FOUNDATIONS</span>
              <h2 className={styles.heading}>
                Bridging Academic Theory with <span className={styles.redText}>Industry Realities</span>
              </h2>

              <p className={styles.para}>
                Established with a vision to deliver premier software education in Chhattisgarh, <strong>MIDAS INSTITUTE OF SOFTWARE TECHNOLOGY</strong> has spent over a decade training students, engineering graduates, and working professionals in Raipur.
              </p>

              <p className={styles.para}>
                Our core educational philosophy centers on real practical delivery: moving beyond passive whiteboard lectures into live terminal configurations, full-stack application development, database management, and active team collaboration on Git.
              </p>

              <div className={styles.valuesList}>
                <div className={styles.valueRow}>
                  <CheckCircle2 size={18} className={styles.valCheck} />
                  <div>
                    <h4 className={styles.valTitle}>11+ Years Academic Experience</h4>
                    <p className={styles.valDesc}>Consistent track record of training and career acceleration in Raipur.</p>
                  </div>
                </div>

                <div className={styles.valueRow}>
                  <CheckCircle2 size={18} className={styles.valCheck} />
                  <div>
                    <h4 className={styles.valTitle}>Authorised University Partnerships</h4>
                    <p className={styles.valDesc}>Official collaboration with 5 recognized higher-ed institutions for degrees and diplomas.</p>
                  </div>
                </div>

                <div className={styles.valueRow}>
                  <CheckCircle2 size={18} className={styles.valCheck} />
                  <div>
                    <h4 className={styles.valTitle}>Integrated Career Readiness</h4>
                    <p className={styles.valDesc}>Resume workshops, presentation skills, group discussions, and mock HR rounds.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Photo Frame */}
            <div className={styles.storyPhotoCol}>
              <div className={styles.photoFrame}>
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                  alt="Students and instructors at Midas Institute Raipur"
                  className={styles.storyPhoto}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Partnerships Showcase */}
      <section className={`section ${styles.partnersSection}`}>
        <div className="container">
          <div className={styles.partnerTop}>
            <span className={styles.label}>ACCREDITED HIGHER EDUCATION</span>
            <h2 className={styles.heading}>
              Authorised <span className={styles.redText}>University Partners</span>
            </h2>
            <p className={styles.partnerSub}>
              Midas is proud to serve as an official training partner alongside recognized universities, enabling students to pursue accredited Bachelor and Master programs alongside technical certifications.
            </p>
          </div>

          <div className={styles.partnerGrid}>
            {siteConfig.partners.map((partner) => (
              <div key={partner.name} className={styles.partnerCard}>
                <div className={styles.partnerIconBox}>
                  <Building2 size={24} className={styles.partnerIcon} />
                </div>
                <h3 className={styles.partnerName}>{partner.name}</h3>
                <span className={styles.partnerBadge}>Authorised Training Partner</span>
                <p className={styles.partnerDesc}>{partner.description}</p>
                <span className={styles.partnerLoc}>📍 {partner.location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Akida Welfare Foundation & SSV Group Scholarship */}
      <section className="section">
        <div className="container">
          <div className={styles.csrBanner}>
            <div className={styles.csrContent}>
              <div className={styles.csrTag}>
                <HeartHandshake size={16} />
                <span>COMMUNITY & CSR INITIATIVE</span>
              </div>

              <h2 className={styles.csrTitle}>
                Akida Welfare Foundation & <span className={styles.redText}>SSV Group Scholarship</span>
              </h2>

              <p className={styles.csrText}>
                We believe that financial hardship should never be a barrier to high-growth technology careers. In collaboration with Akida Welfare Foundation and with financial sponsorship from SSV Group, Midas offers up to 50% tuition scholarships on degree and diploma programs for deserving students.
              </p>

              <div className={styles.csrBullets}>
                <div className={styles.csrBullet}>✔ Up to 50% college tuition fee subsidy</div>
                <div className={styles.csrBullet}>✔ Dedicated faculty mentoring & lab access</div>
                <div className={styles.csrBullet}>✔ Need-based application and verification</div>
              </div>

              <div className={styles.csrActions}>
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight size={16} />}
                >
                  Inquire for Scholarship
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
