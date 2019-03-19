import { CategoriaDespesaPage } from './categoria-despesa.po';
import { browser } from 'protractor';

describe('Página Categorias de despesa Teste', () => {
  let page: CategoriaDespesaPage;

  beforeEach(() => {
    page = new CategoriaDespesaPage();
  });

  it('Deve acessar a página de Categorias de despesa pelo Menu', () => {
    page.visitApp();
    page.visitByMenu();
    expect(page.getPageMainText()).toEqual('Categorias de despesa');
  });

  it('Deve acessar a página de Categorias de despesa pela URL', () => {
    page.visitApp();
    page.visit();
    expect(page.getPageMainText()).toEqual('Categorias de despesa');
  });

  it('Deve criar uma Categoria de despesa', () => {
    page.visit();
    page.addButton.click().then(() => {
      browser.sleep(3000);
    });
    page.digitarNomeCategoria('teste');
    page.saveButton.click();
    expect(page.getSuccessMessage()).toEqual('Sucesso!');
  });

});
