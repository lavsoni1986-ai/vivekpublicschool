# Changelog - Vivek Public Higher Secondary School, Shahdol Website

All notable changes and structural simplification updates made during the school website transformation.

## [1.1.0] - 2026-07-07

### Removed Features (ERP/High-Complexity Cleanups)
- **Fee Calculator:** Deleted the complex object calculator form, tuition fee indices, and transport rates arrays.
- **Homework Board:** Removed mock homework listings and tables.
- **Circulars Panel:** Removed PDF notice boards, list layouts, and mock circular downloads.
- **Multi-step Admission Wizard:** Removed indicators, custom validation blocks, back buttons, and step-based field wrappers from `admissions.html`.
- **Student/Parent Portals:** Deleted placeholder login screens and dummy links.
- **Excess Pages:** Deleted `parent-corner.html` and `achievements.html` completely from the workspace.

### Simplified Features
- **Inquiry Form:** Replaced multi-step forms in `admissions.html` with a single 1-page form containing Student Name, Father Name, Class Applying For, Mobile Number, and optional Message.
- **WhatsApp Integration:** Wired both Admissions Form and Contact Page Form to use a single, shared JavaScript function (`sendWhatsAppInquiry`) that formats inputs into clean Hindi/English text layouts and redirects to `https://wa.me/919424648831`.
- **Merged Achievements:** Merged all board toppers, athletic records, and district trophies directly into the `about.html` page.
- **Single Hero Header:** Replaced the multi-slide auto-rotator in `index.html` with a single large, high-performance hero image banner to eliminate page layout shifts.
- **Asset Performance:** Swapped FontAwesome icons with lightweight inline SVG graphics to reduce network fetch counts.

### Added Features (Premium Touches)
- **Floating Widgets:** Added sticky call button (bottom left) and sticky WhatsApp chat bubble (bottom right).
- **Scroll to Top:** Integrated a smooth scroll button that appears only after scrolling 300px down.
- **SEO Elements:** Configured canonical URLs, robots.txt directives, sitemap.xml pathways, manifest.json configurations, OpenGraph tags, Apple touch support, and proper Heading layout hierarchy (`h1` -> `h2` -> `h3`).
- **Structured Data:** Added JSON-LD schema markup (`School` and `BreadcrumbList`) for search engine parsing.
