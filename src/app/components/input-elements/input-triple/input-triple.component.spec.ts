import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTripleComponent } from './input-triple.component';

describe('InputTripleComponent', () => {
  let component: InputTripleComponent;
  let fixture: ComponentFixture<InputTripleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTripleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTripleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
