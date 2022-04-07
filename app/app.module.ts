import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { PassengerDassboardModule } from "./passenger-dashboard/passenger-dashboard.module";

@NgModule({
  declarations:[
    AppComponent
  ],
  imports : [
    //Angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    //custom modules
    PassengerDassboardModule
  ],
  bootstrap : [AppComponent]
})

export class AppModule{}