import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private apiKey = '9387e220881225dc03d1e934072f46d3';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private httpClient: HttpClient) { }



  getCurrentWeather(cidade: string){

    const url = `${this.apiUrl}/weather?q=${cidade}&lang=pt_br&appid=${this.apiKey}`;
    return this.httpClient.get(url);
  }

}
