import React from "react";
import { MapPin, Navigation, Building2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./CampusMap.module.css";

export const CampusMap: React.FC = () => {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapHeader}>
        <div className={styles.headerLeft}>
          <Building2 size={20} className={styles.pinIcon} />
          <div>
            <h3 className={styles.mapTitle}>Raipur Campus Location</h3>
            <p className={styles.mapSub}>{siteConfig.address.full}</p>
          </div>
        </div>
        <a
          href="https://maps.google.com/?q=SDS+Chamber+Agrasen+Chowk+Raipur"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.directionLink}
        >
          <Navigation size={15} />
          <span>Get Directions</span>
        </a>
      </div>

      <div className={styles.iframeWrapper}>
        <iframe
          src={siteConfig.address.googleMapsEmbedUrl}
          width="100%"
          height="380"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Midas Institute Raipur Location Map"
        />
      </div>

      <div className={styles.mapFooter}>
        <div className={styles.transitNote}>
          <strong>Landmark:</strong> Above HDFC Bank, SDS Chamber, Near Agrasen Chowk, Samta Colony / Raipur Junction accessible.
        </div>
      </div>
    </div>
  );
};
