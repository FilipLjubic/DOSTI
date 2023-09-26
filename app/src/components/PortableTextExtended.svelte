<script lang="ts">
	import { browser } from '$app/environment';
	import { PortableText } from '@portabletext/svelte';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import Carousel from '../components/Carousel.svelte';

	export let value: InputValue;
</script>

<section class="prose lg:prose-lg prose-li:p-0">
	{#if browser}
		<PortableText
			{value}
			components={{
				types: {
					images: Carousel
				}
			}}
		/>
	{/if}
</section>
