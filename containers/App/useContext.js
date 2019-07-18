import React from 'react';
import { loadSettings } from '@storage/settingsStorage';
import i18n from '@i18n';

export const defaultState = {
  locale: i18n.locale,
  name: '',
};

export default (initialState = defaultState) => {
  const [locale, setLocale] = React.useState(initialState.locale);
  const [name, setName] = React.useState(initialState.name);

  async function getSettings() {
    // We can await here
    const loadInitialState = await loadSettings();
    setLocale(loadInitialState.locale);
    setName(loadInitialState.name);
  }
  // Side effects
  React.useEffect(() => {
    getSettings();
  }, []);

  // Event handlers
  const changeLocale = locale => setLocale(locale);
  const changeName = name => setName(name);
  const t = (scope, options) => i18n.t(scope, { locale: locale, ...options });

  return {
    // State props
    locale,
    name,
    // Handler props
    changeLocale,
    changeName,
    t,
  };
};
