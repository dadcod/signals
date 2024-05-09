import { Component, computed, effect, signal } from '@angular/core';

import confetti from 'canvas-confetti';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css',
})
export class CurrencyConverterComponent {
  amount = signal(1);
  rate = signal(1);
  converted = computed(() => this.amount() * this.rate());

  constructor() {
    effect(() => {
      console.log(this.amount(), this.rate());
      confetti({
        particleCount: 100,
        spread: 70,
      });
    });
  }

  updateRate() {
    this.rate.set(Math.random() + 1);
  }
}
