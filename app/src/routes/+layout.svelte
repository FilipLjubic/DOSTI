<script>
	import '../app.css';
</script>

<div>
	<header class="flex justify-between items-center px-14 py-5">
		<a href="/">
			<img src="/logo.png" alt="Dosti Logo" class="h-14 w-auto" />
		</a>

		<div class="flex items-center gap-5">
			<a class="text-lg font-light" href="/projekti">Projekti</a>
			<a class="text-lg font-light" href="/galerija">Galerija</a>
			<a class="text-lg font-light" href="/o-nama">O nama</a>
		</div>
	</header>

	<main>
		<slot />
	</main>
	<footer>
		<p>
			DOSTI - Podružnica grada Pule <br /> <br />

			Gajeva 3 <br />
			52100 Pula, Hrvatska<br />
			052 505 576
		</p>
	</footer>
</div>
