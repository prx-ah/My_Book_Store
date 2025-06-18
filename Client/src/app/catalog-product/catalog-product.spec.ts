import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogProduct } from './catalog-product';

describe('CatalogProduct', () => {
  let component: CatalogProduct;
  let fixture: ComponentFixture<CatalogProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
