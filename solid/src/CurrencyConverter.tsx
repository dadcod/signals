import { createEffect, createMemo, createSignal } from "solid-js";

import confetti from "canvas-confetti";

export default function CurrencyConverter() {
  const [amount, setAmount] = createSignal(1);
  const [rate, setRate] = createSignal(1);

  const converted = createMemo(() => amount() * rate());

  createEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
    });
    console.log(amount(), rate());
  });

  function updateRate() {
    setRate(Math.random() + 1);
  }

  return (
    <div>
      <h1>Currency Converter</h1>
      <p>
        <label>
          Amount:{" "}
          <input
            type="number"
            value={amount()}
            onInput={(e) => setAmount(+e.currentTarget.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Rate: <span> {rate()}</span>
        </label>
      </p>
      <p>
        <strong>Converted:</strong> {converted()}
      </p>
      <button onClick={updateRate}>Randomize Rate</button>
    </div>
  );
}
