import { Component } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `
})
export class CounterPageComponent {
  counter: number = 10;

  incrementarPor(valor: number): void {
    this.counter += valor;
  }

  restar(valor: number): void {
    this.counter -= valor;
  }

  reestablecer(): void {
    this.counter = 10;
  }
}
