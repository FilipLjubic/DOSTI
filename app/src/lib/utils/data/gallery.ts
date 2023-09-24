import groq from 'groq';
import { client } from '../sanity';
import type { GalleryPage } from '../types/sanityTypes';

// Fetching the single 'gallery' document
export async function getGalleryPage(): Promise<GalleryPage> {
	return await client.fetch(groq`*[_type == "gallery"]{
      _type,
      images
    }[0]`);
}
