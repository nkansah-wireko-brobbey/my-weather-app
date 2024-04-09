import { Injectable, signal, effect } from '@angular/core';
import { WeatherData } from '../core/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherdatastorageService {

  private initialValue: WeatherData = {} as WeatherData;

  private weatherData = signal<WeatherData>(
    this.initialValue
  );

  constructor() { }
 

 addWeatherData(weatherData: WeatherData){
    this.weatherData.update((value: WeatherData) => weatherData);

  }

  clearWeatherData(){
    this.weatherData.update((value: WeatherData) => this.initialValue);
  }

  getWeatherData(): WeatherData{
    return this.weatherData();
  }

}
