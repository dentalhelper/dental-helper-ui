import { DespesaPage } from './despesa.po';
import { browser, by, element, protractor } from 'protractor';

describe('Teste do gerenciamento de Despesas', () => {
  let page: DespesaPage;

  beforeEach(() => {
    page = new DespesaPage();

  });

  afterEach(() => {
    browser.restartSync();
  });



  it('Deve acessar a página de Despesas pelo Menu.', () => {
    page.visitApp();
    page.visitByMenu();
    const titulo = page.getPageTitle();

    expect(titulo).toEqual('Despesas');
  });

  it('Deve acessar a página de Desoesas pela URL.', () => {
    page.visit();
    expect(page.getPageTitle()).toEqual('Despesas');
  });

  it('Deve Acessar a página de Cadastro de Despesa.', () => {
    page.visit();
    page.addButton.click();
    expect(page.getPageTitle()).toEqual('Nova Despesa');

  });

  it('Deve Criar uma Despesa.', () => {
    page.visit();
    page.addButton.click();
    page.dinheiroButton.click();
    page.digitarDescricaoDaDespesa('Sabão');
    page.categoriaDropdown.click();
    page.categoriaOption.click();
    page.digitarValorDaDespesa('100');
    page.digitarDataDePagamentoDaDespesa('01/03/2019');
    page.saveButton.click().then(() => {
      browser.sleep(2000);
    });

    expect(page.getToastMessage()).toEqual('Sucesso!');
  });

  it('Deve Filtrar uma Despesa.', () => {
    page.salvarDespesaParaBusca();
    page.visit();
    page.categoriaDropdownFiltro.click();
    page.categoriaOptionFiltro.click();

    page.digitarDataDePagamentoInicio('RESET');
    page.digitarDataDePagamentoFim('RESET');

    page.digitarDescricaoDaDespesa('Quentinhas');
    page.digitarDataDePagamentoInicio('05/03/2019');
    page.digitarDataDePagamentoFim('05/03/2019');

    page.pesquisarButton.click().then(() => {
      browser.sleep(1000);
    });

    page.editButton.click();

    expect(browser.getTitle()).toEqual('Editando: Quentinhas');
  });

  it('Deve Editar uma Despesa.', () => {
    page.visit();
    page.editButton.click();

    page.dinheiroButton.click().then(() => {
      browser.sleep(500);
    });

    page.getInputDescricao().clear();
    page.digitarDescricaoDaDespesa('EDITADO');

    page.digitarDataDePagamentoDaDespesa('RESET');

    page.getInputValor().clear();
    page.digitarValorDaDespesa('999');

    page.digitarDataDePagamentoDaDespesa('20/03/2019');
    page.saveButton.click();

    expect(page.getToastMessage()).toEqual('Sucesso!');
  });

  it('Deve Excluir uma Despesa.', () => {
    page.visit();
    page.deleteButtonTable.click().then(() => {
      browser.sleep(500);
    });

    page.deleteButtonDialog.click().then(() => {
      browser.sleep(500);
    });

    expect(page.getToastMessage()).toEqual('Sucesso!');
  });

  it('Não deve atualizar uma despesa se estiver sem campos requeridos preenchidos.', () => {
    page.visit();
    page.editButton.click();

    page.digitarDataDePagamentoDaDespesa('RESET').then(() => {
      browser.sleep(500);
    });
    page.getInputValor().clear().then(() => {
      browser.sleep(500);
    });
    page.getInputDescricao().clear();

    expect(page.saveButton.isEnabled()).toBe(false);
  });

  it('Não deve salvar uma despesa se estiver sem campos requeridos preenchidos.', () => {
    page.visit();

    page.addButton.click();

    page.voltarButton.sendKeys(protractor.Key.TAB);
    for (let i = 0; i < 7; i++) {
      browser.actions()
        .sendKeys(protractor.Key.TAB).perform().then(() => {
          browser.sleep(500);
        });
    }
    expect(page.saveButton.isEnabled()).toBe(false);
  });

  it('Não deve salvar uma Despesa com descrição maior que 50 caracteres.', () => {
    page.visit();
    page.addButton.click();

    page.dinheiroButton.click();
    page.digitarDescricaoDaDespesa('Uma descrição com mais de cinquenta caracteres não é permitida.');
    page.categoriaDropdown.click();
    page.categoriaOption.click();
    page.digitarValorDaDespesa('100');
    page.digitarDataDePagamentoDaDespesa('01/03/2019').then(() => {
      browser.sleep(2000);
    });

    expect(page.saveButton.isEnabled()).toBe(false);
  });

  it('Deve voltar para a página de despesas ao CANCELAR um cadastro ou edição de despesa.', () => {
    page.visit();
    page.addButton.click();
    page.dinheiroButton.click();
    page.categoriaDropdown.click();
    page.categoriaOption.click();
    page.digitarValorDaDespesa('100');
    page.digitarDataDePagamentoDaDespesa('01/03/2019');
    page.voltarButton.click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/despesas');
  });

  it('Deve navegar para a página de categorias quando clicar no botão de MAIS.', () => {
    page.visit();
    page.addButton.click();
    page.categoriaAddButton.click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/categorias-despesa');
  });
});
