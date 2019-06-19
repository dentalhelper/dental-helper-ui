import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { URL_API } from 'src/app/app.api';
import { AppHttp } from 'src/app/seguranca/app-http';
import { UsuarioNovoDTO } from 'src/app/domains/dtos/usuario-novo.dto';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as moment from 'moment';
import { NovaSenha } from 'src/app/domains/interfaces/nova-senha.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  USUARIO_URL = `${URL_API}/usuarios`;

  constructor(private http: AppHttp) { }

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

  buscarPorCodigo(codigo: number): Observable<UsuarioNovoDTO> {
    return this.http.get<any>(`${this.USUARIO_URL}/${codigo}/edit`).pipe(
      map((usuarioResponse: UsuarioNovoDTO) => {
        this.converterStringsParaDatas([usuarioResponse]);
        return usuarioResponse;
      })
    );
  }

  atualizar(usuario: UsuarioNovoDTO, codigo: number): Observable<UsuarioNovoDTO> {
    return this.http.put<UsuarioNovoDTO>(`${this.USUARIO_URL}/${codigo}`, usuario);
  }

  alterarStatus(codigo: number): Observable<any> {
    return this.http.patch<any>(`${this.USUARIO_URL}/${codigo}`)
      .pipe(
        map((response) => {
          return {
            user: response.login,
            status: response.ativo
          };
        })
      );
  }

  alterarSenha(senha: NovaSenha, codigo: number): Observable<any> {
    return this.http.put<any>(`${this.USUARIO_URL}/${codigo}/senha`, senha);
  }

  recuperarSenha(email: string) {
    return this.http.patch<any>(`${this.USUARIO_URL}/senha/redefinir`, email);
  }

  private converterStringsParaDatas(usuarios: any[]) {
    for (const usuario of usuarios) {
      usuario.dataNascimento = moment(usuario.dataNascimento, 'YYYY-MM-DD').toDate();
    }
  }
}
