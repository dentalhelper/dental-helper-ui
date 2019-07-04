import { Injectable } from '@angular/core';

import { URL_API } from './../../app.api';
import { AppHttp } from 'src/app/seguranca/app-http';
import { CategoriaDespesa } from 'src/app/domains/categoria-despesa.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoriaDespesaService {

  categoriasDespesaUrl = `${URL_API}/categorias-despesa`;

  constructor(private http: AppHttp) { }

  salvar(categoria: CategoriaDespesa): Observable<string> {
    return this.http.post<CategoriaDespesa>(`${this.categoriasDespesaUrl}/novo`, categoria)
      .pipe(
        map(responseCategoria => responseCategoria.nome)
      );
  }

  pesquisar(): Observable<CategoriaDespesa[]> {
    return this.http.get<CategoriaDespesa[]>(this.categoriasDespesaUrl);
  }

  atualizar(url: string, categoria: CategoriaDespesa): Observable<string> {
    return this.http.put<CategoriaDespesa>(url, categoria)
      .pipe(
        map(responseCategoria => responseCategoria.nome)
      );
  }

  deletar(url: string): Observable<string> {
    return this.http.delete<string>(url);
  }
}
