<script lang="ts">
	import AboutUs from '../../layouts/AboutUs.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<AboutUs aboutUs={data.aboutUs} />
