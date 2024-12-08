import { Routes } from '@angular/router';
import { MinecraftComponent } from './minecraft/minecraft.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'mine',
    component: MinecraftComponent,
    title: 'Minecraft',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
