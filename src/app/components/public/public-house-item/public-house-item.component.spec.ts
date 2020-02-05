import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicHouseItemComponent} from './public-house-item.component';

describe('PublicHouseItemComponent', () => {
  let component: PublicHouseItemComponent;
  let fixture: ComponentFixture<PublicHouseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublicHouseItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicHouseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
