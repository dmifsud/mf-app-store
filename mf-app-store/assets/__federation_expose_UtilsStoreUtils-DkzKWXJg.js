const devtoolsConfig = (name) => ({
  name,
  enabled: false,
  store: `@mf-app/store/${name}`
});

export { devtoolsConfig };
