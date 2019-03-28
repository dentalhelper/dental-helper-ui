import { browser, by, element } from 'protractor';

export class CategoriaDespesaPage {
  constructor(
    public addButton?: any,
    public saveButton?: any
  ) {
    this.addButton = element(by.id('add-categoria'));
    this.saveButton = element(by.className('botao--success'));
  }
  visit() {
    return browser.get('/categorias-despesa');
  }

  visitApp() {
    return browser.get('/');
  }

  visitByMenu() {
    element(by.id('menu-bar')).click().then(() => {
      browser.sleep(2000);
      element(by.id('label-configuracoes')).click().then(() => {
        browser.sleep(2000);
        element(by.id('categorias-despesa')).click();
      });
    });
  }

  getPageMainText() {
    return element(by.tagName('h1')).getText();
  }

  getSuccessMessage() {
    return element(by.css('div.ui-toast-summary')).getText();
  }

  digitarNomeCategoria(nome: string) {
    return element(by.id('nome')).sendKeys(nome);
  }
}
