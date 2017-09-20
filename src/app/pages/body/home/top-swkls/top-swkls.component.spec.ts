import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSwklsComponent } from './top-swkls.component';

describe('TopSwklsComponent', () => {
  let component: TopSwklsComponent;
  let fixture: ComponentFixture<TopSwklsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSwklsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSwklsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
