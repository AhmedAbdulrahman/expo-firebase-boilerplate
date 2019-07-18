import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  elevation: 1;
  border-radius: 2;
  background-color: ${({ theme }) => theme.palette.common.black};
  padding: 14px;
  height: 40px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.font.cera[700]};
  font-size: 14;
  letter-spacing: ${() => 11 * 0.1};
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.common.white};
`;
