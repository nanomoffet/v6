import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenvComponent } from './top-tenv.component';

describe('TopTenvComponent', () => {
  let component: TopTenvComponent;
  let fixture: ComponentFixture<TopTenvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
