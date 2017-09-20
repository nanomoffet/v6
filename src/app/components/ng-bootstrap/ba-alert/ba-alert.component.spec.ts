import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaAlertComponent } from './ba-alert.component';

describe('BaAlertComponent', () => {
  let component: BaAlertComponent;
  let fixture: ComponentFixture<BaAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
