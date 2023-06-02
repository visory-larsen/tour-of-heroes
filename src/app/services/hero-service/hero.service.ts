import { Injectable } from '@angular/core';
import { HEROES } from 'src/data/mock-heroes';
import { Hero } from 'src/interfaces/hero';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message-service/messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private heroesUrl = 'api/heroes'; // URL to web api

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    return of(hero);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
