# Requirements Document

## Introduction

A full rebuild of the Ictware (ICTWEARE) website — a React + Tailwind CSS project — into a 4-page structure (Home, Services, About, Contact). The revamp introduces a new design system (navy/amber/bone palette, Fraunces + Inter typefaces), polished animations, and a content architecture aligned with Ictware's positioning as a single-point-of-accountability ICT partner serving individuals and businesses in Nigeria and the UK. Existing assets, routing infrastructure, and Framer Motion dependency are reused wherever possible.

---

## Glossary

- **Site**: The complete Ictware web application rebuilt under this spec.
- **Design_System**: The shared set of tokens (colors, fonts, spacing), the Button component, and the animation utilities used across all pages.
- **Navbar**: The top navigation bar present on every page.
- **Footer**: The bottom section present on every page.
- **HomePage**: The page rendered at route `/`.
- **ServicesPage**: The page rendered at route `/services`.
- **AboutPage**: The page rendered at route `/about`.
- **ContactPage**: The page rendered at route `/contact`.
- **Button**: The reusable interactive button component with ghost and filled variants.
- **ServiceCard**: A card component displaying one of the six ICT service categories.
- **ContactForm**: The inquiry form on the ContactPage with extensible field names.
- **ScrollReveal**: A scroll-triggered animation that fades and translates elements upward into view.
- **HeroAssembly**: The entrance animation in the hero section where fragmented text/image elements assemble on load.
- **TrustBar**: The statistic strip displayed below the hero on the HomePage.
- **BrandStrip**: The technology partner logo row shown on the HomePage.
- **TestimonialRotator**: The auto-rotating testimonial display on the HomePage.
- **Reduced_Motion_Mode**: The display state entered when the user's OS reports `prefers-reduced-motion: reduce`.

---

## Requirements

### Requirement 1: Design System — Color Palette

**User Story:** As a developer, I want a defined color token set extended in Tailwind config, so that all components reference consistent brand colors without hardcoded hex values scattered through JSX.

#### Acceptance Criteria

1. THE Design_System SHALL extend `tailwind.config.js` by adding the following custom color tokens under `theme.extend.colors`: `navy-950: #0B1220`, `navy-800: #16233D`, `amber-500: #D4A24C`, `bone-50: #F7F3EC`, `slate-400: #8B93A7`.
2. THE Design_System SHALL NOT remove or overwrite any color tokens already defined under `theme.extend.colors` in `tailwind.config.js` prior to this change.
3. WHEN a component references any of the five new color tokens as a Tailwind utility class, THE Design_System SHALL resolve those classes without build errors or unresolved class warnings.

---

### Requirement 2: Design System — Typography

**User Story:** As a designer, I want Fraunces (serif) for headings and Inter (grotesk) for body/UI text, so that the site communicates the premium-yet-approachable brand tone.

#### Acceptance Criteria

1. THE Design_System SHALL import `Fraunces` (weights 300, 400, 700) and `Inter` (weights 400, 600, 700) from Google Fonts via a `@import` statement in `src/index.css`, with `font-display=swap` included in the import URL to prevent invisible text during load.
2. THE Design_System SHALL extend `tailwind.config.js` with `fontFamily.heading` mapped to `['Fraunces', 'serif']` and `fontFamily.body` mapped to `['Inter', 'sans-serif']`.
3. THE Design_System SHALL set the default `body` element font to Inter in `src/index.css`.
4. THE Design_System SHALL apply `font-family: heading` (Fraunces) to all h1–h6 elements via a Tailwind `@layer base` rule in `src/index.css`.

---

### Requirement 3: Design System — Button Component

**User Story:** As a developer, I want a reusable Button component with ghost and filled variants, so that all CTA interactions are consistent and require no per-callsite styling.

#### Acceptance Criteria

