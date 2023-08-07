import {Component, EventEmitter, Output} from '@angular/core';
import {GameService} from "../../../../services/game.service";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
  gameSet: number[]
  currentSetIndex = 0

  @Output() numberOfGame = new EventEmitter<number>()

  constructor(private gameService: GameService) {
    this.gameSet = gameService.GAME_SET
  }
  increase() {
    if (this.currentSetIndex === this.gameSet.length-1) return
    this.currentSetIndex++
    this.numberOfGame.emit(this.gameSet[this.currentSetIndex])
  }

  decrease() {
    if (this.currentSetIndex === 0) return
    this.currentSetIndex--
    this.numberOfGame.emit(this.gameSet[this.currentSetIndex])
  }
}
