"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { coursesData } from "@/data/coursesData";
import { Button } from "@/components/common/Button";
import styles from "./ContactForm.module.css";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "Full Stack Web Development",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Midas Institute Admissions Team,\nMy name is ${formData.name || "[Name]"}.\nI am interested in: ${formData.program}.\nPhone: ${formData.phone || "[Phone]"}\nQuery: ${formData.message || "I would like to inquire about syllabus, batch timings, and fee details."}`
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`, "_blank");
  };

  if (submitted) {
    return (
      <div className={styles.successBox}>
        <CheckCircle2 size={48} className={styles.successIcon} />
        <h3 className={styles.successTitle}>Inquiry Received Successfully!</h3>
        <p className={styles.successText}>
          Thank you, <strong>{formData.name}</strong>. Our admissions counselor in Raipur will reach out to you shortly at <strong>{formData.phone}</strong> with the complete syllabus and fee structure for <strong>{formData.program}</strong>.
        </p>
        <div className={styles.successActions}>
          <Button
            onClick={handleWhatsAppDirect}
            variant="primary"
            size="md"
            leftIcon={<MessageCircle size={16} />}
          >
            Connect Immediately on WhatsApp
          </Button>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className={styles.newInquiryBtn}
          >
            Submit Another Query
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.formTitle}>Admissions & Course Inquiry Form</h3>
      <p className={styles.formSubtitle}>
        Fill out your details below. Our faculty counselors will arrange a free demo session and syllabus review.
      </p>

      {/* Name */}
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Full Name <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder="e.g. Rahul Sharma"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={styles.input}
        />
      </div>

      {/* Phone & Email Grid */}
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number <span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="rahul@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={styles.input}
          />
        </div>
      </div>

      {/* Interested Program */}
      <div className={styles.formGroup}>
        <label htmlFor="program" className={styles.label}>
          Program / Track of Interest <span className={styles.required}>*</span>
        </label>
        <select
          id="program"
          value={formData.program}
          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
          className={styles.select}
        >
          {coursesData.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name} ({c.category})
            </option>
          ))}
          <option value="Summer / Industrial Internship">Summer / Industrial Internship</option>
          <option value="Akida Welfare CSR Scholarship">Akida Welfare Foundation CSR Scholarship</option>
          <option value="Enterprise / Corporate Training">Enterprise / Corporate Training</option>
        </select>
      </div>

      {/* Message */}
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Your Message or Specific Questions
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="e.g. I want to inquire about upcoming batch start dates, practical lab timings, and fees..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={styles.textarea}
        />
      </div>

      {/* Submit Buttons */}
      <div className={styles.submitRow}>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          rightIcon={<Send size={18} />}
        >
          Submit Admissions Inquiry
        </Button>

        <button
          type="button"
          onClick={handleWhatsAppDirect}
          className={styles.whatsappDirectBtn}
        >
          <MessageCircle size={18} />
          <span>Or Inquire Instantly via WhatsApp</span>
        </button>
      </div>
    </form>
  );
};
