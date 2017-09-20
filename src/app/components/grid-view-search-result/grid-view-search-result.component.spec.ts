import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewSearchResultComponent } from './grid-view-search-result.component';

describe('GridViewSearchResultComponent', () => {
  let component: GridViewSearchResultComponent;
  let fixture: ComponentFixture<GridViewSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridViewSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridViewSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
