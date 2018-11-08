import {  createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWeather from '../reducers/weather.reducer';

export const getWeatherState = createFeatureSelector<fromWeather.State>('weather');
export const getWeather = createSelector(getWeatherState, fromWeather.getWeatherList);

