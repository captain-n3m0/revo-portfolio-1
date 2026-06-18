import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    host: "localhost",
    port: 3000,
    strictPort: true,
    watch: {
      ignored: ["**/.vercel/**", "**/dist/**", "**/node_modules/**"],
    },
  },
  plugins: [
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    tanstackStart({ server: { entry: "server" } }),
    nitro({ preset: process.env.NITRO_PRESET ?? "vercel" }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
