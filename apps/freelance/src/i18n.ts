import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEnglish from "./translation/translation.json";


const resources = {
  en: {
    translation: translationEnglish,
  }
}

i18next
.use(initReactI18next)
.use(Backend)
.use(LanguageDetector)
.init({
  resources,
  lng:"en",
});

export default i18next;



