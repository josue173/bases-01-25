import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(nombre: string = 'Ironman', edad: number = 45): void {
    this.name.update(() => nombre);
    this.age.update(() => edad);
  }

  get heroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero(): void {
    this.getHeroDescription('Spiderman', 22);
  }

  resetForm(edad: number = 45): void {
    edad === 45
      ? this.getHeroDescription('Ironman', edad)
      : this.getHeroDescription(this.name(), edad)
  }

  changeAge(): void {
    this.resetForm(60);
  }
}
