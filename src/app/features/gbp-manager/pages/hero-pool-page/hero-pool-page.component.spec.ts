import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPoolPageComponent } from './hero-pool-page.component';

describe('HeroPoolPageComponent', () => {
  let component: HeroPoolPageComponent;
  let fixture: ComponentFixture<HeroPoolPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroPoolPageComponent]
    });
    fixture = TestBed.createComponent(HeroPoolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
