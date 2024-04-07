import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  city: string = '';

  constructor(private _location: LocationService) { }

  getLocation(){
    this._location.getLocationByCity(this.city).subscribe((response) => {
      console.log(response);
    });
  }

}
