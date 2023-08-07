import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GbpManagerRoutingModule } from './gbp-manager-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GameGroupComponent } from './components/game-group/game-group.component';
import { GameComponent } from './components/game/game.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { BanSlotComponent } from './components/ban-slot/ban-slot.component';
import { PickSlotComponent } from './components/pick-slot/pick-slot.component';
import { HeroAvatarComponent } from './components/hero-avatar/hero-avatar.component';
import { HeroPoolPageComponent } from './pages/hero-pool-page/hero-pool-page.component';
import { TabLinkComponent } from './components/tab-link/tab-link.component';


@NgModule({
  declarations: [
    MainPageComponent,
    GameGroupComponent,
    GameComponent,
    ConfigurationComponent,
    BanSlotComponent,
    PickSlotComponent,
    HeroAvatarComponent,
    HeroPoolPageComponent,
    TabLinkComponent
  ],
  imports: [
    CommonModule,
    GbpManagerRoutingModule
  ]
})
export class GbpManagerModule { }
