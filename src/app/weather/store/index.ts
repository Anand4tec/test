import { ActionReducerMap, MetaReducer, ActionReducer} from '@ngrx/store';
import * as fromWeather from './reducers/weather.reducer';
import { environment } from '../../../environments/environment';


export interface State {
  weather: fromWeather.State;
}

export const reducers: ActionReducerMap<State> = {
  weather: fromWeather.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
