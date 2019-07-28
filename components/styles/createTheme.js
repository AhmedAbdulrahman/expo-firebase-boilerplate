import createPalette from './createPalette';
import createTypography from './createTypography';
import shadows from './shadows';

function createTheme(options = {}) {
  const {
    palette: paletteInput = {},
    shadows: shadowsInput,
    typography: typographyInput = {},
    ...other
  } = options;

  const palette = createPalette(paletteInput);

  return {
    palette,
    shadows: shadowsInput || shadows,
    typography: createTypography(palette, typographyInput),
    other,
  };
}

export default createTheme;
