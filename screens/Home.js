/* eslint-disable react-native/no-raw-text */
import React from 'react';
import Container from '@components/Container';
import { HeaderMain, Body, BodyBold } from '@components/Text';
import { screens } from '@navigation/constants';

const Home = ({ navigation, screenProps: { t, locale } }) => (
  <Container>
    <HeaderMain>{t('home.message')}</HeaderMain>
    <BodyBold onPress={() => navigation.navigate(screens.detail)}>{t('home.go')}</BodyBold>
    <Body>Current locale: {locale}. </Body>
  </Container>
);

export default Home;
