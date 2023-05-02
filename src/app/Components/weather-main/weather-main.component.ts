import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import {  faLocationDot, faMagnifyingGlass , faTemperatureThreeQuarters, faDroplet, faWind   } from '@fortawesome/free-solid-svg-icons';




import { iconMap } from 'src/app/shared/icon-map';


@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {



  cidade: string = 'Sao paulo';
  weatherData: any;
  iconName : string = '';


  faLocationDot = faLocationDot;
  faMagnifyingGlass = faMagnifyingGlass;
  faTemperatureThreeQuarters = faTemperatureThreeQuarters;
  faDroplet = faDroplet;
  faWind = faWind;


  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
  }


  buscar(): void {
    this.weatherService.getCurrentWeather(this.cidade).subscribe(data =>{

      this.weatherData = data;
      this.iconName = iconMap[this.weatherData.weather[0].icon];
      console.log(this.weatherData);
      console.log(this.iconName);
    }, error => {
      console.log(error);
    }

    );

  }


}

