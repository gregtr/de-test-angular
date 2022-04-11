# FE developer test

Create an Angular project that displays a list of regions, countries and a simple table using Angular,
TypeScript, Observables and NGRX.

## APIs

https://restcountries.com/v2/region/europe

https://restcountries.com/v2/region/asia

## Description

This application should allow the user to navigate to a country based on a region and display some
simple information.

1) Create a drop down that contains the “Region” options Europe and Asia (loaded from store).
2) On selecting a region a second drop down should be enabled and populated with “Countries”
based on the API response from above URLs.
3) On selecting the “Country” display a simple table that contains the
a) Name
b) Capital
c) Population
d) Currencies
e) Flag

## Component 1: Regions

Controls:

- Label: Region
- Drop Down list: Regions (Europe and Asia)

NOTE: This component should be reused also for the countries dropdown

## Countries

Controls:

- Label: Country
- Drop Down list: Countries

The country list should be loaded only once when the user selects one of the regions.

## Component 2: Country Details

A simple table showing Name, Capital, Population, Currencies and Flag.


The data should be displayed when a country is selected

## Service: Countries

All the GET requests should be in a service

# NGRX:

Create the necessary state, reducer, actions, selectors and the effect to cache the regions and their
countries.

# Other Notes:

The list of regions can be hardcoded in NGRX store as Europe and Asia

Assume this code will go to production and will require any supporting code that you would
normally do.

Please also add a readme file that contains

1) Any style guides you used for your coding
2) Any CSS coding standards
3) Installation instructions
4) Description of how the application work
5) If you ran out of time what else you would have done.


