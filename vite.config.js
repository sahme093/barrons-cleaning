import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Own port so it doesn't clash with the other cleaning sites; host: true makes it reachable from a phone on the same Wi-Fi.
  server: { port: 5180, strictPort: true, host: true },
});
