import { Component, OnInit, AfterContentInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.scss'],
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
              transform: 'translateX(-30px)',
              offset: 0
            }),
            style({
              opacity: 0.5,
              transform: 'translateX(-20px)',
              offset: 0.5
            }),
            style({
              opacity: 0.8,
              transform: 'translateX(-10px)',
              offset: 0.8
            }),
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 1
            })
          ]))
      ),
      transition('pronto => void',
        animate('300ms 0s ease-out',
          keyframes([
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 0
            }),
            style({
              opacity: 0.8,
              transform: 'translateX(-10px)',
              offset: 0.2
            }),
            style({
              opacity: 0,
              transform: 'translateX(30px)',
              offset: 1
            })
          ]))
      )
    ])
  ]
})
export class PagamentosComponent implements OnInit, AfterContentInit {


  activeTab = 'pronto';

  valorPago = 0;
  valorEmAberto = 0;
  valorTotal = 0;

  pagamentos: any[];
  codigPaciente: any;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this.codigPaciente = this.route.snapshot.parent.params['codigo'];

  }

  ngAfterContentInit(): void {
    this.carregarPagamentos();
  }

  criarPagamento() {

  }

  carregarPagamentos() {
    this.pacienteService.buscarPagamentos(this.codigPaciente).subscribe((response) => {
      response.forEach(pagamento => {
        if (pagamento.statusPagamento === 2) {
          this.valorPago += pagamento.valorPago;
        }
        if (pagamento.statusPagamento === 1) {
          this.valorEmAberto += pagamento.valorEmAberto;
        }
      });
      this.valorTotal = this.valorPago + this.valorEmAberto;
      this.pagamentos = response;
    });
  }

}
