import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { REGION } from './services/data.service';
import { getCountries, getRegion } from './store/actions/countries.action';
import { countriesSelectorByRegion, countryByName } from './store/selectors/countries.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'angular-test';
  public regions: REGION[] = [];
  public countries: any[] = [];

  public loading: boolean = true;

  public selectedRegion: REGION | null = null;
  public selectedCountry: string | null = null;
  public country: any;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.getStoreData();
  }

  public regionChange(event: any): void {
    this.selectedRegion = event ? event : null;

    if (this.selectedRegion) {
      this.store.select(countriesSelectorByRegion(this.selectedRegion)).pipe(take(1)).subscribe((response: any) => {
        if (response && response.data) {
          this.countries = response.data.map((k: any) => k.name)
        }
      });
    }
  }

  public countryChange(event: any): void {
    this.selectedCountry = event ? event : null;

    if (this.selectedCountry) {
      this.store.select(countryByName(this.selectedRegion, this.selectedCountry)).pipe(take(1)).subscribe((response: any) => {
        if (response) {
          this.country = response;
        }
      });
    }
  }

  private getStoreData(): void {
    this.store.dispatch(getRegion());
    this.store.dispatch(getCountries());

    this.regions = ['asia', 'europe'];
  }
}
