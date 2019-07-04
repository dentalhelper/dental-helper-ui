import { Injectable } from '@angular/core';

import { URL_API } from 'src/app/app.api';
import { AppHttp } from 'src/app/seguranca/app-http';
import { DashBoardDTO } from 'src/app/domains/dtos/dashboard/dashboard.dto';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  DASHBOARD_URL = `${URL_API}/dashboard`;

  constructor(private http: AppHttp) { }

  carregar(): Observable<DashBoardDTO> {
    return this.http.get<DashBoardDTO>(this.DASHBOARD_URL);
  }
}
