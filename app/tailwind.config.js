/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Inknut Antiqua', 'serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
