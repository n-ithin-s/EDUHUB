import { TestBed } from '@angular/core/testing';

import { EnrollmentService } from './enrollment.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EnrollmentService', () => {
  let service: EnrollmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EnrollmentService);
  });

  fit('frontend_enrollment service should be created', () => {
    expect(service).toBeTruthy();
  });
});
