import { Router } from '@angular/router';
import { Component, HostListener, ElementRef } from '@angular/core';

import { LogoutService } from '../services/logout.service';
import { ToastService } from '../services/toast.service';
import { AuthService } from '../services/auth.service';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  hideMenu = '';

  public isOpen = false;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.hideMenu = 'menu-esconder';
    } else {
      this.isOpen = false;
      this.hideMenu = '';
    }
  }

  constructor(
    private router: Router,
    private eRef: ElementRef,
    private authService: AuthService,
    private toastService: ToastService,
    private logoutService: LogoutService
  ) { }

  abrirMenuExtendido(event: any) {
    return event.checked = true;
  }

  logout() {
    this.logoutService.logout().then(() => {
      this.router.navigate(['/login']);
      const mensagemToast = `Sua sessão foi finalizada.`;
      this.toastService.exibirInfo('Desconectado', mensagemToast);
    });
  }

  hideForRole(role: string) {
    return !this.hasAuthority(role);
  }

  showOnlyForRole(role: string) {
    return this.hasAuthority(role);
  }

  private hasAuthority(role: string) {
    return this.authService.hasAuthority(role);
  }
}
