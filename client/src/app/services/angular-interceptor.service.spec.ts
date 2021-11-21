import { TestBed } from '@angular/core/testing';

import { AngularInterceptorService } from './angular-interceptor.service';

describe('AngularInterceptorService', () => {
  let service: AngularInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
