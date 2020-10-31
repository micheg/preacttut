module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["standard", "standard-preact"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "camelcase": "off",
        "react/jsx-indent": ["error", 4],
        "indent": ["error", 4],
        "semi": [2, "always"],
        "brace-style": ["error", "allman", { "allowSingleLine": true }],
    }
};
