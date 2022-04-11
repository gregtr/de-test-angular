export type Currency = {
  code: string;
  name: string;
  symbol: string;
}

export type Flags = {
  svg: string;
  png: string;
}

export type Lang = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export type RegionBlock = {
  acronym: string;
  name: string
}

export interface Country {
    alpha2Code: string,
    alpha3Code: string,
    altSpellings: string[],
    area: number,
    borders: string[],
    callingCodes: string[],
    capital: string,
    cioc: string,
    currencies: Currency[],
    demonym: string,
    flag: string,
    flags: Flags,
    gini: number,
    independent: boolean,
    languages: Lang[],
    latlng: [number, number],
    name: string,
    nativeName: string,
    numericCode: string,
    population: number,
    region: string,
    regionalBlocs: RegionBlock[],
    subregion: string,
    timezones: string[],
    topLevelDomain: string[],
    translations: any[]
}



