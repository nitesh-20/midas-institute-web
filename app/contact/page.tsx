import React from "react";
import { Metadata } from "next";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Building2, 
  Award,
  Sparkles
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { CampusMap } from "@/components/contact/CampusMap";
import { Button } from "@/components/common/Button";
import styles from "./Contact.module.css";

export const metadata: Metadata = {
  title: "Contact & Admissions | Campus Location & Counseling in Raipur",
  description: "Connect with Midas Institute of Software Technology, Raipur. Admissions hotline: +91-6266846474, +91-8103168797. SDS Chamber, Agrasen Chowk, Raipur.",
  alternates: {
    canonical: "https://www.midastechnologies.in/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="CAMPUS ADMISSIONS & INQUIRIES"
        title="Connect with Our"
        highlightWord="Academic Team"
        description="Visit our Raipur campus at SDS Chamber, Agrasen Chowk, or connect with our counselors for syllabus reviews, demo class scheduling, and university degree counseling."
        breadcrumbs={[{ name: "Contact & Admissions" }]}
      />

      {/* Main Split: Left Details + Right Form */}
      <section className="section">
        <div className="container">
          <div className={styles.splitGrid}>
            {/* Left: Contact Info & Institutional Details */}
            <div className={styles.infoCol}>
              <span className={styles.label}>DIRECT ADMISSIONS DESK</span>
              <h2 className={styles.heading}>
                Let&apos;s Plan Your <span className={styles.redText}>Next Step.</span>
              </h2>

              <p className={styles.leadPara}>
                Whether you are a college student seeking summer internships, an engineering graduate aiming for a full-stack career, or a working professional upgrading your data skills, we are here to assist you.
              </p>

              {/* Direct Contact Cards */}
              <div className={styles.contactDetailsList}>
                {/* Phone Card */}
                <div className={styles.detailCard}>
                  <div className={styles.iconBox}>
                    <Phone size={22} />
                  </div>
                  <div className={styles.detailText}>
                    <p className={styles.detailLabel}>Direct Phone Hotlines</p>
                    <a href={`tel:${siteConfig.contact.primaryPhone}`} className={styles.detailLink}>
                      {siteConfig.contact.primaryPhoneDisplay}
                    </a>
                    <a href={`tel:${siteConfig.contact.admissionsPhone}`} className={styles.detailLink}>
                      {siteConfig.contact.admissionsPhoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className={styles.detailCard}>
                  <div className={`${styles.iconBox} ${styles.whatsappIconBox}`}>
                    <MessageCircle size={22} />
                  </div>
                  <div className={styles.detailText}>
                    <p className={styles.detailLabel}>WhatsApp Admissions Desk</p>
                    <a
                      href={siteConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappActionLink}
                    >
                      Chat Directly: {siteConfig.contact.whatsappNumber}
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className={styles.detailCard}>
                  <div className={styles.iconBox}>
                    <Mail size={22} />
                  </div>
                  <div className={styles.detailText}>
                    <p className={styles.detailLabel}>Official Inquiries Email</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className={styles.detailLink}>
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div className={styles.detailCard}>
                  <div className={styles.iconBox}>
                    <MapPin size={22} />
                  </div>
                  <div className={styles.detailText}>
                    <p className={styles.detailLabel}>Raipur Campus Address</p>
                    <p className={styles.addressText}>{siteConfig.address.full}</p>
                  </div>
                </div>
              </div>

              {/* Campus Hours */}
              <div className={styles.hoursCard}>
                <div className={styles.hoursTop}>
                  <Clock size={16} className={styles.clockIcon} />
                  <span className={styles.hoursHeading}>Campus Working Hours</span>
                </div>
                <p className={styles.hoursText}>
                  Monday to Saturday: 9:00 AM – 7:30 PM<br />
                  Sunday: Prior Appointment / Weekend Batches
                </p>
              </div>
            </div>

            {/* Right: Clean Inquiry Form */}
            <div className={styles.formCol}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Google Map Section */}
      <section className={`section ${styles.mapSection}`}>
        <div className="container">
          <div className={styles.mapSectionTop}>
            <span className={styles.label}>FIND OUR CAMPUS</span>
            <h2 className={styles.heading}>
              Visit Midas Institute in <span className={styles.redText}>Raipur</span>
            </h2>
            <p className={styles.mapSectionSub}>
              Conveniently located at Agrasen Chowk, SDS Chamber, easily accessible via public and private transit across Raipur and Durg-Bhilai.
            </p>
          </div>

          <CampusMap />
        </div>
      </section>
    </>
  );
}
