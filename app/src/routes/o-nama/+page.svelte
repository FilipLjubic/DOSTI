<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';
	import Carousel from '../../components/Carousel.svelte';

	export let data: PageData;

	const { aboutUs } = data;
</script>

<section>
	<div class="text-xl bg-red-100">O nama</div>
	<PortableText
		value={aboutUs.body}
		components={{
			types: {
				images: Carousel
			}
		}}
	/>
</section>
