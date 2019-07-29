import styled, { css } from 'styled-components/native';

// This View is needed to propertly algin the TextField
export const TextInputWrapper = styled.View`
  width: 100%;
  min-height: 50px;
  padding-horizontal: 15;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '10px')};
  ${props =>
    props.disabled &&
    css`
      border-bottom-color: ${props.theme.palette.text.disabled};
    `};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  align-self: center;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  color: ${({ theme }) => theme.palette.text.secondary};
`;
