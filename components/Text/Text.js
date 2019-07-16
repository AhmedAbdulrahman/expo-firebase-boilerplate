import React from 'react';
import { Text as MonoText, StyleSheet } from 'react-native';

const Text = props => {
  return <MonoText {...props} style={[props.style, styles.text]} />;
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'space-mono',
  },
});
