import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickSlotComponent } from './pick-slot.component';

describe('PickSlotComponent', () => {
  let component: PickSlotComponent;
  let fixture: ComponentFixture<PickSlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickSlotComponent]
    });
    fixture = TestBed.createComponent(PickSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
