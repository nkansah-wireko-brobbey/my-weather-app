import { effect, Injectable, signal } from '@angular/core';
import { LocationsAPIResponse } from '../core/models/cityInfo.model';

@Injectable({
  providedIn: 'root'
})
export class SuggesstionstorageService {

  // suggestion storage using signal

  private initialValue: LocationsAPIResponse = [];
  
  suggestions = signal<LocationsAPIResponse>(
     this.initialValue
  );
  constructor() { 
    effect(() => {
      const value = this.suggestions()
      console.log('Suggestion storage updated', value);
    });
  }

  addSuggestion(suggestions: LocationsAPIResponse){
    this.suggestions.update((value: LocationsAPIResponse) => suggestions);
  }
  clearSuggestions(){
    this.suggestions.update((value: LocationsAPIResponse) => this.initialValue);
  }

  getSuggestions(): LocationsAPIResponse{
    return this.suggestions();
  }
}
