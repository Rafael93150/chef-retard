<template>
	<footer class="bg-gray-800 text-white">
		<div
			class="max-w-screen-lg mx-auto py-8 flex flex-wrap justify-between p-4"
		>
			<div class="footer-section">
				<h3 class="text-lg text-stone-300 font-semibold mb-4">
					À Propos
				</h3>
				<p class="text-stone-300">
					En savoir plus sur Chef Retard et notre équipe de chefs
					passionnés.
				</p>
			</div>

			<div class="footer-section">
				<h3 class="text-lg text-stone-300 font-semibold mb-4">
					Liens Rapides
				</h3>
				<ul>
					<li class="hover:text-gray-500">
						<nuxt-link to="/">Accueil</nuxt-link>
					</li>
					<li class="hover:text-gray-500">
						<nuxt-link to="/recettes"
							>Toutes les recettes</nuxt-link
						>
					</li>
					<li class="hover:text-gray-500">
						<nuxt-link to="/actu-food">Actus food</nuxt-link>
					</li>
				</ul>
			</div>

			<div class="footer-section">
				<h3 class="text-lg text-stone-300 font-semibold mb-4">
					Suivez-nous
				</h3>
				<ul>
					<li>
						<a
							href="https://www.facebook.com/"
							class="hover:text-gray-500"
							>Facebook</a
						>
					</li>
					<li>
						<a
							href="https://www.instagram.com/"
							class="hover:text-gray-500"
							>Instagram</a
						>
					</li>
					<li>
						<a
							href="https://www.pinterest.fr/"
							class="hover:text-gray-500"
							>Pinterest</a
						>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script setup>
// Ajoutez ici le script nécessaire pour le footer si nécessaire
</script>

<style scoped>
ul li {
	margin-bottom: 0.5rem;
}
</style>
