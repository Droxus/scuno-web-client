import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: "/scuno-web-client/",
  build: {
    outDir: "docs", // Set the output directory to 'docs'
  },
});
