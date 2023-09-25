<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import PortableTextExtended from '../../../components/PortableTextExtended.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.mainImage}
		<picture>
			<source media="(max-width: 1024px)" srcSet={urlFor(data.mainImage).maxWidth(400).url()} />
			<img src={urlFor(data.mainImage).width(1200).url()} alt={`Cover image for ${data.title}`} />
		</picture>
	{:else}
		<div />
	{/if}
	<div>
		<h1>{data.title}</h1>
		<p>{data.excerpt}</p>
		<p>
			{formatDate(data._createdAt)}
		</p>
		<div>
			<PortableTextExtended value={data.body} />
		</div>
	</div>
</section>
