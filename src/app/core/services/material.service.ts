import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MaterialFilter } from '../classes/material-filter';
import { Material } from 'src/app/domains/material.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  MATERIAL_URL = `${URL_API}/materiais`;

  constructor(private http: HttpClient) { }

  salvar(material: Material): Observable<string> {
    return this.http.post<Material>(`${this.MATERIAL_URL}/novo`, material)
      .pipe(
        map(responseMaterial => responseMaterial.nome)
      );
  }

  pesquisar(filtro: MaterialFilter): Observable<Material[]> {

    let parametros = new HttpParams();

    if (filtro.nome) {
      parametros = parametros.append('nome', filtro.nome);
    }
    if (filtro.fabricante) {
      parametros = parametros.append('fabricante', filtro.fabricante);
    }
    if (filtro.valorAtributo) {
      parametros = parametros.append('valorAtributo', filtro.valorAtributo);
    }

    return this.http.get<Material[]>(`${this.MATERIAL_URL}`, { params: parametros });
  }

  buscarPorCodigo(codigo: number): Observable<Material> {
    return this.http.get<Material>(`${this.MATERIAL_URL}/${codigo}`);
  }

  atualizar(material: Material): Observable<Material> {
    return this.http.put<Material>(`${this.MATERIAL_URL}/${material.codigo}`, material);
  }

  deletar(url: string): Observable<string> {
    return this.http.delete<string>(url);
  }

}
