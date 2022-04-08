import { Component,OnInit } from "@angular/core";
import { passenger } from "../../models/passenger-dashboard.interface";
import {PassengerDashboardService} from "../../passenger-dashboard.service";


@Component({
    selector:'passenger-dashboard',
    styleUrls:['passenger-dashboard.component.scss'],
    template:`
    <div>
        <passenger-count
            [items] = "passengers">
        </passenger-count>

        <div *ngFor="let passenger of passengers">
          {{passenger.fullname}}
        </div>
        <passenger-detail
          *ngFor = "let passenger of passengers"
          [detail] = "passenger"
          (edit) = "handleEdit($event)"
          (remove)="handleRemove($event)">
        </passenger-detail>

    </div>
`
})

export class PassengerDashboardComponent implements OnInit{
    passengers : passenger[];
    constructor(private passengerService : PassengerDashboardService){}
    ngOnInit(): void {
       this.passengerService.getPassenger().subscribe((data : passenger[])=>this.passengers = data);

    }
    handleEdit(event : passenger){
      this.passengerService.updatetPassenger(event).subscribe((data : passenger)=>{
        this.passengers = this.passengers.map((psngr : passenger)=>{
          if(psngr.id === event.id){
            psngr = Object.assign({},psngr,event);
          }
          return psngr;
        })
      });

    }
    handleRemove(event : passenger){
      this.passengerService.removePassenger(event).subscribe((data : passenger)=>{
      this.passengers = this.passengers.filter((Psngr : passenger) => Psngr.id != event.id);
    });
}
}
