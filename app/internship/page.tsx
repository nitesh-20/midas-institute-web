import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Briefcase, 
  Code2, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake,
  Calendar,
  Building2
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/common/Button";
import { CtaBanner } from "@/components/home/CtaBanner";
import styles from "./Internship.module.css";

export const metadata: Metadata = {
  title: "Summer & Industrial Internship in Raipur | Live Projects & CSR Scholarships",
  description: "Join Midas Institute's Summer and Industrial Internship program in Raipur. Hands-on training on live software projects, GitHub sprints, and Akida Welfare Foundation scholarships.",
  alternates: {
    canonical: "https://www.midastechnologies.in/internship",
  },
};

export default function InternshipPage() {
  const tracks = [
    {
      title: "Full Stack Web Engineering Internship",
      stack: "React.js • Node.js • Express • MongoDB • Next.js",
      desc: "Work on live commercial web applications, implement secure JWT authentication, build responsive UI components, and integrate backend REST APIs."
    },
    {
      title: "Data Science & Machine Learning Internship",
      stack: "Python • Pandas • NumPy • Scikit-Learn • Streamlit",
      desc: "Analyze real-world business datasets, clean and preprocess data pipelines, build supervised predictive models, and deploy interactive analytics dashboards."
    },
    {
      title: "Mobile App Development Internship",
      stack: "Flutter • Dart • Firebase • REST APIs",
      desc: "Build cross-platform mobile apps for iOS and Android with state management, cloud data synchronization, and native UI transitions."
    },
    {
      title: "Cyber Security & Cloud Infrastructure Internship",
      stack: "Linux • Docker • AWS • Kali Linux • Network Security",
      desc: "Practice penetration testing methodologies, containerize microservices with Docker, and configure cloud compute environments."
    }
  ];

  return (
    <>
      <PageHeader
        badge="EXPERIENTIAL LEARNING"
        title="Bridging Theory with"
        highlightWord="Live IT Practice"
        description="Midas Institute offers structured Summer and Industrial Internship programs for B.Tech, MCA, BCA, and Polytechnic students in Raipur, focusing on live projects and corporate readiness."
        breadcrumbs={[{ name: "Internship & CSR" }]}
      />

      {/* Internship Tracks */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionTop}>
            <span className={styles.label}>INTERNSHIP DISCIPLINES</span>
            <h2 className={styles.heading}>
              Live Project <span className={styles.redText}>Internship Tracks</span>
            </h2>
            <p className={styles.sub}>
              Students gain real experience working on source-controlled repositories, participating in agile sprint standups, and completing verifiable end-of-term project submissions.
            </p>
          </div>

          <div className={styles.tracksGrid}>
            {tracks.map((track, idx) => (
              <div key={idx} className={styles.trackCard}>
                <div className={styles.trackTop}>
                  <Code2 size={22} className={styles.trackIcon} />
                  <span className={styles.trackNum}>Track 0{idx + 1}</span>
                </div>

                <h3 className={styles.trackTitle}>{track.title}</h3>
                <p className={styles.trackStack}>{track.stack}</p>
                <p className={styles.trackDesc}>{track.desc}</p>

                <div className={styles.trackFooter}>
                  <span className={styles.certBadge}>
                    <Award size={14} /> Certificate & Project Report Included
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Akida Welfare Foundation CSR Section */}
      <section className={`section ${styles.csrSection}`}>
        <div className="container">
          <div className={styles.csrGrid}>
            <div className={styles.csrTextCol}>
              <div className={styles.csrTag}>
                <HeartHandshake size={16} />
                <span>COMMUNITY EMPOWERMENT</span>
              </div>

              <h2 className={styles.heading}>
                Akida Welfare Foundation <span className={styles.redText}>50% CSR Scholarship</span>
              </h2>

              <p className={styles.para}>
                Through our collaboration with <strong>Akida Welfare Foundation</strong> and generous sponsorship from <strong>SSV Group</strong>, Midas ensures that deserving students with financial constraints can access high-quality software training and university degree programs.
              </p>

              <div className={styles.benefitsList}>
                <div className={styles.bRow}>
                  <CheckCircle2 size={18} className={styles.bCheck} />
                  <span>Up to 50% tuition scholarship coverage for qualifying applicants</span>
                </div>
                <div className={styles.bRow}>
                  <CheckCircle2 size={18} className={styles.bCheck} />
                  <span>Full access to computer laboratories and dedicated mentor counseling</span>
                </div>
                <div className={styles.bRow}>
                  <CheckCircle2 size={18} className={styles.bCheck} />
                  <span>Applicable across degree, diploma, and technical certification tracks</span>
                </div>
              </div>

              <div className={styles.csrActions}>
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Apply for CSR Scholarship
                </Button>
              </div>
            </div>

            <div className={styles.csrCardCol}>
              <div className={styles.scholarshipInfoBox}>
                <h3 className={styles.infoTitle}>Scholarship Overview</h3>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Partner:</span>
                  <span className={styles.infoVal}>Akida Welfare Foundation</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Sponsor:</span>
                  <span className={styles.infoVal}>SSV Group</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Coverage:</span>
                  <span className={styles.infoValHighlight}>Up to 50% Tuition Fees</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoVal}>Raipur Campus (SDS Chamber)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
