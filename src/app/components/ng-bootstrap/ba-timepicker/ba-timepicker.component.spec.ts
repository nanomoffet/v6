import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaTimepickerComponent } from './ba-timepicker.component';

describe('BaTimepickerComponent', () => {
  let component: BaTimepickerComponent;
  let fixture: ComponentFixture<BaTimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaTimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
