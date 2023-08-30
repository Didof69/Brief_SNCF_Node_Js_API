import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantUpdateComponent } from './plant-update.component';

describe('PlantUpdateComponent', () => {
  let component: PlantUpdateComponent;
  let fixture: ComponentFixture<PlantUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantUpdateComponent]
    });
    fixture = TestBed.createComponent(PlantUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
