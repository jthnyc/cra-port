const loadLocale = async (lang) => {
    try {
        const translations = {
            common: (await import(`./${lang}/common.json`)).default,
            intro: (await import(`./${lang}/intro.json`)).default,
            about: (await import(`./${lang}/about.json`)).default,
            projects: (await import(`./${lang}/projects.json`)).default
        }
        return translations;
    } catch (error) {
        console.error(`Error loading ${lang} translations:`, error);
        return {}; // Return an empty object to prevent crashes
    }
    
};

export default loadLocale;