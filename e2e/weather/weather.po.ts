import { browser, by, element, protractor } from 'protractor';

export class WeatherPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.navbar-brand')).getText();
  }

  fillDetail(city: string) {
    element(by.css('[name="city"]')).clear();
    element(by.css('[name="city"]')).sendKeys(city);

    const elm = element(by.css('.btn-search'));
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(elm), 5000);
    elm.click();
  }

  getTable() {
    const elm = element(by.css('.table'));
    return elm;
  }

  getTableRows() {
    return this.getTable().all(by.tagName('tr'));
  }

  getTableColums() {
     return this.getTableRows().all(by.tagName('td'));
  }
}
