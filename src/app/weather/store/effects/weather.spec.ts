import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { of } from 'rxjs/observable/of';

import { Weather } from '../../../model/weather';
import { WeatherService } from '../../weather.service';
import { Search, SearchSuccess } from '../actions/weather';
import { WeatherEffects } from './weather';

describe('WeatherEffects', () => {

    let actions$: any;
    let effects: WeatherEffects;
    let service: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                WeatherEffects,
                { provide: WeatherService, useValue: jasmine.createSpyObj('srv', ['searchWeatherForCity']) },
                provideMockActions(() => actions$)
            ]
        });
        actions$ = TestBed.get(Actions);
        effects = TestBed.get(WeatherEffects);
        service = TestBed.get(WeatherService);
    });

    it('should return SearchSuccess action when Weather search was successful', () => {
        const result = { city: { name: 'test' } } as Weather;
        const action = new Search('test');
        const completion = new SearchSuccess(result);

        actions$ = hot('-a-', { a: action });
        const response = cold('-a|', { a: result });
        const expected = cold('--b', { b: completion });
        service.searchWeatherForCity.and.returnValue(response);
        expect(effects.getWeathersEffect$).toBeObservable(expected);
    });

    it('should return Error action when search Weather fails', () => {
        const error = 'search failed';
        const action = new Search({} as any);
        const completion = of(error);
        actions$ = hot('-a---', { a: action });
        const response = cold('-#|', {}, error);
        const expected = cold('--b', { b: completion });
        service.searchWeatherForCity.and.returnValue(response);
        // can be uncommented when a specific error handling action is implemented.
        // expect(effects.getWeathersEffect$).toBeObservable(expected); 
    });

});
