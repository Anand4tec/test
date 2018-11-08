import { Weather } from '../../../model/weather';
import { Clear, SearchSuccess } from '../actions/weather';
import { getWeatherList, reducer, State } from './weather.reducer';

const initialState: State = {
    weather: []
};

describe('WeatherReducer', () => {
    it('should store weather report when search was successful', () => {
        const resultState = reducer(initialState, new SearchSuccess({ city: { name: 'test' } } as Weather));
        expect(resultState.weather).toEqual([{ city: { name: 'test' } } as Weather]);
        expect(getWeatherList(resultState)).toEqual([{ city: { name: 'test' } } as Weather]);
    });

    it('should clear weather details when Clear was called', () => {
        const resultState = reducer({ ...initialState, weather: [{ city: { name: 'test' } } as Weather] }, new Clear());
        expect(resultState.weather).toEqual([]);
        expect(getWeatherList(resultState)).toEqual([]);
    });
});
