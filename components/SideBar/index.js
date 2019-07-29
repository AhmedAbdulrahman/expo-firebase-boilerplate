import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { BodyBold } from '@components/Text';
import SwitchToggle from '@components/SwitchToggle';

class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      'https://cdn.freebiesupply.com/logos/large/2x/react-native-firebase-1-logo-png-transparent.png';
    this.items = [
      {
        navOptionThumb: 'information-circle-outline',
        navOptionName: 'Home',
        screenToNavigate: 'Home',
      },
      {
        navOptionThumb: 'image',
        navOptionName: 'Profile',
        screenToNavigate: 'Profile',
      },
      {
        navOptionThumb: 'build',
        navOptionName: 'Settings',
        screenToNavigate: 'Settings',
      },
    ];
  }
  render() {
    const {
      screenProps: { darkMode, toggleTheme, theme },
    } = this.props;

    return (
      <View
        style={[styles.sideMenuContainer, { backgroundColor: theme.palette.background.default }]}>
        {/*Top Large Image */}
        <Image source={{ uri: this.proileImage }} style={styles.sideMenuProfileIcon} />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <ScrollView
          style={{
            flex: 1,
            width: '100%',
          }}>
          <SafeAreaView forceInset={{ horizontal: 'never' }}>
            {Array.from(new Array(5), (val, index) => (
              <TouchableOpacity style={styles.listItem} key={index}>
                <Ionicons
                  name="md-information-circle"
                  size={26}
                  color={theme.palette.text.primary}
                />
                <BodyBold style={styles.listItemText}>Screen {index + 1}</BodyBold>
              </TouchableOpacity>
            ))}
          </SafeAreaView>
        </ScrollView>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <SwitchToggle
            size="medium"
            isOn={darkMode}
            onToggle={toggleTheme}
            icon={darkMode ? '🌚' : '☀️'}
          />
        </View>
      </View>
    );
  }
}
export default CustomSidebarMenu;
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#C8C8CA',
    borderBottomWidth: 1,
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 18,
    // color: '#434343',
    textDecorationLine: 'none',
  },
});
