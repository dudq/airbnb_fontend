import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHouseComponent } from './category-house.component';

describe('CategoryHouseComponent', () => {
  let component: CategoryHouseComponent;
  let fixture: ComponentFixture<CategoryHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
