import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { forkJoin, map, Observable, of, catchError } from 'rxjs';
import { OrderService } from '../shared/order-service';

export const orderDetailFormResolver: ResolveFn<Observable<any>> = (route) => {
  const router: Router = inject(Router);
  const su: OrderService = inject(OrderService);

  const extra = router.getCurrentNavigation()?.extras.state;
  const url = route.url.join('/');

    console.log("resolver activate -->",extra)
  return of({extra});
};
