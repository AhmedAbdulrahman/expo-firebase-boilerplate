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

class SettingsList extends React.Component {
  render() {
    return (
      <View>
        {settings.map(item => (
          <SettingsListItem
            key={item.name}
            title={this.props.t(item.name)}
            locale={this.props.locale}
            onPress={() => this.props.onPressItem(item.screen)}
          />
        ))}
      </View>
    );
  }
}

export default SettingsList;
