"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { coursesData } from "@/data/coursesData";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses", isDropdown: true },
    { name: "Career Prep", href: "/courses/communication-soft-skills" },
    { name: "Services", href: "/services" },
    { name: "Degrees", href: "/courses/university-degree-programs" },
    { name: "Internship", href: "/internship" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`}>
      {/* Floating Island / Pill Navbar */}
      <nav className={styles.floatingNav} aria-label="Main Navigation">
        {/* Brand Logo (Left) */}
        <Link href="/" className={styles.brand}>
          <img
            src="/images/logo.png"
            alt="MIST Computer Education Logo"
            className={styles.brandLogoImg}
          />
          <div className={styles.brandTitleWrap}>
            <span className={styles.brandTitle}>MIDAS</span>
            <span className={styles.brandTag}>INSTITUTE</span>
          </div>
        </Link>

        {/* Center Navigation Links with Soft Pill Hover */}
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
                      size={13}
                      className={`${styles.chevron} ${
                        coursesDropdownOpen ? styles.rotateChevron : ""
                      }`}
                    />
                  </Link>

                  {/* Clean Mega Dropdown Menu */}
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
                          🎓 Authorised University Partner (MBA / BBA / B.Com)
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

        {/* Right Action Buttons (Get full access / Join us style) */}
        <div className={styles.navActions}>
          <Link href="/contact" className={styles.primaryCta}>
            Enquire Now
          </Link>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryCta}
          >
            WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
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

          <div className={styles.mobileActions}>
            <Link href="/contact" className={styles.mobilePrimaryBtn}>
              Enquire Now
            </Link>
            <a
              href={`tel:${siteConfig.contact.primaryPhone}`}
              className={styles.mobileSecondaryBtn}
            >
              Call {siteConfig.contact.primaryPhoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
