import styled, { css } from 'styled-components/native';

export default Button = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  elevation: 1;
  border-radius: 2;
  padding: 14px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '10px')};
  width: 100%;
  background-color: ${({ theme }) => theme.palette.text.primary};
  ${props =>
    props.primary &&
    css`
      background-color: ${props.theme.palette.primary.main};
    `}
  ${props =>
    props.secondary &&
    css`
      background-color: ${props.theme.palette.secondary.main};
    `}
  ${props =>
    props.disabled &&
    css`
      background-color: ${props.theme.palette.action.disabledBackground};
    `};
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: 15px;
  letter-spacing: ${() => 11 * 0.1};
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.getContrastText(theme.palette.text.primary)};
  ${props =>
    props.primary &&
    css`
      color: ${props.theme.palette.primary.light};
    `};
  ${props =>
    props.secondary &&
    css`
      color: ${props.theme.palette.secondary.light};
    `};
  ${props =>
    props.disabled &&
    css`
      color: ${props.theme.palette.action.disabled};
    `};
`;
