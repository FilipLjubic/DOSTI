import { getAboutUsPage } from '$lib/utils/data/aboutUs';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const aboutUs = await getAboutUsPage();

	if (aboutUs) {
		return {
			aboutUs
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
