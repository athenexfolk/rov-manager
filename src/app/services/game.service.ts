import { Injectable } from '@angular/core';
import {Game} from "../models/game";
import {Hero} from "../models/hero";
import {BehaviorSubject} from "rxjs";
import {heroes} from "../utils/heroes";

@Injectable({
  providedIn: 'root'
})
export class GameService {


  #GAME_SET = [1,3,5,7]
  #CURRENT_GAME: Game[] = []
  #usedHeroes = heroes
  public current_game$: BehaviorSubject<Game[]>
  public usedHeroes$ : BehaviorSubject<Hero[]>

  constructor() {
    this.current_game$ = new BehaviorSubject<Game[]>([])
    this.usedHeroes$ = new BehaviorSubject<Hero[]>(this.usedHeroes)
  }

  get GAME_SET(): number[] {
    return this.#GAME_SET;
  }

  get CURRENT_GAME(): Game[] {
    return this.#CURRENT_GAME;
  }

  get usedHeroes(): Hero[] {
    return this.#usedHeroes;
  }

  addGame(game: Game) {
    this.CURRENT_GAME.push(game)
    this.current_game$.next(this.CURRENT_GAME)
  }

  clearGame() {
    this.#CURRENT_GAME = []
    this.current_game$.next([])
  }

  pick(gameNumber: number, team: string, hero: Hero) {
    if(team === 'ally') this.#CURRENT_GAME[gameNumber-1].ally.pickedHeroes.push(hero)
    else if(team === 'enemy') this.#CURRENT_GAME[gameNumber-1].enemy.pickedHeroes.push(hero)
    this.current_game$.next(this.CURRENT_GAME)
    this.#usedHeroes[hero.id!].isUsed = true
    this.usedHeroes$.next(this.usedHeroes)
  }

  ban(gameNumber: number, team: string, hero: Hero) {
    if(team === 'ally') this.#CURRENT_GAME[gameNumber-1].ally.bannedHeroes.push(hero)
    else if(team === 'enemy') this.#CURRENT_GAME[gameNumber-1].enemy.bannedHeroes.push(hero)
    this.current_game$.next(this.CURRENT_GAME)

    this.#usedHeroes[hero.id!].isUsed = true
    this.usedHeroes$.next(this.usedHeroes)

  }

  remove(gameNumber: number, team: string, action: string, index: number, hero: Hero) {
    if(team === 'ally') {
      if(action === 'pick') this.#CURRENT_GAME[gameNumber-1].ally.pickedHeroes.splice(index,1)
      else if(action === 'ban') this.#CURRENT_GAME[gameNumber-1].ally.bannedHeroes.splice(index,1)
    }
    if(team === 'enemy') {
      if(action === 'pick') this.#CURRENT_GAME[gameNumber-1].enemy.pickedHeroes.splice(index,1)
      else if(action === 'ban') this.#CURRENT_GAME[gameNumber-1].enemy.bannedHeroes.splice(index,1)
    }
    this.current_game$.next(this.CURRENT_GAME)
    this.#usedHeroes[hero.id!].isUsed = false
    this.usedHeroes$.next(this.usedHeroes)
  }

  recoverBannedHero() {
    this.#CURRENT_GAME.forEach(game => {
      game.ally.bannedHeroes.forEach(bannedHero => {
        this.#usedHeroes[bannedHero.id].isUsed = false
      })
      game.enemy.bannedHeroes.forEach(bannedHero => {
        this.#usedHeroes[bannedHero.id].isUsed = false
      })
      game.enemy.pickedHeroes.forEach(pickedHero => {
        this.#usedHeroes[pickedHero.id].isUsed = false
      })
    })
    this.usedHeroes$.next(this.usedHeroes)
  }

}
