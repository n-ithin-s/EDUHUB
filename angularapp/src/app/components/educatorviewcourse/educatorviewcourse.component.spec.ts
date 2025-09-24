import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatorviewcourseComponent } from './educatorviewcourse.component';

describe('EducatorviewcourseComponent', () => {
  let component: EducatorviewcourseComponent;
  let fixture: ComponentFixture<EducatorviewcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducatorviewcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatorviewcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
