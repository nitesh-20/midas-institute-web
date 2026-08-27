import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { InstituteIntro } from "@/components/home/InstituteIntro";
import { EditorialCourseExplorer } from "@/components/home/EditorialCourseExplorer";
import { FeaturedProgram } from "@/components/home/FeaturedProgram";
import { CareerRoadmap } from "@/components/home/CareerRoadmap";
import { AcademicPartners } from "@/components/home/AcademicPartners";
import { GallerySection } from "@/components/home/GallerySection";
import { EditorialServices } from "@/components/home/EditorialServices";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Editorial Hero (Left typography + Right Student Photo Composition) */}
      <HeroSection />

      {/* 2. Clean Typographic Trust Strip (11+ Yrs, Authorised Partner, Live Labs, Raipur) */}
      <TrustBadges />

      {/* 3. Institute Introduction Profile (Editorial Photo Split) */}
      <InstituteIntro />

      {/* 4. Editorial Course Explorer (Numbered Category Selector, No Card Wall) */}
      <EditorialCourseExplorer />

      {/* 5. Visually Dominant Featured Program Composition (Full Stack Web Development) */}
      <FeaturedProgram />

      {/* 6. Career Preparation & HR Round Sequential Track */}
      <CareerRoadmap />

      {/* 7. Academic Partnerships & University Accreditations */}
      <AcademicPartners />

      {/* 8. Inside Midas — Editorial Photo Gallery & Interactive Lightbox */}
      <GallerySection />

      {/* 9. Institutional Services (Large Numbered Interactive Rows) */}
      <EditorialServices />

      {/* 10. High-Contrast Admissions & Counseling Conversion Banner */}
      <CtaBanner />
    </>
  );
}
