import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { ButtonComponent } from './button/button.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { InputContainerComponent } from './input-container/input-container.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamation, faMoneyBill, faWindowClose, faClipboardList, faBan, faUserCheck, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit, faSearch, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { CalendarOptionsComponent } from './calendar-options/calendar-options.component';
import { RouterModule } from '@angular/router';
import { TelefonePipe } from '../pipes/telefone.pipe';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
    TelefonePipe,
    InputComponent,
    RadioComponent,
    ButtonComponent,
    DefaultHeaderComponent,
    InputContainerComponent,
    CalendarOptionsComponent,
  ],
  exports: [
    TelefonePipe,
    InputComponent,
    RadioComponent,
    ButtonComponent,
    FontAwesomeModule,
    DefaultHeaderComponent,
    InputContainerComponent,
    CalendarOptionsComponent,
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
    library.add(faExclamation);
    library.add(faCalendarDay);
    library.add(faWindowClose);
    library.add(faClipboardList);
  }
}
