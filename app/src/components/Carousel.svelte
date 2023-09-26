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
</script>

<div class="flex items-center justify-center md:px-20">
	{#if imageList.length > 1}
		<Splide options={{ type: 'loop', autoplay: true, autoWidth: true }} aria-label="Carousel">
			{#each imageList as img}
				<SplideSlide class="w-full md:h-[600px]">
					<img
						src={urlFor(img.asset).auto('format').url()}
						alt={img.asset.originalFilename}
						class="w-full h-full md:h-[600px] object-cover rounded-md"
					/>
				</SplideSlide>
			{/each}
		</Splide>
	{/if}

	{#if imageList.length === 1}
		<img
			src={urlFor(imageList[0].asset).auto('format').url()}
			alt={imageList[0].asset.originalFilename}
			class="w-full h-full object-cover rounded-md"
		/>
	{/if}
</div>
