export interface PartnerUniversity {
  name: string;
  code: string;
  badgeText: string;
  description: string;
  location: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  shortName: string;
  websiteUrl: string;
  establishedExperience: string;
  tagline: string;
  subTagline: string;
  description: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pinCode: string;
    landmark: string;
    full: string;
    googleMapsEmbedUrl: string;
  };
  contact: {
    primaryPhone: string;
    primaryPhoneDisplay: string;
    admissionsPhone: string;
    admissionsPhoneDisplay: string;
    supportPhone: string;
    supportPhoneDisplay: string;
    email: string;
    admissionsEmail: string;
    whatsappNumber: string;
    whatsappUrl: string;
  };
  social: {
    facebook: string;
    justdial: string;
    instagramPlaceholder: string;
    linkedinPlaceholder: string;
  };
  partners: PartnerUniversity[];
  scholarshipPartner: {
    name: string;
    sponsorGroup: string;
    coverage: string;
    description: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "MIDAS Institute",
  fullName: "MIDAS INSTITUTE OF SOFTWARE TECHNOLOGY",
  shortName: "MIST",
  websiteUrl: "https://www.midastechnologies.in",
  establishedExperience: "11+ Years of Academic & Industry Excellence",
  tagline: "Launch Your Tech Career Before You Graduate",
  subTagline: "Premier Software Engineering, Data Science & Professional IT Training in Raipur",
  description: "Raipur's premier technology and software education institute delivering practical, job-ready training across Full Stack Development, Data Science, AI, DevOps, Cyber Security, Mobile Engineering, and University Degree Programs.",
  address: {
    line1: "2nd Floor, SDS Chamber, Above HDFC Bank",
    line2: "Near Agrasen Chowk, Bhaisthan",
    city: "Raipur",
    state: "Chhattisgarh",
    pinCode: "492001",
    landmark: "Above HDFC Bank, Agrasen Chowk",
    full: "2nd Floor, SDS Chamber, Above HDFC Bank, Near Agrasen Chowk, Raipur, Chhattisgarh - 492001",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7277649539343!2d81.6315!3d21.2505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddbb87524945%3A0xb3a322e70be3ef23!2sAgrasen%20Chowk%2C%20Raipur%2C%20Chhattisgarh%20492001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  contact: {
    primaryPhone: "+916266846474",
    primaryPhoneDisplay: "+91 62668 46474",
    admissionsPhone: "+918103168797",
    admissionsPhoneDisplay: "+91 81031 68797",
    supportPhone: "+917000882359",
    supportPhoneDisplay: "+91 70008 82359",
    email: "mistraipur170@gmail.com",
    admissionsEmail: "admissions@midastechnologies.in",
    whatsappNumber: "916266846474",
    whatsappUrl: "https://api.whatsapp.com/send?phone=916266846474&text=Hello%20Midas%20Institute%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20admissions.",
  },
  social: {
    facebook: "https://www.facebook.com/mistacademy/",
    justdial: "http://www.justdial.com/dt-99FFK5UHFQL",
    instagramPlaceholder: "https://instagram.com/midas_institute_raipur",
    linkedinPlaceholder: "https://linkedin.com/company/midas-institute-of-software-technology",
  },
  partners: [
    {
      name: "Kalinga University",
      code: "KU",
      badgeText: "Authorised Training Partner",
      description: "Recognized higher education programs, technical diplomas and degree courses.",
      location: "Raipur, Chhattisgarh"
    },
    {
      name: "ISBM University",
      code: "ISBM",
      badgeText: "Authorised Training Partner",
      description: "Professional degree and vocational certifications in business and computer science.",
      location: "Chhattisgarh"
    },
    {
      name: "MATS University",
      code: "MATS",
      badgeText: "Authorised Training Partner",
      description: "Undergraduate and postgraduate degrees in technology and management.",
      location: "Raipur, Chhattisgarh"
    },
    {
      name: "Anjaneya University",
      code: "AU",
      badgeText: "Authorised Training Partner",
      description: "Industry-aligned diploma and degree programs with accredited curriculum.",
      location: "Raipur, Chhattisgarh"
    },
    {
      name: "Dr. C.V. Raman University",
      code: "CVRU",
      badgeText: "Authorised Training Partner",
      description: "Premier state university offering recognized tech and management certifications.",
      location: "Chhattisgarh"
    }
  ],
  scholarshipPartner: {
    name: "Akida Welfare Foundation",
    sponsorGroup: "SSV Group",
    coverage: "Up to 50% Tuition Fee Subsidy",
    description: "Empowering deserving students facing financial hardships through degree scholarships and technical skill training."
  }
};
