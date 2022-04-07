import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParameterComponent } from './query-parameter.component';

describe('QueryParameterComponent', () => {
  let component: QueryParameterComponent;
  let fixture: ComponentFixture<QueryParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
