import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondnestedComponent } from './secondnested.component';

describe('SecondnestedComponent', () => {
  let component: SecondnestedComponent;
  let fixture: ComponentFixture<SecondnestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondnestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondnestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
