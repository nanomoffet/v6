import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSidenavComponent } from './md-sidenav.component';

describe('MdSidenavComponent', () => {
  let component: MdSidenavComponent;
  let fixture: ComponentFixture<MdSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
