import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { ImageLoader } from 'esbuild-vanilla-image-loader';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/portfolio/',
	plugins: [
		react(),
		vanillaExtractPlugin({
			esbuildOptions: {
				plugins: [ImageLoader()],
			},
		}),
		svgr(),
	],
});
