import { dirname, join } from 'path';
// .storybook/main.ts

// Imports the Storybook's configuration API
const config = {
  stories: ['../common-components/**/stories.@(ts|tsx)', '../src/components/**/stories.@(ts|tsx)',],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-interactions"), {
    name: '@storybook/addon-postcss',
    options: {
      cssLoaderOptions: {
        // When you have split your css over multiple files
        // and use @import('./other-styles.css')
        importLoaders: 1
      },
      postcssLoaderOptions: {
        // When using postCSS 8
        implementation: require('postcss')
      }
    }
  }],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {}
  },
  staticDirs: [{ from: '../public', to: '/' }],
};
module.exports = config;
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}