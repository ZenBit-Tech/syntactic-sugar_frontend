import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
//Import all translation files
import translationEnglish from "./translation/English/translation.json"
import translationFrench from "./translation/French/translation.json";
import translationUkrainian from "./translation/Ukrainian/translation.json";


const resources = {
    en: {
        translation: translationEnglish,
    },
    ua: {
        translation: translationUkrainian,
    },
    fr: {
        translation: translationFrench,
    },
}

i18next
.use(initReactI18next)
.use(Backend)
.use(LanguageDetector)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;



