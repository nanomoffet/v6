import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAllFacetsComponent } from './search-all-facets.component';

describe('SearchAllFacetsComponent', () => {
  let component: SearchAllFacetsComponent;
  let fixture: ComponentFixture<SearchAllFacetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAllFacetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAllFacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
