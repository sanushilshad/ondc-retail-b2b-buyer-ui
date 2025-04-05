import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],
	server: {
		port: 8002, // Change the port number here
		host: '0.0.0.0', // Allows external access
		allowedHosts: ['devtest2.rapidor.co'], // Allow this domain
		strictPort: true, // Ensure Vite doesn't switch ports

	},
});
