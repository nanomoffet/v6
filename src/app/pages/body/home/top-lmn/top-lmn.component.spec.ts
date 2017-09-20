import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLmnComponent } from './top-lmn.component';

describe('TopLmnComponent', () => {
  let component: TopLmnComponent;
  let fixture: ComponentFixture<TopLmnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLmnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
