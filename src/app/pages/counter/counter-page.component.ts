import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter: number = 10;
  senalContador = signal(10);

  constructor() {
    setInterval(() => {
      this.senalContador.update((v) => v + 1);
      console.log('Tick');
    }, 2000);
  }

  incrementarPor(valor: number): void {
    this.counter += valor;
    // this.senalContador.set(this.senalContador() +  valor); // No recomendado
    this.senalContador.update((current) => current + valor);
  }

  restar(valor: number): void {
    this.counter -= valor;
    this.senalContador.update((current) => current - valor);
  }

  reestablecer(): void {
    this.counter = 10;
    this.senalContador.set(0);
  }
}
