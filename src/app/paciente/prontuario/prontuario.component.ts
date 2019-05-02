import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteNovoDTO } from 'src/app/domains/dtos/paciente-novo.dto';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { NO_IMAGE_URL } from 'src/app/shared/constants/image.defeut';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.scss']
})
export class ProntuarioComponent implements OnInit, OnDestroy {


  private subscription: Subscription;
  paciente: PacienteNovoDTO;
  codigPaciente: number;
  imagem: Object = {};
  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
  ) { }

  ngOnInit() {
    this.codigPaciente = this.route.snapshot.params['codigo'];
    this.subscription = this.pacienteService.updateHeader.subscribe(() => {
      this.imagem = null;
      this.carregarPacientePeloCodigo(this.codigPaciente);
    });
    this.carregarPacientePeloCodigo(this.codigPaciente);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  carregarPacientePeloCodigo(codigo: number) {
    this.pacienteService.buscarPorCodigo(codigo)
      .subscribe((response) => {
        this.paciente = response;
        let urlFoto = response.urlDaFoto;
        if (!response.urlDaFoto) {
          urlFoto = NO_IMAGE_URL;
        }
        this.imagem = { 'background': `url(${urlFoto}) no-repeat`, 'background-size': 'cover' };
      });
  }

}
