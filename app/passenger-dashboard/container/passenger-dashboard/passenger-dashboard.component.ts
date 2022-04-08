import { Component,OnInit } from "@angular/core";
import { passenger } from "../../models/passenger-dashboard.interface";


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
    constructor(){}
    ngOnInit(): void {
        this.passengers =[
            {
              id:1,
              fullname:"Rahav",
              checkedIn:true,
              checkedInDate : 1232340023
            },
            {
              id:2,
              fullname:"Rahul",
              checkedIn:false,
              checkedInDate : null
            },
            {
              id:3,
              fullname:"Vinpd",
              checkedIn:true,
              checkedInDate : 1232340023
        
            },    {
              id:4,
              fullname:"Govinf",
              checkedIn:false,
              checkedInDate : null
            }
          ];
        
    }
    handleEdit(event : passenger){
        this.passengers = this.passengers.map((psngr : passenger)=>{
          if(psngr.id === event.id){
            psngr = Object.assign({},psngr,event);
          }
          return psngr;
        })
    }
    handleRemove(event : passenger){
      this.passengers = this.passengers.filter(
        (Psngr : passenger) => Psngr.id != event.id
        );
    }
}