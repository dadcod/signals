<script>
    import confetti from "canvas-confetti";

    let amount = $state(1)
    let rate = $state(1)

    const converted = $derived(amount*rate);
    function updateRate(){
        rate = Math.random() + 1;
    }

    $effect(()=>{
        console.log(rate, amount);
        confetti({
            particleCount: 100,
            spread: 70,
        });
    })
</script>


<div>
	<h1>Currency Converter</h1>
	<div>
		<label for="amount">Quinoa coin</label>
		<input type="number" id="amount" bind:value={amount} />
	</div>
	<div>
		<label for="rate">Doge coin rate</label>
		<span id="rate">{rate}</span>
		<button onclick={updateRate}>Update rate</button>
	</div>
	<p>Result: {converted} Doge coin</p>
</div>
