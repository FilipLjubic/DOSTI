<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Project } from '$lib/utils/types/sanityTypes';

	export let project: Project;
</script>

<div
	class="flex flex-col px-6 md:px-14 md:flex-row md:items-center pt-8 gap-4 md:even:flex-row-reverse md:gap-12 md:even:justify-between"
>
	{#if project.mainImage}
		<a
			href={`/projekti/${project.slug.current}`}
			class="w-full h-full max-h-[230px] min-h-[230px] md:max-h-[336px] md:min-h-[336px] md:max-w-[502px] md:min-w-[502px]"
		>
			<img
				class="w-full h-full max-h-[230px] min-h-[230px] md:max-h-[336px] md:min-h-[336px] md:max-w-[502px] md:min-w-[502px] object-cover object-center rounded-md"
				src={urlFor(project.mainImage).auto('format').url()}
				alt="Cover image for {project.title}"
			/>
		</a>
	{:else}
		<div />
	{/if}

	<div class="space-y-5 max-w-2xl">
		<h3>
			<a href={`/projekti/${project.slug.current}`} class="text-3xl md:text-5xl font-heading">
				{project.title}
			</a>
		</h3>

		{#if project.startDate && project.endDate}
			<p class="text-gray-700">
				<span class="font-medium">Vrijeme provedbe</span> od {formatDate(project.startDate)} do {formatDate(
					project.endDate
				)}
			</p>
		{/if}
	</div>
</div>
