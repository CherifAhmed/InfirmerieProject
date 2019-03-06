import { TestBed } from '@angular/core/testing';

import { Service.CommentaireService } from './service.commentaire.service';

describe('Service.CommentaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Service.CommentaireService = TestBed.get(Service.CommentaireService);
    expect(service).toBeTruthy();
  });
});
