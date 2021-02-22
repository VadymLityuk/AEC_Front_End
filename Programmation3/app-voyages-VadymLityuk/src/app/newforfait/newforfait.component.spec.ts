import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewforfaitComponent } from './newforfait.component';

describe('NewforfaitComponent', () => {
  let component: NewforfaitComponent;
  let fixture: ComponentFixture<NewforfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewforfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewforfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
