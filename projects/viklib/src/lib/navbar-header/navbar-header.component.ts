import { Component, Input, OnInit } from '@angular/core';
import { INavbarContents } from '../viklib.interfaces';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'lib-navbar-header',
  styleUrls: ['./navbar-header.component.scss'],
  templateUrl: './navbar-header.component.html',
  standalone: false,
})
export class NavbarHeaderComponent implements OnInit {
  @Input() navbarContent: INavbarContents[] = [];
  @Input() demo = false;

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<INavbarContents[]>): void {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
