"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, Sparkles } from "lucide-react";
import { coursesData, Course } from "@/data/coursesData";
import { CourseCard } from "./CourseCard";
import styles from "./CourseFilter.module.css";

const categories = [
  "All Disciplines",
  "Web & Software",
  "Data & AI",
  "Mobile Engineering",
  "Cloud & Security",
  "Finance & ERP",
  "Career & Soft Skills",
  "University Degrees"
];

export const CourseFilter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Disciplines");

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesCategory =
        selectedCategory === "All Disciplines" || course.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        course.name.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.technologies.some((t) => t.toLowerCase().includes(q)) ||
        course.highlightPills.some((h) => h.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className={styles.filterSection}>
      {/* Search & Category Filter Toolbar */}
      <div className={styles.toolbar}>
        {/* Search Input */}
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by technology (e.g. React, Python, Flutter, Docker, Tally)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className={styles.clearBtn}
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className={styles.categoryPills}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.catBtn} ${
                selectedCategory === cat ? styles.activeCatBtn : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className={styles.resultsHeader}>
        <p className={styles.countText}>
          Showing <strong>{filteredCourses.length}</strong> academic program
          {filteredCourses.length !== 1 ? "s" : ""}
          {selectedCategory !== "All Disciplines" && (
            <span> in <strong>{selectedCategory}</strong></span>
          )}
        </p>
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className={styles.grid}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyBox}>
          <Filter size={36} className={styles.emptyIcon} />
          <h3 className={styles.emptyTitle}>No courses found matching &ldquo;{searchQuery}&rdquo;</h3>
          <p className={styles.emptySub}>
            Try clearing your search keyword or selecting another academic category.
          </p>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Disciplines");
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
