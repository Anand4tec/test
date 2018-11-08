import { Action } from '@ngrx/store';
import { Weather } from '../../../model/weather';

export const WeatherActionsTypes = {
    Search: '[Weather] Search',
    SearchSuccess: '[Weather] Search Success',
    Clear: '[Weather] Clear'
};

export class Search implements Action {
    readonly type = WeatherActionsTypes.Search;

    constructor(public payload: string) { }
}

export class SearchSuccess implements Action {
    readonly type = WeatherActionsTypes.SearchSuccess;

    constructor(public payload: Weather) { }
}

export class Clear implements Action {
    readonly type = WeatherActionsTypes.Clear;
}

export type WeatherActions
    = Search
    | SearchSuccess
    | Clear;
