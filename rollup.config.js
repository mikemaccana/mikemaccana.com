import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;
export default {
  input: "frontend/js/index.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/js/bundle.js",
  },
  plugins: [
    json(),
    svelte({
      // enable run-time checks when not in production
      dev: isDevelopment,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: (css) => {
        css.write("public/css/bundle.css");
      },
    }),

    typescript({ sourceMap: isDevelopment }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), then minify
    isProduction && terser(),
  ],
};
