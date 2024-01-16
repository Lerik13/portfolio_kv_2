module.exports = {
	plugins: [
		require('autoprefixer'),
		require('postcss-preset-env')({ 
			stage: 1,
		}),
		require('precss'),
		require('postcss-import'),
		require('postcss-media-minmax'),
		require('postcss-custom-media'),
		require('postcss-for'),
		require('postcss-calc'),
		require('postcss-random'),
		require('postcss-color-hsl'),
		require('postcss-easing-gradients'),
		require('postcss-csso'),
	]
};