import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from 'styled-components';

const TabBarIcon = props => {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={styles.icon}
      color={props.focused ? theme.palette.common.black : theme.palette.common.grey}
    />
  );
};

export default withTheme(TabBarIcon);

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
});
