// utils/navigationHelpers.js
// Shared logic for both desktop Navigation and MobileNav components

export const detectCurrentSection = (scrollY) => {
  const sections = ['intro', 'about', 'projects', 'contact'];
  const scrollPosition = scrollY + 200; // Offset for better detection
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return section;
      }
    }
  }
  
  return 'intro'; // Default fallback
};

export const getVisibleNavLinks = (currentSection, t) => {
  const allLinks = [
    { id: 'intro', label: 'Home', href: '#intro' },
    { id: 'about', label: t("about"), href: '#about' },
    { id: 'projects', label: t("projects"), href: '#projects' },
    { id: 'contact', label: t("contact"), href: '#contact' }
  ];
  
  // Return all links EXCEPT the current section
  return allLinks.filter(link => link.id !== currentSection);
};