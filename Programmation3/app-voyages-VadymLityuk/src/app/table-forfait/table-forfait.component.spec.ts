import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableForfaitComponent } from './table-forfait.component';

describe('TableForfaitComponent', () => {
  let component: TableForfaitComponent;
  let fixture: ComponentFixture<TableForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
