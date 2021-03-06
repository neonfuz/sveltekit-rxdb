/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			rollupInputOptions: {
				allowNodeBuiltins: ['pouchdb-browser', 'pouchdb-utils']
			}
		}
	}
};
