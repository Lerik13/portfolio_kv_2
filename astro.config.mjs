import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [
		astroImageTools,
		icon()
	],
});
