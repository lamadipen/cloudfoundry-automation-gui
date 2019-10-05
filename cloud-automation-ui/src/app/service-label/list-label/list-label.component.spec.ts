import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLabelComponent } from './list-label.component';

describe('ListLabelComponent', () => {
  let component: ListLabelComponent;
  let fixture: ComponentFixture<ListLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
