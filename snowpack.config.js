module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
    test: '/test',
  },
  plugins: [
    '@snowpack/plugin-babel',
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-run-script',
      {cmd: 'svelte-check --output human', watch: '$1 --watch', output: 'stream'},
    ],
  ],
  install: [
    'power-assert'
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
