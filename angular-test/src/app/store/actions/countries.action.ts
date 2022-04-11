import { createAction } from '@ngrx/store';

export const getRegion = createAction('[Country] Get Region');

export const getCountries = createAction('[Country] Get Countries');
export const getCountriesSuccess = createAction(
  '[Countries] Get Countries success',
  (countries: ReadonlyArray<any>) => ({ countries })
);