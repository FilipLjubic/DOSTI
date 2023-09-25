<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;

	const { home } = data;
</script>

<section>
	<div class="text-xl bg-red-100">{home.title}</div>
	<div class="text-xl">{home.subtitle}</div>
	<img
		alt={home.mainImage.originalFilename}
		src={urlFor(home.mainImage).quality(100).width(500).height(300).url()}
		class="text-xl"
	/>
</section>
