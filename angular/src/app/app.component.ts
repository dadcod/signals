import { Component } from '@angular/core';
import { CurrencyConverterComponent } from "./currency-converter/currency-converter.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CurrencyConverterComponent]
})
export class AppComponent {
  title = 'angular';
}
