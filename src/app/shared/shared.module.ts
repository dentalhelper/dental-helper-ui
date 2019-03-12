import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule,

    TooltipModule
  ],
  declarations: [
    InputComponent,
    ButtonComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent
  ]
})
export class SharedModule {
  constructor() {
    library.add(faTrash);
    library.add(faExclamation);
    library.add(faEdit);
  }
}