1. THE Button SHALL accept a `variant` prop accepting values `"ghost"` and `"filled"` with `"ghost"` as the default.
2. WHEN `variant="ghost"`, THE Button SHALL render with transparent background, amber-500 text, and amber-500 border.
3. WHEN `variant="filled"`, THE Button SHALL render with amber-500 background, navy-950 text, and no border.
4. WHEN the user hovers over THE Button with `variant="ghost"`, THE Button SHALL transition the background fill from left-to-right in amber-500 over 250ms using CSS `ease` timing, and flip text color to navy-950.
5. WHEN the user hovers over THE Button with `variant="filled"`, THE Button SHALL transition the background fill from left-to-right over 250ms using CSS `ease` timing, and flip text color to bone-50.
6. WHEN the user moves the cursor away from THE Button, THE Button SHALL reverse the fill animation with the same 250ms easing.
7. THE Button SHALL set `cursor: pointer` on all interactive and focused states.
8. THE Button SHALL accept `className`, `onClick`, `href`, `type`, and `children` props; WHEN `href` is provided, THE Button SHALL render as an `<a>` element; otherwise it SHALL render as a `<button>` element.
9. IF `href` is provided, THE Button SHALL ignore the `type` prop since `<a>` elements do not have a `type` attribute for form submission.
10. WHILE in Reduced_Motion_Mode (`prefers-reduced-motion: reduce`), THE Button SHALL disable the fill transition and apply color changes instantly on hover and mouse-leave.
11. IF an invalid `variant` value is provided, THE Button SHALL fall back to the `"ghost"` variant as the default.

---

### Requirement 4: Design System — Scroll Reveal Animations

**User Story:** As a developer, I want a reusable scroll-triggered animation utility, so that sections fade and translate upward into view as the user scrolls without re-implementing IntersectionObserver on every component.

#### Acceptance Criteria

1. THE ScrollReveal SHALL use Framer Motion's `useInView` or `motion` components to detect when an element enters the viewport.
2. WHEN an element enters the viewport, THE ScrollReveal SHALL animate it from `opacity: 0, translateY: 20px` to `opacity: 1, translateY: 0` over a duration between 300ms and 600ms inclusive, using an ease-out curve.
3. WHERE grouped items are animated with ScrollReveal, THE ScrollReveal SHALL stagger child entrance animations with a delay of 80–120ms per item, applied cumulatively to each successive child in DOM order.
4. WHILE the `prefers-reduced-motion: reduce` media query is active, THE ScrollReveal SHALL skip translate and opacity transitions and render all elements immediately at `opacity: 1, translateY: 0`.
5. THE ScrollReveal SHALL trigger the animation only once per page load; IF an animated element scrolls out of the viewport and back in, THE ScrollReveal SHALL NOT re-trigger the animation.
6. IF THE ScrollReveal receives no children, THEN THE ScrollReveal SHALL render nothing without throwing an error.

---

### Requirement 5: Site Routing — 4-Page Structure

**User Story:** As a visitor, I want to navigate between Home, Services, About, and Contact pages, so that I can find the information relevant to my needs.

#### Acceptance Criteria

1. THE Site SHALL define routes `/`, `/services`, `/about`, and `/contact` in `src/App.jsx` using `react-router-dom`.
2. THE Navbar SHALL render navigation links to all four routes (`/`, `/services`, `/about`, `/contact`) on every page, each as a navigable anchor element.
3. WHEN a visitor navigates to any defined route, THE Site SHALL render the corresponding page component within 500ms without a full browser reload.
4. WHEN a visitor clicks a navigation link in the Navbar, THE Site SHALL update the browser URL to the target route and render the corresponding page without a full browser reload.
5. IF a visitor navigates to a route not matching `/`, `/services`, `/about`, or `/contact`, THEN THE Site SHALL redirect the visitor to `/` and render the Home page.

---

### Requirement 6: Navbar

**User Story:** As a visitor, I want a consistent, responsive navigation bar at the top of every page, so that I can always access any section of the site.

#### Acceptance Criteria

