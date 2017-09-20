import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActFavResourcesComponent } from './act-fav-resources.component';

describe('ActFavResourcesComponent', () => {
  let component: ActFavResourcesComponent;
  let fixture: ComponentFixture<ActFavResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActFavResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActFavResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
