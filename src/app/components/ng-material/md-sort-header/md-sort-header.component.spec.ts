import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSortHeaderComponent } from './md-sort-header.component';

describe('MdSortHeaderComponent', () => {
  let component: MdSortHeaderComponent;
  let fixture: ComponentFixture<MdSortHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdSortHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdSortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
