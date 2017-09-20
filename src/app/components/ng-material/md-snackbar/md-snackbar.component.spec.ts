import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSnackbarComponent } from './md-snackbar.component';

describe('MdSnackbarComponent', () => {
  let component: MdSnackbarComponent;
  let fixture: ComponentFixture<MdSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
