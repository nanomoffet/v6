import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdProgressSpinnerComponent } from './md-progress-spinner.component';

describe('MdProgressSpinnerComponent', () => {
  let component: MdProgressSpinnerComponent;
  let fixture: ComponentFixture<MdProgressSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdProgressSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
