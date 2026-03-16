# Requirements Document

## Introduction

Digital Bridges is a premium event landing page for an in-person technology event scheduled for April 11, 2026. The page introduces ictweare — a structured IT service platform — and drives registrations through a polished, animated, fully responsive single-page experience built with React, Vite, TailwindCSS, React Router, and Framer Motion.

## Glossary

- **Landing_Page**: The root route (`/`) single-page experience for the Digital Bridges event
- **Navbar**: The sticky top navigation bar component
- **Hero**: The full-screen opening section with rotating background images and countdown
- **CountdownTimer**: The live countdown component targeting April 11, 2026 at 10:30 AM
- **AboutEvent**: The two-column section describing the event and ictweare
- **WhatYouLearn**: The four-card learning topics grid section
- **ictweareSection**: The dark accent section showcasing ictweare services
- **WhoShouldAttend**: The two-card audience section
- **EventSessions**: The vertical timeline section listing event sessions
- **RegisterForm**: The registration form section connected to Formspree
- **Footer**: The bottom section with logo, social links, and copyright
- **AuctionPage**: The placeholder page at the `/auction` route
- **ictweare**: The IT service platform being introduced — always written in all lowercase, no exceptions
- **Primary_Color**: `#FF8C00` — the ruling orange accent color used for CTAs, highlights, borders, and icons
- **Syne**: The display font used for headings and the logo wordmark
- **DM_Sans**: The body font used for all paragraph and UI text

---

## Requirements

### Requirement 1: Project Configuration

**User Story:** As a developer, I want the project configured with custom Tailwind theme values and Google Fonts, so that the design system is consistent across all components.

#### Acceptance Criteria

1. THE Landing_Page SHALL use a `tailwind.config.js` that extends the theme with `primary: "#FF8C00"`, `secondary: "#222222"`, `neutral: "#FFFFFF"`, `fontFamily.display: ["Syne", "sans-serif"]`, and `fontFamily.body: ["DM Sans", "sans-serif"]`
2. THE Landing_Page SHALL import Syne and DM Sans from Google Fonts via `@import` in `index.css`
3. THE Landing_Page SHALL apply `font-body` as the default body font globally

---

### Requirement 2: Routing

**User Story:** As a visitor, I want to navigate between the landing page and the auction page, so that I can access different parts of the site.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/`, THE Landing_Page SHALL render the `LandingPage` component
2. WHEN a visitor navigates to `/auction`, THE Landing_Page SHALL render the `AuctionPage` placeholder component
3. THE Landing_Page SHALL use React Router `BrowserRouter` with `Routes` and `Route` components

---

### Requirement 3: Navbar

**User Story:** As a visitor, I want a sticky navigation bar, so that I can access key links at all times while scrolling.

#### Acceptance Criteria

1. THE Navbar SHALL be sticky at the top of the viewport with a white background and a subtle bottom border
2. THE Navbar SHALL display a logo image from `src/assets/logo.png`; IF the image fails to load, THEN THE Navbar SHALL display the text "Digital Bridges" in Primary_Color using Syne font, bold
3. THE Navbar SHALL display an "Auction" text link and a "Register" button on the right side on desktop (≥768px)
4. WHEN the "Register" button is clicked, THE Navbar SHALL smooth-scroll to the registration form section
5. WHEN the page is scrolled down, THE Navbar SHALL apply a soft box-shadow to indicate elevation
6. WHEN the viewport width is below 768px, THE Navbar SHALL replace the desktop links with a hamburger menu icon
7. WHEN the hamburger icon is clicked, THE Navbar SHALL toggle a dropdown containing the Auction link and Register button
8. WHEN the Landing_Page loads, THE Navbar SHALL animate with a Framer Motion fade-down entrance

---

### Requirement 4: Hero Section

**User Story:** As a visitor, I want an impactful full-screen hero section, so that I immediately understand the event and feel compelled to register.

#### Acceptance Criteria

1. THE Hero SHALL occupy at least the full viewport height (`min-h-screen`)
2. THE Hero SHALL cycle through three Unsplash background images every 5 seconds with a smooth crossfade transition
3. THE Hero SHALL apply a semi-dark gradient overlay with opacity between 0.45 and 0.55 so background images remain visible
4. THE Hero SHALL display a badge showing "April 11, 2026 · 10:30 AM" with a Primary_Color border
5. THE Hero SHALL display the title "Digital Bridges" in Syne font, large, bold, white
6. THE Hero SHALL display the subtitle "Connecting Business, People, and Possibilities through Technology" in white with font-light weight
7. THE Hero SHALL embed the CountdownTimer component
8. THE Hero SHALL display a "Register Now →" CTA button in Primary_Color that smooth-scrolls to the registration form
9. WHEN the Landing_Page loads, THE Hero SHALL animate all content elements with Framer Motion staggered fade-up entrance
10. THE Hero SHALL be fully responsive across 320px, 768px, and 1280px+ viewports

---

### Requirement 5: Countdown Timer

**User Story:** As a visitor, I want to see a live countdown to the event, so that I feel urgency and excitement about registering.

#### Acceptance Criteria

1. THE CountdownTimer SHALL calculate and display the remaining Days, Hours, Minutes, and Seconds until April 11, 2026 at 10:30 AM
2. THE CountdownTimer SHALL update every second using `setInterval`
3. THE CountdownTimer SHALL display each unit in a frosted-glass style box with white low-opacity background and Primary_Color numbers
4. WHEN the countdown reaches zero, THE CountdownTimer SHALL display zeroes for all units
5. THE CountdownTimer SHALL reduce box size on viewports below 768px using responsive Tailwind classes

---

### Requirement 6: About Event Section

**User Story:** As a visitor, I want to read about the event and ictweare, so that I understand what I'm registering for.

#### Acceptance Criteria

1. THE AboutEvent SHALL use a white (`#FFFFFF`) background
2. THE AboutEvent SHALL use a two-column layout on desktop (≥768px) and a single-column stacked layout on mobile
3. THE AboutEvent SHALL display a section label, title, and body text in the left column
4. THE AboutEvent SHALL display stat highlights ("1 Day Event", "5 Sessions", "Live Auction") in a decorative card in the right column
5. THE AboutEvent body text SHALL include the phrase "ictweare" written in all lowercase with no capitalization
6. THE AboutEvent SHALL be fully responsive

