import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Weather } from '../model/weather';

@Injectable()
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };

  constructor(private http: HttpClient) { }

  searchWeatherForCity(city: string): Observable<Weather> {
    const urlWithParams = `${this.url}?q=${city}&cnt=${this.params.cnt}&units=${this.params.units}&APPID=${this.params.APPID}`;
    return this.http.get<Weather>(urlWithParams);
  }

}
