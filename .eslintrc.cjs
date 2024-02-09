module.exports = {
	root: true,
	extends: ['@hokify'],
	parserOptions: {
		project: './tsconfig.eslint.json'
	},
  overrides: [
    {
      files: ['*ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/order': 'off',
        'import/no-relative-packages': 'off',
        'no-param-reassign': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      },
    },
    {
      files: ['*.test.ts'],
      env: {
        mocha: true
      },
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off'
      }
    }
  ]
};
