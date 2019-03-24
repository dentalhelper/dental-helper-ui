import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { HttpClient } from '@angular/common/http';
import { Despesa } from 'src/app/domains/despesa.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  despesaUrl = `${URL_API}/despesas`;

  constructor(private http: HttpClient) { }

  salvar(categoria: Despesa): Observable<string> {
    return this.http.post<Despesa>(`${this.despesaUrl}/novo`, categoria)
      .pipe(
        map(responseCategoria => responseCategoria.descricao)
      );
  }
}
