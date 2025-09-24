import { TestBed } from '@angular/core/testing';

import { MaterialService } from './material.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MaterialService', () => {
  let service: MaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MaterialService);
  });

  fit('frontend_material service should be created', () => {
    expect(service).toBeTruthy();
  });
});
