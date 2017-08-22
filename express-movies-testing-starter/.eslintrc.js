module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-console": 0,
    "no-plusplus": 0,
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "func-names": 0,
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: false,
    }],
  },
  "plugins": [
    "import"
  ]
};
