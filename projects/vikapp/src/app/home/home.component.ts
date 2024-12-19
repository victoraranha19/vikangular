import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ButtonModule,
  TextareaComponent,
} from '../../../../viklib/src/public-api';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Viklib
    TextareaComponent,
    ButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public entrada = new FormControl<string>('');
  public saida = '';

  constructor() {
    console.log('constructor home');
  }

  ngOnInit(): void {
    console.log('ngOnInit home');
  }

  public processar(): void {
    this.saida = this.entrada.value ?? '';
  }
}
