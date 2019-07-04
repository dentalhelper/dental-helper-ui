import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { ShortenPipe } from '../pipes/shorten.pipe';
import { TelefonePipe } from '../pipes/telefone.pipe';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { FormaRostoPipe } from '../pipes/forma-rosto.pipe';
import { ButtonComponent } from './button/button.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { CalendarOptionsComponent } from './calendar-options/calendar-options.component';
import { OdontogramaSelectComponent } from './odontograma-select/odontograma-select.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faExclamation,
  faMoneyBill,
  faWindowClose,
  faClipboardList,
  faBan,
  faUserCheck,
  faUserTimes,
  faUnlockAlt
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit, faSearch, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
    ShortenPipe,
    TelefonePipe,
    InputComponent,
    FormaRostoPipe,
    RadioComponent,
    ButtonComponent,
    DefaultHeaderComponent,
    InputContainerComponent,
    CalendarOptionsComponent,
    OdontogramaSelectComponent,
  ],
  exports: [
    ShortenPipe,
    TelefonePipe,
    InputComponent,
    RadioComponent,
    FormaRostoPipe,
    ButtonComponent,
    FontAwesomeModule,
    DefaultHeaderComponent,
    InputContainerComponent,
    CalendarOptionsComponent,
    OdontogramaSelectComponent,
  ]
})
export class SharedModule {
  constructor() {
    library.add(faBan);
    library.add(faEdit);
    library.add(faTrash);
    library.add(faSearch);
    library.add(faMoneyBill);
    library.add(faUserCheck);
    library.add(faUserTimes);
    library.add(faUnlockAlt);
    library.add(faExclamation);
    library.add(faCalendarDay);
    library.add(faWindowClose);
    library.add(faClipboardList);
  }
}
