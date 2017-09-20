import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdProgressBarComponent } from './md-progress-bar.component';

describe('MdProgressBarComponent', () => {
  let component: MdProgressBarComponent;
  let fixture: ComponentFixture<MdProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
