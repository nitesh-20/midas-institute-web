import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/common/Button";
import { CtaBanner } from "@/components/home/CtaBanner";
import styles from "./Services.module.css";

export const metadata: Metadata = {
  title: "Services & Solutions | Training, Software & Web Development in Raipur",
  description: "Explore institutional and enterprise services by Midas: Technical IT Training, Web & Mobile App Development, Digital Presence Solutions, and Social Media Marketing.",
  alternates: {
    canonical: "https://www.midastechnologies.in/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="INSTITUTIONAL CAPABILITIES"
        title="Comprehensive Technical &"
        highlightWord="Enterprise Services"
        description="From instructor-led classroom and corporate IT bootcamps to custom full-stack web and mobile application engineering, Midas delivers proven technical solutions in Raipur."
        breadcrumbs={[{ name: "Services" }]}
      />

      {/* Services Breakdown */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesStack}>
            {servicesData.map((svc, idx) => (
              <div key={svc.id} className={styles.serviceItem}>
                <div className={styles.itemHeader}>
                  <span className={styles.itemNum}>0{idx + 1}</span>
                  <div className={styles.titleArea}>
                    <span className={styles.categoryBadge}>{svc.category}</span>
                    <h2 className={styles.serviceTitle}>{svc.title}</h2>
                  </div>
                </div>

                <div className={styles.itemBody}>
                  <p className={styles.serviceDesc}>{svc.description}</p>

                  <div className={styles.deliverablesBox}>
                    <p className={styles.deliverablesHeading}>Key Offerings & Focus Areas:</p>
                    <div className={styles.deliverablesList}>
                      {svc.features.map((item, i) => (
                        <div key={i} className={styles.dRow}>
                          <CheckCircle2 size={16} className={styles.dCheck} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.itemActions}>
                    <Button
                      href="/contact"
                      variant="primary"
                      size="md"
                      rightIcon={<ArrowRight size={16} />}
                    >
                      Inquire About This Service
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
