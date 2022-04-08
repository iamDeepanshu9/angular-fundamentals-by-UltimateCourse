import {passenger} from "./models/passenger-dashboard.interface";
import {Http} from "@angular/http";

export class PassengerDashboardService{
  constructor(private http : Http) {
    console.log(this.http);
  }
  getPassenger() : passenger[]{
  return [
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
}
