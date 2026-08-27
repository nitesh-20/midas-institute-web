import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/common/Button";
import styles from "./CareerRoadmap.module.css";

const stages = [
  {
    step: "01",
    label: "RESUME CRAFT",
    desc: "ATS-optimized formatting, impactful project descriptions, and portfolio reviews."
  },
  {
    step: "02",
    label: "COMMUNICATION",
    desc: "Business email writing, telephonic conversation etiquette, and grammar polish."
  },
  {
    step: "03",
    label: "PRESENTATION",
    desc: "Technical deck delivery, body language, and professional attire ('What To Wear')."
  },
  {
    step: "04",
    label: "INTERVIEWS & GD",
    desc: "Group discussions, STAR technique drills, and behavioral question strategy."
  },
  {
    step: "05",
    label: "CONFIDENCE",
    desc: "Full-scale simulated HR & technical mock interviews with personalized feedback."
  }
];

export const CareerRoadmap: React.FC = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.topContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>COMMUNICATION & HR ROUND PREPARATION</span>
          </div>

          <h2 className={styles.title}>
            Technical Skills Are <span className={styles.redText}>Only the Beginning.</span>
          </h2>

          <p className={styles.leadText}>
            Our brochure and curriculum emphasize that landing a top engineering role requires strong professional articulation. All Midas students undergo structured soft skills training, resume crafting, and rigorous mock HR interviews.
          </p>
        </div>

        {/* Visual Split: Left Sequential Steps + Right Student Interview Photo */}
        <div className={styles.editorialGrid}>
          {/* Left: Horizontal / Sequential Pathway */}
          <div className={styles.sequenceWrapper}>
            <div className={styles.stepsList}>
              {stages.map((st, idx) => (
                <div key={st.step} className={styles.stepRow}>
                  <div className={styles.stepMarker}>
                    <span className={styles.stepNum}>{st.step}</span>
                    {idx < stages.length - 1 && <div className={styles.stepLine} />}
                  </div>

                  <div className={styles.stepContent}>
                    <h3 className={styles.stepLabel}>{st.label}</h3>
                    <p className={styles.stepDesc}>{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.sequenceFooter}>
              <Button
                href="/courses/communication-soft-skills"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight size={16} />}
              >
                Explore Career Prep Module
              </Button>
            </div>
          </div>

          {/* Right: Large Editorial Image Composition */}
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <img
                src="/images/midas/events/midas_tech_seminar_presentation.jpg"
                alt="Technical industry career seminar and interview training at Midas Institute Raipur"
                className={styles.interviewPhoto}
              />
              <div className={styles.photoQuoteBox}>
                <p className={styles.quoteText}>
                  &ldquo;Mastering technical questions is half the battle; presenting yourself with clarity, structured thought, and confidence is what secures the offer.&rdquo;
                </p>
                <p className={styles.quoteAuthor}>— Midas Career & Soft Skills Mentors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
