import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.css'],
})
export class HeroFilterComponent {
  @Input() displayCount: number;
  @Input() heroes: Hero[];
  @Output() filterHeroes = new EventEmitter();

  constructor() {}

  updateDisplayCount(count: string): void {
    const toIntCount = parseInt(count);
    this.filterHeroes.emit(toIntCount);
  }
}
