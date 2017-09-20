import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdButtonToggleComponent } from './md-button-toggle.component';

describe('MdButtonToggleComponent', () => {
  let component: MdButtonToggleComponent;
  let fixture: ComponentFixture<MdButtonToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdButtonToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
