import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTogglePatronComponent } from './slide-toggle-patron.component';

describe('SlideTogglePatronComponent', () => {
  let component: SlideTogglePatronComponent;
  let fixture: ComponentFixture<SlideTogglePatronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideTogglePatronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTogglePatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
