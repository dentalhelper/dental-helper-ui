
import { CategoriaDespesa } from 'src/app/domains/categoria-despesa.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { CategoriaDespesaService } from 'src/app/core/services/categoria-despesa.service';

@Component({
  selector: 'app-categoria-despesa-cadastro',
  templateUrl: './categoria-despesa-cadastro.component.html',
  styleUrls: ['./categoria-despesa-cadastro.component.scss']
})
export class CategoriaDespesaCadastroComponent implements OnInit {

  // TODO: Converter CategoriaDespesa em uma interface
  categoriaDespesa: CategoriaDespesa;
  // TODO: Usar ReactiveForms
  formGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private categoriaDespesaService: CategoriaDespesaService,
    private messageService: MessageService
  ) {
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
    // this.carregarCategorias();
  }
/*
  salvar() {
    this.categoriaDespesaService.salvar(this.formGroup.value)
      .then(() => {
        this.mensagemSucesso();
        this.formGroup.reset();
        this.categoriaDespesa; // TODO: Implementar o objeto que será salvo
      })
      .catch();
  }

  carregarCategorias() {
    return this.categoriaDespesaService.pesquisar()
      .then(response => {
        console.log(response);
        this.categoriaDespesa = response.map(elemento => {
          return { label: elemento.nome, value: elemento.codigo };
        });
      })
      // this.categorias = response.map(c => ({label:c.nome, value: c.codigo}))
      .catch();
  }
*/
  formularioInvalido() {
    return this.formGroup.valid ? '' : 'input-erro';
  }

  mensagemSucesso() {
    this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Categoria salva.' });
  }

}
