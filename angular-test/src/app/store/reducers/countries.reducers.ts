import { createReducer, on } from '@ngrx/store';
import { getCountriesSuccess } from '../actions/countries.action';

export interface CountriesState {
  countries: ReadonlyArray<any>;
  regions: ReadonlyArray<string>;
}

const initialState: ReadonlyArray<any> = [];

export const countriesReducer = createReducer(
  initialState,
  on(getCountriesSuccess, (state, { countries }) => { console.log(countries); return countries;}),
);
