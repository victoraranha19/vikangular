import { Component, OnInit } from '@angular/core';
import {
  ButtonModule,
  INavbarContents,
  NavbarHeaderModule,
  SelectFieldComponent,
  TextareaComponent,
  TextInputComponent,
} from '../../../viklib/src/public-api';
import { VikService } from './services/vik.service';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TextInputComponent,
    TextareaComponent,
    NavbarHeaderModule,
    SelectFieldComponent,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public navbar: INavbarContents[] = [];

  constructor(private _vikService: VikService) {}

  ngOnInit(): void {
    this._vikService.getNavbar().subscribe((nav) => {
      this.navbar = [...nav];
    });
  }
}
