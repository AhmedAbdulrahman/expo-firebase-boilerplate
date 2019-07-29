import React from 'react';
import { Text } from 'react-native';
import Container from '@components/Container';

const AboutScreen = () => (
  <Container>
    <Text>About Screen</Text>
  </Container>
);

AboutScreen.navigationOptions = ({ screenProps: { t } }) => ({
  title: t('settings.about'),
});

export default AboutScreen;
