<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { Project } from '$lib/utils/types/sanityTypes';
	import PortableTextExtended from '../components/PortableTextExtended.svelte';

	export let project: Project;
</script>

<section class="pt-32 px-6 md:px-14">
	<div class="flex flex-col gap-6">
		<p>
			{formatDate(project._createdAt)}
		</p>

		<h1 class="text-5xl md:text-7xl">{project.title}</h1>

		<div>
			<PortableTextExtended value={project.body} />
		</div>
	</div>
</section>
