/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { View } from 'react-native';
import { compose } from 'recompose';
import Container from '@components/Container';
import { HeaderMain, Body, BodyBold } from '@components/Text';
import { screens } from '@navigation/constants';
import { withAuthorization } from '../hocs/sessions';
import AuthUserContext from '../hocs/sessions/context';

const Home = ({ navigation, screenProps: { t, locale } }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Container>
        <HeaderMain>{t('home.message')}</HeaderMain>
        <BodyBold onPress={() => navigation.navigate(screens.detail)}>{t('home.go')}</BodyBold>
        <Body>Current locale: {locale}. </Body>
        <View style={{ marginTop: 40 }}>
          <BodyBold style={{ fontSize: 20 }}>Firebase Current User</BodyBold>
          <Body>Email: {authUser.email}. </Body>
          <Body>Email Verified: {authUser.emailVerified}. </Body>
          <Body>Username: {authUser.username}. </Body>
        </View>
        {authUser && authUser.roles && authUser.roles.ADMIN && (
          <View style={{ marginTop: 140 }}>
            <BodyBold>User Role is : {authUser.roles.ADMIN}</BodyBold>
            <Body style={{ fontSize: 20 }}>Admin Area</Body>
          </View>
        )}
      </Container>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default compose(withAuthorization(condition))(Home);
