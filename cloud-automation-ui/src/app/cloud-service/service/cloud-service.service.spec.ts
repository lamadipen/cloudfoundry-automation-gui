import { TestBed, inject } from '@angular/core/testing';

import { CloudServiceService } from './cloud-service.service';

describe('CloudServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudServiceService]
    });
  });

  it('should be created', inject([CloudServiceService], (service: CloudServiceService) => {
    expect(service).toBeTruthy();
  }));
});
