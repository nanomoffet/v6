import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaCollapseComponent } from './ba-collapse.component';

describe('BaCollapseComponent', () => {
  let component: BaCollapseComponent;
  let fixture: ComponentFixture<BaCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
