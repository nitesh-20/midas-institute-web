import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./InstituteIntro.module.css";

export const InstituteIntro: React.FC = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.splitGrid}>
          {/* Left: Large Editorial Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=80"
                alt="Technology training and mentorship at Midas Institute of Software Technology Raipur"
                className={styles.introImage}
              />
              <div className={styles.accentCorner} />
            </div>
          </div>

          {/* Right: Institutional Profile Story */}
          <div className={styles.textCol}>
            <div className={styles.label}>ABOUT MIDAS</div>

            <h2 className={styles.heading}>
              Technology education built around <span className={styles.redText}>practical skills.</span>
            </h2>

            <p className={styles.leadParagraph}>
              At <strong>MIDAS INSTITUTE OF SOFTWARE TECHNOLOGY</strong>, we believe engineering and data skills are best acquired by doing. With 11+ years of academic excellence in Raipur, we have continually evolved our curricula alongside industry shifts.
            </p>

            <p className={styles.bodyParagraph}>
              From writing modern full-stack architectures and configuring cloud containers to building machine learning models and clearing corporate HR interviews, every module is structured to deliver measurable competence.
            </p>

            <div className={styles.keyHighlights}>
              <div className={styles.highlightRow}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Live laboratory practice with industry development toolchains</span>
              </div>
              <div className={styles.highlightRow}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Mentorship by experienced practitioners and faculty</span>
              </div>
              <div className={styles.highlightRow}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Accredited university programs for recognized higher-ed degrees</span>
              </div>
            </div>

            <div className={styles.linkWrapper}>
              <Link href="/about" className={styles.discoverLink}>
                <span>Discover Midas Institute</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
