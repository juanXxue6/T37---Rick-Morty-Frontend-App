import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './elementos/characters/characters.component';
import { RemoveBlankSpacePipe } from './pipes/remove-blank-space.pipe';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharactersComponent,
    RemoveBlankSpacePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
