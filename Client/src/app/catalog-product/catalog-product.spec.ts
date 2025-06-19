import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogProduct } from './catalog-product';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('CatalogProduct', () => {
  let component: CatalogProduct;
  let fixture: ComponentFixture<CatalogProduct>;

  beforeEach(async () => {
   
    const mockActivatedRoute = {
      data: of({
        data: {
          listBookGreta: [{ title: 'Book 1' }, { title: 'Book 2' }],
          listBookPeter: [{ title: 'Book 3' }, { title: 'Book 4' }]
        }
      })
    };

    await TestBed.configureTestingModule({
      imports: [CatalogProduct, HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogProduct);
    component = fixture.componentInstance;

    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly assign data from route', () => {
     
    expect(component.gretaBook).toEqual([{ title: 'Book 1' }, { title: 'Book 2' }]);
    expect(component.peterBook).toEqual([{ title: 'Book 3' }, { title: 'Book 4' }]);
  });
});
