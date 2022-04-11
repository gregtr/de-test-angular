import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, forkJoin, map, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { getCountries, getCountriesSuccess } from '../actions/countries.action';

@Injectable()
export class CountriesEffects {

  constructor(private action$: Actions, private dataService: DataService) {}

  loadCountries$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCountries),
      exhaustMap(() =>
        forkJoin([this.dataService.getCountries('asia'), this.dataService.getCountries('europe')]).pipe(
          map((result) => getCountriesSuccess(result)),
          catchError(() => of())
        )
      )
    )
  );
}