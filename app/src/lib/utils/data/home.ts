import groq from 'groq';
import { client } from '../sanity';
import type { HomePage } from '../types/sanityTypes';

export async function getHomePage(): Promise<HomePage> {
	return await client.fetch(groq`*[_type == "home"]{
      _type,
      title,
      subtitle,
      mainImage,
      partnerImages{
      "imageList": imageList[]{
        "href": href,
        "asset": asset
      }
    } 
    }[0]`);
}
