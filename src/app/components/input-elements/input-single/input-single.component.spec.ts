import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSingleComponent } from './input-single.component';

describe('InputSingleComponent', () => {
  let component: InputSingleComponent;
  let fixture: ComponentFixture<InputSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
