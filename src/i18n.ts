
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          dashboardTitle: 'Dashboard',
          settingsTitle: 'Settings',
          toggleTheme: 'Toggle Theme',
          language: 'Language',
        },
      },
      es: {
        translation: {
          dashboardTitle: 'Tablero de CI Testkit',
          settingsTitle: 'Configuración',
          toggleTheme: 'Cambiar Tema',
          language: 'Idioma',
        },
      },
      fr: {
        translation: {
          dashboardTitle: 'Tableau de bord CI Testkit',
          settingsTitle: 'Paramètres',
          toggleTheme: 'Changer de thème',
          language: 'Langue',
        },
      },
      de: {
        translation: {
          dashboardTitle: 'CI Testkit-Dashboard',
          settingsTitle: 'Einstellungen',
          toggleTheme: 'Dunkles Thema',
          language: 'Sprache',
        },
      },
    },
  });

export default i18n;
