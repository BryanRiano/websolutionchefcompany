import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private apiService : AppService) { }

  getAll(): Observable <any> | undefined {
    const Filters = new Array<number>();
    return this.apiService.Get('payment/list', Filters);
  }

  getById(id): Observable <any> | undefined {
    const Filters = new Array<number>();
    return this.apiService.Get(`client/list/${id}`, Filters);
  }

  Save(edit: boolean, ObjectValue: any): Observable<any> {
    if(edit === false) {
      return this.apiService.Post('payment/create', ObjectValue).pipe(
        catchError(this.handleError)
      );
    }
    return this.apiService.Put('client/update', ObjectValue).pipe(
      catchError(this.handleError)
    );
  }

  Delete(ObjectDelete: any): Observable<any> {
    const object: any = ObjectDelete;
    return this.apiService.Delete(`client/delete/${ObjectDelete}`, object).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
