import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicHouseListComponent} from './public-house-list.component';

describe('PublicHouseListComponent', () => {
  let component: PublicHouseListComponent;
  let fixture: ComponentFixture<PublicHouseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublicHouseListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicHouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
