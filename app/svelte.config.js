import path from 'path'
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			$config: path.resolve('./src/config'),
			$stores: path.resolve('./src/stores'),
			$components: path.resolve('./src/components'),
		}
	},
	preprocess: preprocess()
};

export default config;
