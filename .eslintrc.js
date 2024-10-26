module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/display-name': 'off',
  },
  ignorePatterns: ['node_modules/'],
};
