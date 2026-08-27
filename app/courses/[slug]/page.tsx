import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  Phone, 
  MessageCircle,
  Building2,
  Award
} from "lucide-react";
import { coursesData, Course } from "@/data/coursesData";
import { siteConfig } from "@/data/siteConfig";
import { CurriculumAccordion } from "@/components/courses/CurriculumAccordion";
import { CourseCard } from "@/components/courses/CourseCard";
import { SchemaJsonLd } from "@/components/common/SchemaJsonLd";
import { Button } from "@/components/common/Button";
import { CtaBanner } from "@/components/home/CtaBanner";
import styles from "./CourseDetail.module.css";

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = coursesData.find((c) => c.slug === params.slug);
  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.name} Course in Raipur | Midas Institute`,
    description: course.description,
    keywords: [
      `${course.name} training in Raipur`,
      `${course.shortName} Raipur`,
      ...course.technologies.slice(0, 5)
    ],
    alternates: {
      canonical: `https://www.midastechnologies.in/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.name} | MIDAS Institute Raipur`,
      description: course.description,
      url: `https://www.midastechnologies.in/courses/${course.slug}`,
    },
  };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const course = coursesData.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = coursesData
    .filter((c) => c.slug !== course.slug && (c.category === course.category || c.featured))
    .slice(0, 2);

  return (
    <>
      <SchemaJsonLd
        type="Course"
        courseData={{
          name: course.name,
          description: course.description,
          slug: course.slug,
          technologies: course.technologies,
        }}
      />

      {/* Academic Course Hero */}
      <div className={styles.heroWrapper}>
        <div className="container">
          <Link href="/courses" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to All Programs</span>
          </Link>

          <div className={styles.heroContent}>
            <div className={styles.categoryBadge}>{course.category}</div>
            <h1 className={styles.courseTitle}>{course.name}</h1>
            <p className={styles.courseTagline}>{course.tagline}</p>

            <div className={styles.heroMetaStrip}>
              <div className={styles.metaItem}>
                <BookOpen size={16} className={styles.metaIcon} />
                <span>{course.modules.length} Core Curriculum Modules</span>
              </div>
              <div className={styles.metaItem}>
                <ShieldCheck size={16} className={styles.metaIcon} />
                <span>Live Project & Lab Mentorship</span>
              </div>
              <div className={styles.metaItem}>
                <Award size={16} className={styles.metaIcon} />
                <span>Certificate of Completion</span>
              </div>
            </div>

            <div className={styles.heroCtas}>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Enroll / Request Counseling
              </Button>

              <Button
                href={siteConfig.contact.whatsappUrl}
                variant="outline"
                size="lg"
                external
                leftIcon={<MessageCircle size={18} />}
              >
                Inquire on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="section">
        <div className="container">
          <div className={styles.layoutGrid}>
            {/* Left Main Column */}
            <div className={styles.mainCol}>
              {/* Overview & Learning Pillars */}
              <div className={styles.block}>
                <h2 className={styles.blockTitle}>Program Overview</h2>
                <p className={styles.blockText}>{course.description}</p>

                <div className={styles.pillarsList}>
                  <p className={styles.pillarsHeading}>Key Learning Objectives:</p>
                  {course.learningPillars.map((pillar, idx) => (
                    <div key={idx} className={styles.pillarRow}>
                      <CheckCircle2 size={18} className={styles.pillarCheck} />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum Modules Timeline */}
              <div className={styles.block}>
                <div className={styles.curriculumTop}>
                  <h2 className={styles.blockTitle}>Detailed Curriculum & Syllabus</h2>
                  <span className={styles.modulesCountTag}>{course.modules.length} Modules</span>
                </div>
                <p className={styles.curriculumSub}>
                  Click on each module below to view specific theoretical concepts, practical lab exercises, and frameworks.
                </p>

                <CurriculumAccordion modules={course.modules} />
              </div>

              {/* Technologies Covered */}
              <div className={styles.block}>
                <h2 className={styles.blockTitle}>Technologies & Development Tools</h2>
                <div className={styles.techGrid}>
                  {course.technologies.map((t) => (
                    <div key={t} className={styles.techItem}>
                      <span className={styles.techDot} />
                      <span className={styles.techName}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className={styles.sidebar}>
              {/* Target Career Outcomes Card */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardHeading}>
                  <Briefcase size={18} className={styles.sideIcon} />
                  <span>Target Career Roles</span>
                </h3>
                <ul className={styles.roleList}>
                  {course.careerOutcomes.map((role, idx) => (
                    <li key={idx} className={styles.roleItem}>
                      <span className={styles.roleCheck}>✔</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility & Batch Scheduling */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardHeading}>
                  <ShieldCheck size={18} className={styles.sideIcon} />
                  <span>Eligibility & Prerequisites</span>
                </h3>
                <p className={styles.sideText}>{course.prerequisites}</p>
                <div className={styles.sideDivider} />
                <p className={styles.durationNote}>
                  <strong>Batch Modes:</strong> Regular weekday and weekend professional batches available at our Raipur campus.
                </p>
              </div>

              {/* Faculty Counseling Card */}
              <div className={`${styles.sideCard} ${styles.counselingCard}`}>
                <h3 className={styles.counselingTitle}>Talk to Admissions</h3>
                <p className={styles.counselingSub}>
                  Speak directly with an academic mentor at Midas Raipur to review syllabus fit and batch timings.
                </p>
                <a href={`tel:${siteConfig.contact.primaryPhone}`} className={styles.phoneLink}>
                  <Phone size={16} />
                  <span>{siteConfig.contact.primaryPhoneDisplay}</span>
                </a>
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  fullWidth
                >
                  Book Campus Visit
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      {relatedCourses.length > 0 && (
        <section className={`section ${styles.relatedSection}`}>
          <div className="container">
            <h2 className={styles.relatedTitle}>Related Academic Programs</h2>
            <div className={styles.relatedGrid}>
              {relatedCourses.map((rc) => (
                <CourseCard key={rc.slug} course={rc} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
