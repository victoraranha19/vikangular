import { Component } from '@angular/core';
import {
  ButtonModule,
  INavbarContents,
  NavbarHeaderModule,
  TextareaComponent,
  TextInputComponent,
} from '../../../viklib/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TextInputComponent,
    TextareaComponent,
    NavbarHeaderModule,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public navbarContent: INavbarContents[] = [
    { label: 'Home' },
    { label: 'Forms' },
  ];
}
