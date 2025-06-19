import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OrderService } from '../shared/order-service';
import { HttpClient } from '@angular/common/http';

export const catalogProductResolver: ResolveFn<Observable<any>> = (route) => {
  const router: Router = inject(Router);
  const sv: OrderService = inject(OrderService);
  const http: HttpClient = inject(HttpClient);


  const extra = router.getCurrentNavigation()?.extras.state;
  const url = route.url.join('/');

 
  const gretaBook$ = http.get('https://mybookstore.free.beeceptor.com/greta/books');
  const peterBook$ = http.get('https://mybookstore.free.beeceptor.com/peter/books');

  return forkJoin([gretaBook$, peterBook$]).pipe(
    map(([gretaBook, peterBook]) => {
      return {
        listBookGreta: gretaBook,
        listBookPeter: peterBook
      };
    }),
    catchError(err => {
      console.error('Error fetching data in resolver:', err);
      return of({
        listBookGreta: [],
        listBookPeter: []
      });
    })
  );
};
