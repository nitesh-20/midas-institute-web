"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Eye,
  MapPin
} from "lucide-react";
import { galleryData, galleryCategories, GalleryItem } from "@/data/galleryData";
import styles from "./GallerySection.module.css";

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Filter photos
  const filteredPhotos = activeCategory === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const showNext = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => 
        prev === null ? 0 : (prev + 1) % filteredPhotos.length
      );
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const showPrev = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => 
        prev === null ? 0 : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, showNext, showPrev]);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPhotoIndex]);

  const featuredPhoto = filteredPhotos.find((p) => p.featured) || filteredPhotos[0];
  const gridPhotos = filteredPhotos.filter((p) => p.id !== featuredPhoto?.id);

  return (
    <section className={styles.section} id="gallery">
      <div className="container">
        {/* 1. Editorial Header */}
        <div className={styles.headerArea}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>LIFE AT MIDAS</span>
          </div>

          <h2 className={styles.title}>
            Inside <span className={styles.redText}>Midas</span>
          </h2>

          <p className={styles.subtitle}>
            Explore our practical learning environment, full-time developer labs, interactive classroom sessions, industry workshops, and student milestone moments in Raipur.
          </p>
        </div>

        {/* 2. Category Filter Pills */}
        <div className={styles.filterBar} role="tablist" aria-label="Gallery Categories">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterBtn} ${isActive ? styles.activeFilter : ""}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3. Editorial Asymmetric Gallery Composition */}
        <div className={styles.galleryWrapper}>
          {/* Large Featured Visual */}
          {featuredPhoto && (
            <div 
              className={styles.featuredBox}
              onClick={() => openLightbox(filteredPhotos.findIndex(p => p.id === featuredPhoto.id))}
            >
              <img
                src={featuredPhoto.src}
                alt={featuredPhoto.alt}
                className={styles.featuredImg}
                loading="eager"
              />
              <div className={styles.featuredOverlay}>
                <div className={styles.featuredTop}>
                  <span className={styles.categoryBadge}>{featuredPhoto.categoryLabel}</span>
                  <span className={styles.zoomPill}>
                    <Maximize2 size={14} />
                    <span>View Fullscreen</span>
                  </span>
                </div>
                <div className={styles.featuredBottom}>
                  <h3 className={styles.featuredTitle}>{featuredPhoto.title}</h3>
                  <p className={styles.featuredCaption}>{featuredPhoto.caption}</p>
                </div>
              </div>
            </div>
          )}

          {/* Supporting Asymmetric Masonry Grid */}
          <div className={styles.asymmetricGrid}>
            {gridPhotos.map((photo) => {
              const photoIndex = filteredPhotos.findIndex((p) => p.id === photo.id);
              const aspectClass = photo.aspectRatio === "3-4" 
                ? styles.portraitCard 
                : photo.aspectRatio === "16-9" 
                ? styles.wideCard 
                : styles.standardCard;

              return (
                <div
                  key={photo.id}
                  className={`${styles.photoCard} ${aspectClass}`}
                  onClick={() => openLightbox(photoIndex)}
                >
                  <div className={styles.imgWrap}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className={styles.cardImg}
                      loading="lazy"
                    />
                    <div className={styles.cardOverlay}>
                      <div className={styles.overlayTop}>
                        <span className={styles.cardCatBadge}>{photo.categoryLabel}</span>
                        <div className={styles.cardExpandIcon}>
                          <Maximize2 size={16} />
                        </div>
                      </div>
                      <div className={styles.overlayBottom}>
                        <h4 className={styles.cardTitle}>{photo.title}</h4>
                        <p className={styles.cardCap}>{photo.caption}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Experience Midas Closing CTA Strip */}
        <div className={styles.closingCtaStrip}>
          <div className={styles.ctaInfo}>
            <span className={styles.ctaTag}>CAMPUS TOUR & LAB DEMO</span>
            <h4 className={styles.ctaHeading}>Experience Midas in Person</h4>
            <p className={styles.ctaDesc}>
              Visit our Raipur campus at SDS Chamber, Agrasen Chowk. Tour our practical coding labs, meet faculty mentors, and attend a free demo session.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.ctaPrimaryBtn}>
              <span>Schedule a Campus Tour</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* 5. Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div 
          className={styles.lightboxBackdrop}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
        >
          <div 
            className={styles.lightboxContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className={styles.lightboxHeader}>
              <div className={styles.lightboxCounter}>
                <span className={styles.counterCurrent}>{selectedPhotoIndex + 1}</span>
                <span className={styles.counterDivider}>/</span>
                <span className={styles.counterTotal}>{filteredPhotos.length}</span>
                <span className={styles.lightboxCategory}>
                  • {filteredPhotos[selectedPhotoIndex].categoryLabel}
                </span>
              </div>

              <button
                type="button"
                className={styles.lightboxCloseBtn}
                onClick={closeLightbox}
                aria-label="Close Lightbox"
              >
                <X size={22} />
              </button>
            </div>

            {/* Media Area */}
            <div className={styles.lightboxMediaWrap}>
              <img
                src={filteredPhotos[selectedPhotoIndex].src}
                alt={filteredPhotos[selectedPhotoIndex].alt}
                className={styles.lightboxImg}
              />

              {/* Prev / Next Arrows */}
              <button
                type="button"
                className={`${styles.navArrow} ${styles.prevArrow}`}
                onClick={showPrev}
                aria-label="Previous Photo"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                type="button"
                className={`${styles.navArrow} ${styles.nextArrow}`}
                onClick={showNext}
                aria-label="Next Photo"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Caption Footer */}
            <div className={styles.lightboxFooter}>
              <h3 className={styles.lightboxTitle}>
                {filteredPhotos[selectedPhotoIndex].title}
              </h3>
              <p className={styles.lightboxCaption}>
                {filteredPhotos[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
