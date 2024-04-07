import { Injectable } from '@angular/core';
import { constructAPI } from '../core/constants/env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeather(city: string): string{

    const API = constructAPI(city);



    return `The weather in ${city} is 23 degrees celcius`;
  }
}
