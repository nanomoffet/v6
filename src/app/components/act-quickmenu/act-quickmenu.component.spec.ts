import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActQuickmenuComponent } from './act-quickmenu.component';

describe('ActQuickmenuComponent', () => {
  let component: ActQuickmenuComponent;
  let fixture: ComponentFixture<ActQuickmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActQuickmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActQuickmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
