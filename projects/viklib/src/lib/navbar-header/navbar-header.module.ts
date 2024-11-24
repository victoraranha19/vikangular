import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHeaderComponent } from './navbar-header.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [NavbarHeaderComponent],
  imports: [CommonModule, RouterLink],
  exports: [NavbarHeaderComponent],
})
export class NavbarHeaderModule {}
