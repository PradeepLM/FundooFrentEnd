import { TestBed } from '@angular/core/testing';

import { GetnotesService } from './getnotes.service';

describe('GetnotesService', () => {
  let service: GetnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
