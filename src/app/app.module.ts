import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmorAddComponent } from './armor-add/armor-add.component';
import { ArmorListComponent } from './armor-list/armor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmorAddComponent,
    ArmorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
