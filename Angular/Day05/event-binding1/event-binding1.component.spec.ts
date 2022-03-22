import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBinding1Component } from './event-binding1.component';

describe('EventBinding1Component', () => {
  let component: EventBinding1Component;
  let fixture: ComponentFixture<EventBinding1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBinding1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBinding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
