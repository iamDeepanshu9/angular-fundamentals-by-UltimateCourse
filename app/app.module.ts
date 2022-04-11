import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import {RouterModule, Routes} from "@angular/router";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { PassengerDassboardModule } from "./passenger-dashboard/passenger-dashboard.module";

import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";

const routes : Routes =[
  {path : '' ,component : HomeComponent, pathMatch : 'full'},
  {path:'**' , component : NotFoundComponent}
];

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports : [
    //Angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    //custom modules
    RouterModule.forRoot(routes),
    PassengerDassboardModule
  ],
  bootstrap : [AppComponent]
})

export class AppModule{}
