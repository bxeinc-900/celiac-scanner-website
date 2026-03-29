# Design System Documentation: High-Trust Health Editorial

## 1. Overview & Creative North Star
**Creative North Star: The Clinical Sanctuary**
The objective of this design system is to transcend the "utility app" aesthetic and move into the realm of a high-end digital concierge. For an app dealing with Celiac safety, trust is the primary currency. We achieve this not through rigid grids and harsh lines, but through **The Clinical Sanctuary**—a design philosophy that blends the sterile precision of a medical laboratory with the warmth and breathability of a premium wellness editorial.

This system breaks the "template" look by utilizing intentional asymmetry, high-contrast typography scales, and layered surfaces. We avoid the "boxed-in" feeling of traditional apps by allowing elements to float and overlap, creating a sense of depth and organic flow that feels safe yet sophisticated.

---

## 2. Colors & Tonal Depth
Our palette is rooted in the organic reliability of Sage Green and the calming warmth of Cream. We use color to define structure, never relying on lines.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts.
- To separate a header from a body, transition from `surface` (#fbfbe2) to `surface-container-low` (#f5f5dc).
- For distinct content blocks, use a subtle shift to `surface-container-highest` (#e4e4cc).

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of fine paper or frosted glass.
- **Base Layer:** `surface` (#fbfbe2).
- **Secondary Content:** `surface-container-low` (#f5f5dc).
- **Interactive Cards:** `surface-container-lowest` (#ffffff) to provide a "lifted" feel against the cream background.

### The "Glass & Gradient" Rule
To elevate the experience, use Glassmorphism for floating overlays (e.g., bottom navigation bars or modal headers).
- **Glass Token:** `surface-container-low` at 70% opacity with a `24px` backdrop-blur.
- **Signature Gradient:** For primary CTAs and Hero sections, use a linear gradient: `primary` (#56642b) at 0% to `primary-container` (#8a9a5b) at 100%. This provides a visual "soul" that flat colors lack.

---

## 3. Typography
We use a dual-typeface system to balance clinical authority with modern elegance.

- **Display & Headlines (Manrope):** This is our "Editorial" voice. Use `display-lg` through `headline-sm` to create an authoritative, architectural feel. Headlines should have tighter letter-spacing (-0.02em) to feel premium and "tight."
- **Body & Labels (Inter):** This is our "Functional" voice. Inter provides maximum legibility for ingredient lists and safety warnings. Use `body-md` for standard text and `label-md` for metadata.
- **Hierarchy Tip:** Use `tertiary` (#b42900) sparingly for high-alert "Gluten Detected" warnings, ensuring it contrasts sharply against the `surface` palette.

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering** rather than traditional drop shadows.

- **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f5f5dc) background. The subtle 2% difference in luminosity creates a sophisticated, natural lift.
- **Ambient Shadows:** When a true floating effect is required (e.g., a "Scan" button), use an extra-diffused shadow.
    - *Blur:* 32px
    - *Spread:* -4px
    - *Color:* `on-surface` (#1b1d0e) at 6% opacity. Never use pure black or grey shadows.
- **The "Ghost Border" Fallback:** If a border is required for accessibility in high-glare environments, use the `outline-variant` token (#c6c8b8) at 15% opacity. **Never use 100% opaque borders.**

---

## 5. Components

### Buttons
- **Primary:** Rounded-xl (`1.5rem`). Background: Signature Gradient (Sage). Text: `on-primary` (#ffffff).
- **Secondary:** Rounded-xl (`1.5rem`). Background: `secondary-fixed` (#dde1ff). Text: `on-secondary-fixed` (#001256).
- **Tertiary:** No background. Text: `primary` (#56642b). High-contrast bold weight.

### Cards & Lists
- **Rule:** Forbid the use of divider lines.
- **Implementation:** Separate list items using `spacing-4` (1rem) of vertical white space or by alternating background tones between `surface` and `surface-container-low`.
- **Scanning Cards:** Use Glassmorphism (70% opacity + blur) to overlay ingredient results over the camera view.

### Input Fields
- **Styling:** Use `surface-container-highest` (#e4e4cc) as the background fill with a `rounded-md` (0.75rem) corner radius.
- **States:** On focus, transition the background to `surface-container-lowest` and add the "Ghost Border" at 20% opacity.

### Signature Component: The "Safety Gauge"
A custom health component for this design system. A wide, low-profile semi-circle gauge using a gradient from `primary` to `tertiary` to indicate the "Celiac Safety Rating" of a scanned product.

---

## 6. Do's and Don'ts

### Do
- **Do** use asymmetric padding. For example, a card might have `spacing-8` on the top and `spacing-6` on the sides to create an editorial feel.
- **Do** use `primary-fixed-dim` (#bdce89) for subtle background accents behind icons.
- **Do** ensure all "Health" icons are drawn with a consistent 2px stroke weight to match the Inter typography.

### Don't
- **Don't** use pure black (#000000) for text. Use `on-surface` (#1b1d0e) to maintain the soft, high-trust organic feel.
- **Don't** use standard Material Design "Elevated" shadows. They are too aggressive for this "Sanctuary" aesthetic.
- **Don't** use hard 90-degree corners. Even the most "functional" elements should have at least `sm` (0.25rem) rounding to feel "safe" and "human."