import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];
  @Output() selected = new EventEmitter<any>();

  value: any;

  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
    this.selected.emit(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {

  }

}
