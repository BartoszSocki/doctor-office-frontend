module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
	require('postcss-mixins'),
	require('postcss-normalize'),
	require('@csstools/postcss-color-function')
  ]
}
