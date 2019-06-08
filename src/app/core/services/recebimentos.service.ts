import { Injectable } from '@angular/core';

import { URL_API } from 'src/app/app.api';
import { AppHttp } from 'src/app/seguranca/app-http';
import { PagamentoRecebimentoNovoDTO } from 'src/app/domains/dtos/pagamento-recebimento-novo.dto';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecebimentosService {

  RECEBIMENTO_URL = `${URL_API}/pagamentos`;

  constructor(private http: AppHttp) { }

  salvar(pagamento: PagamentoRecebimentoNovoDTO): Observable<any> {
    return this.http.post<any>(`${this.RECEBIMENTO_URL}/novo`, pagamento);
  }
}
