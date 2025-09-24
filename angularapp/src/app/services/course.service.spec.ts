import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CourseService);
  });

  fit('frontend_course service should be created', () => {
    expect(service).toBeTruthy();
  });
});
