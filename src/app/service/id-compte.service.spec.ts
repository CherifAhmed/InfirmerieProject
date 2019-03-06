import { TestBed } from '@angular/core/testing';

import { IdCompteService } from './id-compte.service';

describe('IdCompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdCompteService = TestBed.get(IdCompteService);
    expect(service).toBeTruthy();
  });
});
