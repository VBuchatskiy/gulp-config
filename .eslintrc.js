module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "impliedStrict": true,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "warn",
            "windows"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
};