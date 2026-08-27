"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  GraduationCap,
  Sparkles,
  MapPin
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { coursesData } from "@/data/coursesData";
import { Button } from "@/components/common/Button";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses", isDropdown: true },
    { name: "Career Coaching", href: "/courses/communication-soft-skills" },
    { name: "Services", href: "/services" },
    { name: "University Degrees", href: "/courses/university-degree-programs" },
    { name: "Internship & CSR", href: "/internship" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* Main Navbar */}
      <nav className={`container ${styles.navbar}`}>
        {/* Brand Logo with Midas Red Emblem */}
        <Link href="/" className={styles.brand}>
          <div className={styles.emblem}>
            <span className={styles.emblemText}>MIST</span>
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>MIDAS INSTITUTE</span>
            <span className={styles.brandSubtitle}>SOFTWARE & TECHNOLOGY • RAIPUR</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className={styles.desktopNav}>
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.name}
                  className={styles.dropdownWrapper}
                  onMouseEnter={() => setCoursesDropdownOpen(true)}
                  onMouseLeave={() => setCoursesDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${
                      pathname.startsWith("/courses") ? styles.activeLink : ""
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={14}
                      className={`${styles.chevron} ${
                        coursesDropdownOpen ? styles.rotateChevron : ""
                      }`}
                    />
                  </Link>

                  {/* Clean Academic Mega Menu */}
                  {coursesDropdownOpen && (
                    <div className={styles.megaMenu}>
                      <div className={styles.megaMenuTop}>
                        <p className={styles.megaMenuHeading}>ACADEMIC DISCIPLINES & TRACKS</p>
                        <Link href="/courses" className={styles.viewAllLink}>
                          View Full Catalog <ArrowRight size={13} />
                        </Link>
                      </div>

                      <div className={styles.megaMenuGrid}>
                        {coursesData.slice(0, 6).map((c) => (
                          <Link
                            key={c.slug}
                            href={`/courses/${c.slug}`}
                            className={styles.megaMenuItem}
                          >
                            <span className={styles.menuDot} />
                            <div>
                              <p className={styles.megaItemTitle}>{c.name}</p>
                              <p className={styles.megaItemSub}>{c.category}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className={styles.megaMenuFooter}>
                        <span className={styles.authTag}>
                          🎓 Authorised Training Partner for University Degree Programs (MBA / BBA / B.Com)
                        </span>
                        <Link href="/courses/university-degree-programs" className={styles.degreeBtn}>
                          Explore Degrees →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.activeLink : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Primary CTA */}
        <div className={styles.navActions}>
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            rightIcon={<ArrowRight size={14} />}
          >
            Enquire Now
          </Button>

          {/* Mobile Toggle */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.mobileNavLink} ${
                  pathname === link.href ? styles.activeMobileLink : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className={styles.mobileDivider} />

          <div className={styles.mobileContactBox}>
            <p className={styles.mobileContactHeading}>ADMISSIONS HELPLINE</p>
            <a href={`tel:${siteConfig.contact.primaryPhone}`} className={styles.mobilePhone}>
              {siteConfig.contact.primaryPhoneDisplay}
            </a>
            <Button
              href={siteConfig.contact.whatsappUrl}
              variant="primary"
              size="md"
              fullWidth
              external
              leftIcon={<MessageCircle size={16} />}
            >
              WhatsApp Admissions
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
