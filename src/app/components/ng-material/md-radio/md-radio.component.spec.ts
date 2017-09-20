import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdRadioComponent } from './md-radio.component';

describe('MdRadioComponent', () => {
  let component: MdRadioComponent;
  let fixture: ComponentFixture<MdRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
