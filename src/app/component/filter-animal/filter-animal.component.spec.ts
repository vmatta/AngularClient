import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAnimalComponent } from './filter-animal.component';

describe('FilterAnimalComponent', () => {
  let component: FilterAnimalComponent;
  let fixture: ComponentFixture<FilterAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
