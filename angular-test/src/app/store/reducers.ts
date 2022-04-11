import { ActionReducerMap } from '@ngrx/store';
import { countriesReducer, CountriesState } from './reducers/countries.reducers';

export const reducers: ActionReducerMap<CountriesState> = {
  countries: countriesReducer,
  regions: countriesReducer//
}
