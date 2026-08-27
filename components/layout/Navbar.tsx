"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  MessageCircle,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
  Building2,
  Award,
  HeartHandshake
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { coursesData } from "@/data/coursesData";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dropdown hover/click states
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Mobile accordion state
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    about: false,
    courses: false,
    career: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleMobileSubmenu = (key: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo (Left) */}
        <Link href="/" className={styles.brand}>
          <img
            src="/images/logo.png"
            alt="MIST Computer Education Logo"
            className={styles.brandLogoImg}
          />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>MIDAS INSTITUTE</span>
            <span className={styles.brandSubtitle}>OF SOFTWARE TECHNOLOGY</span>
          </div>
        </Link>

        {/* Center Desktop Navigation (Clean & Uncrowded) */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {/* 1. Home */}
          <Link
            href="/"
            className={`${styles.navItem} ${pathname === "/" ? styles.activeItem : ""}`}
          >
            Home
          </Link>

          {/* 2. About ▾ */}
          <div
            className={styles.dropdownWrapper}
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/about"
              className={`${styles.navItem} ${
                pathname === "/about" ? styles.activeItem : ""
              }`}
            >
              <span>About</span>
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${
                  activeDropdown === "about" ? styles.rotateChevron : ""
                }`}
              />
            </Link>

            {activeDropdown === "about" && (
              <div className={`${styles.dropdownMenu} ${styles.aboutDropdown}`}>
                <Link href="/about" className={styles.dropdownLink}>
                  <div className={styles.linkIconBox}>
                    <Building2 size={16} />
                  </div>
                  <div>
                    <p className={styles.linkTitle}>About Midas</p>
                    <p className={styles.linkSub}>11+ years heritage & academic mission in Raipur</p>
                  </div>
                </Link>

                <Link href="/about" className={styles.dropdownLink}>
                  <div className={styles.linkIconBox}>
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <p className={styles.linkTitle}>Our Approach</p>
                    <p className={styles.linkSub}>Live project labs & mentor-driven learning</p>
                  </div>
                </Link>

                <Link href="/about" className={styles.dropdownLink}>
                  <div className={styles.linkIconBox}>
                    <Award size={16} />
                  </div>
                  <div>
                    <p className={styles.linkTitle}>University Partners</p>
                    <p className={styles.linkSub}>5 authorized partner institutions</p>
                  </div>
                </Link>

                <Link href="/#gallery" className={styles.dropdownLink}>
                  <div className={styles.linkIconBox}>
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <p className={styles.linkTitle}>Inside Midas (Gallery)</p>
                    <p className={styles.linkSub}>Developer labs, workshops & student life</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 3. Courses ▾ (Two-Column Mega Dropdown) */}
          <div
            className={styles.dropdownWrapper}
            onMouseEnter={() => setActiveDropdown("courses")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/courses"
              className={`${styles.navItem} ${
                pathname.startsWith("/courses") ? styles.activeItem : ""
              }`}
            >
              <span>Courses</span>
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${
                  activeDropdown === "courses" ? styles.rotateChevron : ""
                }`}
              />
            </Link>

            {activeDropdown === "courses" && (
              <div className={`${styles.dropdownMenu} ${styles.coursesMegaMenu}`}>
                {/* Left Column: Overview */}
                <div className={styles.megaLeftCol}>
                  <p className={styles.megaEyebrow}>ACADEMIC DISCIPLINES</p>
                  <h4 className={styles.megaHeading}>Explore Programs</h4>
                  <p className={styles.megaDesc}>
                    Industry-aligned software engineering, AI, DevOps, and accredited university degree tracks in Raipur.
                  </p>
                  <Link href="/courses" className={styles.megaAllLink}>
                    <span>View All 13 Programs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Right Column: Verified Program List */}
                <div className={styles.megaRightCol}>
                  <Link href="/courses/full-stack-web-development" className={styles.courseItem}>
                    <span className={styles.dot} />
                    <div>
                      <p className={styles.cTitle}>Full Stack Web Development</p>
                      <p className={styles.cSub}>React, Next.js, Node.js, Databases</p>
                    </div>
                  </Link>

                  <Link href="/courses/data-science-ai" className={styles.courseItem}>
                    <span className={styles.dot} />
                    <div>
                      <p className={styles.cTitle}>Data Science & AI</p>
                      <p className={styles.cSub}>Python, ML, Neural Networks, NLP</p>
                    </div>
                  </Link>

                  <Link href="/courses/data-analytics" className={styles.courseItem}>
                    <span className={styles.dot} />
                    <div>
                      <p className={styles.cTitle}>Data Analytics / BI</p>
                      <p className={styles.cSub}>Power BI, SQL, Tableau, Statistics</p>
                    </div>
                  </Link>

                  <Link href="/courses/cyber-security-ethical-hacking" className={styles.courseItem}>
                    <span className={styles.dot} />
                    <div>
                      <p className={styles.cTitle}>Cyber Security & Hacking</p>
                      <p className={styles.cSub}>Network Defense, Kali Linux, Pentesting</p>
                    </div>
                  </Link>

                  <Link href="/courses/devops-cloud-engineering" className={styles.courseItem}>
                    <span className={styles.dot} />
                    <div>
                      <p className={styles.cTitle}>DevOps & Cloud</p>
                      <p className={styles.cSub}>Docker, Kubernetes, CI/CD, AWS</p>
                    </div>
                  </Link>

                  <Link href="/courses/mobile-app-development" className={styles.courseItem}>
                    <span className={styles.dot} />
                    <div>
                      <p className={styles.cTitle}>Mobile App Development</p>
                      <p className={styles.cSub}>Flutter, iOS Swift, Android Kotlin</p>
                    </div>
                  </Link>

                  <Link href="/courses/financial-tally-sap" className={styles.courseItem}>
                    <span className={styles.dot} />
                    <div>
                      <p className={styles.cTitle}>Tally Prime & SAP ERP</p>
                      <p className={styles.cSub}>GST Filing, Accounting, SAP FICO</p>
                    </div>
                  </Link>

                  <Link href="/courses/university-degree-programs" className={styles.courseItem}>
                    <span className={styles.dot} />
                    <div>
                      <p className={styles.cTitle}>University Degree Programs</p>
                      <p className={styles.cSub}>MBA, BBA, B.Com UGC Recognized</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 4. Career ▾ */}
          <div
            className={styles.dropdownWrapper}
            onMouseEnter={() => setActiveDropdown("career")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div
              className={`${styles.navItem} ${
                pathname === "/internship" || pathname === "/courses/communication-soft-skills"
                  ? styles.activeItem
                  : ""
              }`}
            >
              <span>Career</span>
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${
                  activeDropdown === "career" ? styles.rotateChevron : ""
                }`}
              />
            </div>

            {activeDropdown === "career" && (
              <div className={`${styles.dropdownMenu} ${styles.careerDropdown}`}>
                <Link href="/courses/communication-soft-skills" className={styles.dropdownLink}>
                  <div className={styles.linkIconBox}>
                    <Briefcase size={16} />
                  </div>
                  <div>
                    <p className={styles.linkTitle}>Career Preparation</p>
                    <p className={styles.linkSub}>Resume writing, GDs & mock HR rounds</p>
                  </div>
                </Link>

                <Link href="/internship" className={styles.dropdownLink}>
                  <div className={styles.linkIconBox}>
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <p className={styles.linkTitle}>Internship & Training</p>
                    <p className={styles.linkSub}>Live software projects & certifications</p>
                  </div>
                </Link>

                <Link href="/internship" className={styles.dropdownLink}>
                  <div className={styles.linkIconBox}>
                    <HeartHandshake size={16} />
                  </div>
                  <div>
                    <p className={styles.linkTitle}>CSR / Scholarships</p>
                    <p className={styles.linkSub}>Akida Welfare Foundation 50% subsidy</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 5. Services */}
          <Link
            href="/services"
            className={`${styles.navItem} ${pathname === "/services" ? styles.activeItem : ""}`}
          >
            Services
          </Link>

          {/* 6. Contact */}
          <Link
            href="/contact"
            className={`${styles.navItem} ${pathname === "/contact" ? styles.activeItem : ""}`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Side Actions */}
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
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Hamburger Toggle */}
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
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenuDrawer}>
          <div className={styles.mobileScroll}>
            {/* Home */}
            <Link href="/" className={styles.mobileNavLink}>
              Home
            </Link>

            {/* About Accordion */}
            <div className={styles.mobileAccordion}>
              <button
                type="button"
                className={styles.mobileAccordionBtn}
                onClick={() => toggleMobileSubmenu("about")}
              >
                <span>About</span>
                <ChevronDown
                  size={16}
                  className={`${styles.mChevron} ${
                    mobileExpanded.about ? styles.mRotate : ""
                  }`}
                />
              </button>
              {mobileExpanded.about && (
                <div className={styles.mobileSubLinks}>
                  <Link href="/about" className={styles.subLink}>About Midas</Link>
                  <Link href="/about" className={styles.subLink}>Our Approach</Link>
                  <Link href="/about" className={styles.subLink}>University Partners</Link>
                </div>
              )}
            </div>

            {/* Courses Accordion */}
            <div className={styles.mobileAccordion}>
              <button
                type="button"
                className={styles.mobileAccordionBtn}
                onClick={() => toggleMobileSubmenu("courses")}
              >
                <span>Courses</span>
                <ChevronDown
                  size={16}
                  className={`${styles.mChevron} ${
                    mobileExpanded.courses ? styles.mRotate : ""
                  }`}
                />
              </button>
              {mobileExpanded.courses && (
                <div className={styles.mobileSubLinks}>
                  <Link href="/courses/full-stack-web-development" className={styles.subLink}>
                    Full Stack Web Development
                  </Link>
                  <Link href="/courses/data-science-ai" className={styles.subLink}>
                    Data Science & AI
                  </Link>
                  <Link href="/courses/data-analytics" className={styles.subLink}>
                    Data Analytics / BI
                  </Link>
                  <Link href="/courses/cyber-security-ethical-hacking" className={styles.subLink}>
                    Cyber Security & Hacking
                  </Link>
                  <Link href="/courses/devops-cloud-engineering" className={styles.subLink}>
                    DevOps & Cloud
                  </Link>
                  <Link href="/courses/mobile-app-development" className={styles.subLink}>
                    Mobile App Development
                  </Link>
                  <Link href="/courses/financial-tally-sap" className={styles.subLink}>
                    Tally Prime & SAP ERP
                  </Link>
                  <Link href="/courses/university-degree-programs" className={styles.subLink}>
                    University Degree Programs
                  </Link>
                  <Link href="/courses" className={styles.subLinkHighlight}>
                    View Full Catalog →
                  </Link>
                </div>
              )}
            </div>

            {/* Career Accordion */}
            <div className={styles.mobileAccordion}>
              <button
                type="button"
                className={styles.mobileAccordionBtn}
                onClick={() => toggleMobileSubmenu("career")}
              >
                <span>Career</span>
                <ChevronDown
                  size={16}
                  className={`${styles.mChevron} ${
                    mobileExpanded.career ? styles.mRotate : ""
                  }`}
                />
              </button>
              {mobileExpanded.career && (
                <div className={styles.mobileSubLinks}>
                  <Link href="/courses/communication-soft-skills" className={styles.subLink}>
                    Career Preparation (HR Mock Rounds)
                  </Link>
                  <Link href="/internship" className={styles.subLink}>
                    Summer & Industrial Internship
                  </Link>
                  <Link href="/internship" className={styles.subLink}>
                    Akida Welfare CSR Scholarships
                  </Link>
                </div>
              )}
            </div>

            {/* Services */}
            <Link href="/services" className={styles.mobileNavLink}>
              Services
            </Link>

            {/* Contact */}
            <Link href="/contact" className={styles.mobileNavLink}>
              Contact
            </Link>

            {/* Actions */}
            <div className={styles.mobileActionBox}>
              <Link href="/contact" className={styles.mobilePrimaryBtn}>
                Enquire Now
              </Link>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSecondaryBtn}
              >
                <MessageCircle size={16} />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
