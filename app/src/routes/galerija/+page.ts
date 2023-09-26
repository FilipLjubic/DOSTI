import { getGalleryPage } from '$lib/utils/data/gallery';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const gallery = await getGalleryPage();

	if (gallery) {
		return {
			gallery
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
