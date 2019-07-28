import React from 'react';
import { loadSettings, saveSettings } from '@storage/settingsStorage';
import i18n from '@i18n';

export const defaultState = {
  locale: i18n.locale,
  dark: false,
};

export default (initialState = defaultState) => {
  const [locale, setLocale] = React.useState(initialState.locale);
  const [darkMode, setDarkMode] = React.useState(initialState.dark);

  async function getSettings() {
    // We can await here
    const loadInitialState = await loadSettings();
    setLocale(loadInitialState.locale);
    setDarkMode(loadInitialState.dark);
  }
  // Side effects
  React.useEffect(() => {
    getSettings();
  }, []);

  // Event handlers
  const changeLocale = locale => setLocale(locale);
  const t = (scope, options) => i18n.t(scope, { locale: locale, ...options });

  const toggleTheme = () => {
    const dark = !darkMode;

    saveSettings({ locale, dark });
    setDarkMode(dark);
  };

  return {
    // State props
    locale,
    darkMode,
    // Handler props
    changeLocale,
    toggleTheme,
    t,
  };
};