1. THE Navbar SHALL display the Ictware logo on the left using the existing asset at `src/assets/ICT-WEARE--V2-TRT-b.png`.
2. THE Navbar SHALL display navigation links — Home, Services, About, Contact — horizontally on viewports ≥ 768px.
3. WHEN viewport width is below 768px, THE Navbar SHALL hide navigation links and the `Request a Service` button, replacing them with a hamburger menu toggle.
4. WHEN the hamburger toggle is activated, THE Navbar SHALL reveal a dropdown containing all four navigation links — Home, Services, About, Contact — each individually clickable.
5. WHEN a navigation link in the dropdown is clicked, THE Navbar SHALL collapse the dropdown and navigate to the corresponding page.
6. WHEN a user scrolls more than 10px from the top of the page, THE Navbar SHALL transition its background to navy-950 and apply a visible box-shadow of at least 1px blur.
7. THE Navbar SHALL include a `Request a Service` button (variant="filled") in the desktop nav that navigates to `/contact` when clicked.
8. WHEN the page initially loads, THE Navbar SHALL animate into view sliding down from above, completing the animation within 600ms.

---

### Requirement 7: Footer

**User Story:** As a visitor, I want a consistent footer on every page, so that I can find contact details, quick links, and social media without scrolling back to top.

#### Acceptance Criteria

1. THE Footer SHALL display the Ictware logo and a one-line mission statement: `One accountable ICT partner — from request to delivery, and beyond.`
2. THE Footer SHALL display quick links to Home, Services, About, and Contact, where each link navigates to the corresponding page when clicked.
3. THE Footer SHALL display contact information including at least one Nigeria phone number, a UK phone number marked as a placeholder with a "Coming soon" indicator, an email address, and operating hours (Mon–Fri 9:00–17:00, Sat 10:00–14:00, Sun closed by arrangement).
4. THE Footer SHALL display social media links for LinkedIn, Instagram, and TikTok, where each link opens the corresponding platform in a new browser tab.
5. THE Footer SHALL display the copyright line `© 2026 Ictware. All rights reserved.`
6. THE Footer SHALL render on a navy-950 background with bone-50 text.
7. WHEN a visitor loads any page of the site, THE Footer SHALL be present at the bottom of that page.

---

### Requirement 8: HomePage — Hero Section

**User Story:** As a first-time visitor, I want an impactful hero section that immediately communicates Ictware's value proposition, so that I understand what the company does and feel compelled to explore further.

#### Acceptance Criteria

1. THE HomePage SHALL render a hero section containing: eyebrow text `Now serving the UK`, headline `One ICT Partner. Every Solution.`, a subheadline (maximum 160 characters) describing the full-lifecycle ICT offering, and a hero visual element (image or graphic).
2. THE HomePage hero SHALL contain a `Request a Service` Button (variant="filled") linking to `/contact` and a `See What We Do` Button (variant="ghost") linking to `/services`, both visible without scrolling on viewports ≥ 320px wide.
3. WHEN the HomePage loads, THE HeroAssembly SHALL animate headline text or image fragments assembling into their final positions, with all fragments completing within 600ms of the last fragment beginning its animation.
4. WHILE the `prefers-reduced-motion: reduce` media query is active, THE HomePage hero SHALL render all content in its final position with no assembly animation.
5. IF the hero visual asset fails to load, THEN THE HomePage hero SHALL display the section without the visual element and retain all text and CTA button content.

---

### Requirement 9: HomePage — Trust Bar

**User Story:** As a potential client, I want to see proof-of-credibility statistics below the hero, so that I trust Ictware before reading further.

#### Acceptance Criteria

1. THE TrustBar SHALL render four stat items below the hero in the following order: `15+ years combined ICT delivery experience`, `Trusted by SMEs, retailers & institutions`, `One point of contact, zero vendor confusion`, and `Transparent pricing, no hidden costs`.
2. THE TrustBar SHALL render on a navy-800 background with bone-50 or amber-500 text for stat labels.
3. WHEN the TrustBar enters the viewport, THE TrustBar SHALL animate in via ScrollReveal with each stat item staggered by 200ms, completing all four animations within 1000ms total.
4. WHILE the `prefers-reduced-motion: reduce` media query is active, THE TrustBar SHALL display all four stat items immediately without animation.
5. WHILE viewport width is ≥ 768px, THE TrustBar SHALL display all four stat items in a single horizontal row; WHILE viewport width is below 768px, THE TrustBar SHALL stack the stat items vertically.

