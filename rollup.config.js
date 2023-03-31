import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import alias from '@rollup/plugin-alias';
import svgr from '@svgr/rollup'
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import { readFileSync } from 'fs';
import replace from '@rollup/plugin-replace';

const packageJson = JSON.parse(readFileSync('./package.json', {encoding: 'utf8'}));

// const config = dotenv.config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

const isProduction = process.env.NODE_ENV === 'production';

export default [
  {
    input: './src/core/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !isProduction,
        plugins: [
          bundleSize()
        ]
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !isProduction,
        plugins: [
          bundleSize()
        ]
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: !isProduction,
        inlineSources: !isProduction,
      }),
      postcss({
        extract: false,
        modules: {
          generateScopedName: '[hash:base64:6]',
        },
        autoModules: true,
        minimize: isProduction,
        sourceMap: !isProduction,
        include: /\.scss$/,
        use: {
          sass: {
            data: '@import \'./src/styles/main.scss\';',
          },
        },
        outputStyle: 'compressed'
      }),
      alias({
        resolve: ['.svg', '.js', '.scss', '.ts', '.tsx'],
        entries: [
          { find: '@icons', replacement: './src/core/icons' },
        ]
      }),
      svgr({ icon: true }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        skipPreflightCheck: true,
      }),
      isProduction && terser(),
      replace({
        include: ['./src/core/components/atoms/Icon/Icon.tsx'],
        preventAssignment: true,
        'ReactComponent': 'default'
      }),
    ],
    external: ['react', 'react-dom', (id) => id.includes('@babel/runtime')],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|scss|less)$/],
  },
];