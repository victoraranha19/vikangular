import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHeaderComponent } from './navbar-header.component';
import { RouterLink } from '@angular/router';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [NavbarHeaderComponent],
  imports: [CommonModule, RouterLink, CdkDropListGroup, CdkDropList, CdkDrag],
  exports: [NavbarHeaderComponent],
})
export class NavbarHeaderModule {}
