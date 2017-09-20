import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActItemsOtherlibComponent } from './act-items-otherlib.component';

describe('ActItemsOtherlibComponent', () => {
  let component: ActItemsOtherlibComponent;
  let fixture: ComponentFixture<ActItemsOtherlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActItemsOtherlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActItemsOtherlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
