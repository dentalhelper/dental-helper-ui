import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss'],
  animations: [
    trigger('exibir', [
      state('ready', style({
        opacity: 1
      })),
      transition('void => ready',
        animate('300ms 0s ease-in',
          keyframes([
            style({
              opacity: 0,
              transform: 'translateY(-20px)',
              offset: 0
            }),
            style({
              opacity: 0.8,
              transform: 'translateY(-5px)',
              offset: 0.8
            }),
            style({
              opacity: 1,
              transform: 'translateY(0px)',
              offset: 1
            })
          ]))
      ),
      transition('ready => void',
        animate('0ms 0s ease-out'))])
  ]
})
export class InputContainerComponent implements OnInit, AfterContentInit {

  messageState = 'ready';
  input: any;
  @Input() label: string;
  @Input() hint: string;
  @Input() errorMessage: string;
  @Input() showTip = true;
  @Input() for: string;
  @Input() dropdown = false;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName.');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
