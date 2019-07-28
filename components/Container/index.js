import styled from 'styled-components/native';

export default Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
