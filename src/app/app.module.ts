
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ErrorHandler, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

import { MessageService } from 'primeng/components/common/messageservice';

import { OdontogramaComponent } from './odontograma/odontograma.component';
import { OdontoComponent } from './odonto/odonto.component';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { ROUTES } from './app.routes';
import { CategoriaDespesaModule } from './categoria-despesa/categoria-despesa.module';
import { ErrorHandlerService } from './core/services/error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    OdontogramaComponent,
    OdontoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    CategoriaDespesaModule,
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {

}
