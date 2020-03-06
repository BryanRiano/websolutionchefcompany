import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private apiService : AppService) { }

  getAll(): Observable <any> | undefined {
    const Filters = new Array<number>();
    return this.apiService.Get('client/list', Filters);
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
