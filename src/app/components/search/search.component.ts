import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

   weatherService1: WeatherService = new WeatherService();

  constructor(private weatherService: WeatherService) { }


  getWeather(city: string): string{
    return this.weatherService.getWeather(city);
  }
}
