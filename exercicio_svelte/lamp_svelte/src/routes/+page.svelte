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
        transition: background-color 0.3s ease;
    }

    .section-ligada {
        background-color: #ffffcc;
    }

    .section-desligada {
        background-color: #000000;
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
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #666;
    }
</style>

<section class={ligada ? 'section-ligada' : 'section-desligada'}>
    <img src={ligada ? "/assets/images/bulb-on.png" : "/assets/images/bulb-off.png"} alt={ligada ? "Lâmpada ligada" : "Lâmpada desligada"} />
    <button on:click={ligarOuDesligar} aria-pressed={ligada}>
        {ligada ? "Desligar" : "Ligar"}
    </button>
</section>
