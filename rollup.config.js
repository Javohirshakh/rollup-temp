import { babel } from "@rollup/plugin-babel"
import styles from "rollup-plugin-styles"
import image from "@rollup/plugin-image"
import serve from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"

export default {
	input: 'index.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
  plugins: [
    babel({
      babelHelpers: 'bundled', // set the babelHelpers option to 'bundled' to use the bundled helpers
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              browsers: ['last 2 versions']
            }
          }
        ]
      ]
    }),
    styles(),
    image(),
    serve({
      open: true,
      contentBase: './',
      port: 8000,
    }),
    livereload()
  ],
  watch: {
    exclude: 'node_modules/**'
  }
};