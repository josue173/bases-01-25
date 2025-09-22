import { Component, signal } from '@angular/core';

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
export class DragonballPageComponent {
  public nombre = signal('');
  public poder = signal(0);

  public characters = signal<Character[]>([
    { id: 1, name: 'Pelón 1', power: 901 },
    // { id: 2, name: 'Hola2', power: 801 },
    // { id: 3, name: 'Hola3', power: 701 },
  ]);

  public addCaracter = () => {
    if(!this.nombre() || this.poder() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.nombre(),
      power: this.poder(),
    };

    this.characters.update(characters => [...characters, newCharacter]);

    this.limpiar();
  }

  public limpiar = () => {
    this.nombre.set('');
    this.poder.set(0);
  }
}