---

### Requirement 10: HomePage — Brand Strip

**User Story:** As a visitor, I want to see the technology brands Ictware works with, so that I am confident in their technical credibility.

#### Acceptance Criteria

1. THE BrandStrip SHALL display all six technology partner entries — Cisco, TP-Link, Samsung, Palo Alto Networks, Apple, and Grandstream — in a single horizontal row, where each entry rendered as an image SHALL include alt text matching the brand name, and any entry whose image asset fails to load SHALL fall back to displaying the brand name as visible text.
2. THE BrandStrip SHALL display the section label `Technology we work with` in a heading element positioned above the logo row.
3. WHEN the BrandStrip enters the viewport, THE BrandStrip SHALL animate into view using ScrollReveal with a transition duration between 300ms and 600ms.
4. IF any brand logo image fails to load, THEN THE BrandStrip SHALL display the brand name as plain text in place of the image so that all six partner entries remain visible.

---

### Requirement 11: HomePage — Services Overview Grid

**User Story:** As a visitor, I want a quick overview of Ictware's six service categories on the homepage, so that I can immediately understand the scope of services offered.

#### Acceptance Criteria

1. THE HomePage SHALL render six ServiceCards in a responsive grid: 1 column below 640px, 2 columns from 640–1023px, and 3 columns at ≥ 1024px; displaying: IT Support & Managed Services, Networking Cabling & Connectivity, CCTV & Security Systems, Procurement & Installations, Retail & Inventory Systems, and Custom Software Development.
2. WHEN a visitor clicks a ServiceCard, THE Site SHALL navigate to the `/services` page scrolled to the relevant service section anchor within 500ms.
3. WHEN the Services grid enters the viewport, THE HomePage ServiceCards SHALL animate in via ScrollReveal with a stagger interval of 100–200ms per card.
4. IF a service section anchor does not exist on `/services`, THEN THE Site SHALL navigate to the top of `/services` without throwing an error.

---

### Requirement 12: HomePage — How We Work Section

**User Story:** As a prospective client, I want to understand Ictware's 4-step delivery process, so that I know what to expect after making a request.

#### Acceptance Criteria

1. THE HomePage SHALL render a "How We Work" section with exactly four numbered steps in order (1–4): `Create a Request`, `Scope & Quote`, `Assign & Manage`, and `Deliver & Track`, each with its label and a description of ≤ 20 words.
2. WHEN the "How We Work" section enters the viewport, THE HomePage SHALL animate each step in via ScrollReveal with a stagger delay of at least 150ms between each step.
3. IF ScrollReveal fails to initialise, THEN THE HomePage SHALL display all four steps in their fully visible state without animation.

---

### Requirement 13: HomePage — Testimonials

**User Story:** As a visitor, I want to read testimonials from past clients, so that I can trust that Ictware delivers on its promises.

#### Acceptance Criteria

1. THE TestimonialRotator SHALL display between 3 and 20 testimonials, each containing quote text between 10 and 300 characters and attribution composed of a role (1–60 characters) and organisation type (1–60 characters).
2. THE TestimonialRotator SHALL automatically advance to the next testimonial after a timed interval of 5–8 seconds, wrapping from the last testimonial back to the first.
3. WHEN a visitor manually interacts with navigation controls (dots or arrows), THE TestimonialRotator SHALL display the selected testimonial within 100 milliseconds and restart the automatic timer from zero.
4. WHILE the `prefers-reduced-motion: reduce` media query is active, THE TestimonialRotator SHALL cycle testimonials without slide or fade transitions, switching between testimonials as an instant cut.
5. WHEN the TestimonialRotator displays a testimonial, THE TestimonialRotator SHALL render the navigation indicator corresponding to the active testimonial in a visually distinct state from the inactive indicators.

---

### Requirement 14: HomePage — Closing CTA Banner

**User Story:** As a visitor at the end of the homepage, I want a clear call to action, so that I know exactly what to do next whether I am an individual or a business.

