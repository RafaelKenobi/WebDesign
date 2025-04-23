<script>
	let ligada = false;

	function toggleLampada() {
		ligada = !ligada;
	}
</script>

<style>
	.lampada {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		margin: 20px auto;
		background-color: gray;
		box-shadow: 0 0 30px rgba(255, 255, 0, 0);
		transition: all 0.3s ease;
	}

	.lampada.ligada {
		background-color: yellow;
		box-shadow: 0 0 50px yellow;
	}

	button {
		display: block;
		margin: 0 auto;
		padding: 10px 20px;
		font-size: 18px;
		cursor: pointer;
		border-radius: 8px;
		border: none;
		background-color: #333;
		color: white;
	}
</style>

<div class="lampada {ligada ? 'ligada' : ''}"></div>
<button on:click={toggleLampada}>
	{ligada ? 'Desligar' : 'Ligar'}
</button>
