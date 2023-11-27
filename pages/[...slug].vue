<template>
	<main>
		<ContentDoc />
	</main>
</template>

<style>
/* Styles inspirés de Tailwind pour les titres et les paragraphes */

main {
	max-width: 1024px;
	margin: 0 auto;
	padding: 2rem;
}

/* Titres */
h1 {
	font-size: 1.75rem;
	font-weight: bold;
	margin-bottom: 1rem;
	color: #1a202c; /* Couleur de texte Tailwind 'text-gray-800' */
}

h2 {
	font-size: 1.25rem;
	font-weight: bold;
	margin-top: 2rem;
	margin-bottom: 0.75rem;
	color: #2d3748; /* Couleur de texte Tailwind 'text-gray-700' */
}

h3 {
	font-size: 1rem;
	font-weight: bold;
	margin-top: 1.5rem;
	margin-bottom: 0.5rem;
	color: #4a5568;
}

p {
	margin-bottom: 1.25rem;
	color: #4a5568;
}

ul {
	list-style-type: disc;
	margin-left: 20px;
}

ol {
	list-style-type: decimal;
	margin-left: 20px;
}

li:not(footer li) {
	margin-bottom: 8px;
	color: #4a5568;
}

main a:not([href^="#"]):not(table a) {
	color: #0950C3;
	text-decoration: underline;
}

main img {
	width: 20em;
	height: 14em;
	border-radius: 0.5em;
	object-fit: cover;
}

main .banner img {
	width: 100%;
	height: 15em;
	border-radius: 0.15em;
	object-fit: cover;
	margin-bottom: 2em;
}

</style>
