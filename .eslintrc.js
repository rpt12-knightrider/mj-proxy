module.exports = {
  "extends": "airbnb",
  rules: {
    "linebreak-style": ["error", "windows"],
    "no-console": "off",
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "jest": true,
  },
};
