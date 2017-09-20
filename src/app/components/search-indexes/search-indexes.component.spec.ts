import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIndexesComponent } from './search-indexes.component';

describe('SearchIndexesComponent', () => {
  let component: SearchIndexesComponent;
  let fixture: ComponentFixture<SearchIndexesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIndexesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIndexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
