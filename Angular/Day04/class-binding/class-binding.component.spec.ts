import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindingComponent } from './class-binding.component';

describe('ClassBindingComponent', () => {
  let component: ClassBindingComponent;
  let fixture: ComponentFixture<ClassBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
