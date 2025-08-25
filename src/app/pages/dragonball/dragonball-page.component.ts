import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballComponent {
  public characters = signal<Character[]>([
    { id: 1, name: 'Hola1', power: 901 },
    { id: 2, name: 'Hola2', power: 801 },
    { id: 3, name: 'Hola3', power: 701 },
  ]);
}
