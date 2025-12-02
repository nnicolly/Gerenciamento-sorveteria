import { TestBed } from '@angular/core/testing';

import { IceCream } from './ice-cream';

describe('IceCream', () => {
  let service: IceCream;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IceCream);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
