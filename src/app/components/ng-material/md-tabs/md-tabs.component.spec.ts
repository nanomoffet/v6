import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdTabsComponent } from './md-tabs.component';

describe('MdTabsComponent', () => {
  let component: MdTabsComponent;
  let fixture: ComponentFixture<MdTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
