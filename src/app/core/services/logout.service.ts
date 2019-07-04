import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { AppHttp } from 'src/app/seguranca/app-http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRevokeURL = 'http://localhost:8080/tokens/revoke';

  constructor(
    private http: AppHttp,
    private authService: AuthService
  ) { }

  logout() {
    return this.http.delete(this.tokensRevokeURL, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.authService.limparAccessToken();
      });
  }
}
