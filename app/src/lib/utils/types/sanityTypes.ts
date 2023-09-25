import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';

export interface ExtendedImage {
	href?: string;
	asset: ImageAsset;
}
export interface Images {
	imageList: ExtendedImage[];
}

export interface HomePage {
	_type: 'home';
	title: string;
	subtitle: string;
	mainImage: ImageAsset;
	partnerImages?: Images;
}

export interface AboutUsPage {
	_type: 'aboutUs';
	body: PortableTextBlock[];
}

export interface GalleryPage {
	_type: 'gallery';
	images: Images;
}

export interface Project {
	_type: 'project';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	startDate?: string;
	endDate?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}
