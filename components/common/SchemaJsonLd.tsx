import React from "react";
import { siteConfig } from "@/data/siteConfig";

interface SchemaJsonLdProps {
  type?: "EducationalOrganization" | "Course" | "BreadcrumbList";
  courseData?: {
    name: string;
    description: string;
    slug: string;
    technologies: string[];
  };
  breadcrumbs?: {
    name: string;
    item: string;
  }[];
}

export const SchemaJsonLd: React.FC<SchemaJsonLdProps> = ({
  type = "EducationalOrganization",
  courseData,
  breadcrumbs
}) => {
  let schemaData: Record<string, any> = {};

  if (type === "EducationalOrganization") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: siteConfig.fullName,
      alternateName: [siteConfig.shortName, "MIDAS Institute", "MIST Computer Education"],
      url: siteConfig.websiteUrl,
      logo: "https://image1.jdomni.in/storeLogo/04102025/B8/F7/C2/990F2C72FD031160DF3133F3DC_1759571233913.png",
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.line1 + ", " + siteConfig.address.line2,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.pinCode,
        addressCountry: "IN"
      },
      telephone: siteConfig.contact.primaryPhone,
      email: siteConfig.contact.email,
      sameAs: [
        siteConfig.social.facebook,
        siteConfig.social.justdial
      ],
      hasCredential: siteConfig.partners.map((p) => ({
        "@type": "EducationalOccupationalCredential",
        name: `Authorised Training Partner with ${p.name}`
      }))
    };
  } else if (type === "Course" && courseData) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: courseData.name,
      description: courseData.description,
      provider: {
        "@type": "EducationalOrganization",
        name: siteConfig.fullName,
        sameAs: siteConfig.websiteUrl
      },
      educationalCredentialAwarded: "Certification of Completion",
      occupationalCategory: courseData.technologies.join(", ")
    };
  } else if (type === "BreadcrumbList" && breadcrumbs) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: b.name,
        item: b.item
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
