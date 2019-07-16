import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

const MenuDrawer = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export default MenuDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
