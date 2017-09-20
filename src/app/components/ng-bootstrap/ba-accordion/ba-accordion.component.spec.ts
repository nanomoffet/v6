import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaAccordionComponent } from './ba-accordion.component';

describe('BaAccordionComponent', () => {
  let component: BaAccordionComponent;
  let fixture: ComponentFixture<BaAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
