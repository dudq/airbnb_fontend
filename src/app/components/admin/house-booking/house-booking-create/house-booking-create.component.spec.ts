import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HouseBookingCreateComponent} from './house-booking-create.component';

describe('HouseBookingCreateComponent', () => {
  let component: HouseBookingCreateComponent;
  let fixture: ComponentFixture<HouseBookingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HouseBookingCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseBookingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
