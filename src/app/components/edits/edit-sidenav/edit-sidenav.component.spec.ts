import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSidenavComponent } from './edit-sidenav.component';

describe('EditSidenavComponent', () => {
  let component: EditSidenavComponent;
  let fixture: ComponentFixture<EditSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
