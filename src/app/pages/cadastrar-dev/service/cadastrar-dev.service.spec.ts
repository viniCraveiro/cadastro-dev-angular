import { TestBed } from '@angular/core/testing';

import { CadastrarDevService } from './cadastrar-dev.service';

describe('CadastrarDevService', () => {
  let service: CadastrarDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
