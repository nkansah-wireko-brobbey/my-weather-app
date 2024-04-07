import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeather(city: string): string{
    return `The weather in ${city} is 23 degrees celcius`;
  }
}
