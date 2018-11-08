import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from './weather.container';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { Weather } from '../model/weather';
import { Search } from './store/actions/weather';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: any;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContainer ],
      providers: [
        { provide: Store, useValue: jasmine.createSpyObj('store', ['select', 'dispatch']) }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.select.and.callFake((args) => of([{city: {name: 'test'}} as Weather]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch search action correctly', () => {
    const request = 'test';
    component.citySearch(request);
    expect(store.dispatch).toHaveBeenCalledWith(new Search(request));
  });

  it('should read results from store correctly', () => {
    component.ngOnInit();
    component.searchResults$.subscribe(data => {
      expect(data).toEqual([{city: {name: 'test'}} as Weather]);
    });
  });

});
