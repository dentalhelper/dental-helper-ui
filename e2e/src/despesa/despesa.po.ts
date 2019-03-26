import { browser, element, by } from 'protractor';

export class DespesaPage {
  constructor(
    public addButton?: any,
    public voltarButton?: any,
    public dinheiroButton?: any,
    public categoriaDropdown?: any,
    public categoriaDropdownFiltro?: any,
    public categoriaOptionFiltro?: any,
    public categoriaOption?: any,
    public saveButton?: any,
    public editButton?: any,
    public deleteButtonTable?: any,
    public deleteButtonDialog?: any,
    public cancelButtonDialog?: any,
    public categoriaAddButton?: any,
    public dataInicio?: any,
    public dataFim?: any,
    public pesquisarButton?: any
  ) {
    this.addButton = element(by.id('add-despesa'));
    this.voltarButton = element(by.id('voltar'));
    this.dataInicio = element(by.id('inicio'));
    this.dataFim = element(by.id('fim'));
    this.dinheiroButton = element(by
      .xpath('/html/body/app-root/div/app-despesa-cadastro/div/div[2]/form/div[1]/app-input-container/div/p-selectbutton/div/div[1]'));
    this.categoriaOption = element(by
      .xpath(
        '/html/body/app-root/div/app-despesa-cadastro/div/div[2]/form/div[2]/app-input-container/div/div/p-dropdown/div/div[4]/div[2]/ul/li[2]'
      ));
    this.categoriaDropdown = element(by
      .xpath('/html/body/app-root/div/app-despesa-cadastro/div/div[2]/form/div[2]/app-input-container/div/div/p-dropdown/div/label'));

    this.categoriaDropdownFiltro = element(by.id('categoria-filtro-label'));
    this.categoriaOptionFiltro = element(by
      .xpath('//*[@id="ui-fieldset-0-content"]/div/form/div[1]/p-dropdown/div/div[4]/div[2]/ul/li[2]'));
    this.saveButton = element(by.className('botao--success'));
    this.editButton = element(by.className('operacoes__button operacoes__button--edit'));
    this.deleteButtonTable = element(by.className('operacoes__button operacoes__button--delete'));

    this.categoriaAddButton = element(by.className('categoria-button__button'));

    this.deleteButtonDialog = element(by.className('botao--success'));
    this.cancelButtonDialog = element(by.className('ui-button-secondary'));
    this.pesquisarButton = element(by.className('filtro__group__button botao--padrao'));
  }

  visit() {
    return browser.get('/despesas');
  }

  visitApp() {
    return browser.get('/');
  }

  visitByMenu() {
    element(by.id('menu-bar')).click().then(() => {
      browser.sleep(1000);
      element(by.id('label-financas')).click().then(() => {
        browser.sleep(1000);
        element(by.id('item-despesa')).click();
      });
    });
  }

  salvarDespesaParaBusca() {
    this.visit();
    this.addButton.click();
    this.dinheiroButton.click();
    this.digitarDescricaoDaDespesa('Quentinhas');
    this.categoriaDropdown.click();
    this.categoriaOption.click();
    this.digitarValorDaDespesa('50');
    this.digitarDataDePagamentoDaDespesa('05/03/2019');
    this.saveButton.click().then(() => {
      browser.sleep(1000);
    });
  }

  getPageTitle() {
    return browser.getTitle();
  }

  getPageMainText() {
    return element(by.tagName('h1')).getText();
  }

  getInputDescricao() {
    return element(by.id('descricao'));
  }

  digitarDescricaoDaDespesa(descricao: string) {
    return this.getInputDescricao().sendKeys(descricao);
  }

  getInputValor() {
    return element(by.id('valor'));
  }

  digitarValorDaDespesa(valor: string) {
    return this.getInputValor().sendKeys(valor);
  }

  digitarDataDePagamentoDaDespesa(dataPagamento: string) {
    return element(by.id('data-pagamento')).sendKeys(dataPagamento);
  }

  digitarDataDePagamentoInicio(dataPagamento: string) {
    return this.dataInicio.sendKeys(dataPagamento);
  }

  digitarDataDePagamentoFim(dataPagamento: string) {
    return this.dataFim.sendKeys(dataPagamento);
  }

  getToastMessage() {
    return element(by.css('div.ui-toast-summary')).getText();
  }

}
