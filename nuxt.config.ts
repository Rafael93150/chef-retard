// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-simple-sitemap"],
	head: {
		title: "awesome title",
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
					"Découvrez des recettes de cuisine simples, délicieuses et rapides à préparer. Des idées pour tous les repas, du petit-déjeuner au dîner.",
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		htmlAttrs: {
			lang: "fr",
		},
	},
  site : {
    url: 'https://chef-retard.tech',
  }
});
