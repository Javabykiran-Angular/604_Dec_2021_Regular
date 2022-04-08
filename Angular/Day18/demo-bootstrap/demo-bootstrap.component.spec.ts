import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBootstrapComponent } from './demo-bootstrap.component';

describe('DemoBootstrapComponent', () => {
  let component: DemoBootstrapComponent;
  let fixture: ComponentFixture<DemoBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
