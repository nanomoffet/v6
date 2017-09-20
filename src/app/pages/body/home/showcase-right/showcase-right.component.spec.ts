import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseRightComponent } from './showcase-right.component';

describe('ShowcaseRightComponent', () => {
  let component: ShowcaseRightComponent;
  let fixture: ComponentFixture<ShowcaseRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
