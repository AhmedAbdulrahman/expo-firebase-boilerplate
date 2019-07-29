import React from 'react';
import { View } from 'react-native';
import SettingsListItem from '../SettingListItem';

const settings = [
  {
    name: 'settings.display_language',
    screen: 'LanguageSelector',
  },
  {
    name: 'settings.about',
    screen: 'About',
  },
];

const SettingsList = ({ t, locale, onPressItem }) => (
  <View>
    {settings.map(item => (
      <SettingsListItem
        key={item.name}
        title={t(item.name)}
        locale={locale}
        onPress={() => onPressItem(item.screen)}
      />
    ))}
  </View>
);

export default SettingsList;
