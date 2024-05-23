import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";
import fg from "fast-glob";

const entryPoints = ["./src/**/*.ts", "./src/**/*.tsx"];

const files = fg.sync(entryPoints);

const filesToExpose = Object.fromEntries(
  files.map((filePath) => [
    filePath
      .replace("./src/", "./")
      .replace(".ts", ""),
    filePath,
  ])
);

console.log(filesToExpose);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "shared_state_app",
      filename: "remoteEntry.js",
      exposes: {
        ...filesToExpose,
        // add any custom entries here
      },
      shared: ["zustand"],
    }),
    tsconfigPaths(),
  ],
  preview: {
    host: "localhost",
    port: 4000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    assetsDir: 'mf-app-store/assets',
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
