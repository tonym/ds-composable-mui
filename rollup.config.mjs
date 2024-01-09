import commonjs from '@rollup/plugin-commonjs';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const baseContents = pkg => ({
  author: pkg.author,
  bugs: pkg.bugs,
  dependencies: {},
  description: pkg.description,
  homepage: pkg.homepage,
  license: pkg.license,
  main: './node/core.js',
  module: './index.js',
  name: pkg.name,
  peerDependencies: pkg.peerDependencies,
  repository: pkg.repository,
  sideEffects: false,
  types: './index.d.ts',
  version: pkg.version
});

const external = ['@emotion/react', '@emotion/styled', '@mui/material', 'deepmerge', 'jss', 'jss-preset-default', 'redux'];

const input = 'src/index.ts';

const shared = {
  external,
  input,
  onwarn(warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      return;
    }
    warn(warning);
  }
};

export default [
  {
    ...shared,
    output: {
      dir: 'dist',
      format: 'es'
    },
    plugins: [typescript(), nodeResolve(), commonjs(), generatePackageJson({ baseContents })]
  },
  {
    ...shared,
    output: {
      file: 'dist/node/core.js',
      format: 'cjs',
      interop: 'auto',
      name: 'core'
    },
    plugins: [typescript(), nodeResolve(), commonjs()]
  }
];
