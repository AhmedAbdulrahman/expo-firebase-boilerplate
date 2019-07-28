import deepmerge from 'deepmerge';
import warning from 'warning';
import blue from '../colors/blue';
import common from '../colors/common';
import green from '../colors/green';
import grey from '../colors/grey';
import pink from '../colors/pink';
import purple from '../colors/purple';
import red from '../colors/red';
import yellow from '../colors/yellow';
import { fade, getContrastRatio } from './utils';
import getEnvVars from '../../environment';

const { env } = getEnvVars();
export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: common.black,
    // Secondary text.
    secondary: fade(common.black, 0.68),
    // Disabled text have even lower visual prominence.
    disabled: grey[500],
    // Text hints.
    hint: grey[300],
  },
  // The color used to divide different elements.
  divider: common.black,
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: common.white,
    linen: '#FBF5F1',
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: common.black,
    // The color of an hovered action.
    hover: fade(common.black, 0.08),
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: fade(common.black, 0.12),
    // The color of a disabled action.
    disabled: grey[500],
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
};

// Unconfigured
export const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    default: grey[700],
    paper: grey[700],
    linen: grey[600],
  },
  action: {
    active: 'rgba(255, 255, 255, 0.7)',
    hover: 'rgba(255, 255, 255, 0.1)',
    hoverOpacity: 0.1,
    selected: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
  },
};

export default function(palette) {
  const {
    primary = {
      light: pink[200],
      main: pink[500],
      dark: pink[600],
      accent: pink.A400,
    },
    secondary = {
      light: purple[200],
      main: purple[500],
      dark: purple[600],
      accent: purple.A400,
    },
    error = {
      main: '#FF0C3E',
    },
    gradients = {
      complex: [pink[500], purple[500], blue[500], green[500]],
      primary: [pink[500], purple[500]],
      secondary: [purple[500], green[500]],
      tertiary: [blue[500], red[500]],
      quaternary: [red[500], yellow[500]],
    },
    type = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2,
    ...other
  } = palette;

  function getContrastText(background) {
    warning(background, `Missing background argument in getContrastText(${background}).`);

    const contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;

    if (env !== 'production') {
      const contrast = getContrastRatio(background, contrastText);
      warning(
        contrast >= 3,
        [
          `The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
          'falls below the WACG recommended absolute minimum contrast ratio of 3:1.',
          'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
        ].join('\n')
      );
    }

    return contrastText;
  }
  const types = { dark, light };

  const paletteOutput = deepmerge(
    {
      // A collection of common colors.
      common,
      // The palette type, can be light or dark.
      type,
      // The colors used to represent primary interface elements for a user.
      primary,
      // The colors used to represent secondary interface elements for a user.
      secondary,
      // The colors used to represent interface elements that the user should be made aware of.
      error,
      // The grey colors.
      grey,
      // The gradients
      gradients,
      getContrastText,
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset,
      // The light and dark type object.
      ...types[type],
    },
    other
  );

  return paletteOutput;
}
