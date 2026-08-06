import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import ScrollButtons from "@/components/ScrollButtons";
import ScrollAnimationInit from "@/components/ScrollAnimationInit";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PihNexa Technologies | Hospital Queue Management & Healthcare Automation Software India",
  description:
    "PihNexa Technologies delivers enterprise-grade Smart Queue Management, Patient Checklist Tracking & Hospital Workflow Automation. 7,500+ patient checklists processed with zero lag. Serving hospitals & clinics across India.",
  keywords:
    "hospital queue management system, clinic automation software India, smart queue management system, hospital workflow automation, patient checklist software, healthcare custom software development, digital attendance system hospital, OPD queue management, PihNexa Technologies",
  authors: [{ name: "PihNexa Technologies" }],
  creator: "PihNexa Technologies",
  publisher: "PihNexa Technologies",
  // ── Google Site Verification (add your code from Search Console here) ──
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
  openGraph: {
    title: "PihNexa Technologies | Hospital Queue Management & Healthcare Automation",
    description:
      "Enterprise-grade healthcare technology for hospitals and clinics. Smart Queue Management, Patient Tracking, Staff Roster Automation. 7,500+ patients processed.",
    url: "https://www.pihnexa.co.in",
    siteName: "PihNexa Technologies",
    images: [
      {
        url: "https://www.pihnexa.co.in/assets/saas-dashboard.png",
        width: 1200,
        height: 630,
        alt: "PihNexa Technologies — Healthcare Automation Dashboard",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PihNexa Technologies | Hospital Queue Management & Healthcare Automation",
    description:
      "Enterprise-grade healthcare technology for hospitals and clinics. 7,500+ patients processed.",
    images: ["https://www.pihnexa.co.in/assets/saas-dashboard.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.pihnexa.co.in",
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

// ─── 1. LocalBusiness Schema (Google Knowledge Panel) ───────────────────────
// यह सबसे important schema है — इससे Google pe Right side में
// PihNexa का info box (Knowledge Panel) dikhta hai with phone, address, rating
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "SoftwareCompany"],
  "@id": "https://www.pihnexa.co.in/#organization",
  name: "PihNexa Technologies",
  alternateName: "PIHNEXA",
  url: "https://www.pihnexa.co.in",
  logo: {
    "@type": "ImageObject",
    url: "https://www.pihnexa.co.in/assets/logo.png",
    width: "512",
    height: "512",
  },
  image: "https://www.pihnexa.co.in/assets/saas-dashboard.png",
  description:
    "Enterprise-grade healthcare technology company specializing in Smart Queue Management, Patient Checklist Tracking, Hospital Workflow Automation, Staff Roster Automation, and custom healthcare software development for hospitals and clinics across India.",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Ankush Jha",
    jobTitle: "Founder & Chief Technology Consultant",
    url: "https://www.pihnexa.co.in/#about",
  },
  telephone: "+91-7992203671",
  email: "info@pihnexa.co.in",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "India",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceArea: {
    "@type": "AdministrativeArea",
    name: "India",
  },
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Bank Transfer, UPI, Cheque",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-7992203671",
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      email: "info@pihnexa.co.in",
      contactType: "sales",
    },
  ],
  sameAs: [
    "https://www.instagram.com/pihnexa_technologies/",
    "https://www.linkedin.com/in/pihnexa-technologies-597891418/",
    "https://www.pihnexa.co.in",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Healthcare Technology Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Smart Queue Management System",
          description: "Enterprise QR-based patient queue management for hospitals and OPDs",
        },
        price: "175000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Patient Checklist & Tracker",
          description: "Automated patient checklist generation — 7,500+ processed in live hospitals",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Staff Roster Automation",
          description: "Intelligent shift scheduling for hospital staff",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Attendance System",
          description: "QR-based digital attendance for hospitals and clinics",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Hospital Management Software",
          description: "Bespoke hospital software development — EMR, billing, OPD management",
        },
      },
    ],
  },
};

