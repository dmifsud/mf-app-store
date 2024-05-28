const devtoolsConfig = (name, projectName) => ({
  name,
  enabled: false,
  store: `${projectName ?? "@mf-app/store"}/${name}`
});

export { devtoolsConfig };
