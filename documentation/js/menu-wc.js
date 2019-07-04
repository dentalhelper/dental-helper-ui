'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">dental-helper-ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AgendamentosModule.html" data-type="entity-link">AgendamentosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AgendamentosModule-91ddb203659f7c74ae64d133c98d29d9"' : 'data-target="#xs-components-links-module-AgendamentosModule-91ddb203659f7c74ae64d133c98d29d9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AgendamentosModule-91ddb203659f7c74ae64d133c98d29d9"' :
                                            'id="xs-components-links-module-AgendamentosModule-91ddb203659f7c74ae64d133c98d29d9"' }>
                                            <li class="link">
                                                <a href="components/AgendamentoCadastroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AgendamentoCadastroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AgendamentoPesquisaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AgendamentoPesquisaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-062ab84c943cbdced90701713ebc95a7"' : 'data-target="#xs-components-links-module-AppModule-062ab84c943cbdced90701713ebc95a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-062ab84c943cbdced90701713ebc95a7"' :
                                            'id="xs-components-links-module-AppModule-062ab84c943cbdced90701713ebc95a7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriaDespesaModule.html" data-type="entity-link">CategoriaDespesaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CategoriaDespesaModule-a1c14d40dd766fd66373512d079fbcc6"' : 'data-target="#xs-components-links-module-CategoriaDespesaModule-a1c14d40dd766fd66373512d079fbcc6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoriaDespesaModule-a1c14d40dd766fd66373512d079fbcc6"' :
                                            'id="xs-components-links-module-CategoriaDespesaModule-a1c14d40dd766fd66373512d079fbcc6"' }>
                                            <li class="link">
                                                <a href="components/CategoriaDespesaPesquisaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoriaDespesaPesquisaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-ee95dd047d2a4b1e9e6cfef4b01e29d0"' : 'data-target="#xs-components-links-module-CoreModule-ee95dd047d2a4b1e9e6cfef4b01e29d0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-ee95dd047d2a4b1e9e6cfef4b01e29d0"' :
                                            'id="xs-components-links-module-CoreModule-ee95dd047d2a4b1e9e6cfef4b01e29d0"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageForbiddenComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageForbiddenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToastLinkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToastLinkComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-ee95dd047d2a4b1e9e6cfef4b01e29d0"' : 'data-target="#xs-injectables-links-module-CoreModule-ee95dd047d2a4b1e9e6cfef4b01e29d0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-ee95dd047d2a4b1e9e6cfef4b01e29d0"' :
                                        'id="xs-injectables-links-module-CoreModule-ee95dd047d2a4b1e9e6cfef4b01e29d0"' }>
                                        <li class="link">
                                            <a href="injectables/AppHttp.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppHttp</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CategoriaDespesaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CategoriaDespesaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToastService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ToastService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-d7099db97d623cfc30ccda4cd9127a34"' : 'data-target="#xs-components-links-module-DashboardModule-d7099db97d623cfc30ccda4cd9127a34"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-d7099db97d623cfc30ccda4cd9127a34"' :
                                            'id="xs-components-links-module-DashboardModule-d7099db97d623cfc30ccda4cd9127a34"' }>
                                            <li class="link">
                                                <a href="components/BadgeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BadgeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-DashboardModule-d7099db97d623cfc30ccda4cd9127a34"' : 'data-target="#xs-pipes-links-module-DashboardModule-d7099db97d623cfc30ccda4cd9127a34"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DashboardModule-d7099db97d623cfc30ccda4cd9127a34"' :
                                            'id="xs-pipes-links-module-DashboardModule-d7099db97d623cfc30ccda4cd9127a34"' }>
                                            <li class="link">
                                                <a href="pipes/CorStatusAgendamentoPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CorStatusAgendamentoPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DespesasModule.html" data-type="entity-link">DespesasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DespesasModule-52ddb08090ecf8b8f3bffa5465edf2f8"' : 'data-target="#xs-components-links-module-DespesasModule-52ddb08090ecf8b8f3bffa5465edf2f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DespesasModule-52ddb08090ecf8b8f3bffa5465edf2f8"' :
                                            'id="xs-components-links-module-DespesasModule-52ddb08090ecf8b8f3bffa5465edf2f8"' }>
                                            <li class="link">
                                                <a href="components/DespesaCadastroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DespesaCadastroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DespesasPesquisaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DespesasPesquisaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MaterialModule-eac235491113f4693fa8d818440394c8"' : 'data-target="#xs-components-links-module-MaterialModule-eac235491113f4693fa8d818440394c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MaterialModule-eac235491113f4693fa8d818440394c8"' :
                                            'id="xs-components-links-module-MaterialModule-eac235491113f4693fa8d818440394c8"' }>
                                            <li class="link">
                                                <a href="components/MateriaisListaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MateriaisListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MateriaisPesquisaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MateriaisPesquisaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialCadastroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaterialCadastroComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OdontogramaModule.html" data-type="entity-link">OdontogramaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OdontogramaModule-dd458e93a77b500111bdc8385a23ee63"' : 'data-target="#xs-components-links-module-OdontogramaModule-dd458e93a77b500111bdc8385a23ee63"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OdontogramaModule-dd458e93a77b500111bdc8385a23ee63"' :
                                            'id="xs-components-links-module-OdontogramaModule-dd458e93a77b500111bdc8385a23ee63"' }>
                                            <li class="link">
                                                <a href="components/OdontogramaEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OdontogramaEditComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrcamentosModule.html" data-type="entity-link">OrcamentosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrcamentosModule-30b8178bb792b28f275a1fe3e97809b9"' : 'data-target="#xs-components-links-module-OrcamentosModule-30b8178bb792b28f275a1fe3e97809b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrcamentosModule-30b8178bb792b28f275a1fe3e97809b9"' :
                                            'id="xs-components-links-module-OrcamentosModule-30b8178bb792b28f275a1fe3e97809b9"' }>
                                            <li class="link">
                                                <a href="components/OrcamentoCadastroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrcamentoCadastroComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PacienteModule.html" data-type="entity-link">PacienteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PacienteModule-35914a2316584d4abb2c5a0367873fbd"' : 'data-target="#xs-components-links-module-PacienteModule-35914a2316584d4abb2c5a0367873fbd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PacienteModule-35914a2316584d4abb2c5a0367873fbd"' :
                                            'id="xs-components-links-module-PacienteModule-35914a2316584d4abb2c5a0367873fbd"' }>
                                            <li class="link">
                                                <a href="components/AnamneseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnamneseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConsultasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConsultasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OdontogramaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OdontogramaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrcamentosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrcamentosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PacienteCadastroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PacienteCadastroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PacienteDadosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PacienteDadosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PacientesPesquisaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PacientesPesquisaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagamentosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagamentosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcedimentosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProcedimentosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProntuarioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProntuarioComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PacienteModule-35914a2316584d4abb2c5a0367873fbd"' : 'data-target="#xs-pipes-links-module-PacienteModule-35914a2316584d4abb2c5a0367873fbd"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PacienteModule-35914a2316584d4abb2c5a0367873fbd"' :
                                            'id="xs-pipes-links-module-PacienteModule-35914a2316584d4abb2c5a0367873fbd"' }>
                                            <li class="link">
                                                <a href="pipes/CpfPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CpfPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RgPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/StatusPagamentoPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusPagamentoPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProcedimentoModule.html" data-type="entity-link">ProcedimentoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProcedimentoModule-37a177b57f35c93e474ea2951ad1dbaf"' : 'data-target="#xs-components-links-module-ProcedimentoModule-37a177b57f35c93e474ea2951ad1dbaf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProcedimentoModule-37a177b57f35c93e474ea2951ad1dbaf"' :
                                            'id="xs-components-links-module-ProcedimentoModule-37a177b57f35c93e474ea2951ad1dbaf"' }>
                                            <li class="link">
                                                <a href="components/ProcedimentoCadastroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProcedimentoCadastroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcedimentosPesquisaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProcedimentosPesquisaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegurancaModule.html" data-type="entity-link">SegurancaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SegurancaModule-d4486baeaa47f9812e27e16315de3745"' : 'data-target="#xs-components-links-module-SegurancaModule-d4486baeaa47f9812e27e16315de3745"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegurancaModule-d4486baeaa47f9812e27e16315de3745"' :
                                            'id="xs-components-links-module-SegurancaModule-d4486baeaa47f9812e27e16315de3745"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-ff4e15b71db68ca95c7753637ec12cd2"' : 'data-target="#xs-components-links-module-SharedModule-ff4e15b71db68ca95c7753637ec12cd2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-ff4e15b71db68ca95c7753637ec12cd2"' :
                                            'id="xs-components-links-module-SharedModule-ff4e15b71db68ca95c7753637ec12cd2"' }>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalendarOptionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarOptionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DefaultHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OdontogramaSelectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OdontogramaSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RadioComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-ff4e15b71db68ca95c7753637ec12cd2"' : 'data-target="#xs-pipes-links-module-SharedModule-ff4e15b71db68ca95c7753637ec12cd2"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-ff4e15b71db68ca95c7753637ec12cd2"' :
                                            'id="xs-pipes-links-module-SharedModule-ff4e15b71db68ca95c7753637ec12cd2"' }>
                                            <li class="link">
                                                <a href="pipes/FormaRostoPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormaRostoPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ShortenPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShortenPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TelefonePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TelefonePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuariosModule.html" data-type="entity-link">UsuariosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsuariosModule-a5cd3987d79a328afe4571b7adc16b0e"' : 'data-target="#xs-components-links-module-UsuariosModule-a5cd3987d79a328afe4571b7adc16b0e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsuariosModule-a5cd3987d79a328afe4571b7adc16b0e"' :
                                            'id="xs-components-links-module-UsuariosModule-a5cd3987d79a328afe4571b7adc16b0e"' }>
                                            <li class="link">
                                                <a href="components/UsuarioCadastroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuarioCadastroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuariosPesquisaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuariosPesquisaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuariosSenhaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuariosSenhaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-UsuariosModule-a5cd3987d79a328afe4571b7adc16b0e"' : 'data-target="#xs-pipes-links-module-UsuariosModule-a5cd3987d79a328afe4571b7adc16b0e"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-UsuariosModule-a5cd3987d79a328afe4571b7adc16b0e"' :
                                            'id="xs-pipes-links-module-UsuariosModule-a5cd3987d79a328afe4571b7adc16b0e"' }>
                                            <li class="link">
                                                <a href="pipes/StatusUsuarioPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusUsuarioPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AtributoMaterial.html" data-type="entity-link">AtributoMaterial</a>
                            </li>
                            <li class="link">
                                <a href="classes/BadgeConsulta.html" data-type="entity-link">BadgeConsulta</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoriaDespesa.html" data-type="entity-link">CategoriaDespesa</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cidade.html" data-type="entity-link">Cidade</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataHoje.html" data-type="entity-link">DataHoje</a>
                            </li>
                            <li class="link">
                                <a href="classes/Despesa.html" data-type="entity-link">Despesa</a>
                            </li>
                            <li class="link">
                                <a href="classes/DespesaFilter.html" data-type="entity-link">DespesaFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Estado.html" data-type="entity-link">Estado</a>
                            </li>
                            <li class="link">
                                <a href="classes/Link.html" data-type="entity-link">Link</a>
                            </li>
                            <li class="link">
                                <a href="classes/Material.html" data-type="entity-link">Material</a>
                            </li>
                            <li class="link">
                                <a href="classes/MaterialFilter.html" data-type="entity-link">MaterialFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotAuthenticatedError.html" data-type="entity-link">NotAuthenticatedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pagamento.html" data-type="entity-link">Pagamento</a>
                            </li>
                            <li class="link">
                                <a href="classes/Procedimento.html" data-type="entity-link">Procedimento</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProcedimentoPrevistoNovoDTO.html" data-type="entity-link">ProcedimentoPrevistoNovoDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/RadioOption.html" data-type="entity-link">RadioOption</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AgendamentoService.html" data-type="entity-link">AgendamentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppHttp.html" data-type="entity-link">AppHttp</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriaDespesaService.html" data-type="entity-link">CategoriaDespesaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardService.html" data-type="entity-link">DashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DespesaService.html" data-type="entity-link">DespesaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EstadoService.html" data-type="entity-link">EstadoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogoutService.html" data-type="entity-link">LogoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MaterialService.html" data-type="entity-link">MaterialService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrcamentoService.html" data-type="entity-link">OrcamentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PacienteService.html" data-type="entity-link">PacienteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProcedimentoPrevistoService.html" data-type="entity-link">ProcedimentoPrevistoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProcedimentoService.html" data-type="entity-link">ProcedimentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecebimentosService.html" data-type="entity-link">RecebimentosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToastService.html" data-type="entity-link">ToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioService.html" data-type="entity-link">UsuarioService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorHandlerService.html" data-type="entity-link">ErrorHandlerService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AgendamentoDashBoardDTO.html" data-type="entity-link">AgendamentoDashBoardDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AgendamentoNovoDTO.html" data-type="entity-link">AgendamentoNovoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AgendamentoResumoDTO.html" data-type="entity-link">AgendamentoResumoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AgendamentoResumoPacienteDTO.html" data-type="entity-link">AgendamentoResumoPacienteDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Anamnese.html" data-type="entity-link">Anamnese</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DashBoardDTO.html" data-type="entity-link">DashBoardDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DenteOdontogramaResumoDTO.html" data-type="entity-link">DenteOdontogramaResumoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DespesaRecebimentoDashBoardDTO.html" data-type="entity-link">DespesaRecebimentoDashBoardDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Login.html" data-type="entity-link">Login</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NovaSenha.html" data-type="entity-link">NovaSenha</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OdontogramaResumoDTO.html" data-type="entity-link">OdontogramaResumoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrcamentoNovoDTO.html" data-type="entity-link">OrcamentoNovoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrcamentoPagamentoDTO.html" data-type="entity-link">OrcamentoPagamentoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrcamentoResumoDTO.html" data-type="entity-link">OrcamentoResumoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PacienteAgendamentoDTO.html" data-type="entity-link">PacienteAgendamentoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PacienteAnamneseDTO.html" data-type="entity-link">PacienteAnamneseDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PacienteNovoDTO.html" data-type="entity-link">PacienteNovoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PacienteOrcamentoDTO.html" data-type="entity-link">PacienteOrcamentoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PacienteProcedimentoDTO.html" data-type="entity-link">PacienteProcedimentoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PacienteResumoDTO.html" data-type="entity-link">PacienteResumoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PacienteSelectComFotoDTO.html" data-type="entity-link">PacienteSelectComFotoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PagamentoRecebimentoNovoDTO.html" data-type="entity-link">PagamentoRecebimentoNovoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcedimentoOdontogramaResumoDTO.html" data-type="entity-link">ProcedimentoOdontogramaResumoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcedimentoPrevistoResumoDTO.html" data-type="entity-link">ProcedimentoPrevistoResumoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Questao.html" data-type="entity-link">Questao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RecebimentoDespesaDashBoardGraficoDTO.html" data-type="entity-link">RecebimentoDespesaDashBoardGraficoDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsuarioNovoDTO.html" data-type="entity-link">UsuarioNovoDTO</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});