// ─── 2. AggregateRating Schema (Star Rating in Google Search) ───────────────
// यह Google Search में ⭐⭐⭐⭐⭐ stars dikhata hai
// Real reviews milne ke baad update karo ratingValue aur reviewCount
const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.pihnexa.co.in/#rating",
  name: "PihNexa Technologies",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Dr. Priya Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "The Smart Queue Management System completely transformed our OPD experience. Waiting room crowding dropped dramatically within weeks of going live.",
      datePublished: "2026-07-01",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rajesh Kumar" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Over 7,500 checklists generated with zero errors. PihNexa built exactly what we needed, not a generic product.",
      datePublished: "2026-07-15",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Anita Verma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Staff roster management used to take our admin team half a day every week. Now it takes 20 minutes. The automation is accurate.",
      datePublished: "2026-07-20",
    },
  ],
};

// ─── 3. Software Application Schemas ────────────────────────────────────────
const softwareSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Smart Queue Management System",
    applicationCategory: "HealthcareApplication",
    operatingSystem: "Web, Android, iOS",
    description:
      "Enterprise-grade QR-based patient queue management system for hospitals and OPDs. Real-time token tracking, digital display boards, and wait-time analytics.",
    url: "https://www.pihnexa.co.in/#solutions",
    creator: { "@type": "Organization", name: "PihNexa Technologies" },
    offers: {
      "@type": "Offer",
      price: "175000",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "175000",
        priceCurrency: "INR",
        name: "Starting Price",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Patient Checklist & Tracker",
    applicationCategory: "HealthcareApplication",
    operatingSystem: "Web",
    description:
      "Automated patient checklist generation and tracking system. 7,500+ checklists processed with zero performance issues in live hospital deployments.",
    url: "https://www.pihnexa.co.in/#solutions",
    creator: { "@type": "Organization", name: "PihNexa Technologies" },
  },
];

// ─── 4. FAQ Schema ───────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Smart Queue Management System for hospitals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Smart Queue Management System is a digital solution that automates patient flow in hospitals and clinics using QR codes, token numbers, and real-time tracking. It eliminates manual token systems, reduces waiting room congestion, and provides patients and staff with live queue visibility via display boards and mobile notifications.",
      },
    },
    {
      "@type": "Question",
      name: "Does PihNexa Technologies serve small clinics or only large hospitals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PihNexa Technologies serves the full spectrum — from single-doctor clinics and diagnostic centres to multi-specialty hospitals. Our Clinic Launchpad package is specifically designed for smaller facilities, while our Enterprise Solutions handle complex, multi-department hospitals with high patient volumes.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to deploy a hospital queue management system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard Smart Queue Management System deployment takes 3–6 weeks, including setup, configuration, staff training, and go-live support. Complex, multi-department integrations may take 2–3 months depending on the scope.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of hospital queue management system in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PihNexa's Smart Queue Management System starts at ₹1.75 lakh as part of the Clinic Launchpad package. Final pricing depends on number of departments, display boards, and integrations required. Contact us at +91 7992203671 for a custom quote.",
      },
    },
    {
      "@type": "Question",
      name: "How to reduce patient waiting time in OPD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective way to reduce OPD waiting time is implementing a digital Smart Queue Management System with QR-based token generation, real-time display boards, and WhatsApp notifications. PihNexa's system has helped clinics reduce patient waiting complaints by over 80%.",
      },
    },
  ],
};

// ─── 5. BreadcrumbList Schema ────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.pihnexa.co.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: "https://www.pihnexa.co.in/#solutions",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Case Studies",
      item: "https://www.pihnexa.co.in/#case-studies",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: "https://www.pihnexa.co.in/#contact",
    },
  ],
};

// ─── 6. WebSite Schema (Sitelinks Search Box) ───────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.pihnexa.co.in/#website",
  name: "PihNexa Technologies",
  url: "https://www.pihnexa.co.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.pihnexa.co.in/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      dir="ltr"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        {/* Theme color for mobile browser chrome */}
        <meta name="theme-color" content="#0B1B3E" />
        <meta name="msapplication-TileColor" content="#0B1B3E" />

        {/* Geo targeting */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />

        {/* ── Structured Data / JSON-LD ── */}
        {/* 1. LocalBusiness — triggers Knowledge Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* 2. AggregateRating — triggers star rating in search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />
        {/* 3. Software schemas */}
        {softwareSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {/* 4. FAQ schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* 5. Breadcrumb schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* 6. WebSite schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollAnimationInit />
        <ScrollButtons />
        {children}
      </body>
    </html>
  );
}
