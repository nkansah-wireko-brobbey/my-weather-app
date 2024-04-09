import { Component, computed } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationService } from '../../services/location.service';
import { SuggesstionstorageService } from '../../services/suggesstionstorage.service';
import { City } from '../../core/models/cityInfo.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  city: string = '';

  suggestions$ = computed(() => this.suggestionStorage.suggestions());

  constructor(
    private _location: LocationService, 
    private suggestionStorage: SuggesstionstorageService,
    private _weatherService: WeatherService
  ) { }

  getLocation(){
    if(this.city.trim() === '') return;
    this._location.getLocationByCity(this.city).subscribe((response) => {
      console.log(response);
    });
  }


  getWeather(selectedCity: City){
    if(!selectedCity) return;

    this.setCity(selectedCity.name);
    this.clearSuggestions();

    this._weatherService.getWeather(selectedCity.lat, selectedCity.lon).subscribe((response) => {
      console.log(response);
    });
    
    
  }

  clearSuggestions(){
    this.suggestionStorage.clearSuggestions();
  }

  setCity(city: string){
    this.city = city;
  }

}
