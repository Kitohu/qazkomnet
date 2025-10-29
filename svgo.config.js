module.exports = {
  multipass: true,
  js2svg: { indent: 0, pretty: false },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Keep viewBox to ensure responsiveness
          removeViewBox: false,
          // More aggressive numeric cleanup
          cleanupNumericValues: { floatPrecision: 2 },
          convertPathData: { floatPrecision: 2 },
          transformsWithOnePath: { floatPrecision: 2 },
          convertTransform: { floatPrecision: 2 },
        },
      },
    },
    // Remove <style> -> convert to attributes when safe
    'convertStyleToAttrs',
    // Remove unknown/unused defs and attrs
    'cleanupListOfValues',
    'removeUselessDefs',
    'removeEmptyAttrs',
    'removeEmptyText',
    'removeEmptyContainers',
    'removeUnknownsAndDefaults',
    // Aggressive path merge
    { name: 'mergePaths', params: { force: true } },
  ],
};
