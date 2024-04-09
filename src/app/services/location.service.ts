import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { constructLocationAPI } from '../core/constants/env';
import { LocationsAPIResponse } from '../core/models/cityInfo.model';
import { SuggesstionstorageService } from './suggesstionstorage.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient, private suggestionStore: SuggesstionstorageService) {
   }

   getLocationByCity(city: string): Observable<LocationsAPIResponse> {
    const API = constructLocationAPI(city);

     return this.http.get<LocationsAPIResponse>(API).pipe(
        tap((response: LocationsAPIResponse) => {
          this.suggestionStore.addSuggestion(response);
        })
      );
   }
}