#### Acceptance Criteria

1. THE HomePage SHALL render a closing CTA banner as the last visible section of the page with the headline `Ready for ICT that just works?`.
2. THE closing CTA banner SHALL contain both an `Individuals →` link and a `Businesses →` link.
3. WHEN a visitor clicks the `Individuals →` link, THE HomePage SHALL navigate to `/contact` with the `inquiryType` query parameter set to `individual`.
4. WHEN a visitor clicks the `Businesses →` link, THE HomePage SHALL navigate to `/contact` with the `inquiryType` query parameter set to `business`.

---

### Requirement 15: ServicesPage — Service Category Sections

**User Story:** As a visitor, I want a dedicated page with full details on each service category, so that I can evaluate whether Ictware covers my specific ICT needs.

#### Acceptance Criteria

1. THE ServicesPage SHALL render six service category sections in the following order: IT Support, Networking, CCTV, Procurement, Retail Inventory, and Custom Software; each section SHALL include a section heading, a descriptive paragraph of 2–3 lines, and a bullet list of at least 3 specific service inclusions.
2. THE ServicesPage SHALL assign an HTML `id` anchor to each service category section matching the slug used by ServiceCard links from the HomePage (`it-support`, `networking`, `cctv`, `procurement`, `retail-inventory`, `custom-software`).
3. THE ServicesPage page intro SHALL display: `Whatever the ICT need, we scope it, source it, install it, and support it — under one agreement, one invoice, one point of contact.`
4. WHEN a service category section enters the viewport, THE ServicesPage SHALL reveal that section using a ScrollReveal animation completing within 600ms.
5. IF ScrollReveal fails to load, THEN THE ServicesPage SHALL display all six service category sections in their fully visible state without animation.

---

### Requirement 16: ServicesPage — Individuals vs Businesses Section

**User Story:** As a visitor, I want to understand how Ictware serves both individuals and businesses differently, so that I can identify the right path for my situation.

#### Acceptance Criteria

1. THE ServicesPage SHALL render an "Individuals vs Businesses" section containing two panels, each with a distinct heading ("For Individuals" and "For Businesses"), where the Individuals panel includes at minimum the service items: device setup, repairs, upgrades, and personal workspace support, and the Businesses panel includes at minimum the service items: procurement, installs, security, support, and software.
2. WHILE the viewport width is ≥ 768px, THE ServicesPage SHALL render the two panels side by side in a single row; IF the viewport width is below 768px, THEN THE ServicesPage SHALL render the two panels stacked vertically.
3. THE ServicesPage SHALL render a `Request a Service` button (variant="filled") immediately after the "Individuals vs Businesses" section, where the button navigates to `/contact` when clicked.

---

### Requirement 17: AboutPage

**User Story:** As a visitor, I want to learn about Ictware's story, values, and technology partnerships, so that I trust the company before engaging.

#### Acceptance Criteria

1. THE AboutPage SHALL render the headline `Built to be the last ICT vendor you ever need to look for.`
2. THE AboutPage SHALL render a story paragraph describing Ictware's origins in Nigeria delivering end-to-end ICT, and its expansion into the UK market.
3. THE AboutPage SHALL render a "Why businesses choose us" section with exactly four points: single accountable partner, transparent pricing agreed upfront, post-delivery support, and deep bench across networking, security, software, and hardware.
4. THE AboutPage SHALL render a certifications and partners section listing exactly six partners: Cisco, TP-Link, Samsung, Palo Alto Networks, Apple, and Grandstream.
5. THE AboutPage SHALL render a `Get in Touch` button (variant="filled") that navigates to `/contact` when clicked.
6. WHEN an AboutPage section enters the viewport, THE AboutPage SHALL reveal that section using a ScrollReveal animation completing within 600ms.
7. IF ScrollReveal fails to initialise, THEN THE AboutPage SHALL display all sections in their fully visible state without animation.

---

### Requirement 18: ContactPage — Form

**User Story:** As a potential client, I want to submit an inquiry through a contact form, so that Ictware can respond to my specific need.

