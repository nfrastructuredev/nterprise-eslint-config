/**
 * @fileOverview Eslint config
 */

module.exports = {
    'env': {
        'browser': false,
        'node': true,
        'mocha': true,
        'es6': true,
    },
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module',
    },
    'globals': {
        'BigInt': true,
    },
    'extends': [
        'eslint:recommended',
        'google',
    ],
    'rules': {
        'curly': 'error',
        'operator-linebreak': [
            'error',
            'before',
        ],
        'require-jsdoc': [
            'error',
        ],
        'valid-jsdoc': [
            'error',
        ],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'MemberExpression': 1,
            },
        ],
        'no-console': 'error',
    },
}
