import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./PageHeader.module.css";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlightWord?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlightWord,
  description,
  breadcrumbs
}) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={`container ${styles.container}`}>
        {/* Breadcrumb Navigation */}
        {breadcrumbs && (
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            {breadcrumbs.map((b, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight size={14} className={styles.crumbDivider} />
                {b.href ? (
                  <Link href={b.href} className={styles.breadcrumbLink}>
                    {b.name}
                  </Link>
                ) : (
                  <span className={styles.crumbActive}>{b.name}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className={styles.title}>
          {title}{" "}
          {highlightWord && <span className={styles.highlightWord}>{highlightWord}</span>}
        </h1>

        {/* Description */}
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};