---

### Requirement 7: What You Will Learn Section

**User Story:** As a visitor, I want to see the learning topics, so that I can evaluate the value of attending.

#### Acceptance Criteria

1. THE WhatYouLearn SHALL use a light gray (`#F5F5F5`) background
2. THE WhatYouLearn SHALL display four cards in a 2×2 grid on desktop and a single column on mobile
3. WHEN a card is hovered, THE WhatYouLearn SHALL lift the card with a shadow and show a left orange border
4. WHEN the WhatYouLearn section enters the viewport, THE WhatYouLearn SHALL animate cards with Framer Motion staggered fade-up
5. THE WhatYouLearn SHALL display cards for: "How Technology Saves Businesses Money", "Data Privacy and Security", "How ictweare Works", and "Smart IT Systems for Businesses"
6. EACH card SHALL display an icon, a title, and a short description

---

### Requirement 8: ictweare Section

**User Story:** As a visitor, I want to learn about the ictweare platform, so that I understand the product being showcased at the event.

#### Acceptance Criteria

1. THE ictweareSection SHALL use a very soft dark background (`#1A1A1A`) — this is one of at most two dark accent sections on the page
2. THE ictweareSection SHALL display white text with Primary_Color accents
3. THE ictweareSection SHALL display the headline "One Platform. Every IT Need."
4. THE ictweareSection SHALL always write the platform name as "ictweare" — all lowercase, no exceptions
5. THE ictweareSection SHALL display service pills in a wrapping flex row: "Device Repairs", "Network Setup", "CCTV Installation", "IT Support", "Device Pickup & Delivery"
6. EACH service pill SHALL have a dark border, an orange dot, and white text
7. WHEN the ictweareSection enters the viewport, THE ictweareSection SHALL animate pills with Framer Motion staggered fade-in
8. THE ictweareSection SHALL be fully responsive with pills wrapping naturally on smaller screens

---

### Requirement 9: Who Should Attend Section

**User Story:** As a visitor, I want to know if the event is relevant to me, so that I can decide whether to register.

#### Acceptance Criteria

1. THE WhoShouldAttend SHALL use a warm off-white (`#FFFAF5`) background
2. THE WhoShouldAttend SHALL display two cards side by side on desktop and stacked on mobile
3. THE left card SHALL be titled "Businesses" and list: Offices, Hotels, SMEs, Startups, Organizations
4. THE right card SHALL be titled "Individuals" and list: Professionals, Entrepreneurs, Remote Workers, Gadget Users
5. EACH list item SHALL be preceded by a small Primary_Color dot bullet

