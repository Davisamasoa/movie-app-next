/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryColor: "#5BC3EB",
				secondaryColor: "#DEDAEC",
			},
		},
	},
	plugins: [],
};
