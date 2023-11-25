<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const navigation = ref([
	{
		name: "Recettes par catégories",
		content: [
			{ name: "Apéritifs", href: "/aperitifs" },
			{ name: "Entrées", href: "/entrees" },
			{ name: "Plats", href: "/plats" },
			{ name: "Desserts", href: "/desserts" },
			{ name: "Sauces", href: "/sauces" },
		],
	},
	{
		name: "Idées recettes",
		content: [
			{ name: "Menu de la semaine", href: "/menu-de-la-semaine" },
			{ name: "Recettes de saison", href: "/recettes-de-saison" },
			{ name: "Top des recettes", href: "/top-des-recettes" },
			{ name: "Les grands classiques", href: "/les-grands-classiques" },
			{ name: "Nouveautés", href: "/nouveautes" },
		],
	},
	{
		name: "En cuisine",
		content: [
			{ name: "Toutes les recettes", href: "/recettes" },
			{ name: "Actus food", href: "/actu-food" },
			{ name: "Mieux manger", href: "/mieux-manger" },
			{ name: "Mieux acheter", href: "/mieux-acheter" },
			{ name: "Mieux cuisiner", href: "/mieux-cuisiner" },
		],
	},
]);
const activeMenu = ref(false);

const updateActiveClass = () => {
	navigation.value.forEach((item) => {
		item.current = route.path === item.href;
	});
};

onMounted(() => {
	updateActiveClass();
});

watch(
	() => route.path,
	() => {
		updateActiveClass();
	}
);

const toggleMenu = () => {
	activeMenu.value = !activeMenu.value;
};

const closeMenu = () => {
	activeMenu.value = false;
};
</script>

<template>
	<nav class="bg-white border-gray-200 max-w-screen-lg mx-auto">
		<div
			class="flex flex-wrap border-gray-200 justify-between items-center mx-auto max-w-screen-lg p-4"
		>
			<nuxt-link
				to="/"
				class="flex items-center space-x-3 rtl:space-x-reverse"
				@click="closeMenu"
			>
				<img src="/favicon.ico" class="h-8 w-8" alt="Logo Chef Retard" />
				<span
					class="self-center text-2xl font-semibold whitespace-nowrap"
					>Chef Retard</span
				>
			</nuxt-link>
			<div class="items-center font-medium flex w-auto order-1">
				<button
					type="button"
					class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
					@click="toggleMenu"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div
			v-show="activeMenu"
			id="mega-menu-full-dropdown"
			class="mt-1 border-gray-200 bg-gray-50 md:bg-white border-y mx-5"
		>
			<div
				class="grid max-w-screen-lg px-4 py-5 mx-auto text-gray-900 md:grid-cols-3 sm:grid-cols-2 px-6 space-x-0 sm:space-x-0 md:space-x-6"
			>
				<div
					v-for="nav of navigation"
					:key="nav.name"
					class="flex flex-row justify-start items-start md:justify-center"
				>
					<div class="flex flex-col space-y-2 mb-3">
						<span class="font-semibold text-blue-500 block mb-2">{{
							nav.name
						}}</span>
						<ul class="ml-2">
							<li
								v-for="item of nav.content"
								:key="item.name"
								class="block hover:text-gray-500"
								@click="closeMenu"
							>
								<nuxt-link :to="item.href">{{
									item.name
								}}</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
