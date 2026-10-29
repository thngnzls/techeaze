# TechEaZe Marketing Website Plan

## 1. Objective

Create a polished, responsive, static one-page website that positions **TechEaZe** as a modern digital product studio and converts interested visitors into conversations. The site should feel credible, technically capable, and memorable without relying on generic “tech company” clichés.

The flagship product, **RescuAR**, will serve as the primary proof point for TechEaZe’s ability to turn a meaningful real-world problem into an intuitive digital product.

## 2. Confirmed Direction

- **Company positioning:** Digital product studio that transforms complex real-world problems into thoughtful, intuitive digital products.
- **Primary audience:** Founders, organizations, and potential partners looking for a capable team to shape and build digital products.
- **Brand theme:** Dark blue and white, expanded with a restrained electric-blue accent.
- **Visual personality:** Premium futuristic—dark, crisp, atmospheric, and sophisticated rather than flashy.
- **Primary conversion:** Email-based “Start a conversation” call to action.
- **Site type:** Static, single-page React marketing site.
- **RescuAR working concept:** An augmented-reality emergency-response product that helps people identify hazards, follow guided steps, and connect with help.
- **Content caveat:** RescuAR details are provisional and must be fact-checked before public launch.
- **Contact caveat:** Use `hello@techeaze.com` as a visible placeholder until the real public email is supplied.

## 3. Success Criteria

The finished page should:

1. Explain what TechEaZe does within the first viewport.
2. Establish a distinctive and trustworthy visual identity.
3. Use RescuAR to demonstrate product thinking, technical capability, and real-world relevance.
4. Give visitors an obvious path to contact TechEaZe from the hero, navigation, and closing section.
5. Work cleanly across mobile, tablet, and desktop sizes.
6. Meet basic accessibility and performance expectations.
7. Avoid unsupported claims, fake testimonials, fake client logos, or invented metrics.

## 4. Page Architecture and Content

### A. Sticky Navigation

- Custom TechEaZe wordmark built from styled text and a simple geometric brand mark; no external logo asset required.
- Anchor links: **About**, **Capabilities**, **RescuAR**.
- Primary navigation CTA: **Start a conversation**.
- Desktop navigation uses a compact translucent dark surface.
- Mobile navigation collapses into an accessible menu with clear open/close states.
- Active hover/focus treatment uses the electric-blue accent.

### B. Hero: “Technology made human”

Purpose: communicate the value proposition immediately.

- Eyebrow: **Digital products for real-world impact**
- Primary headline: **We make complex technology feel effortless.**
- Supporting copy: TechEaZe designs and builds intuitive digital products that solve meaningful problems.
- Primary CTA: **Start a conversation** → contact section.
- Secondary CTA: **Explore RescuAR** → featured product section.
- Supporting proof strip with three honest descriptors rather than fabricated statistics:
  - Strategy-led
  - Human-centered
  - Built for impact
- Hero visual: an original abstract product-system composition made with CSS/SVG-like UI shapes—a luminous radar/orbit motif, layered interface cards, fine grid lines, and subtle blue glows. It should suggest precision and innovation without using stock imagery.
- Add a restrained entrance sequence and slow ambient motion; respect reduced-motion preferences.

### C. Studio Introduction

Purpose: explain why TechEaZe exists and how it works.

- Section label: **About TechEaZe**
- Concise statement focused on making advanced technology usable and valuable.
- A two-column layout:
  - Left: strong editorial statement.
  - Right: short explanatory paragraph and a “From complexity to clarity” visual motif.
- Avoid unsupported company history, team size, geographic reach, or client claims.

### D. Capabilities

Purpose: show potential clients where TechEaZe can help.

Use three focused capability cards:

1. **Product strategy**  
   Clarify the problem, audience, scope, and path from idea to viable product.
2. **Experience design**  
   Create accessible, intuitive interfaces and coherent end-to-end user journeys.
3. **Product engineering**  
   Turn validated concepts into fast, resilient, maintainable digital experiences.

Design:

- Cards share a precise grid but use distinct diagrammatic icons built from simple CSS or inline SVG.
- Subtle hover elevation, border glow, and directional cue.
- No separate service-detail pages in this version.

