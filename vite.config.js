import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/frontend-assignment-ananya",
  resolve: {
    alias: {
      "@components": "/src/components",
      "@utilities": "/src/utilities",
      "@features": "/src/features",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "c8",
    },
  },
});
