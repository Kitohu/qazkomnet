module.exports = {
  multipass: true,
  js2svg: { indent: 0, pretty: false },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          cleanupNumericValues: { floatPrecision: 2 },
          convertPathData: { floatPrecision: 2 },
          transformsWithOnePath: { floatPrecision: 2 },
          convertTransform: { floatPrecision: 2 },
        },
      },
    },
    'convertStyleToAttrs',
    'cleanupListOfValues',
    'removeUselessDefs',
    'removeEmptyAttrs',
    'removeEmptyText',
    'removeEmptyContainers',
    'removeUnknownsAndDefaults',
    { name: 'mergePaths', params: { force: true } },
  ],
};
