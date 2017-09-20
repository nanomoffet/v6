import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdGridListComponent } from './md-grid-list.component';

describe('MdGridListComponent', () => {
  let component: MdGridListComponent;
  let fixture: ComponentFixture<MdGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
