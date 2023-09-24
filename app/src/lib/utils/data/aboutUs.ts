import groq from 'groq';
import { client } from '../sanity';
import type { AboutUsPage } from '../types/sanityTypes';

// Fetching the single 'aboutUs' document
export async function getAboutUsPage(): Promise<AboutUsPage> {
	return await client.fetch(groq`*[_type == "aboutUs"]{
      _type,
      body
    }[0]`);
}
