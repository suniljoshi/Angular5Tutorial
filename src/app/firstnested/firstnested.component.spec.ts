import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstnestedComponent } from './firstnested.component';

describe('FirstnestedComponent', () => {
  let component: FirstnestedComponent;
  let fixture: ComponentFixture<FirstnestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstnestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstnestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
