<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { Project } from '$lib/utils/types/sanityTypes';
	import { ChevronLeftIcon } from 'svelte-feather-icons';
	import PortableTextExtended from '../components/PortableTextExtended.svelte';

	export let project: Project;
</script>

<section class="pt-32 px-6 md:px-14">
	<div class="flex flex-col gap-6 max-w-3xl mx-auto">
		<a href="/projekti" class="flex gap-1 items-center w-fit -translate-x-2">
			<ChevronLeftIcon class="w-4 h-4 text-gray-500" />
			<span class="text-sm text-gray-500">Nazad na projekte</span>
		</a>
		<p>
			{formatDate(project._createdAt)}
		</p>

		<h1 class="text-5xl md:text-7xl">{project.title}</h1>

		{#if project.startDate && project.endDate}
			<p>
				<span class="font-semibold">Vrijeme provedbe</span> od {formatDate(project.startDate)} do {formatDate(
					project.endDate
				)}
			</p>
		{/if}

		<div class="pt-8">
			<PortableTextExtended value={project.body} />
		</div>
	</div>
</section>
