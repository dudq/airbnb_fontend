import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserHouseBookingComponent} from './user-house-booking.component';

describe('UserHouseBookingComponent', () => {
  let component: UserHouseBookingComponent;
  let fixture: ComponentFixture<UserHouseBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserHouseBookingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHouseBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
