import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { Course } from "@/data/coursesData";
import styles from "./CourseCard.module.css";

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.categoryBadge}>{course.category}</span>
        <span className={styles.modulesCount}>
          <BookOpen size={13} />
          <span>{course.modules.length} Modules</span>
        </span>
      </div>

      <h3 className={styles.title}>{course.name}</h3>
      <p className={styles.tagline}>{course.tagline}</p>

      {/* Tech Tags */}
      <div className={styles.techWrapper}>
        {course.technologies.slice(0, 5).map((t) => (
          <span key={t} className={styles.techBadge}>
            {t}
          </span>
        ))}
        {course.technologies.length > 5 && (
          <span className={styles.techMore}>+{course.technologies.length - 5}</span>
        )}
      </div>

      {/* Card Footer */}
      <div className={styles.cardFooter}>
        <Link href={`/courses/${course.slug}`} className={styles.ctaLink}>
          <span>View Complete Syllabus</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};
