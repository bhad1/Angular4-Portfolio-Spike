import { browser, element, by } from 'protractor';

export class AngularWebappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('webapp-root h1')).getText();
  }
}
