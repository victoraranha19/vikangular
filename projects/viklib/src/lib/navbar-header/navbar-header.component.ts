import { Component, Input, OnInit } from '@angular/core';
import { INavbarContents } from '../viklib.interfaces';

@Component({
    selector: 'lib-navbar-header',
    styles: `
  nav {
    overflow: hidden;
    background-color: #333;
  }
  a {
    float: left;
    display: block;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  a:hover {
    background-color: #111;
  }
  `,
    template: `
    <nav>
      <a
        *ngFor="let item of navbarContent"
        [href]="item.href ?? 'javascript:void(0)'"
        [routerLink]="item.routerLink"
      >
        {{ item.label }}
      </a>
    </nav>
  `,
    standalone: false
})
export class NavbarHeaderComponent implements OnInit {
  @Input() navbarContent: INavbarContents[] = [];

  constructor() {}

  ngOnInit() {}
}
