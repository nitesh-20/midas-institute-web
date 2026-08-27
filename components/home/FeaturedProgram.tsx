import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Layers, Cpu } from "lucide-react";
import { Button } from "@/components/common/Button";
import styles from "./FeaturedProgram.module.css";

export const FeaturedProgram: React.FC = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.compositionCard}>
          <div className={styles.grid}>
            {/* Left: Large High Quality Coding Image */}
            <div className={styles.imageSide}>
              <img
                src="/images/midas/training/midas_lab_practical_training.jpg"
                alt="Full Stack Web Development students coding in practical lab at Midas Institute Raipur"
                className={styles.featureImage}
              />
              <div className={styles.imageOverlayBadge}>
                <Code2 size={16} />
                <span>Flagship Engineering Track</span>
              </div>
            </div>

            {/* Right: Rich Editorial Content */}
            <div className={styles.contentSide}>
              <div className={styles.eyebrow}>FEATURED PROGRAM</div>

              <h2 className={styles.title}>
                Full Stack Web <span className={styles.redText}>Development</span>
              </h2>

              <p className={styles.stackLine}>
                HTML5 • CSS3 • JavaScript (ES6+) • React.js • Next.js • Node.js • Express • Django • Java Spring • MySQL • MongoDB
              </p>

              <p className={styles.desc}>
                Master the complete software engineering lifecycle from modern frontend responsive UI components to scalable backend REST APIs, authentication security, and database normalization on live client projects.
              </p>

              <div className={styles.highlights}>
                <div className={styles.hlRow}>
                  <CheckCircle2 size={18} className={styles.hlIcon} />
                  <span>MERN Stack (React, Node, Express, MongoDB) & Next.js SSR</span>
                </div>
                <div className={styles.hlRow}>
                  <CheckCircle2 size={18} className={styles.hlIcon} />
                  <span>Choice of Back-End: Node.js OR Python/Django OR Java/Spring Boot</span>
                </div>
                <div className={styles.hlRow}>
                  <CheckCircle2 size={18} className={styles.hlIcon} />
                  <span>Live Project Delivery with Git & GitHub Sprint Collaboration</span>
                </div>
              </div>

              <div className={styles.actionRow}>
                <Button
                  href="/courses/full-stack-web-development"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Explore Program & Syllabus
                </Button>

                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                >
                  Request Fee & Counseling
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
