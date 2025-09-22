import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragoball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';


@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent],
})
export class DragonballSuperPageComponent {
  public nombre = signal('');
  public poder = signal(0);

  public characters = signal<Character[]>([
    { id: 1, name: 'Hola1', power: 901 },
    { id: 2, name: 'Hola2', power: 801 },
  ]);

  public addCaracter = () => {
    if (!this.nombre() || this.poder() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.nombre(),
      power: this.poder(),
    };

    this.characters.update((characters) => [...characters, newCharacter]);

    this.limpiar();
  };

  public limpiar = () => {
    this.nombre.set('');
    this.poder.set(0);
  };
}
