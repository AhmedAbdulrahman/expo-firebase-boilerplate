import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from 'react-navigation';

const TabBar = props => <BottomTabBar style={styles.tabBar} {...props}></BottomTabBar>;

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    borderTopWidth: 0,
    backgroundColor: '#fff',
  },
});

export default TabBar;
