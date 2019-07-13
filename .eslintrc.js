const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: [
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'prettier',
    'prettier/react',
  ],
  env: {
    browser: true,
    'react-native/react-native': true,
  },
  plugins: ['react', 'react-native', 'react-hooks'],
  parser: 'babel-eslint', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'global-require': OFF,
    'arrow-body-style': OFF, // Don't enforce, readability firsthand.',
    'consistent-this': [ERROR, 'self'],
    'no-alert': ERROR,
    'no-console': ERROR,
    'no-constant-condition': ERROR,
    'no-param-reassign': OFF,
    'no-prototype-builtins': OFF,
    'prefer-arrow-callback': [ERROR, { allowNamedFunctions: true }],
    'prefer-destructuring': OFF, // Destructuring harm grep potential.
    'no-unused-vars': [ERROR, { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],

    'promise/prefer-await-to-then': WARNING,

    'react/destructuring-assignment': OFF,
    'react/forbid-prop-types': OFF,
    'react/jsx-curly-brace-presence': OFF,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js'] }],
    'react/no-danger': ERROR,
    // Strict
    'react/no-direct-mutation-state': ERROR,
    'react/no-multi-comp': OFF,
    'react/require-default-props': OFF,
    'react/sort-prop-types': OFF,
    'react/no-unused-prop-types': OFF,
    'react/prop-types': OFF,
    'react/display-name': OFF,
    'react/no-multi-comp': [WARNING, { ignoreStateless: true }],

    'react-native/no-unused-styles': ERROR,
    'react-native/split-platform-components': OFF,
    'react-native/no-inline-styles': WARNING,
    'react-native/no-color-literals': WARNING,
    'react-native/no-raw-text': ERROR,

    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARNING,

    'import/namespace': [ERROR, { allowComputed: true }],
    'import/no-extraneous-dependencies': OFF, // It would be better to enable this rule.
    'import/first': OFF,
    'import/order': [
      ERROR,
      {
        groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin']],
        'newlines-between': 'never',
      },
    ],
    'import/prefer-default-export': OFF,
    'import/no-absolute-path': [ERROR, { esmodule: false, commonjs: false, amd: false }],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
