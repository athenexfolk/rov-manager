import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanSlotComponent } from './ban-slot.component';

describe('BanSlotComponent', () => {
  let component: BanSlotComponent;
  let fixture: ComponentFixture<BanSlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanSlotComponent]
    });
    fixture = TestBed.createComponent(BanSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
