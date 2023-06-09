import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../services/hero-service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayCount: number = 0;
  heroes: Hero[] = [];
  filteredHeroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(
        (heroes) => (
          (this.heroes = heroes),
          (this.filteredHeroes = heroes),
          (this.displayCount = heroes.length)
        )
      );
  }

  filterHeroes(displayCount: number): void {
    if (displayCount === this.heroes.length) this.filteredHeroes = this.heroes;
    else {
      const filteredHeroes = this.heroes.slice(1, displayCount + 1);
      this.filteredHeroes = filteredHeroes;
    }
  }
}
