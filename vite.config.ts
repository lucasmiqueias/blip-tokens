import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "BlipDesignTokens",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "esm.js" : "cjs.js"}`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: false,
    emptyOutDir: false,
  },
});
