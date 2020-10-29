import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheprodComponent } from './ficheprod.component';

describe('FicheprodComponent', () => {
  let component: FicheprodComponent;
  let fixture: ComponentFixture<FicheprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
