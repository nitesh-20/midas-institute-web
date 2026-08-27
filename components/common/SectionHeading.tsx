import React from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  align = "left",
  theme = "light",
  className = ""
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[align]} ${styles[theme]} ${className}`}>
      {eyebrow && (
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowBar} />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className={styles.title}>
        {title}{" "}
        {highlightWord && <span className={styles.highlightWord}>{highlightWord}</span>}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
