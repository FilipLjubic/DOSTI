<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { Project } from '$lib/utils/types/sanityTypes';

	export let project: Project;
</script>

<div>
	{#if project.mainImage}
		<img
			src={urlFor(project.mainImage).quality(100).height(300).url()}
			alt="Cover image for {project.title}"
		/>
	{:else}
		<div />
	{/if}

	<div>
		<h3>
			<a href={`/projekti/${project.slug.current}`}>
				{project.title}
			</a>
		</h3>
		<p>{project.excerpt}</p>
		<p>
			{formatDate(project._createdAt)}
		</p>
	</div>
</div>
