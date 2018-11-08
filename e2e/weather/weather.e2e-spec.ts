import { WeatherPage } from './weather.po';

describe('weather by city list', () => {
  let page: WeatherPage;

  beforeEach(() => {
    page = new WeatherPage();
    page.navigateTo();
  });

  it('e2e home page test', () => {
    expect(page.getParagraphText()).toEqual('AgileSphere coding test - The Weather App');
  });

  it('should bring results based on given city name', () => {
    page.fillDetail('London'); // could have number of tests to check state of the control and for validation etc. to cover all scenarios.
    expect(page.getTableRows().count()).toBe(2);

    const columns = page.getTableColums();
    expect(columns.get(0).getText()).toEqual('London');
  });

  it('should add results to existing data if data exists already', () => {
    page.fillDetail('London');
    expect(page.getTableRows().count()).toBe(2);
    page.fillDetail('Paris');
    expect(page.getTableRows().count()).toBe(3);

    const columns = page.getTableColums();
    expect(columns.get(0).getText()).toEqual('London');
    expect(columns.get(5).getText()).toEqual('Paris');
  });
});
