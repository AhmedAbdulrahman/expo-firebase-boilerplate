import warning from 'warning';

export function getLuminance(color) {
  color = decomposeColor(color);

  let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    val /= 255; // normalized
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

export function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

// Returns a number whose value is limited to the given range.
export function clamp(value, min = 0, max = 1) {
  warning(
    value >= min && value <= max,
    `Material-UI: the value provided ${value} is out of range [${min}, ${max}].`
  );

  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

// Converts a color from CSS hex format to CSS rgb format.
export function hexToRgb(color) {
  color = color.substr(1);

  const re = new RegExp(`.{1,${color.length / 3}}`, 'g');
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }

  return colors ? `rgb(${colors.map(n => parseInt(n, 16)).join(', ')})` : '';
}

// Converts a color object with type and values to a string.
export function recomposeColor(color) {
  const { type } = color;
  let { values } = color;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => (i < 3 ? parseInt(n, 10) : n));
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }

  return `${type}(${values.join(', ')})`;
}

// Returns an object with the type and values of a color.
export function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error(
      [
        `Unsupported \`${color}\` color.`,
        'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().',
      ].join('\n')
    );
  }

  let values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(value => parseFloat(value));

  return { type, values };
}

// Set the absolute transparency of a color.
export function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  color.values[3] = value;

  return recomposeColor(color);
}
