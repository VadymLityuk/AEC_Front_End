import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewminisComponent } from './newminis.component';

describe('NewminisComponent', () => {
  let component: NewminisComponent;
  let fixture: ComponentFixture<NewminisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewminisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewminisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
