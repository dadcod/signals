import "./style.css";

import { Signal } from "./signal/wrapper";
import confetti from "canvas-confetti";
import { effect } from "./signal/effect";

const converterComponent: any =
  document.getElementsByTagName("currency-converter")[0];

converterComponent.inputElement.addEventListener("input", (e: any) => {
  amount.set(parseFloat(e.target.value));
});

converterComponent.onUpdateCallback = () => {
  rate.set(+(1.8 + Math.random() / 10).toFixed(2));
};

let amount = new Signal.State(1);
let rate = new Signal.State(1.81);
let converted = new Signal.Computed(() => amount.get() * rate.get());
updateState();

effect(() => {
  updateState();
  confetti({
    particleCount: 100,
    spread: 70,
  });
});

function updateState() {
  converterComponent.inputInnerHtml = amount.get().toFixed(2);
  converterComponent.rateInnerHtml = rate.get().toFixed(2);
  converterComponent.resultInnerHtml = converted.get().toFixed(2);
}
