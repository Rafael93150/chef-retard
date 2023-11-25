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

useHead(() => ({
	title: "Chef Retard",
	meta: [
		{
			name: "description",
			content:
				"Avec Chef Retard, devenez un réel chef qui ne sera plus en retard grâce à des recettes de cuisine rapides.",
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
