import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/app.api';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { UsuarioNovoDTO } from 'src/app/domains/dtos/usuario-novo.dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  USUARIO_URL = `${URL_API}/usuarios`;

  constructor(private http: HttpClient) { }

  salvar(usuario: UsuarioNovoDTO): Observable<string> {
    return this.http.post<UsuarioNovoDTO>(`${this.USUARIO_URL}/novo`, usuario)
      .pipe(
        map(response => response.nome)
      );
  }


  pesquisar(form: any): Observable<any[]> {
    let parametros = new HttpParams();

    if (form.filtro) {
      parametros = parametros.append('filtro', form.filtro);
    }
    return this.http.get<any[]>(this.USUARIO_URL, { params: parametros });
  }
}
