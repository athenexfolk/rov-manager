import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {GameService} from "../../../../services/game.service";
import {Hero} from "../../../../models/hero";
import {map} from "rxjs";

@Component({
  selector: 'app-ban-slot',
  templateUrl: './ban-slot.component.html',
  styleUrls: ['./ban-slot.component.css']
})
export class BanSlotComponent {
  @Input() maxBan = 4
  @Input() forGameNo = 0
  @Input() team! : string
  banSlot: Hero[] = []

  constructor(private router: Router,private gameService: GameService) {
    this.gameService.current_game$.pipe(
      map(games => {
        if(this.team === 'ally') return games[this.forGameNo-1].ally.bannedHeroes
        else if (this.team === 'enemy') return games[this.forGameNo-1].enemy.bannedHeroes
        else return []
      })
    ).subscribe(
      (heroes: Hero[]) => this.banSlot = heroes
    )
  }
  ban() {
    if (this.banSlot.length === this.maxBan) return

    this.router.navigate(['/gbp','pool',this.forGameNo,this.team,'ban',''])
  }

  remove(index: number, hero: Hero) {
    this.gameService.remove(this.forGameNo,this.team,'ban',index, hero)
  }
}
