import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBriefComponent } from './grid-brief.component';

describe('GridBriefComponent', () => {
  let component: GridBriefComponent;
  let fixture: ComponentFixture<GridBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
