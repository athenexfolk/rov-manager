import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../../../../services/game.service";
import {Hero} from "../../../../models/hero";
import {map} from "rxjs";

@Component({
  selector: 'app-pick-slot',
  templateUrl: './pick-slot.component.html',
  styleUrls: ['./pick-slot.component.css']
})
export class PickSlotComponent {
  @Input() maxPick = 5
  @Input() forGameNo = 0
  @Input() team! : 'ally' | 'enemy'
  pickSlot: Hero[] = []

  constructor(private router: Router,private gameService: GameService) {
    this.gameService.current_game$.pipe(
      map(games => {
        if(this.team === 'ally') return games[this.forGameNo-1].ally.pickedHeroes
        else if (this.team === 'enemy') return games[this.forGameNo-1].enemy.pickedHeroes
        else return []
      })
    ).subscribe(
      (heroes: Hero[]) => this.pickSlot = heroes
    )
  }
  pick() {
    if (this.pickSlot.length === this.maxPick) return

    this.router.navigate(['/gbp','pool',this.forGameNo,this.team,'pick',''])
  }

  remove(index: number, hero: Hero) {
    this.gameService.remove(this.forGameNo,this.team,'pick',index,hero)
  }
}
