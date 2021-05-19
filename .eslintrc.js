module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb-base'],
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: {
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'warn',
    'no-use-before-define': ['error', { variables: false }],
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'no-param-reassign': [2, { props: false }],
    'react/display-name': [0]
  },
  globals: {
    alert: true,
    fetch: true
  },
};
