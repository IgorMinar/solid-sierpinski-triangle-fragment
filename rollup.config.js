import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.jsx',
	output: {
		// sourcemap: true,
		format: 'iife',
		file: 'dist/__wf/dev.web-fragments.demos.fragments.solid-skerpinski-triangle/main.js',
	},
	plugins: [
		babel({
      exclude: 'node_modules/**',
			babelHelpers: "bundled",
      presets: ['solid']
    }),
    resolve({ extensions: ['.js', '.jsx'] }),
		production && terser()
  ]
};