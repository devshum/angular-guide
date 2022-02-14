import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesModuleModule } from './recipes-module/recipes-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
