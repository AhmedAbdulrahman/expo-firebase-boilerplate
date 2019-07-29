import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from 'styled-components';

const TabBarIcon = props => {
  return (
    <Ionicons
      name={props.name}
      size={25}
      style={styles.icon}
      color={props.focused ? props.theme.palette.primary.accent : props.theme.palette.text.hint}
    />
  );
};

export default withTheme(TabBarIcon);

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
});
