import React from 'react';
import styled from 'styled-components/native';
import { BottomTabBar } from 'react-navigation';

const TabBarUI = styled(BottomTabBar)`
  height: 50;
  border-top-width: 0;
  box-shadow: -10px 1px 15px rgba(0, 0, 0, 0.3);
  background: ${({ theme }) => theme.palette.common.white};
`;

const TabBar = props => <TabBarUI {...props}></TabBarUI>;

export default TabBar;
