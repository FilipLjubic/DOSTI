<script lang="ts">
	import PortableTextExtended from '../../components/PortableTextExtended.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { aboutUs } = data;
</script>

<section>
	<div class="text-xl bg-red-100">O nama</div>

	<PortableTextExtended value={aboutUs.body} />
</section>
