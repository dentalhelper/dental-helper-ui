import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputContainerComponent } from './input-container/input-container.component';
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
    InputContainerComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    FontAwesomeModule,
    InputContainerComponent
  ]
})
export class SharedModule {
  constructor() {
    library.add(faTrash);
    library.add(faExclamation);
    library.add(faEdit);
  }
}
