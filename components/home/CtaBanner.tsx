import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/common/Button";
import styles from "./CtaBanner.module.css";

export const CtaBanner: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <Sparkles size={14} className={styles.sparkle} />
            <span>ADMISSIONS & ACADEMIC COUNSELING</span>
          </div>

          <h2 className={styles.title}>
            Ready to Plan Your <span className={styles.redHighlight}>Technical Education?</span>
          </h2>

          <p className={styles.subtitle}>
            Speak directly with our senior faculty mentors in Raipur, evaluate the right software or data science track for your goals, and explore university degree pathways.
          </p>

          <div className={styles.ctaGroup}>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight size={18} />}
            >
              Book Free Career Counseling
            </Button>

            <Button
              href={siteConfig.contact.whatsappUrl}
              variant="white"
              size="lg"
              external
              leftIcon={<MessageCircle size={18} />}
            >
              Chat on WhatsApp
            </Button>

            <Button
              href={`tel:${siteConfig.contact.primaryPhone}`}
              variant="outline"
              size="lg"
              leftIcon={<Phone size={18} />}
            >
              Call {siteConfig.contact.primaryPhoneDisplay}
            </Button>
          </div>

          <div className={styles.locationFooter}>
            <MapPin size={16} className={styles.pinIcon} />
            <span>Campus: 2nd Floor, SDS Chamber, Above HDFC Bank, Near Agrasen Chowk, Raipur (C.G.) - 492001</span>
          </div>
        </div>
      </div>
    </section>
  );
};
