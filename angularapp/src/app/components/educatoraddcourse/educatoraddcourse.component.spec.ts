import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatoraddcourseComponent } from './educatoraddcourse.component';

describe('EducatoraddcourseComponent', () => {
  let component: EducatoraddcourseComponent;
  let fixture: ComponentFixture<EducatoraddcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducatoraddcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatoraddcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
