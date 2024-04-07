import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { constructAPI } from '../core/constants/env';
import { APIResponse } from '../core/models/cityInfo.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {
   }

   getLocationByCity(city: string): Observable<APIResponse> {
    const API = constructAPI(city);

     return this.http.get<APIResponse>(API).pipe(
        tap((response: APIResponse) => {
          console.log(response);
        })
      );
   }
}
