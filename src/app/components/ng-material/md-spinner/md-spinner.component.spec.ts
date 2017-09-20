import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSpinnerComponent } from './md-spinner.component';

describe('MdSpinnerComponent', () => {
  let component: MdSpinnerComponent;
  let fixture: ComponentFixture<MdSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
