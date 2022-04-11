import { createSelector } from '@ngrx/store';
import { REGION } from 'src/app/services/data.service';
import { CountriesState } from '../reducers/countries.reducers';

export const countriesSelectorByRegion = (region: REGION | null) => createSelector(
  (state: CountriesState) => state.countries,
  (countries: ReadonlyArray<any>) => countries.find(list => list.id === region)
)

export const countryByName = (region: REGION | null, name: string) => createSelector(
  (state: CountriesState) => state.countries,
  (countries: ReadonlyArray<any>) => countries.find(list => list.id === region)?.data.find((country: any) => country.name.includes(name))
)
