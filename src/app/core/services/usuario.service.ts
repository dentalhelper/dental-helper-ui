import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  USUARIO_URL = `${URL_API}/usuarios`;

  constructor(private http: HttpClient) { }

  pesquisar(form: any): Observable<any[]> {
    let parametros = new HttpParams();

    if (form.filtro) {
      parametros = parametros.append('filtro', form.filtro);
    }
    return this.http.get<any[]>(this.USUARIO_URL, { params: parametros });
  }
}
