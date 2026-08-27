import React from "react";
import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CourseFilter } from "@/components/courses/CourseFilter";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Programs & Courses | Full Stack, Data Science, AI, DevOps & Degrees",
  description: "Browse verified engineering, data science, mobile app, cloud, accounting & university degree programs at Midas Institute Raipur.",
  alternates: {
    canonical: "https://www.midastechnologies.in/courses",
  },
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        badge="Curriculum Directory"
        title="Explore Career-Focused"
        highlightWord="Technology Programs"
        description="Comprehensive, verified technical curricula spanning Full Stack Web Development, Machine Learning, DevOps, Mobile Engineering, Financial ERP, and University Degrees."
        breadcrumbs={[{ name: "Courses" }]}
      />

      <section className="section">
        <div className="container">
          <CourseFilter />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
