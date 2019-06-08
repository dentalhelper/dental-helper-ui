import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { URL_API } from 'src/app/app.api';
import { AppHttp } from 'src/app/seguranca/app-http';
import { UsuarioNovoDTO } from 'src/app/domains/dtos/usuario-novo.dto';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as moment from 'moment';
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
    return this.http.get<any>(`${this.USUARIO_URL}/${codigo}`).pipe(
      map((response) => {
        const usuario: UsuarioNovoDTO = {
          bairro: response.endereco.bairro,
          nome: response.nome,
          dataNascimento: response.dataNascimento,
          cPF: response.cPF,
          rG: response.rG,
          estadoCivil: response.estadoCivil,
          sexo: response.sexo,
          email: response.email,
          telefonePrincipal: response.telefonePrincipal,
          telefone2: response.telefoneSecundario,
          logradouro: response.endereco.logradouro,
          numero: response.endereco.numero,
          cep: response.endereco.cep,
          complemento: response.endereco.complemento,
          codigoCidade: response.endereco.cidade.codigo,
          senha: null,
          tipo: response.tipo,
          login: response.login
        };
        // TODO: UTILIZAR DTO
        this.converterStringsParaDatas([usuario]);
        console.log(usuario);
        return usuario;
      })
    );
  }

  atualizar(usuario: UsuarioNovoDTO, codigo: number): Observable<UsuarioNovoDTO> {
    return this.http.put<UsuarioNovoDTO>(`${this.USUARIO_URL}/${codigo}`, usuario);
  }

  private converterStringsParaDatas(usuarios: any[]) {
    for (const usuario of usuarios) {
      usuario.dataNascimento = moment(usuario.dataNascimento, 'YYYY-MM-DD').toDate();
    }
  }
}
