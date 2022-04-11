import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export type REGION = 'europe' | 'asia';

@Injectable({providedIn: 'root'})
export class DataService {
  private url = 'https://restcountries.com/v2';
  private regions = ['asia', 'europe'];

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<ReadonlyArray<string>> {
    return of(this.regions);
  }

  getCountries(region: REGION): Observable<ReadonlyArray<any>> {
    return this.getCountryFromRegion(region);
  }

  private getCountryFromRegion(region: REGION): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/region/${region}`).pipe(map((data: any) => {
      return {
        id: region,
        data
      }
    }));
  }
}