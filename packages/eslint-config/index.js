module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:solid/recommended",
		"plugin:solid/typescript",
		"turbo"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"rules": {
		"solid/reactivity": "warn",
		"solid/no-destructure": "warn",
		"solid/jsx-no-undef": "error"
	}
};
