import { Routes } from "@angular/router";
import { CatalogProduct } from "./catalog-product/catalog-product";
import { OrderList } from "./order-list/order-list";
import { OrderDetailForm } from "./order-detail-form/order-detail-form";
import { orderDetailFormResolver } from "./order-detail-form/order-detail-form-resolver";
import { orderListResolver } from "./order-list/order-list-resolver";



export const routes:Routes=[
  {
  path:'home',
    component:CatalogProduct
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