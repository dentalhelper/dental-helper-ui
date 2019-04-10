import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteNovoDTO } from 'src/app/domains/dtos/paciente-novo.dto';
import { PacienteService } from 'src/app/core/services/paciente.service';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.scss']
})
export class ProntuarioComponent implements OnInit {

  paciente: PacienteNovoDTO;

  imagem: Object = {};
  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
  ) { }

  ngOnInit() {
    const codigPaciente = this.route.snapshot.params['codigo'];
    this.carregarPacientePeloCodigo(codigPaciente);
  }

  carregarPacientePeloCodigo(codigo: number) {
    this.pacienteService.buscarPorCodigo(codigo)
      .subscribe((response) => {
        this.paciente = response;
        this.imagem = { 'background': `url(${response.urlDaFoto}) no-repeat`, 'background-size': 'cover' };
      });
  }

}
