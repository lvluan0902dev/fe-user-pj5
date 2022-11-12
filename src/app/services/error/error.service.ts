import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  protected static router: Router;
  protected static toastService: ToastService;

  constructor(
    toastService: ToastService,
    router: Router
  ) {
    ErrorService.router = router;
    ErrorService.toastService = toastService;
  }

  public handleError(error: HttpErrorResponse) {
    // if (error.status === 401) {
    //   localStorage.removeItem('token');
    //   ErrorService.router.navigateByUrl('/login');
    // }

    ErrorService.toastService.error('Lỗi', error.message);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
