import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers/weather.reducer';
import * as fromSelector from './store/selectors/weather';
import { Search } from './store/actions/weather';
import { Observable } from 'rxjs/Observable';
import { Weather } from '../model/weather';

@Component({
  selector: 'app-weather',
  template: `
  <app-search (searchEvent)='citySearch($event)'></app-search>
  <app-results [searchResults]="searchResults$|async"></app-results>  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherContainer implements OnInit {

  searchResults$: Observable<Weather[]>;
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.searchResults$ = this.store.select(fromSelector.getWeather);
  }

  citySearch(city: string) {
    this.store.dispatch(new Search(city));
  }
}
