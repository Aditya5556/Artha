// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { fileURLToPath } from 'url';
// import { dirname, resolve } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, './src'),
//     },
//   },
//   optimizeDeps: {
//     exclude: ['@react-spring/three']
//   }
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure correct asset paths
});

