<script>
	let ligada = false;

	function ligarOuDesligar() {
		ligada = !ligada;
	}
</script>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	img {
		width: 150px;
	}

	button {
		margin-top: 20px;
		padding: 10px 20px;
		font-size: 16px;
		border: none;
		border-radius: 6px;
		background-color: #444;
		color: white;
		cursor: pointer;
	}
</style>

<section style="background-color: {ligada ? '#ffffcc' : '#333'};">
	<img src={ligada ? "/assets/images/bulb-on.png" : "/assets/images/bulb-off.png"} alt="lampada" />
	<button on:click={ligarOuDesligar}>
		{ligada ? "Desligar" : "Ligar"}
	</button>
</section>
