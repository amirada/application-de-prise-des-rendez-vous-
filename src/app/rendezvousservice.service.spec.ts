import { TestBed } from '@angular/core/testing';

import { RendezvousserviceService } from './rendezvousservice.service';

describe('RendezvousserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RendezvousserviceService = TestBed.get(RendezvousserviceService);
    expect(service).toBeTruthy();
  });
});
