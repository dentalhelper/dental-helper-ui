import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PacienteResumoDTO } from 'src/app/domains/dtos/paciente-resumo.dto';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { Title } from '@angular/platform-browser';
import { ToastService } from 'src/app/core/services/toast.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-pacientes-pesquisa',
  templateUrl: './pacientes-pesquisa.component.html',
  styleUrls: ['./pacientes-pesquisa.component.scss']
})
export class PacientesPesquisaComponent implements OnInit {

  pacientes: PacienteResumoDTO[] = [];
  formularioDoFiltro: FormGroup;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private pacienteService: PacienteService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.inicializarFiltro();
    this.title.setTitle('Pacientes');
    this.filtrar();
  }

  criarPaciente() {
    this.router.navigate(['novo'], {
      relativeTo: this.route
    });
  }

  agendar() {
    const mensagemToast = `"Operação não implementada."`;
    this.toastService.exibirAviso(mensagemToast);
  }

  inicializarFiltro() {
    this.formularioDoFiltro = new FormGroup({
      filtro: new FormControl('')
    });
  }

  carregarPacientes() {
    this.pacienteService.pesquisar(this.formularioDoFiltro.value).subscribe(resultado => {
      this.pacientes = resultado;
    });
  }

  deletar(paciente: PacienteResumoDTO) {
    const [url] = paciente.links;
    this.pacienteService.deletar(url.href)
      .subscribe(() => {
        this.carregarPacientes();
        const mensagemToast = `"O paciente foi excluído."`;
        this.toastService.exibirSucesso(mensagemToast);
      });
  }

  confirmarExclusao(paciente: PacienteResumoDTO) {
    this.confirmationService.confirm({
      message: `
      Você tem certeza que quer excluir "${paciente.nome}"?
      <br />
      <strong>Todas as informações desse paciente será deletada permanentemente.</strong>`,
      accept: () => {
        this.deletar(paciente);
      }
    });
  }

  filtrar() {
    this.carregarPacientes();
  }
}
