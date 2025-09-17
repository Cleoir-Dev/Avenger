import { TestBed } from '@angular/core/testing';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return '$' for 'dollar'`, () => {
    expect(service.getCurrentSymbol('dollar')).toBe('$');
  });

  it(`should return '$' for 'DOLLAR' (case-insensitive)`, () => {
    expect(service.getCurrentSymbol('DOLLAR')).toBe('$');
  });

  it('should return an empty string for an unknown currency', () => {
    expect(service.getCurrentSymbol('real')).toBe('');
  });

  it('should return an empty string for a null or empty input', () => {
    expect(service.getCurrentSymbol('')).toBe('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(service.getCurrentSymbol(null as any)).toBe('');
  });
});
