import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar-options',
  templateUrl: './calendar-options.component.html',
  styleUrls: ['./calendar-options.component.scss']
})
export class CalendarOptionsComponent implements OnInit {

  @Input() positionX: string;
  @Input() positionY: string;
  @Input() isOpen: boolean;

  @Output() menuFechado = new EventEmitter();

  style = {
    'color': 'red'
  };

  constructor() { }

  emitirAcaoDoBotao() {
    this.menuFechado.emit(false);
  }

  ngOnInit() {
  }

}
