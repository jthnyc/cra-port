import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import loadLocale from "./locales";

const initI18n = async () => {
  const translations = await loadLocale("en");

  await i18n.use(initReactI18next).init({
    resources: { en: translations }, // Load initial translations before rendering
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    initImmediate: false,
  });
  console.log("✅ i18n initialized with resources:", i18n.options.resources);
};

// 🔹 Store the initialization promise and export promise to make sure App waits
const i18nInitPromise = initI18n();

// Load translations dynamically when language changes
i18n.on("languageChanged", async (lang) => {
  console.log(`🌍 Language switched to: ${lang}`);
  const translations = await loadLocale(lang);
  Object.keys(translations).forEach((ns) => {
    i18n.addResourceBundle(lang, ns, translations[ns].default || translations[ns]);
  });
});

export { i18nInitPromise };
export default i18n;
