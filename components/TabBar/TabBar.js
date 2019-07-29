import React from 'react';
import styled from 'styled-components/native';
import { BottomTabBar } from 'react-navigation';

const TabBarUI = styled(BottomTabBar)`
  height: 55;
  border-top-width: 1;
  border-top-color: ${({ theme }) => theme.palette.action.disabledBackground};
  background: ${({ theme }) => theme.palette.background.default};
`;

const TabBar = props => <TabBarUI {...props}></TabBarUI>;

export default TabBar;
