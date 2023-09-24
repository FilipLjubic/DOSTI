<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.mainImage}
		<img src={urlFor(data.mainImage).url()} alt="Cover image for {data.title}" />
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
			<PortableText value={data.body} />
		</div>
	</div>
</section>
