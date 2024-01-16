import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import icon from "astro-icon";
import Compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
	integrations: [
		astroImageTools,
		icon(),
		Compress()
	],
});
