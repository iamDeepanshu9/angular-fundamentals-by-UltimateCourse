import {passenger} from "./models/passenger-dashboard.interface";

export class PassengerDashboardService{
  constructor() {}
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
