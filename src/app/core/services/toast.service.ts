import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

import { MOBILE, DESKTOP } from 'src/app/shared/constants/toast.key';

declare var $: any;

@Injectable()
export class ToastService {

  constructor(private messageService: MessageService) { }

  key = this.isMobile();

  exibirSucesso(detalhe: string) {

    this.messageService.add({
      key: this.key,
      severity: 'success',
      summary: 'Sucesso!',
      detail: detalhe
    });
  }

  exibirErro(detalhe: string) {

    this.messageService.add({
      key: this.key,
      severity: 'error',
      summary: 'Erro!',
      detail: detalhe
    });
  }

  exibirAviso(detalhe: string) {

    this.messageService.add({
      key: this.key,
      severity: 'warn',
      summary: 'Aviso!',
      detail: detalhe
    });
  }

  exibirAvisoComLink(detalhe: string) {

    this.messageService.add({
      key: this.key === MOBILE ? 'toast-mobile-link' : 'toast-desktop-link',
      severity: 'warn',
      summary: 'Aviso!'
    });
  }

  isMobile(): string {
    return $.browser.mobile ? MOBILE : DESKTOP;
  }
}
