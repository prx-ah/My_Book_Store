import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailForm } from './order-detail-form';

describe('OrderDetailForm', () => {
  let component: OrderDetailForm;
  let fixture: ComponentFixture<OrderDetailForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetailForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
