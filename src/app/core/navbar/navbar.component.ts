import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

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

  constructor(private eRef: ElementRef) {

  }

  ngOnInit() {

  }

  abrirMenuExtendido(event: any) {
    return event.checked = true;
  }

}
