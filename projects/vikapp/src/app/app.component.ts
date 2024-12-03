import { Component, OnInit } from '@angular/core';
import {
  ButtonModule,
  INavbarContents,
  NavbarHeaderModule,
  TextareaComponent,
  TextInputComponent,
} from '../../../viklib/src/public-api';
import { VikService } from './services/vik.service';

@Component({
    selector: 'app-root',
    imports: [
        TextInputComponent,
        TextareaComponent,
        NavbarHeaderModule,
        ButtonModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public navbarContent: INavbarContents[] = [];

  constructor(private _vikService: VikService) {}

  ngOnInit(): void {
    this._vikService.getNavbar().subscribe((nav) => {
      this.navbarContent = nav;
    });
  }
}
