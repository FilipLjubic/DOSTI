<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { HomePage } from '$lib/utils/types/sanityTypes';

	export let home: HomePage;

	const partnerImages = home.partnerImages?.imageList ?? [];
</script>

<div>
	<section id="hero">
		<div class="relative w-full h-screen">
			<div class="absolute inset-0 bg-black bg-opacity-10" />

			<div
				class="absolute bottom-4 text-white flex flex-col gap-8 w-full px-6 md:px-14 md:bottom-24"
			>
				<div class="text-5xl md:text-7xl font-bold">{home.title}</div>

				<div class="text-2xl font-light max-w-lg">{home.subtitle}</div>
			</div>

			<img
				class="h-full w-full object-cover"
				alt={home.mainImage.originalFilename}
				src={urlFor(home.mainImage).quality(100).url()}
			/>
		</div>
	</section>

	<section id="partners">
		<div class="flex flex-col items-center px-6 min-h-screen h-full">
			<div class="text-4xl font-bold pt-20 pb-16">Naši partneri</div>

			<div
				class="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-12 items-center justify-center w-full"
			>
				{#each partnerImages as img (img.asset._id)}
					<a href={img.href} class="max-h-[140px] w-fit">
						<!-- <picture> -->
						<img
							src={urlFor(img.asset).maxHeight(140).fit('min').url()}
							alt={img.asset.title}
							class="max-h-[140px] object-contain w-full"
						/>
						<!-- <source media="(max-width: 1024px)" srcSet={urlFor(img.asset).width(200).url()} />
						</picture> -->
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>
