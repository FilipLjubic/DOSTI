import { getHomePage } from '$lib/utils/data/home';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const home = await getHomePage();

	if (home) {
		return {
			home
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
