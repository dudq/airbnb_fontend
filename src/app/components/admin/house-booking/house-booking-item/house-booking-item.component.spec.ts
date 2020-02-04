import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HouseBookingItemComponent} from './house-booking-item.component';

describe('HouseBookingItemComponent', () => {
  let component: HouseBookingItemComponent;
  let fixture: ComponentFixture<HouseBookingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HouseBookingItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseBookingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
