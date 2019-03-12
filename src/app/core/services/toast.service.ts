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

  isMobile(): string {
    return $.browser.mobile ? MOBILE : DESKTOP;
  }
}
