import styled, { css } from 'styled-components/native';

const TextUI = styled.Text``;

export const Label = styled(TextUI)`
  font-size: 11;
  line-height: ${() => 11 * 1.2};
  letter-spacing: ${() => 9 * 0.1};
  text-transform: uppercase;
  color: ${({ theme, focused }) =>
    focused ? theme.palette.primary.accent : theme.palette.text.hint};
  margin-bottom: 4px;
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`;

export const Body = styled(TextUI)`
  font-size: 16;
  line-height: ${() => 16 * 1.15};
  letter-spacing: ${() => 16 * 0.02};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const BodyBold = styled(Body)`
  text-decoration: underline;
`;

export const HeaderMain = styled.Text`
  font-size: 26;
  line-height: 26;
  letter-spacing: ${() => 26 * 0.1};
  color: ${({ theme }) => theme.palette.text.primary};
  text-transform: uppercase;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

export const FooterLink = styled.Text`
  font-size: 12;
  line-height: ${() => 12 * 1.2};
  letter-spacing: ${() => 12 * 0.1};
  font-family: ${({ theme }) => theme.font.cera[700]};
  text-transform: uppercase;
`;
