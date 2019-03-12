import { URL_API } from './../../app.api';
import { Injectable } from '@angular/core';
import { CategoriaDespesa } from 'src/app/domains/categoria-despesa.model';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoriaDespesaService {

  categoriasDespesaUrl = `${URL_API}/categorias-despesa`;

  constructor(private http: HttpClient) { }

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

  deletar(url: string): Promise<void> {
    return this.http.delete(url)
      .toPromise()
      .then(() => null);
  }
}
