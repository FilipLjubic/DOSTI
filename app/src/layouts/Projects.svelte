<script lang="ts">
	import type { Project } from '$lib/utils/types/sanityTypes';
	import Card from '../components/Card.svelte';

	export let projects: Project[];
</script>

<section>
	<div class="relative bg-[#2E368E] w-full h-56 md:h-96">
		<h1
			class="absolute bottom-6 left-6 md:bottom-24 md:left-14 text-white text-4xl md:text-6xl font-heading"
		>
			Projekti
		</h1>
	</div>

	<div class="space-y-16">
		{#each projects as project}
			<Card {project} />
		{/each}
	</div>
</section>
