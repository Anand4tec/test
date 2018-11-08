import { WeatherActions, WeatherActionsTypes, SearchSuccess } from '../actions/weather';
import { Weather } from '../../../model/weather';

export interface State {
    weather: Weather[];
}

const initialState: State = {
    weather: []
};

export function reducer(state = initialState, action: WeatherActions) {
    switch (action.type) {
        case WeatherActionsTypes.SearchSuccess:
            return {
                ...state, weather: [...state.weather, (action as SearchSuccess).payload]
            };
        case WeatherActionsTypes.Clear:
            return {
                ...initialState
            };
        default:
            return state;
    }
}

export const getWeatherList = (state: State) => !!state && state.weather;
