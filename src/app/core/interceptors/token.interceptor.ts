import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { mergeMap, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../store/state';
import { selectAuthToken } from '../store/selectors/auth.selectors';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<State>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(selectAuthToken).pipe(
      mergeMap((token) => {
        const modified = request.clone({
          setHeaders: { Authorization: token ?? '' },
        });
        return next.handle(modified);
      })
    );
  }
}
