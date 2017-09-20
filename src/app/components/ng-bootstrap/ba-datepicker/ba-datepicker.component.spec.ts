import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaDatepickerComponent } from './ba-datepicker.component';

describe('BaDatepickerComponent', () => {
  let component: BaDatepickerComponent;
  let fixture: ComponentFixture<BaDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
