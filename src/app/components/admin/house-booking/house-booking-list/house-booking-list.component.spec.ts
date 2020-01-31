import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HouseBookingListComponent} from './house-booking-list.component';

describe('HouseBookingListComponent', () => {
  let component: HouseBookingListComponent;
  let fixture: ComponentFixture<HouseBookingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HouseBookingListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseBookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
