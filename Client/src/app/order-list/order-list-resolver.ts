import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { forkJoin, map, Observable, of, catchError } from 'rxjs';
import { OrderService } from '../shared/order-service';

export const orderListResolver: ResolveFn<Observable<any>> = (route) => {
  const router: Router = inject(Router);
  const sv: OrderService = inject(OrderService);

  const extra = router.getCurrentNavigation()?.extras.state;
  const url = route.url.join('/');

 
  let data = {

  }
  sv.refreshList().subscribe((res:any)=>{
      console.log("res-->",res);
      data = res ;
      console.log("data")
       
    })

return sv.refreshList().pipe(
    catchError((err) => {
      console.error('Error in resolver:', err);
      return of({ data: null, error: true });
    })
  );

   
};
