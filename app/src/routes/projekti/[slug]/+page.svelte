<script lang="ts">
	import Project from '../../../layouts/Project.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Project project={data} />
