import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardProduct } from './card-product';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CardProduct', () => {
  let component: CardProduct;
  let fixture: ComponentFixture<CardProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProduct],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {}, queryParams: {}, data: {} },
            paramMap: of(new Map()),
            queryParamMap: of(new Map())
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardProduct);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log books input on init', () => {
    const mockBooks = [{ title: 'Book 1' }, { title: 'Book 2' }];
    component.books = mockBooks;

    const consoleSpy = spyOn(console, 'log');
    fixture.detectChanges();

    expect(consoleSpy).toHaveBeenCalledWith('books-->', mockBooks);
  });
});
