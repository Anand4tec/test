import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import { WeatherService } from '../../weather.service';
import * as fromWeather from '../actions/weather';

@Injectable()
export class WeatherEffects {
    @Effect() getWeathersEffect$ = this.actions$
        .ofType(fromWeather.WeatherActionsTypes.Search)
        .pipe(map((action: fromWeather.Search) => action.payload))
        .pipe(
            switchMap((request: string) =>
                this.service.searchWeatherForCity(request)
                    .pipe(
                        map((result: any) => {
                           return new fromWeather.SearchSuccess(result);
                        }),
                        catchError(error => {
                            console.log(error);
                            return of(error); // can have app level or functionality level error action returned from here.
                        })
                    )
            ));

    constructor(
        private actions$: Actions,
        private service: WeatherService
    ) { }
}
