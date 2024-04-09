import { Injectable } from '@angular/core';
import { constructWeatherAPI } from '../core/constants/env';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { WeatherData } from '../core/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getWeather(lat: number, lon: number): Observable<WeatherData>{
    const url = constructWeatherAPI(lat, lon);

    return this.http.get<WeatherData>(url)
          .pipe(
              tap(data => console.log(data))
              // catchError(this.handleError)
          );
  }
}
