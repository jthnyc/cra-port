// Breakpoint strategy:
// - Mobile nav appears when Intro section stacks (1070px) to keep navigation UX aligned with layout changes
// - Desktop nav shows when intro is side-by-side layout

const size = {
  mobileS: "320px",
  xs: "375px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  desktop: "1070px",  // Intro stacking point - our mobile nav trigger
  xl: "1200px",
  xxl: "1400px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  desktop: `(max-width: ${size.desktop})`,  // Use this for mobile nav trigger
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};

// USAGE:
// Mobile nav: @media ${device.desktop} { display: flex; }
// Desktop nav: @media (min-width: 1071px) { display: block; }