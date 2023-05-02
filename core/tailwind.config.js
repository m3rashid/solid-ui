module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/flowbite/**/*.js" // configure the Flowbite JS source template paths
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin') // require Flowbite's plugin for Tailwind CSS
	],
	"tailwindCSS.experimental.classRegex": [
		"class=\"([^\"]*)", // <div class="..." />
		"tw=\"([^\"]*)", // <div tw="..." />
		"class=`([^`]*)", // <div class="..." />
		"tw`([^`]*)", // tw`...`
		"class={\"([^\"}]*)", // <div class={"..."} />
		"tw={\"([^\"}]*)", // <div tw={"..."} />
		"\"([^\"]*)\"", // "..."
		"'([^']*)'", // '...'
	]
}