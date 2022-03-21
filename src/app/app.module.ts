import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesModule } from './recipes-module/recipes-module.module';
import { ShoppingListModule } from './shopping-list-module/shopping-list.module';
import { AuthComponent } from './auth/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
