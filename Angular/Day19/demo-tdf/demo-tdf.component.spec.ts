import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTDFComponent } from './demo-tdf.component';

describe('DemoTDFComponent', () => {
  let component: DemoTDFComponent;
  let fixture: ComponentFixture<DemoTDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
