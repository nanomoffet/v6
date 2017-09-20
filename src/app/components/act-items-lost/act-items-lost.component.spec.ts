import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActItemsLostComponent } from './act-items-lost.component';

describe('ActItemsLostComponent', () => {
  let component: ActItemsLostComponent;
  let fixture: ComponentFixture<ActItemsLostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActItemsLostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActItemsLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
