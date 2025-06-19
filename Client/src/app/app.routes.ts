import { Routes } from "@angular/router";
import { CatalogProduct } from "./catalog-product/catalog-product";
import { OrderList } from "./order-list/order-list";
import { OrderDetailForm } from "./order-detail-form/order-detail-form";
import { orderDetailFormResolver } from "./order-detail-form/order-detail-form-resolver";
import { orderListResolver } from "./order-list/order-list-resolver";
import { NgModule } from "@angular/core";
import { catalogProductResolver } from "./catalog-product/catalog-product-resolver";



export const routes:Routes=[
  {
    path:'',
    component:CatalogProduct,
    resolve:{data:catalogProductResolver}

  },
  {

    path:'home',
    component:CatalogProduct,
    resolve:{data:catalogProductResolver}
  }
  ,
  {
    path :'order/list',
    component:OrderList,
    resolve:{ data : orderListResolver}
 }
 ,
 {
    path: 'create/order',
    component:OrderDetailForm,
    resolve:{ data : orderDetailFormResolver}
}

]