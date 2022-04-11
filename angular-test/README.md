# AngularTest

## About this project
### Description

This project was created in the Visual Studio Code with out of the box angular setup.
Project retrieves lists of countries from two separate regions (asia and europe). User is allowed to select desired region that will unlock country selection. When country is selected we display few basic details about said country and its flag.
### Future theoretical improvements

For starters - if only focused on this project as a whole - I would spend more time styling it (support for mobile displays, animations, look and feel). Regions would be tossed into json file - or 'global' variables file containing static data; regions are predefined from the start. I would expand table (details component) to prepare for future expansion of details. Store could be optimized or at least made cleaner, I stick to this solution as it's just for the sake of this test. I would spend more time on test coverage. Make it more error-proof: switching Country interface for class, where I would write a simple method for adapting it to our needs and use it in the getCountryFromRegion pipe rather than returning raw data. With that I could handle non-existing properties or fill some missing parts. Add some error handling in case data couldn't be fetched, loading indicator on first load. Apply some basic architecture by moving those components to their own module and rather than displaying those in app I would navigate to that component and I would fetch countries data via resolver ( or onInit for said module main component ) - depends on how large this data could get with other regions.

I did not bothered with naming conventions or coding style guides - if this code would go to production I would assume that said project had its own coding standards that I would just follow. Same goes for branch naming and commits messages.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server - Running Angular Test locally

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

