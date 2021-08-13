<script>
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';

	import {setupI18n} from '../services/i18n';

	setupI18n({ withLocale: 'tr' });

</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
