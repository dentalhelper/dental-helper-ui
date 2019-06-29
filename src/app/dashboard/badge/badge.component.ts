import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;
  @Input() icon = 'fa-file-excel';
  @Input() styleFor: string;

  constructor() { }

  ngOnInit() {
  }

}
