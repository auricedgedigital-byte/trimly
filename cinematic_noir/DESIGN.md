---
name: Cinematic Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d2c4b5'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9b8f81'
  outline-variant: '#4e4539'
  surface-tint: '#ebc07e'
  primary: '#ebc07e'
  on-primary: '#432c00'
  primary-container: '#c59d5f'
  on-primary-container: '#4f3400'
  inverse-primary: '#795921'
  secondary: '#d8c4a4'
  on-secondary: '#3b2f18'
  secondary-container: '#53452d'
  on-secondary-container: '#c6b294'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#a3a4a4'
  on-tertiary-container: '#383a3b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddae'
  primary-fixed-dim: '#ebc07e'
  on-primary-fixed: '#281800'
  on-primary-fixed-variant: '#5e410b'
  secondary-fixed: '#f5e0bf'
  secondary-fixed-dim: '#d8c4a4'
  on-secondary-fixed: '#241a06'
  on-secondary-fixed-variant: '#53452d'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: ebGaramond
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  title-sm:
    fontFamily: hankenGrotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  body-base:
    fontFamily: hankenGrotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-sm:
    fontFamily: hankenGrotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: hankenGrotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 80px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style

The design system is engineered for the "Trimly" ecosystem—a luxury AI operating system tailored for elite barbering. The brand personality is authoritative yet discreet, blending the heritage of traditional grooming with high-performance computational aesthetics. It targets a high-end demographic that values precision, exclusivity, and a seamless digital-to-physical experience.

The visual style is a fusion of **Cinematic Minimalism** and **Glassmorphism**. It utilizes a "Dark Canvas" philosophy where deep blacks and charcoal surfaces provide a high-contrast stage for golden accents and luminous UI elements. The atmosphere is intentional, evokes a sense of "digital silk," and maintains a premium streetwear energy through sharp geometry and expansive white space.

## Colors

The palette is anchored in a monochromatic dark spectrum to establish a cinematic foundation. 
- **The Canvas (#0D0D0D)**: Used for deep backgrounds to create an infinite depth effect.
- **The Accents (#C59D5F, #E8D3B3)**: Inspired by luxury horology and premium hardware, these gold and champagne tones are used sparingly for calls to action, active states, and critical brand moments.
- **The Light (#FFFFFF, #F7F7F2)**: Pure whites and bone-whites are reserved for high-readability typography and sharp hairline borders.

Gradients should be used with extreme restraint, primarily as "inner glows" within glass containers or as subtle radial blurs behind primary action buttons to simulate a soft magnetic aura.

## Typography

This design system employs a high-contrast typographic pairing to signal luxury and modernity.
- **Headlines**: **EB Garamond** (inspired by the serif profile of Roxborough-light) provides a timeless, editorial feel. Large display sizes should use tight tracking for a dramatic, cinematic look.
- **Body & UI**: **Hanken Grotesk** offers a sharp, technical counterpoint. It is used for all functional interface elements, utilizing generous letter spacing (tracking) in uppercase labels to reinforce the premium streetwear aesthetic.
- **Hierarchy**: Distinction is created through drastic scale shifts rather than weight changes, maintaining a "light" and sophisticated feel throughout the OS.

## Layout & Spacing

The system follows a **Fixed Grid** model for desktop and a fluid, safe-margin-led approach for mobile. 
- **Grid**: A 12-column grid with wide 24px gutters creates a structured, rhythmic layout.
- **Rhythm**: All spacing is based on a 4px base unit. Negative space (whitespace) is treated as a core design element; headers and key sections should be separated by `xxl` (80px) tokens to evoke a sense of calm and exclusivity.
- **Alignment**: Center-aligned typography is preferred for "hero" or "moment" screens, while functional dashboard layouts should utilize strict left-alignment with generous internal padding within cards.

## Elevation & Depth

Depth in this design system is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows.
- **Levels**:
  - **Level 0 (Canvas)**: `#0D0D0D`.
  - **Level 1 (Card)**: `#151515` with a 1px solid stroke of `#FFFFFF` at 10% opacity.
  - **Level 2 (Glass Overlay)**: A background blur of 15px-20px with a 15% opacity fill of `#1F1F1F`.
- **Inner Glow**: Elevated components feature a subtle "top-light" effect—a faint 1px inner-shadow (white at 15% opacity) on the top edge to simulate physical lighting.
- **Transitions**: Any change in elevation should be accompanied by a 400ms "Ease-Out-Expo" transition to maintain the cinematic feel.

## Shapes

The shape language is "Soft-Modern." While the energy is masculine and minimalist, sharp edges are avoided to ensure the UI feels approachable and high-tech.
- **Standard Radius**: 4px (`rounded-sm`) for inputs and small chips.
- **Card Radius**: 8px (`rounded-lg`) for main containers.
- **Button Radius**: 4px or full-pill depending on context; however, the 4px "Soft" radius is the system default to maintain a structured look.

## Components

- **Magnetic Buttons**: Buttons feature a "Luxury Gold" border or fill. On hover, they should exhibit a "magnetic" pull towards the cursor and emit a subtle radial glow (`#C59D5F` at 20% opacity) behind the element.
- **Glassmorphic Cards**: Used for AI insights and scheduling blocks. Must feature a `15px` backdrop blur and a `1px` white border at low opacity.
- **Input Fields**: Minimalist design with only a bottom border (`1px`) that transitions from `#1F1F1F` to `#C59D5F` on focus. Typography within is always `Hanken Grotesk`.
- **Minimalist Navigation**: A floating bottom-bar or a sidebar that uses icon-only states until hovered, expanding with a cinematic slide-and-blur effect.
- **Skeleton Loaders**: Instead of gray blocks, use a shimmering gradient that mimics the "Champagne Cream" (`#E8D3B3`) light moving across a dark surface.
- **Barber-Specific Components**: 
  - **Dynamic Timelines**: A vertical line component using gold accents for current time indicators.
  - **High-Fidelity Photo Slots**: Large-scale image containers with "inner-vignette" overlays to ensure text readability over client photos.