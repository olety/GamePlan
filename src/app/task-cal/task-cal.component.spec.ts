import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCalComponent } from './task-cal.component';

describe('TaskCalComponent', () => {
  let component: TaskCalComponent;
  let fixture: ComponentFixture<TaskCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
