// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-simple-sitemap", '@nuxtjs/robots'],
	app: {
		head: {
			title: "Chef Retard",
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					hid: "description",
					name: "description",
					content:
						"Avec Chef Retard, devenez un réel chef qui ne sera plus en retard grâce à des recettes de cuisine rapides."
				},
			],
			htmlAttrs: {
				lang: "fr",
			},
		},
	},
	site: {
		url: 'https://chef-retard.tech',
	}
});
