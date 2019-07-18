import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
// Locales
import en from './locales/en/common.json';
import ar from './locales/ar/common.json';
import tr from './locales/tr/common.json';

i18n.defaultLocale = 'en';
i18n.locale = Localization.locale;
i18n.translations = { en, ar, tr };
i18n.fallbacks = true;

export default i18n;
