import { Component, Input, OnInit } from '@angular/core';
import { INavbarContents } from '../viklib.interfaces';

@Component({
  selector: 'lib-navbar-header',
  styles: `
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  li {
    float: left;
  }
  li a {
    display: block;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  li a:hover {
    background-color: #111;
  }
  `,
  template: `
    <ul>
      <li *ngFor="let item of navbarContent">
        <a
          [href]="item.href ?? 'javascript:void(0)'"
          [routerLink]="item.routerLink"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  `,
})
export class NavbarHeaderComponent implements OnInit {
  @Input() navbarContent: INavbarContents[] = [];

  constructor() {}

  ngOnInit() {}
}
