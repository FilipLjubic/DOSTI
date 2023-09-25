<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;

	const { gallery } = data;
</script>

<section>
	<div class="text-xl bg-red-100">Galerija</div>
	<div>
		{#each gallery.images.imageList as img}
			<img
				src={urlFor(img.asset).quality(100).width(500).height(300).url()}
				alt={img.asset.originalFilename}
			/>
		{/each}
	</div>
</section>
