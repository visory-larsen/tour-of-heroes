import { Component } from '@angular/core';
import { HEROES } from 'src/data/mock-heroes';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
