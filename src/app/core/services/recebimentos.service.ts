import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { URL_API } from 'src/app/app.api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PagamentoRecebimentoNovoDTO } from 'src/app/domains/dtos/pagamento-recebimento-novo.dto';

@Injectable({
  providedIn: 'root'
})
export class RecebimentosService {

  RECEBIMENTO_URL = `${URL_API}/pagamentos`;

  constructor(private http: HttpClient) { }

  salvar(pagamento: PagamentoRecebimentoNovoDTO): Observable<any> {
    return this.http.post<any>(`${this.RECEBIMENTO_URL}/novo`, pagamento);
  }
}
