import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListForGuestComponent } from './home-list-for-guest.component';

describe('HomeListForGuestComponent', () => {
  let component: HomeListForGuestComponent;
  let fixture: ComponentFixture<HomeListForGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeListForGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListForGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
