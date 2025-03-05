const loadLocale = async (lang) => {
    try {
        console.log(`Loading translations for: ${lang}`);
        const translations = {
            // common: (await import(`./${lang}/common.json`)).default,
            intro: (await import(`./${lang}/intro.json`)).default,
            about: (await import(`./${lang}/about.json`)).default,
            // projects: (await import(`./${lang}/projects.json`)).default
        }
        console.log(`Loaded translations for ${lang}:`, translations);
        return translations;
    } catch (error) {
        console.error(`Error loading ${lang} translations:`, error);
        return {}; // Return an empty object to prevent crashes
    }
    
};

export default loadLocale;