import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes-pesquisa',
  templateUrl: './pacientes-pesquisa.component.html',
  styleUrls: ['./pacientes-pesquisa.component.scss']
})
export class PacientesPesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  criarPaciente() {
    console.log('PACIENTE NOVO');
  }
}
