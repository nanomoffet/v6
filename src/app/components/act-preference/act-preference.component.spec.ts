import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActPreferenceComponent } from './act-preference.component';

describe('ActPreferenceComponent', () => {
  let component: ActPreferenceComponent;
  let fixture: ComponentFixture<ActPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
