
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
    RouterModule.forRoot(ROUTES),

  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {

}
