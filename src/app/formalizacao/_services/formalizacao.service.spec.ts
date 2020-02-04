import { TestBed } from '@angular/core/testing';

import { FormalizacaoService } from './formalizacao.service';

describe('FormalizacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormalizacaoService = TestBed.get(FormalizacaoService);
    expect(service).toBeTruthy();
  });
});
