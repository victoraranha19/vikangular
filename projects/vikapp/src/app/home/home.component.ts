import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ButtonModule,
  TextareaComponent,
  TextInputComponent,
} from '../../../../viklib/src/public-api';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TextInputComponent, TextareaComponent, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
