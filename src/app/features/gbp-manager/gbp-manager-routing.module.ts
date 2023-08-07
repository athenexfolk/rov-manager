import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {HeroPoolPageComponent} from "./pages/hero-pool-page/hero-pool-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
    children: [
      {
        path: "pool/:gameNo/:team/:action/:lane",
        component: HeroPoolPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GbpManagerRoutingModule { }
