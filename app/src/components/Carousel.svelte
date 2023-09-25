<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Images } from '$lib/utils/types/sanityTypes';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<Images>;

	$: ({
		value: { imageList }
	} = portableText);

	console.log(imageList);
</script>

<div class="flex items-center justify-center">
	<Splide options={{ rewind: true }} aria-label="Svelte Splide Example">
		{#each imageList as img}
			<SplideSlide>
				<img
					src={urlFor(img).quality(100).width(500).height(300).url()}
					alt={img.originalFilename}
				/>
			</SplideSlide>
		{/each}
	</Splide>
</div>