#### Acceptance Criteria

1. THE ContactForm SHALL include the following fields with extensible `name` attributes: `name` (text, required, max 100 characters), `email` (email, required, max 254 characters), `phone` (tel, optional, max 20 characters), `inquiryType` (radio: Individual / Business, required), `serviceCategory` (select: six categories matching ServicesPage, required), and `message` (textarea, required, max 1000 characters).
2. WHEN the ContactPage is loaded with an `inquiryType` query parameter whose value is exactly "Individual" or "Business", THE ContactForm SHALL pre-fill the `inquiryType` radio field to match that value.
3. IF the ContactPage is loaded with an `inquiryType` query parameter whose value is not "Individual" or "Business", THEN THE ContactForm SHALL leave the `inquiryType` field unselected and ignore the parameter value.
4. WHEN a visitor submits THE ContactForm and one or more required fields are empty or contain an invalid value, THE ContactForm SHALL display an inline validation error message adjacent to each offending field without submitting the form.
5. WHEN a visitor submits THE ContactForm with all required fields completed and valid, THE ContactForm SHALL replace the form content with a confirmation message and reset all fields to their default empty or unselected state.
6. THE ContactForm SHALL be accessible, with each input field associated to a visible `<label>` element, `aria-required="true"` set on all required fields, and all interactive controls operable by keyboard including activation of the submit button via Enter or Space key.

---

### Requirement 19: ContactPage — Direct Contact Information

**User Story:** As a visitor, I want to see Ictware's direct contact details on the contact page, so that I can reach out through my preferred channel.

#### Acceptance Criteria

1. THE ContactPage SHALL display a page-level heading with the text `Tell us what you need. We'll take it from there.` positioned above the contact details and ContactForm.
2. THE ContactPage SHALL display at least one Nigeria phone number and one UK phone number marked as "(coming soon)" alongside the ContactForm on the same viewport.
3. THE ContactPage SHALL display an email address and operating hours (Mon–Fri 9:00–17:00 GMT, Sat 10:00–14:00 GMT, Sun closed) alongside the ContactForm.
4. THE ContactPage SHALL display the note `We respond to all requests within business hours.` in the contact details section, visible without scrolling on viewports ≥ 768px wide.
5. WHEN a visitor activates a displayed phone number, THE ContactPage SHALL initiate a phone call intent to that number.
6. WHEN a visitor activates the displayed email address, THE ContactPage SHALL initiate a mailto action pre-addressed to that email address.

---

### Requirement 20: Accessibility and Performance Baseline

**User Story:** As any user (including those with disabilities or on slow connections), I want the site to be accessible and load quickly, so that I am not excluded from accessing Ictware's services.

#### Acceptance Criteria

1. THE Site SHALL use semantic HTML elements such that each page contains at least one `nav`, one `main`, and one `footer` landmark, and no content block that qualifies as a section or article is wrapped solely in a generic `div` or `span`.
2. THE Site SHALL provide `alt` attributes on all `img` elements such that decorative images use `alt=""` and non-decorative images use alt text between 1 and 150 characters that does not begin with "image of", "picture of", or "photo of".
3. THE Site SHALL ensure all interactive elements (buttons, links, form fields) are operable via keyboard navigation such that each element is reachable in logical Tab order, buttons and links are activated with Enter or Space, form fields accept input without requiring pointer interaction, and each focused element displays a visible focus indicator with a minimum outline width of 2px.
4. THE Site SHALL use a single `h1` per page.
5. WHILE in Reduced_Motion_Mode (`prefers-reduced-motion: reduce`), THE Site SHALL suppress all CSS transitions, CSS animations, and Framer Motion animations that are purely decorative, while preserving animations that convey state changes required for user understanding (such as form validation feedback).
6. THE Site SHALL use `font-display: swap` for both Google Fonts to prevent invisible text during font loading.
7. THE Site SHALL render all text content with a contrast ratio of at least 4.5:1 between text color and background color for normal text (below 18pt or 14pt bold), and at least 3:1 for large text (18pt or above, or 14pt bold or above).
