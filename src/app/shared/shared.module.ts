import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faSearch, faCalendarAlt, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputContainerComponent } from './input-container/input-container.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
    InputComponent,
    ButtonComponent,
    InputContainerComponent,
    DefaultHeaderComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    FontAwesomeModule,
    InputContainerComponent,
    DefaultHeaderComponent
  ]
})
export class SharedModule {
  constructor() {
    library.add(faTrash);
    library.add(faExclamation);
    library.add(faEdit);
    library.add(faSearch);
    library.add(faCalendarDay);
  }
}
