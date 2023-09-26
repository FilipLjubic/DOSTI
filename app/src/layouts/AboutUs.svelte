<script lang="ts">
	import type { AboutUsPage } from '$lib/utils/types/sanityTypes';
	import PortableTextExtended from '../components/PortableTextExtended.svelte';

	export let aboutUs: AboutUsPage;
</script>

<section>
	<div class="relative bg-[#2E368E] w-full h-72 md:h-96">
		<h1 class="absolute bottom-6 left-6 md:bottom-24 md:left-14 text-white text-5xl md:text-7xl">
			O nama
		</h1>
	</div>

	<div class="max-w-3xl mx-auto pt-8 px-6 md:px-14">
		<PortableTextExtended value={aboutUs.body} />
	</div>
	<iframe
		class="mx-auto w-full pt-32 px-6 md:px-14 border-none"
		title="Location on map"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.9584046846094!2d13.841530776241417!3d44.86314157107054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd31892b80a23%3A0x188d35e388cb27c!2sUl.%20Ljudevita%20Gaja%203%2C%2052100%2C%20Pula!5e0!3m2!1shr!2shr!4v1695715644656!5m2!1shr!2shr"
		width="600"
		height="600"
		allowfullscreen={true}
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>
</section>
