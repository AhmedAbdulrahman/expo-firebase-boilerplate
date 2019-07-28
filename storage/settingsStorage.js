import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'SETTINGS';

const DEFAULT_SETTINGS = {
  dark: false,
  locale: 'en',
};

export const loadSettings = async () => {
  try {
    const settings = await AsyncStorage.getItem(STORAGE_KEY);
    if (settings === null) {
      return DEFAULT_SETTINGS;
    }
    return JSON.parse(settings);
  } catch (error) {
    console.log('Error loading settings', error);
  }
};

export const saveSettings = async settings => {
  try {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.log('Error loading settings', error);
  }
};
