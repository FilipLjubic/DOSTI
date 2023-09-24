import groq from 'groq';
import { client } from '../sanity';
import type { Project } from '../types/sanityTypes';

export async function getProjects(): Promise<Project[]> {
	return await client.fetch(
		groq`*[_type == "project" && defined(slug.current)] {
			_type,
			_createdAt,
			title,
			slug,
			excerpt,
			startDate,
			endDate,
			mainImage
		  } | order(_createdAt desc)`
	);
}

export async function getProject(slug: string): Promise<Project> {
	return await client.fetch(groq`*[_type == "project" && slug.current == $slug][0]`, {
		slug
	});
}