---

### Requirement 10: Event Sessions Section

**User Story:** As a visitor, I want to see the event agenda, so that I know what to expect on the day.

#### Acceptance Criteria

1. THE EventSessions SHALL use a white (`#FFFFFF`) background
2. THE EventSessions SHALL display sessions in a vertical timeline layout with Primary_Color dots connected by a vertical line
3. THE EventSessions SHALL list five sessions: "Introduction to ictweare", "How Technology Can Save Businesses Money", "Data Privacy and Security", "Platform Onboarding", "Product Display and Auction"
4. WHEN each session item enters the viewport, THE EventSessions SHALL animate it sliding in from the left using Framer Motion
5. THE EventSessions timeline SHALL remain vertical on all screen sizes

---

### Requirement 11: Registration Form

**User Story:** As a visitor, I want to register for the event, so that I can reserve my seat.

#### Acceptance Criteria

1. THE RegisterForm SHALL use a light gray (`#F9F9F9`) background
2. THE RegisterForm SHALL display the heading "Reserve Your Seat"
3. THE RegisterForm SHALL use a two-column layout on desktop and single-column on mobile
4. THE RegisterForm SHALL include fields: Full Name, Email Address, Phone Number, Company (optional), and Attending As (Individual / Business) as a full-width select dropdown
5. THE RegisterForm SHALL display a full-width "Reserve My Seat →" submit button in Primary_Color
6. WHEN the form is submitted, THE RegisterForm SHALL POST to `https://formspree.io/f/YOUR_FORM_ID` using `fetch` — the code SHALL include a comment `// Replace YOUR_FORM_ID with your Formspree ID`
7. WHEN the form submission succeeds, THE RegisterForm SHALL display a success message to the user
8. WHEN an input is focused, THE RegisterForm SHALL apply an orange outline focus style
9. WHEN the RegisterForm enters the viewport, THE RegisterForm SHALL animate with Framer Motion fade-up

---

### Requirement 12: Footer

**User Story:** As a visitor, I want a footer with branding and social links, so that I can follow the event organizers online.

#### Acceptance Criteria

1. THE Footer SHALL use a soft dark background (`#111`)  — this is one of at most two dark accent sections on the page
2. THE Footer SHALL display a logo image from `src/assets/logo.png`; IF the image fails to load, THEN THE Footer SHALL display "Digital Bridges" in Primary_Color using Syne font
3. THE Footer SHALL display "Powered by ictweare" in small muted text below the logo — "ictweare" always all lowercase
4. THE Footer SHALL display social icons for Twitter/X, Instagram, and LinkedIn with white color and Primary_Color on hover
5. THE Footer SHALL display a copyright line in muted text centered at the bottom
6. WHEN the viewport is below 768px, THE Footer SHALL stack all content to a center-aligned single column

---

### Requirement 13: Responsiveness

**User Story:** As a visitor on any device, I want the page to display correctly, so that I have a good experience regardless of screen size.

#### Acceptance Criteria

1. THE Landing_Page SHALL produce no horizontal scroll on viewports as narrow as 320px
2. THE Landing_Page SHALL use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) throughout all components
3. THE Landing_Page SHALL collapse all multi-column grids to a single column on mobile
4. THE Landing_Page SHALL display full-width buttons on mobile viewports
5. THE Landing_Page SHALL scale all images properly without overflow
6. THE Landing_Page SHALL use readable font sizes at 320px viewport width

---

### Requirement 14: Animation System

**User Story:** As a visitor, I want smooth, premium animations, so that the page feels polished and engaging.

#### Acceptance Criteria

1. THE Navbar SHALL animate with a fade-down entrance on page load using Framer Motion
2. THE Hero content SHALL animate with staggered fade-up on page load using Framer Motion
3. WHEN section headings enter the viewport, THE Landing_Page SHALL fade them in using Framer Motion `whileInView`
4. WHEN WhatYouLearn cards enter the viewport, THE WhatYouLearn SHALL stagger-fade them up using Framer Motion
5. WHEN EventSessions items enter the viewport, THE EventSessions SHALL slide them in from the left using Framer Motion
6. WHEN ictweareSection pills enter the viewport, THE ictweareSection SHALL fade them in with stagger using Framer Motion
7. WHEN the RegisterForm enters the viewport, THE RegisterForm SHALL fade up using Framer Motion
