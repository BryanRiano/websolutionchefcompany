import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  public endPointService: string = environment.apiUrl;
  public clientHeaders: HttpHeaders;

  constructor(private _http: HttpClient) {
  }

  SetEndPoint(nameServer: string) {
    this.endPointService = nameServer;
  }

  Get(methodService: string, methodParams: Array<any>): Observable<any> {
    let EndPointRequest = this.endPointService + methodService + '?';
    for (const tuple of Object.keys(methodParams)) {
      EndPointRequest += tuple + '=' + methodParams[tuple] + '&';
    }

    return this._http.get(EndPointRequest.slice(0, -1));
  }
}
