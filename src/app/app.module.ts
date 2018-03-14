import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuNavigationModule } from './menu-navigation/menu-navigation.module';
import { CharactersComponent } from './characters/characters.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    MenuNavigationModule,
    RouterModule.forRoot([
      { path: 'characters', component: CharactersComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
