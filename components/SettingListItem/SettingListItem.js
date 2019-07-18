import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class SettingsListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.listItem, this.props.locale === 'ar' && styles.rtl]}
        onPress={this.props.onPress}>
        <Text style={[styles.listItemText, this.props.locale === 'ar' && styles.textRight]}>
          {this.props.title}
        </Text>
        <Ionicons
          style={styles.icon}
          name={this.props.locale === 'ar' ? 'ios-arrow-back' : 'ios-arrow-forward'}
          size={25}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#434343',
    width: '90%',
  },
  icon: {
    color: '#CCCCCC',
    paddingLeft: 5,
  },
  rtl: {
    flexDirection: 'row-reverse',
  },
  textRight: {
    textAlign: 'right',
    marginRight: 10,
  },
});

export default SettingsListItem;
