<script>
	import '../app.css';
</script>

<div>
	<header class="flex justify-between">
		<a href="/">DOSTI LOGO</a>

		<div>
			<a href="/projekti">Projekti</a>
			<a href="/galerija">Galerija</a>
			<a href="/o-nama">O nama</a>
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
