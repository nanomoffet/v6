import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaTabsComponent } from './ba-tabs.component';

describe('BaTabsComponent', () => {
  let component: BaTabsComponent;
  let fixture: ComponentFixture<BaTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
