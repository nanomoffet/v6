import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActItemsOutComponent } from './act-items-out.component';

describe('ActItemsOutComponent', () => {
  let component: ActItemsOutComponent;
  let fixture: ComponentFixture<ActItemsOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActItemsOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActItemsOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
