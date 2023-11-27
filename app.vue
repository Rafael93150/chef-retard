<template>
	<div>
		<Navbar />
		<NuxtPage />
		<Footer />
	</div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const route = useRoute();

function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const getNameFromUrl = () => {
	const pathSegments = route.path.split("/");
	const recipePath = pathSegments[pathSegments.length - 1].replace(/-/g, " ");
	const recipe = capitalizeFirstLetter(recipePath);
	return recipe;
};

const generateJsonLd = () => {
	console.log(route.path);
	if (route.path === "/") {
		return {
			"@context": "https://schema.org",
			"@type": "Organization",
			name: "Chef Retard",
			url: "https://chef-retard.tech",
			logo: "https://chef-retard.tech/favicon.ico",
		};
	} else if (route.path.startsWith("/recettes/")) {
		return {
			"@context": "https://schema.org",
			"@type": "Recipe",
			name: getNameFromUrl(),
			url: "https://chef-retard.tech" + route.path,
			author: {
				"@type": "Person",
				name: "Rafael Tavares",
			},
			publisher: {
				"@type": "Organization",
				name: "Chef Retard",
				logo: {
					"@type": "ImageObject",
					url: "https://chef-retard.tech/favicon.ico",
				},
			},
		};
	}
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		name: getNameFromUrl(),
		url: "https://chef-retard.tech" + route.path,
		author: {
			"@type": "Person",
			name: "Rafael Tavares",
		},
		publisher: {
			"@type": "Organization",
			name: "Chef Retard",
			logo: {
				"@type": "ImageObject",
				url: "https://chef-retard.tech/favicon.ico",
			},
		},
	};
};

useHead(() => ({
	link: [
		{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
		{
			rel: "canonical",
			href: "https://chef-retard.tech" + route.path,
		},
	],
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify(generateJsonLd()),
		},
	],
}));

useSeoMeta({
	title: "Chef Retard",
	ogTitle: "Chef Retard",
	description:
		"Avec Chef Retard, devenez un réel chef qui ne sera plus en retard grâce à des recettes de cuisine rapides.",
	ogDescription:
		"Avec Chef Retard, devenez un réel chef qui ne sera plus en retard grâce à des recettes de cuisine rapides.",
	ogImage: "https://chef-retard.tech/favicon.ico",
	twitterCard: "summary_large_image",
});
</script>
