import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeElementsComponent } from './liste-elements.component';

describe('ListeElementsComponent', () => {
  let component: ListeElementsComponent;
  let fixture: ComponentFixture<ListeElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
