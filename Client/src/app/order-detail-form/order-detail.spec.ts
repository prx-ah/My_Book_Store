import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDetailForm } from './order-detail-form'; // your standalone component
import { OrderService } from '../shared/order-service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('OrderDetailForm', () => {
  let component: OrderDetailForm;
  let fixture: ComponentFixture<OrderDetailForm>;
  let mockOrderService: jasmine.SpyObj<OrderService>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
     
    mockOrderService = jasmine.createSpyObj('OrderService', ['postPaymentDetail', 'putPaymentDetail']);
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['data']);
    mockActivatedRoute.data = of({ data: { extra: { titleOfBook: 'Book A', price: 100, store: 'Store A' } } });

    await TestBed.configureTestingModule({
      imports: [
        OrderDetailForm,  
        ReactiveFormsModule,
        HttpClientModule,   
      ],
      providers: [
        { provide: OrderService, useValue: mockOrderService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        FormBuilder,
        Router,  
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderDetailForm);
    component = fixture.componentInstance;

    
    fixture.detectChanges();   
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with correct data from route', () => {
    fixture.detectChanges();  
    expect(component.orderForm.value.titleOfBook).toBe('Book A');
    expect(component.orderForm.value.price).toBe(100);
    expect(component.orderForm.value.store).toBe('Store A');
  });

  it('should submit form', () => {
    const mockFormValue = {
      orderNumber: '12345',
      titleOfBook: 'Book A',
      price: 100,
      store: 'Store A',
      totalPaid: 107
    };
    component.orderForm.setValue(mockFormValue);

    mockOrderService.postPaymentDetail.and.returnValue(of({}));  

    spyOn(component, 'insertRecord');

    component.onSubmit();

    expect(component.insertRecord).toHaveBeenCalledWith(mockFormValue);
  });

  it('should navigate to order list', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');

    component.navigateToListOrder();

    expect(router.navigate).toHaveBeenCalledWith(['/order/list'], { state: { code: undefined } });
  });
});
