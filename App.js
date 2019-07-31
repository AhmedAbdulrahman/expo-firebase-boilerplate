import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { compose } from 'recompose';
import { ThemeProvider } from 'styled-components';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { withAppContext, withAppProvider } from '@containers/App/AppContext';
import { withAuthentication } from './hocs/sessions';
import AppSwitchNavigator from '@navigation/AppSwitchNavigator';
import createTheme from '@components/styles/createTheme';

const App = props => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <ThemeProvider
        theme={createTheme({
          palette: {
            type: props.darkMode ? 'dark' : 'light',
          },
        })}>
        <View style={styles.container}>
          <StatusBar
            style={styles.statusbar}
            barStyle={props.darkMode ? 'light-content' : 'dark-content'}
          />
          <AppSwitchNavigator
            screenProps={{
              ...props,
              // isLoadingComplete,
            }}
          />
        </View>
      </ThemeProvider>
    );
  }
};

export default compose(
  withAppProvider(),
  withAppContext(),
  withAuthentication
)(App);

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('@assets/images/robot-dev.png'),
      require('@assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'SpaceMono ': require('@assets/fonts/SpaceMono-Regular.ttf'),
      // 'space-mono': require('@assets/fonts/SpaceMono-Bold.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    height: Platform.select({
      android: Constants.statusBarHeight,
      ios: Platform.Version < 11 ? Constants.statusBarHeight : 0,
    }),
  },
});
