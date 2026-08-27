"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { CourseModule } from "@/data/coursesData";
import styles from "./CurriculumAccordion.module.css";

interface CurriculumAccordionProps {
  modules: CourseModule[];
}

export const CurriculumAccordion: React.FC<CurriculumAccordionProps> = ({ modules }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter((i) => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  return (
    <div className={styles.accordionList}>
      {modules.map((mod, idx) => {
        const isOpen = openIndexes.includes(idx);
        return (
          <div key={idx} className={`${styles.accordionItem} ${isOpen ? styles.openItem : ""}`}>
            <button
              type="button"
              className={styles.accordionHeader}
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
            >
              <div className={styles.headerLeft}>
                <span className={styles.moduleNum}>0{idx + 1}</span>
                <span className={styles.moduleTitle}>{mod.title}</span>
              </div>
              <ChevronDown
                size={18}
                className={`${styles.chevron} ${isOpen ? styles.rotateChevron : ""}`}
              />
            </button>

            {isOpen && (
              <div className={styles.accordionBody}>
                <ul className={styles.itemList}>
                  {mod.items.map((item, iIdx) => (
                    <li key={iIdx} className={styles.itemRow}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
