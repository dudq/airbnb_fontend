import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HostBookingHouseComponent} from './host-booking-house.component';

describe('HostBookingHouseComponent', () => {
  let component: HostBookingHouseComponent;
  let fixture: ComponentFixture<HostBookingHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostBookingHouseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostBookingHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
