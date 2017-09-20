import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseLeftComponent } from './showcase-left.component';

describe('ShowcaseLeftComponent', () => {
  let component: ShowcaseLeftComponent;
  let fixture: ComponentFixture<ShowcaseLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
