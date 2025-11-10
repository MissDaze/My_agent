import { build } from "vite";
import react from "@vitejs/plugin-react";

export async function buildVite() {
  await build({
    plugins: [react()],
    build: {
      outDir: "dist",
      sourcemap: false,
      minify: "terser",
    },
  });
}
