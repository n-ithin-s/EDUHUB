import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatoreditcourseComponent } from './educatoreditcourse.component';

describe('EducatoreditcourseComponent', () => {
  let component: EducatoreditcourseComponent;
  let fixture: ComponentFixture<EducatoreditcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducatoreditcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatoreditcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
