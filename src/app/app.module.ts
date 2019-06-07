
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

import { MessageService } from 'primeng/components/common/messageservice';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OdontoComponent } from './odonto/odonto.component';
import { OdontogramaComponent } from './odontograma/odontograma.component';
import { ErrorHandlerService } from './core/services/error-handler.service';
import { CustomCurrencyMaskConfig } from './shared/constants/currencymaskconfig';
import { CategoriaDespesaModule } from './categoria-despesa/categoria-despesa.module';

import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import { SegurancaModule } from './seguranca/seguranca.module';


@NgModule({
  declarations: [
    AppComponent,
    OdontoComponent,
    OdontogramaComponent,
  ],
  imports: [
    CoreModule,
    FormsModule,
    BrowserModule,
    SegurancaModule,
    HttpClientModule,
    ReactiveFormsModule,
    CategoriaDespesaModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {

}
