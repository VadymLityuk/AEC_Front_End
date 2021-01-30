import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitCubaComponent } from './forfait-cuba.component';

describe('ForfaitCubaComponent', () => {
  let component: ForfaitCubaComponent;
  let fixture: ComponentFixture<ForfaitCubaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitCubaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitCubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
