import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouteforfaitsComponent } from './touteforfaits.component';

describe('TouteforfaitsComponent', () => {
  let component: TouteforfaitsComponent;
  let fixture: ComponentFixture<TouteforfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouteforfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouteforfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
