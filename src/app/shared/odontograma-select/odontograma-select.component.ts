import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { DenteOdontogramaResumoDTO } from 'src/app/domains/dtos/dente-odontograma-resumo.dto';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-odontograma-select',
  templateUrl: './odontograma-select.component.html',
  styleUrls: ['./odontograma-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OdontogramaSelectComponent),
      multi: true
    }
  ],
  animations: [
    trigger('linha', [
      state('pronto', style({
        opacity: 1
      })),
      transition('void => pronto',
        animate('300ms 0s ease-in',
          keyframes([
            style({
              opacity: 0,
              transform: 'translateY(-40px)',
              offset: 0
            }),
            style({
              opacity: 0.8,
              transform: 'translateY(-10px)',
              offset: 0.8
            }),
            style({
              opacity: 1,
              transform: 'translateY(0px)',
              offset: 1
            })
          ]))
      ),
      transition('pronto => void',
        animate('300ms 0s ease-out',
          keyframes([
            style({
              opacity: 1,
              transform: 'translateY(0px)',
              offset: 0
            }),
            style({
              opacity: 0.8,
              transform: 'translateY(-10px)',
              offset: 0.2
            }),
            style({
              opacity: 0,
              transform: 'translateY(-30px)',
              offset: 1
            })
          ]))
      )
    ])
  ]
})
export class OdontogramaSelectComponent implements OnInit, ControlValueAccessor {

  estadoDoItem = 'pronto';

  @Input() dentes: DenteOdontogramaResumoDTO[];
  @Input() exibir = true;
  denteSelecionado: any[];
  onChange: any;

  constructor() { }

  ngOnInit() { }

  selecionarDente(codigo: any) {
    this.denteSelecionado[0] = codigo;
    this.onChange(this.denteSelecionado);
    this.exibir = false;
  }

  writeValue(obj: any): void {
    this.denteSelecionado = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
}
