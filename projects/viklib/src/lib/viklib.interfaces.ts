import { UrlTree } from '@angular/router';

export interface INavbarContents {
  label: string;
  href?: string;
  routerLink?: string | any[] | UrlTree | null;
}
