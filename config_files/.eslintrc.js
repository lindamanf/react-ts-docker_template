module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "settings": {
    "import/resolver": "webpack"
  },
  "rules": {
    "max-len": [
      "error",
      {
        "code": 150
      }
    ],
    "prefer-promise-reject-errors": [
      "off"
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "react/destructuring-assignment": [
      "off",
      {
        "extensions": [
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    "class-methods-use-this": "off",
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allowAfterThis": true
      }
    ],
    "import/prefer-default-export": "off",
    "no-confusing-arrow": "off",
    "jsx-a11y/no-noninteractive-tabindex": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "no-unused-expressions": [
      "error",
      {
        "allowTernary": true
      }
    ],
    "no-console": [
      "off"
    ],
    "default-case": [
      "off"
    ],
    "consistent-return": [
      "off"
    ],
    "import/no-unresolved": [
      "off"
    ],
    "import/extensions": [
      "error",
      "never"
    ],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        "prefixWithI": "always"
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ]
  }
}
