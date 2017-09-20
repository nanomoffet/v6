import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchActiveFacetsComponent } from './search-active-facets.component';

describe('SearchActiveFacetsComponent', () => {
  let component: SearchActiveFacetsComponent;
  let fixture: ComponentFixture<SearchActiveFacetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchActiveFacetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchActiveFacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
