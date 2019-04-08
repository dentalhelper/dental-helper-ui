import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { ButtonComponent } from './button/button.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { InputContainerComponent } from './input-container/input-container.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit, faSearch, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
    InputComponent,
    RadioComponent,
    ButtonComponent,
    DefaultHeaderComponent,
    InputContainerComponent,
  ],
  exports: [
    InputComponent,
    RadioComponent,
    ButtonComponent,
    FontAwesomeModule,
    DefaultHeaderComponent,
    InputContainerComponent,
  ]
})
export class SharedModule {
  constructor() {
    library.add(faEdit);
    library.add(faTrash);
    library.add(faSearch);
    library.add(faExclamation);
    library.add(faCalendarDay);
  }
}
