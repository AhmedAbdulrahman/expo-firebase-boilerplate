import styled from 'styled-components/native';

export default Container = styled.View`
  flex: 1;
  align-items: ${({ justifyItems = 'center' }) => justifyItems};
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  padding-horizontal: ${({ paddingHorizontal = 20 }) => `${paddingHorizontal}px`};
  padding-vertical: ${({ paddingVertical = 0 }) => `${paddingVertical}px`};
  background-color: ${({ theme }) => theme.palette.background.default};
`;
