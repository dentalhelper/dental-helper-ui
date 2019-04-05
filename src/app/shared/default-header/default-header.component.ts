import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {

  @Input() titulo: string;
  @Input() buttonId: string;
  @Input() buttonText: string;
  @Input() buttonStyle: any;

  @Output() botaoClicado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitirAcaoDoBotao() {
    this.botaoClicado.emit();
  }

}
