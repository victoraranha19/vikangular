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
  public entrada = new FormControl<string>('', { nonNullable: true });
  public saida = '';

  constructor() {
    console.log('constructor home');
  }

  ngOnInit(): void {
    console.log('ngOnInit home');
  }

  public processar(): void {
    this.saida = this._funcaoDia1(this.entrada.value);
  }

  private _funcaoDia1(entrada: string): string {
    const listaEsquerda: number[] = [];
    const listaDireita: number[] = [];

    const linhas = entrada.split('\n');
    const tamanhoLista = linhas.length;
    linhas.forEach((linha) => {
      const numEsquerda = parseInt(linha.substring(0, linha.indexOf(' ')));
      const numDireita = parseInt(linha.substring(linha.indexOf(' ')));
      listaEsquerda.push(numEsquerda);
      listaDireita.push(numDireita);
    });

    listaDireita.sort();
    listaEsquerda.sort();

    let distanciaTotal = 0;
    for (let index = 0; index < tamanhoLista; index++) {
      const distancia = listaDireita[index] - listaEsquerda[index];
      distanciaTotal =
        distancia < 0 ? distanciaTotal - distancia : distanciaTotal + distancia;
    }

    return `${distanciaTotal}`;
  }
}
