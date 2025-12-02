import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamFormDialog } from './ice-cream-form-dialog';

describe('IceCreamFormDialog', () => {
  let component: IceCreamFormDialog;
  let fixture: ComponentFixture<IceCreamFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IceCreamFormDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IceCreamFormDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
