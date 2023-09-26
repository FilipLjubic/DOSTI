<script>
	import '../app.css';

	import { Hamburger } from 'svelte-hamburgers';
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';

	import { FacebookIcon } from 'svelte-feather-icons';

	let isOpen = false;

	$: path = $page.url.pathname;
</script>

<div>
	<header
		class="flex justify-between items-center sticky top-0 z-10 bg-white w-full px-5 md:px-14 py-3 md:py-6"
	>
		<a href="/">
			<img src="/logo.png" alt="Dosti Logo" class="h-8 md:h-12 w-auto" />
		</a>

		<div class="md:hidden">
			<Hamburger bind:open={isOpen} --color={'gray'} --active-color={'gray'} />
		</div>

		<div class="hidden md:flex items-center gap-5">
			<a class="text-lg font-light {path === '/projekti' ? 'underline' : ''}" href="/projekti"
				>Projekti</a
			>
			<a class="text-lg font-light {path === '/galerija' ? 'underline' : ''}" href="/galerija"
				>Galerija</a
			>
			<a class="text-lg font-light {path === '/o-nama' ? 'underline' : ''}" href="/o-nama">O nama</a
			>
		</div>
	</header>

	<main>
		<slot />

		{#if isOpen}
			<div
				transition:fade={{ delay: 250, duration: 300 }}
				class="absolute top-0 z-0 h-screen w-full bg-white flex flex-col items-center justify-center
				gap-5"
			>
				<a
					in:fly={{ y: 100, delay: 350, duration: 500, easing: quintOut }}
					on:click={() => (isOpen = false)}
					class="text-2xl font-light {path === '/projekti' ? 'underline' : ''}"
					href="/projekti">Projekti</a
				>
				<a
					in:fly={{ y: 100, delay: 400, duration: 500, easing: quintOut }}
					on:click={() => (isOpen = false)}
					class="text-2xl font-light {path === '/galerija' ? 'underline' : ''}"
					href="/galerija">Galerija</a
				>
				<a
					in:fly={{ y: 100, delay: 450, duration: 500, easing: quintOut }}
					on:click={() => (isOpen = false)}
					class="text-2xl font-light {path === '/o-nama' ? 'underline' : ''} "
					href="/o-nama">O nama</a
				>
			</div>
		{/if}
	</main>

	<footer>
		<div
			class="flex flex-col items-center md:flex-row md:justify-between py-16 gap-6 px-6 md:px-14"
		>
			<p class="text-black/60">
				DOSTI - Podružnica grada Pule <br /> <br />

				Gajeva 3 <br />
				52100 Pula, Hrvatska<br />
				052 505 576
			</p>

			<a
				href="https://web.facebook.com/people/DOSTI-Podru%C5%BEnica-grada-Pule/100082281699182/"
				target="_blank"
			>
				<FacebookIcon class="h-8 w-auto" />
			</a>
		</div>
	</footer>
</div>
