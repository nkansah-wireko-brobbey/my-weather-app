import { Component, computed, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from '../../components/shared/card/card.component';
import { cssGlass } from '../../utilz/commonCss';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../components/search/search.component';
import { WeatherdatastorageService } from '../../services/weatherdatastorage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, SearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  weatherData = computed(()=> this.weatherDataStorage.getWeatherData());

  // cssGlass = cssGlass();
  imgSrc = './assets/images/cloudy.png'
  constructor(
    private weatherDataStorage: WeatherdatastorageService
  ){
    // console.log(typeof this.cssGlass)
  }
  getCssGlass(): string{
    return cssGlass();
  }
}
