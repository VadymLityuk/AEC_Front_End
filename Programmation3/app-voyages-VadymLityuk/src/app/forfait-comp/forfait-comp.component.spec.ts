import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitCompComponent } from './forfait-comp.component';

describe('ForfaitCompComponent', () => {
  let component: ForfaitCompComponent;
  let fixture: ComponentFixture<ForfaitCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
