import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopKesuComponent } from './top-kesu.component';

describe('TopKesuComponent', () => {
  let component: TopKesuComponent;
  let fixture: ComponentFixture<TopKesuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopKesuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopKesuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
