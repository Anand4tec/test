import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { WeatherService } from './weather.service';
import { Weather } from '../model/weather';


describe('WeatherService', () => {
    let service: WeatherService;
    let http: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HttpClient,
                    useValue: jasmine.createSpyObj('http', ['get'])
                },
                WeatherService
            ]
        });
        service = TestBed.get(WeatherService);
        http = TestBed.get(HttpClient);
    });


    it('should call get method with correct URL for get', () => {
        const url = 'https://api.openweathermap.org/data/2.5/forecast';
        const params = {
          q: '',
          cnt: '8',
          units: 'metric',
          APPID: '010721642521f31b0fbc8c3831d45951'
        };
        const model = [{city: {name: 'test'}} as Weather];

        const response = cold('-a|', { a: model });
        http.get.and.returnValue(response);

        expect(service.searchWeatherForCity('test')).toBeObservable(response);
        const urlWithParams = `${url}?q=test&cnt=${params.cnt}&units=${params.units}&APPID=${params.APPID}`;

        expect(http.get).toHaveBeenCalledWith(urlWithParams);
    });

});
