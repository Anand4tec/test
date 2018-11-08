# AgileSphere test

# Key notes from Anand
* Please do npm install to get all node modules before running the application.
* Tried to cover unit test cases in all area for demonstration, however didn't intend to do full coverage.
* When testing the application, Search will be enabled only when City name is provided. Table will be shown only after clicking on search if there is a valid result returned from API.
* Please try only with valid city names as there is no specific error handling implemented, although there is a placeholder and comment mentioned in effects. Few of cities tried are London, Paris, Edinburgh etc.
* Just like unit test cases, in e2e only covered key positive scenrios for demonstration. However there is a scope of adding more tests.
* Last but not least, should there be any trouble downloading or running the application please give me a shout.
Thanks,
Anand.



Using the Free open weather map api (http://openweathermap.org/forecast5 api key has been included inside weather.service.ts)

  * Build an application that allows you to search the weather forecast for a city. 
  * Every time a new city is searched - Add to a table of cities displaying the next 24 hours weather forecast.
  * Build the application using ng-rx

We have provided a skeleton application  generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.
## Expectations

  * Complete the components(search, results and the weather container)
  * Complete the Weather.service.ts, using the API provided by the openweathermap for a given city
  * Complete the unit test files (*.spec.ts).
  * Complete the End to End test using Protractor.
  * Intrfaces have been provided in model/weather.ts. Please use these interfaces.
  * An example layout table is provided inside the results component.Please use this as template.
  * We expect the application to compile and all the tests to pass.
  * Please upload your code to GITHUB and once you are done send us the link.

## Development server

Run `npm start` for a dev server. App will open here `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running e2e tests

Run `ng e2e` to execute the e2e tests via [Protractor](https://www.protractortest.org).
