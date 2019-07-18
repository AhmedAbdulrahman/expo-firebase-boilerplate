import styled from 'styled-components/native';

const TextUI = styled.Text`
  font-family: ${({ theme }) => theme.font.cera[400]};
`;

export const Label = styled(TextUI)`
  font-family: ${({ theme }) => theme.font.cera[700]};
  font-size: 11;
  line-height: ${() => 11 * 1.2};
  letter-spacing: ${() => 11 * 0.1};
  text-transform: uppercase;
  color: ${({ theme, focused }) =>
    focused ? theme.palette.common.black : theme.palette.common.grey};
`;

export const CaptionRegular = styled(TextUI)`
  font-size: 12;
  line-height: ${() => 12 * 1.15};
  letter-spacing: ${() => 12 * 0.02};
`;

export const CaptionBold = styled(CaptionRegular)`
  font-family: ${({ theme }) => theme.font.cera[700]};
`;

export const HeaderMain = styled.Text`
  font-family: ${({ theme }) => theme.font.cera[500]};
  font-size: 26;
  line-height: 26;
  letter-spacing: ${() => 26 * 0.1};
  color: ${({ theme }) => theme.palette.common.white};
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
