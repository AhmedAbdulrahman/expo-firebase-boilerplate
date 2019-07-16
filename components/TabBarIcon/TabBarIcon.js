import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@constants/Colors';

const TabBarIcon = props => {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={styles.icon}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
});
