import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './elementos/about/about.component';
import { CharactersComponent } from './elementos/characters/characters.component';
import { HomeComponent } from './elementos/home/home.component';

const routes: Routes = [
    {
      path:'home',
      component:HomeComponent

    },
    {
      path:'characters',
      component:CharactersComponent

    },

    {
      path:'about',
      component:AboutComponent

    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, BrowserModule]
})
export class AppRoutingModule { }
