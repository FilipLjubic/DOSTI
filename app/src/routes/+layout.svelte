<script>
	import '../app.css';

	import { fade } from 'svelte/transition';
	import { Hamburger } from 'svelte-hamburgers';

	import { FacebookIcon } from 'svelte-feather-icons';

	let open = false;
</script>

<div>
	<header
		class="flex justify-between items-center absolute top-0 z-10 bg-white w-full px-5 md:px-14 py-3 md:py-6"
	>
		<a href="/">
			<img src="/logo.png" alt="Dosti Logo" class="h-8 md:h-12 w-auto" />
		</a>

		<div class="md:hidden">
			<Hamburger bind:open --color={'gray'} --active-color={'gray'} />
		</div>

		<div class="hidden md:flex items-center gap-5">
			<a class="text-lg font-light" href="/projekti">Projekti</a>
			<a class="text-lg font-light" href="/galerija">Galerija</a>
			<a class="text-lg font-light" href="/o-nama">O nama</a>
		</div>
	</header>

	<main>
		<slot />

		{#if open}
			<div
				transition:fade={{ delay: 250, duration: 300 }}
				class="absolute top-0 z-0 h-screen w-full bg-white flex flex-col items-center justify-center gap-5"
			>
				<a on:click={() => (open = false)} class="text-lg font-light" href="/projekti">Projekti</a>
				<a on:click={() => (open = false)} class="text-lg font-light" href="/galerija">Galerija</a>
				<a on:click={() => (open = false)} class="text-lg font-light" href="/o-nama">O nama</a>
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
