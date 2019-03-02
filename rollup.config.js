
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import sucrase from 'rollup-plugin-sucrase';

export default [
	{
		input: 'svelte/src/parse/index.ts',
		plugins: [
			resolve(),
			commonjs({
				include: ['node_modules/**']
			}),
			json(),
            sucrase({
                transforms: ['typescript']
            })
		],
		output: {
			file: 'index.js',
			format: 'cjs',
            sourcemap: true,
            exports: 'named'
		},
		external: []
	},
];
