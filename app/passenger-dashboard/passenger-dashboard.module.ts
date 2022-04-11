import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
//container
import { PassengerDashboardComponent } from "./container/passenger-dashboard/passenger-dashboard.component";

//componenent
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";

//services
import {PassengerDashboardService} from "./passenger-dashboard.service";

const routes : Routes = [{
  path:"passengers",
  component:PassengerDashboardComponent
}]

@NgModule({
    declarations:[
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports:[
        CommonModule,
        HttpModule,
      RouterModule.forChild(routes)
    ],
    providers:[
      PassengerDashboardService
    ]
})

export class PassengerDassboardModule{}
