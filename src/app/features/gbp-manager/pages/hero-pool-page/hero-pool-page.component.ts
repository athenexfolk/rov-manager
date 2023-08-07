import {Component, OnDestroy, OnInit} from '@angular/core';
import {heroes} from "../../../../utils/heroes";
import {GameService} from "../../../../services/game.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Hero} from "../../../../models/hero";
import {filter, map, Subscription} from "rxjs";

@Component({
  selector: 'app-hero-pool-page',
  templateUrl: './hero-pool-page.component.html',
  styleUrls: ['./hero-pool-page.component.css']
})
export class HeroPoolPageComponent implements OnInit, OnDestroy{
  protected heroes: Hero[] = [];
  private heroesBackup: Hero[] = []
  subscription: Subscription = new Subscription()

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.subscription.add(this.subscription = this.gameService.usedHeroes$.subscribe(heroes => {
      this.heroes = heroes;
      this.heroesBackup = heroes
    }))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  selectHero(hero: Hero) {
    if(hero.isUsed) return
    this.route.paramMap.subscribe({
      next: p => {
        let gameNo = p.get('gameNo')!
        let team = p.get('team')!
        let action = p.get('action')!
        if(action === 'pick') {
          this.gameService.pick(Number(gameNo),team,hero)
        }
        else if(action === 'ban') {
          this.gameService.ban(Number(gameNo),team,hero)
        }
        this.router.navigate(['/gbp'])
      }
    })
  }

  filterHero(lane: 'ROAM' | 'DSL' | 'ADL' | 'MID' | 'JGL' | '')  {
    this.heroes = this.heroesBackup
    if (lane === '') return
    this.heroes = this.heroes.filter(hero => hero.lane.includes(lane))
  }
}
