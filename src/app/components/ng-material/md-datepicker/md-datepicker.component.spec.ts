import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDatepickerComponent } from './md-datepicker.component';

describe('MdDatepickerComponent', () => {
  let component: MdDatepickerComponent;
  let fixture: ComponentFixture<MdDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
