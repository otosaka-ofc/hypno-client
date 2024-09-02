module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        '@electron-toolkit/eslint-config-ts/recommended',
        '@electron-toolkit/eslint-config-prettier'
    ],
    "prettier/prettier": ["error", {singleQuote: false, semi: true, jsxSingleQuote: false, tabWidth: 4 }]
}
