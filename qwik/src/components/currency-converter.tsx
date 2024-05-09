import {
    $,
    component$,
    useComputed$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik";

import confetti from "canvas-confetti";

export default component$(() => {
  const amount = useSignal(1);
  const rate = useSignal(1);

  const converted = useComputed$(() => {
    return amount.value * rate.value;
  });
  const updateRate = $(() => {
    rate.value = Math.random() + 1;
  });

  useVisibleTask$(({ track }) => {
    track(() => amount.value && rate.value);
    confetti({
      particleCount: 100,
      spread: 70,
    });
  });
  return (
    <>
      <div>
        <h1>Currency Converter</h1>
        <div>
          <label for="amount">Quinoa coin</label>
          <input
            type="number"
            id="amount"
            value={amount.value}
            onInput$={(e: any) => (amount.value = e.target.value)}
          />
        </div>
        <div>
          <label for="rate">Exchange rate</label>
          <span id="rate"> {rate.value}</span>
          <button onClick$={() => updateRate()}>Update rate</button>
        </div>
        <p>Result: {converted.value} Doge coin</p>
      </div>
    </>
  );
});
