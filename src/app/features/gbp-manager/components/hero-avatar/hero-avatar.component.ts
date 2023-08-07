import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from "../../../../models/hero";

@Component({
  selector: 'app-hero-avatar',
  templateUrl: './hero-avatar.component.html',
  styleUrls: ['./hero-avatar.component.css']
})
export class HeroAvatarComponent {
  @Input() hero!: Hero
  @Input() isRemovable = false
  @Output() removeEmitter = new EventEmitter()

  removeSelf() {
    this.removeEmitter.emit()
  }
}
