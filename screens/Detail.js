import React from 'react';
import Container from '@components/Container';
import { BodyBold } from '@components/Text';

const Detail = ({ screenProps: { t } }) => (
  <Container>
    <BodyBold>{t('navigation.details')}</BodyBold>
  </Container>
);
export default Detail;
