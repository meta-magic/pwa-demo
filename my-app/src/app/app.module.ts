import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {MobilesPageComponent} from "./mobiles.component";




@NgModule({
  declarations: [
    AppComponent,
    MobilesPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
