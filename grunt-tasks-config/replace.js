module.exports = {
	main: {
		src: [
			'hueman-addons.php'
		],
		overwrite: true,
		replacements: [ {
			from: /^.* Version: .*$/m,
			to: '* Version: <%= pkg.version %>'
		} ]
	},
	readme : {
		src: [
			'readme.md', 'readme.txt'
		],
		overwrite: true,
		replacements: [ {
			from: /^.*Stable tag: .*$/m,
			to: 'Stable tag: <%= pkg.version %>'
		} ]
	}
};