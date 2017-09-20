import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActLinksComponent } from './act-links.component';

describe('ActLinksComponent', () => {
  let component: ActLinksComponent;
  let fixture: ComponentFixture<ActLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