### E. Featured Product: RescuAR

Purpose: make the page concrete and memorable.

- Section label: **Featured product / RescuAR**
- Headline framing RescuAR as **guidance when every second matters**.
- Working description: an AR-assisted emergency-response concept designed to help users recognize hazards, follow contextual instructions, and reach appropriate help.
- Three product principles:
  - **See the situation** — use contextual guidance to understand what is happening.
  - **Act with clarity** — surface calm, sequential instructions.
  - **Connect to help** — make escalation paths immediate and easy to find.
- Large bespoke mobile-product mockup showing an AR scanning state, hazard marker, guidance card, and emergency action. This will be implemented as a stylized static interface, not a functional application.
- Add a visible **In development** status indicator.
- Include a small disclaimer in the content model or launch checklist that all safety-related wording is conceptual and must not imply medical or emergency-service certification.
- Do not include an app-store button, launch date, performance metric, or availability claim unless the client later supplies one.

### F. Working Principles

Purpose: differentiate TechEaZe through its process without overloading the page.

Present a simple three-step horizontal timeline on desktop and vertical flow on mobile:

1. **Understand deeply** — uncover the actual user and business problem.
2. **Design deliberately** — prototype the clearest useful experience.
3. **Build responsibly** — deliver with quality, accessibility, and room to evolve.

Each step receives a number, one-sentence explanation, and a subtle connecting line that animates into view.

### G. Closing Call to Action

Purpose: provide a strong final conversion moment.

- Headline: **Have a hard problem worth solving?**
- Supporting line inviting founders, organizations, and potential partners to start a conversation.
- Primary action: `mailto:hello@techeaze.com` with label **Start a conversation**.
- Secondary display of the placeholder email so the destination is transparent.
- Use a high-contrast white or bright-blue panel against the dark page to create a clear visual finish.

### H. Footer

- TechEaZe wordmark.
- Short positioning line.
- In-page links for About, Capabilities, and RescuAR.
- Dynamic current year.
- No social links unless real profile URLs are supplied.

## 5. Visual System

### Color

- Deep navy page base: approximately `#061426`.
- Secondary navy surfaces: approximately `#0A2038` and `#102B49`.
- White primary text: approximately `#F7FAFC`.
- Muted blue-gray text: approximately `#9DB0C5`.
- Electric-blue accent: approximately `#35A7FF`.
- Pale blue highlight: approximately `#B9E3FF`.
- Borders use translucent blue-white values rather than flat gray.
- Final values should be defined as reusable CSS custom properties.

### Typography

- Use a public Google font pairing that can be imported directly in CSS:
  - **Manrope** for display headings and body copy.
  - **IBM Plex Mono** for labels, status text, and technical accents.
- Use large but controlled responsive headings with `clamp()`.
- Keep body copy widths narrow enough for comfortable reading.

### Layout

- Maximum content width around 1200–1280px.
- Strong 12-column desktop grid, collapsing naturally at tablet and mobile sizes.
- Generous section spacing and consistent content rhythm.
- Cards use modest corner radii; avoid excessive pill-shaped containers.
- Decorative effects remain behind content and never reduce readability.

### Brand Motifs

- Precision grid lines.
- Orbit/radar arcs.
- Small coordinate-like mono labels.
- Layered translucent interface surfaces.
- Thin electric-blue directional lines.

These motifs should recur sparingly so the site feels cohesive rather than themed.

## 6. Interaction and Motion

- Smooth in-page navigation, with scroll offsets for the sticky header.
- Mobile menu with keyboard-operable trigger, `aria-expanded`, and automatic close after selecting a link.
- Button hover/focus states include subtle translation and color shift.
- Capability cards receive a restrained hover response.
- Sections reveal softly as they enter the viewport using a lightweight `IntersectionObserver` hook.
- Hero visual uses low-amplitude ambient movement.
- `prefers-reduced-motion: reduce` disables smooth scrolling, ambient animation, and reveal transitions.
- No autoplay video, cursor replacement, heavy canvas effect, or scroll hijacking.

## 7. Responsive Behavior

