import { getProjects } from '$lib/utils/data/project';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const projects = await getProjects();

	console.log(projects);

	if (projects) {
		return {
			projects
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
