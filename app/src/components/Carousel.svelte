<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Images } from '$lib/utils/types/sanityTypes';

	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<Images>;

	$: ({
		value: { imageList }
	} = portableText);
</script>

<div class="flex items-center justify-center">
	{#each imageList as img}
		<img src={urlFor(img).width(500).height(300).url()} alt={img.label} />
	{/each}
</div>
