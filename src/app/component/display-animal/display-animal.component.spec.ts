import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAnimalComponent } from './display-animal.component';

describe('DisplayAnimalComponent', () => {
  let component: DisplayAnimalComponent;
  let fixture: ComponentFixture<DisplayAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