- **Desktop:** two-column hero and product layouts, three-column capability cards, horizontal process timeline.
- **Tablet:** reduced visual scale, two-column content where space allows, compact navigation.
- **Mobile:** single-column flow, simplified decorative layers, capability cards stacked, process timeline vertical, full-width primary CTAs.
- Ensure no decorative element causes horizontal overflow.
- Maintain touch targets of at least 44px.

## 8. Accessibility and Semantic Requirements

- Use semantic landmarks: `header`, `nav`, `main`, named `section` elements, and `footer`.
- Maintain one clear `h1` and logical heading order.
- Include a keyboard-visible “Skip to content” link.
- Ensure text and interactive controls meet WCAG AA contrast.
- Provide meaningful labels for icon-only mobile controls.
- Mark decorative visuals as hidden from assistive technology.
- Keep focus states visible and consistent.
- Do not rely on color alone for status or interaction feedback.
- Make email purpose and destination explicit.

## 9. Implementation Scope

### Existing stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 4

### Planned file changes

- `src/App.tsx`
  - Build the complete single-page structure.
  - Keep repeated navigation, capability, and principle content in small local data arrays.
  - Add only small local components where they materially improve readability, such as `SectionLabel`, `ArrowIcon`, and the reveal wrapper/hook.
  - Implement mobile navigation state and semantic interactions.
- `src/index.css`
  - Import Google fonts before the Tailwind import.
  - Define theme custom properties, global base styles, focus treatment, background textures, and reusable animation keyframes.
  - Add reduced-motion handling.
- `index.html`
  - Update the document title and meta description for TechEaZe.
- `public/favicon.svg`
  - Replace the starter favicon with a simple TechEaZe geometric mark if the existing icon is generic.

No new runtime dependencies are necessary. Icons and visual diagrams should use lightweight inline SVG or CSS rather than adding an icon package.

## 10. Content and Data Flow

- All page content is static and stored locally in `App.tsx`.
- Navigation uses hash anchors to page sections.
- The contact CTA uses a standard `mailto:` link.
- There is no form submission, authentication, analytics, CMS, API, database, or server-side behavior.
- RescuAR mockup content is presentational only.

## 11. Edge Cases and Failure Modes

- If the placeholder email is not replaced before launch, the CTA may point to a nonexistent mailbox; include this in the launch checklist.
- RescuAR’s safety-related copy must remain clearly conceptual until product claims are approved.
- If JavaScript fails, static page content and mail links should remain understandable; only reveal effects and mobile menu behavior may be reduced.
- If font loading fails, use a strong system sans-serif and monospace fallback stack.
- Very long translated content is out of scope, but layouts should avoid hard-coded heights that would prevent future expansion.

## 12. Verification Strategy

After implementation:

1. Run the repository-prescribed formatter: `pnpm format`.
2. Run the production build: `pnpm build`.
3. Inspect the existing preview at representative mobile, tablet, and desktop widths.
4. Verify:
   - All navigation anchors reach the correct sections.
   - Sticky navigation does not cover section headings.
   - Mobile menu works by keyboard and pointer.
   - The `mailto:` destination and label are correct.
   - Focus states are visible.
   - Reduced-motion mode suppresses nonessential animation.
   - No horizontal overflow appears.
   - Text remains legible over decorative effects.
   - Browser console has no app errors.
5. Do a final content pass for unsupported claims and placeholder details.

## 13. Launch Checklist / Client-Supplied Items

Before public launch, the client should:

- Replace `hello@techeaze.com` if it is not the actual public contact address.
- Confirm the exact RescuAR audience, functionality, development status, and approved safety language.
- Supply a real logo only if the custom text/geometric treatment should be replaced.
- Supply legal company details or required privacy/legal links, if applicable.
- Supply real social profile URLs if they should appear in the footer.

## 14. Explicitly Out of Scope

- Backend or CMS
- Contact-form processing
- Blog, case-study detail pages, or multi-page routing
- Client portal or authentication
- Functional RescuAR prototype
- Invented testimonials, customer logos, statistics, awards, or certifications
- Analytics, cookies, or consent management
- Localization
