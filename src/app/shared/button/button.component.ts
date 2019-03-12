import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  @Input() iconPosition: string;
  @Input() classes: string[];
  @Input() desativar = false;

  @Output() botaoClicado = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  emitirAcaoDoBotao() {
    this.botaoClicado.emit();
  }

  isDisabled() {
    return this.desativar;
  }

}
