function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase',
};
const caseNoCaps = {
  textTransform: 'none',
};

export default function createTypography(palette, typography) {
  const {
    fontFamily = '"SpaceMono"',
    fontFamilySecondary = '', // Add secondary font
    // The default font size
    fontSize = 14, // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
  } = typography;

  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, variants) => ({
    // fontFamily,
    fontWeight,
    fontSize: size,
    lineHeight,
    letterSpacing: `${letterSpacing}`,
    ...variants,
  });

  const secondaryFontFamily = {
    fontFamily: fontFamilySecondary,
  };

  const variants = {
    headline1: buildVariant(fontWeightRegular, 48, 1.3, 0.06, secondaryFontFamily),
    headline2: buildVariant(fontWeightRegular, 36, 1.3, 0.06, secondaryFontFamily),
    headline3: buildVariant(fontWeightRegular, 25, 1.3, 0.06, secondaryFontFamily),
    headline4: buildVariant(fontWeightRegular, 21, 1.3, 0.06, secondaryFontFamily),
    headline5: buildVariant(fontWeightRegular, 18, 1.3, 0.06, secondaryFontFamily),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.25, 0),
    subtitle2: buildVariant(fontWeightRegular, 14, 1.43, 0),
    body1: buildVariant(fontWeightRegular, 16, 1.25, 0),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0),
    button: buildVariant(fontWeightRegular, 16, 1.25, 0.05, {
      ...caseNoCaps,
      ...secondaryFontFamily,
    }),
    caption: buildVariant(fontWeightRegular, 12, 1.35, 0),
    overline: buildVariant(fontWeightRegular, 12, 1.35, 0, caseAllCaps),
    subheading1: buildVariant(fontWeightRegular, 21, 1.65, 0),
    subheading2: buildVariant(fontWeightRegular, 18, 1.65, 0),
  };

  return {
    round,
    fontFamily,
    fontFamilySecondary,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    ...variants,
    // other,
  };
}
