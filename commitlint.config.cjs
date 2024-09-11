const customRulesPlugin = {
  rules: {
    'custom-scope': ({ scope }) => {
      if (!scope) {
        return [false, 'scope is required'];
      }
      const regex = /^PWMVP-\d+$/;
      return [regex.test(scope), `scope '${scope}' does not match 'PWMVP-<number>' pattern`];
    },
  },
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [customRulesPlugin],
  rules: {
    'custom-scope': [2, 'always'],
  },
};
