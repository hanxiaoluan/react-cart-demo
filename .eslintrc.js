
// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'eslint-config-prettier'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [ 'error',
			'tab'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		
		'object-curly-spacing': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true } ],
		'comma-spacing': [ 'error', { before: false, 'after': true } ],
		'arrow-spacing': [ 'error', { before: true, after: true } ],
		'block-spacing': [ 'error' ],
		'@typescript-eslint/type-annotation-spacing': [ 'error', { 'before': false, 'after': true } ],
		'react/prop-types': 0,
		'react/display-name': 0,
		'no-multi-spaces': 'error',
		'lines-between-class-members': 'error',
		'newline-per-chained-call': [ 'error', { 'ignoreChainWithDepth': 2 } ],
		// 'react/jsx-closing-tag-location': 'error',
		'react/jsx-curly-spacing': [ 'error', { 'when': 'never', 'children': false } ],
		'react/jsx-uses-react': 0,
		'react/jsx-one-expression-per-line': [ 'error', { 'allow': 'literal'|'single-child' } ]
	}
}