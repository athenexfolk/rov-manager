import {Component, Input} from '@angular/core';
import {GameService} from "../../../../services/game.service";
import {Game} from "../../../../models/game";

@Component({
  selector: 'app-game-group',
  templateUrl: './game-group.component.html',
  styleUrls: ['./game-group.component.css']
})
export class GameGroupComponent {
  @Input() maxGame = 1
  gameCount = 0
  games: Game[] = []

  constructor(private gameService: GameService) {
    this.gameService.current_game$.subscribe(games => this.games = games)
  }
  createGame() {
    if (this.gameCount >= this.maxGame) return
    this.gameCount++
    this.gameService.recoverBannedHero()
    this.gameService.addGame({gameNumber: this.gameCount, ally: {pickedHeroes: [],bannedHeroes: []},enemy: {pickedHeroes: [], bannedHeroes: []}})
  }

  clearGame() {
    this.games = []
    this.gameCount = 0
    this.gameService.clearGame()
  }
}
