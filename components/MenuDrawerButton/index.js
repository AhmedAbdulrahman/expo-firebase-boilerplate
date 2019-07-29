import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const MenuDrawerButton = ({ navigation, color }) => {
  return (
    <View style={styles.container}>
      {/* Props to open/close the drawer */}
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        {/*Donute Button Image */}
        <Ionicons name="md-menu" color={color} style={styles.icon} size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
});

export default withNavigation(MenuDrawerButton);
