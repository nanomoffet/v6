import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDialogComponent } from './md-dialog.component';

describe('MdDialogComponent', () => {
  let component: MdDialogComponent;
  let fixture: ComponentFixture<MdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
