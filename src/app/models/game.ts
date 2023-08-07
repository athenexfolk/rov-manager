import {Hero} from "./hero";

export interface Game {
  gameNumber: number
  ally: Ally
  enemy: Enemy
}

export interface Team {
  pickedHeroes: Hero[];
  bannedHeroes: Hero[];
}

export interface Ally extends Team {}
export interface Enemy extends Team {}
