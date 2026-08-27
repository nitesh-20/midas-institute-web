# MIDAS INSTITUTE OF SOFTWARE TECHNOLOGY (MIST)
### Premier Software Engineering, Data Science & Higher Education Academy — Raipur (C.G.)

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live_Production-black?style=flat&logo=vercel)](https://midas-institute-web.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE)

A production-grade, high-performance web platform built for **MIDAS INSTITUTE OF SOFTWARE TECHNOLOGY (Raipur, Chhattisgarh)**. Designed with a custom **Red + White + Dark Charcoal** academic design system, editorial layouts, interactive syllabus explorers, and zero bloated CSS dependencies.

🌐 **Live URL:** [https://midas-institute-web.vercel.app](https://midas-institute-web.vercel.app)

---

## 🏛️ About Midas Institute
- **Established Legacy:** 11+ Years of Academic and Technical Training Excellence in Raipur.
- **Campus Address:** 2nd Floor, SDS Chamber, Above HDFC Bank, Near Agrasen Chowk, Raipur (C.G.) - 492001.
- **Authorised University Partners:** Official training partner for **Kalinga University, ISBM University, MATS University, Anjaneya University, and Dr. C.V. Raman University**.
- **Community Initiative:** Up to 50% tuition scholarship support in partnership with **Akida Welfare Foundation** and sponsored by **SSV Group**.

---

## 🚀 Key Features

* **⚡ Ultra-Fast Static Site Generation (SSG):** All 21 academic and institutional routes statically generated at build time for instant page loads.
* **🎨 Custom Design Tokens:** Bespoke Red + White institutional palette (`#d90429` / `#ffffff` / `#0f172a`), fluid typography (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`), and glassmorphism.
* **📖 Dynamic Academic Syllabus Explorer:** Numbered discipline switcher with interactive module accordions and verified toolchains.
* **💼 Comprehensive HR Preparation Track:** Sequential roadmap for ATS resume reviews, presentation skills, GD protocols, and mock interviews.
* **📱 Responsive & Accessible:** Fully optimized across mobile, tablet, and widescreen viewports with `prefers-reduced-motion` accessibility support.
* **🔍 White-Hat SEO & Structured Data:** Semantic HTML5, Schema.org `EducationalOrganization`, `Course`, and `BreadcrumbList` JSON-LD schemas, dynamic `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 14.2 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript 5.4](https://www.typescriptlang.org/) |
| **Styling** | Vanilla CSS Modules & CSS Custom Properties |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) |

---

## 📂 Project Structure

```
midas-institute-web/
├── app/
│   ├── layout.tsx              # Root Layout & Global Metadata
│   ├── globals.css             # Red + White Design Tokens & Resets
│   ├── page.tsx                # Editorial Homepage
│   ├── about/page.tsx          # Institutional Profile & History
│   ├── courses/page.tsx        # Academic Program Directory
│   ├── courses/[slug]/page.tsx # Dynamic Static Course Detail & Syllabus
│   ├── services/page.tsx       # Institutional & Enterprise Services
│   ├── internship/page.tsx     # Live Project Tracks & CSR Scholarships
│   ├── contact/page.tsx        # Admissions Desk, Map & Form
│   ├── privacy/page.tsx        # Data Protection Policy
│   ├── sitemap.ts              # Dynamic XML Sitemap
│   └── robots.ts               # Crawler Directives
├── components/
│   ├── common/                 # Button, SectionHeading, SchemaJsonLd
│   ├── layout/                 # Navbar, Footer, PageHeader
│   ├── home/                   # HeroSection, TrustBadges, InstituteIntro, etc.
│   ├── courses/                # CourseCard, CourseFilter, CurriculumAccordion
│   └── contact/                # ContactForm, CampusMap
├── data/
│   ├── siteConfig.ts           # Verified Contacts, Campus Address & Partners
│   ├── coursesData.ts          # Curricula for all 13 Verified Programs
│   └── servicesData.ts         # Training, Development & CSR Offerings
├── public/                     # Static Assets & Logos
└── package.json                # Scripts & Dependencies
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js 18.17+ or higher
- npm / yarn / pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/nitesh-20/midas-institute-web.git
cd midas-institute-web

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the website.

### Production Build
```bash
# Build static pages
npm run build

# Start production server
npm run start
```

---

## 📜 Verification & Compliance
- All course tracks, university accreditations, contact numbers, and campus details are verified against the official Midas Institute brochure and legacy records without fabricated claims.

---

## 📄 License
Released under the [MIT License](LICENSE). © MIDAS INSTITUTE OF SOFTWARE TECHNOLOGY, Raipur.
