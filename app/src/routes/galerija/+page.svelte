<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import Masonry from 'svelte-bricks';
	import type { PageData } from './$types';

	$: innerWidth = 0;
	$: innerHeight = 0;

	$: isMobile = innerWidth < 768;
	$: isTablet = innerWidth >= 768 && innerWidth < 1024;

	$: minColWidth = isMobile ? 150 : isTablet ? 200 : 300;

	export let data: PageData;

	const { gallery } = data;

	const images = gallery.images.imageList;

	let nItems = images.length;
	$: items = [...Array(nItems).keys()];

	let width: number;
	let height: number;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<section class="pt-32 px-6 md:px-14">
	<div>
		<Masonry
			{items}
			{minColWidth}
			maxColWidth={800}
			gap={isMobile ? 4 : 16}
			let:item
			bind:masonryWidth={width}
			bind:masonryHeight={height}
		>
			<img
				src={urlFor(images[item].asset).auto('format').url()}
				alt={images[item].asset.originalFilename}
				loading="lazy"
				class="rounded-md border"
			/>
		</Masonry>
	</div>
</section>
