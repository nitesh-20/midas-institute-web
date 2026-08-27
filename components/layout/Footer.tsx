import React from "react";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Award, 
  ArrowRight,
  ShieldCheck,
  Heart
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { coursesData } from "@/data/coursesData";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* University Accreditation Strip */}
      <div className={styles.accreditationStrip}>
        <div className={`container ${styles.accreditationContent}`}>
          <div className={styles.accreditationLeft}>
            <Award className={styles.awardIcon} size={22} />
            <div>
              <p className={styles.accreditationTitle}>Authorised University Training Partner</p>
              <p className={styles.accreditationSub}>
                Recognized Higher Education Degree & Vocational Certification Pathways
              </p>
            </div>
          </div>

          <div className={styles.partnerPills}>
            {siteConfig.partners.map((p) => (
              <span key={p.name} className={styles.partnerPill}>
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className={`container ${styles.mainFooter}`}>
        <div className={styles.grid}>
          {/* Col 1: Institute Overview & Contact */}
          <div className={styles.colInstitute}>
            <Link href="/" className={styles.brand}>
              <img
                src="/images/logo.png"
                alt="MIST Computer Education Logo"
                className={styles.brandLogoImg}
              />
              <div className={styles.brandText}>
                <span className={styles.brandTitle}>MIDAS INSTITUTE</span>
                <span className={styles.brandSub}>SOFTWARE & TECHNOLOGY • RAIPUR</span>
              </div>
            </Link>

            <p className={styles.instituteDesc}>
              Raipur&apos;s established software engineering and data science training institute with over 11+ years of academic excellence. Delivering hands-on practical lab training, industry live projects, and accredited university degree programs.
            </p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin size={16} className={styles.cIcon} />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} className={styles.cIcon} />
                <span>{siteConfig.contact.primaryPhoneDisplay} • {siteConfig.contact.admissionsPhoneDisplay}</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={16} className={styles.cIcon} />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>

            <div className={styles.socialButtons}>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.justdial}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                Justdial Verified
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <MessageCircle size={14} />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>

          {/* Col 2: Software Engineering Programs */}
          <div className={styles.colLinks}>
            <p className={styles.colHeading}>ENGINEERING PROGRAMS</p>
            <ul className={styles.linkList}>
              {coursesData.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/courses/${c.slug}`} className={styles.footerLink}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Management & Professional Tracks */}
          <div className={styles.colLinks}>
            <p className={styles.colHeading}>PROFESSIONAL & DEGREES</p>
            <ul className={styles.linkList}>
              {coursesData.slice(6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/courses/${c.slug}`} className={styles.footerLink}>
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/courses/university-degree-programs" className={styles.footerLink}>
                  University Degree Programs (MBA / BBA / B.Com)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Links & CSR */}
          <div className={styles.colLinks}>
            <p className={styles.colHeading}>INSTITUTE</p>
            <ul className={styles.linkList}>
              <li><Link href="/about" className={styles.footerLink}>About Midas & Legacy</Link></li>
              <li><Link href="/services" className={styles.footerLink}>Institutional Services</Link></li>
              <li><Link href="/internship" className={styles.footerLink}>Summer Internship & Live Projects</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Admissions & Campus Visit</Link></li>
              <li><Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link></li>
            </ul>

            {/* CSR Scholarship Notice */}
            <div className={styles.csrNotice}>
              <div className={styles.csrHeading}>
                <Heart size={14} className={styles.heartIcon} />
                <span>Akida Welfare CSR Scholarship</span>
              </div>
              <p className={styles.csrSub}>
                Up to 50% tuition scholarship for financially challenged students supported by SSV Group.
              </p>
              <Link href="/internship" className={styles.csrLink}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className={styles.bottomStrip}>
        <div className={`container ${styles.bottomContent}`}>
          <p className={styles.copyText}>
            © {new Date().getFullYear()} {siteConfig.fullName}. All Rights Reserved.
          </p>
          <div className={styles.bottomMeta}>
            <span>Campus: 2nd Floor, SDS Chamber, Above HDFC Bank, Agrasen Chowk, Raipur (C.G.) - 492001</span>
            <span className={styles.metaDivider}>•</span>
            <Link href="/privacy" className={styles.privacyLink}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
