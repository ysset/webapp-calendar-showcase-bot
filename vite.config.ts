import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupReplace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    //@ts-ignore
    rollupReplace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
    }),
    react(),
  ],
});