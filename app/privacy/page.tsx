import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteConfig } from "@/data/siteConfig";
import styles from "./Privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy & Data Protection Policy | MIDAS Institute Raipur",
  description: "Academic privacy policy and student inquiry data protection guidelines for MIDAS INSTITUTE OF SOFTWARE TECHNOLOGY, Raipur.",
  alternates: {
    canonical: "https://www.midastechnologies.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        badge="GOVERNANCE & TRUST"
        title="Privacy & Data"
        highlightWord="Protection Policy"
        description="Our commitment to safeguarding student data, inquiry submissions, and academic records at Midas Institute of Software Technology."
        breadcrumbs={[{ name: "Privacy Policy" }]}
      />

      <section className="section">
        <div className={`container-narrow ${styles.contentWrapper}`}>
          <div className={styles.policyCard}>
            <p className={styles.effectiveDate}>
              <strong>Effective Date:</strong> January 1, 2026 | Last Updated: August 2026
            </p>

            <h2 className={styles.sectionHeading}>1. Institutional Statement</h2>
            <p className={styles.para}>
              <strong>MIDAS INSTITUTE OF SOFTWARE TECHNOLOGY (&quot;MIST&quot;, &quot;Midas Institute&quot;, &quot;we&quot;, &quot;our&quot;)</strong> operates from SDS Chamber, Agrasen Chowk, Raipur, Chhattisgarh. We respect your privacy and are committed to protecting personal information provided during course inquiries, counseling sessions, and academic enrollments.
            </p>

            <h2 className={styles.sectionHeading}>2. Information We Collect</h2>
            <p className={styles.para}>
              When you submit an admission inquiry, request a course syllabus, apply for CSR scholarships, or register for internships, we collect:
            </p>
            <ul className={styles.list}>
              <li>Full Name and contact details (phone number, WhatsApp number, email address).</li>
              <li>Academic background (college, degree pursued, graduation year).</li>
              <li>Course preferences and training track of interest.</li>
            </ul>

            <h2 className={styles.sectionHeading}>3. Purpose of Information Use</h2>
            <p className={styles.para}>
              The collected information is solely utilized to:
            </p>
            <ul className={styles.list}>
              <li>Provide accurate curriculum syllabi, fee structures, and batch schedule counseling.</li>
              <li>Coordinate demo lecture invitations and lab orientation sessions.</li>
              <li>Process university degree program admissions and scholarship applications.</li>
            </ul>

            <h2 className={styles.sectionHeading}>4. Zero Commercial Reselling Policy</h2>
            <p className={styles.para}>
              We maintain a strict institutional policy: your contact numbers and personal data are <strong>never sold, rented, or distributed</strong> to third-party telemarketers or external commercial agencies.
            </p>

            <h2 className={styles.sectionHeading}>5. Contact Us Regarding Your Data</h2>
            <p className={styles.para}>
              If you have any questions regarding your data or wish to update your records, please contact our Raipur campus administration:
            </p>
            <div className={styles.contactBlock}>
              <p><strong>Campus Office:</strong> {siteConfig.address.full}</p>
              <p><strong>Phone:</strong> {siteConfig.contact.primaryPhoneDisplay} / {siteConfig.contact.admissionsPhoneDisplay}</p>
              <p><strong>Email:</strong> {siteConfig.contact.email}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
