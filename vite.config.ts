import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			external: ["react", "react-dom/client", "react-router"],
		},
	},
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:8788", // Wranglerのポート
				changeOrigin: true,
			},
		},
	},
});
