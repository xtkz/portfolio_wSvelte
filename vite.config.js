import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
	plugins: [sveltekit(), ],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	ssr: {
		noExternal: ['three', 'troika-three-text']
	},
});
