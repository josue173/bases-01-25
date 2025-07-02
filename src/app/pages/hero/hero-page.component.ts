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
    // return `${this.name()} - ${this.age()}`;
  }

  get heroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.getHeroDescription('Spiderman', 22);
  }

  resetForm(edad: number = 45) {
    if (edad === 45) {
      this.getHeroDescription('Ironman', edad);
    } else {
      this.getHeroDescription(this.name(), edad);
    }
  }

  changeAge() {
    this.resetForm(60);
  }
}
