import React from "react";
import styles from "./TrustBadges.module.css";

const trustPoints = [
  {
    metric: "11+ Years",
    label: "Institutional Experience",
    detail: "Established track record in Raipur"
  },
  {
    metric: "Authorised Partner",
    label: "University Affiliations",
    detail: "Degree & certification pathways"
  },
  {
    metric: "Live Project Labs",
    label: "Practical Training",
    detail: "Industry tools & code sprints"
  },
  {
    metric: "Raipur Campus",
    label: "Local Institute Presence",
    detail: "SDS Chamber, Agrasen Chowk"
  }
];

export const TrustBadges: React.FC = () => {
  return (
    <div className={styles.stripWrapper}>
      <div className={`container ${styles.stripContainer}`}>
        {trustPoints.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className={styles.item}>
              <p className={styles.metric}>{item.metric}</p>
              <p className={styles.label}>{item.label}</p>
              <p className={styles.detail}>{item.detail}</p>
            </div>
            {idx < trustPoints.length - 1 && <div className={styles.separator} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
