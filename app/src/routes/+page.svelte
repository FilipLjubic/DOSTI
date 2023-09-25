<script lang="ts">
	import Home from '../layouts/Home.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Home home={data.home} />
