import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadroomComponent } from './headroom.component';

describe('HeadroomComponent', () => {
  let component: HeadroomComponent;
  let fixture: ComponentFixture<HeadroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
