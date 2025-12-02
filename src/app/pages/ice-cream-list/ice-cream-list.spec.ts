import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamList } from './ice-cream-list';

describe('IceCreamList', () => {
  let component: IceCreamList;
  let fixture: ComponentFixture<IceCreamList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IceCreamList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IceCreamList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
