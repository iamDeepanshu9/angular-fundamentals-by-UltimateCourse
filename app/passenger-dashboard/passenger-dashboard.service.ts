import {passenger} from "./models/passenger-dashboard.interface";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
// import {map} from "rxjs/add/operator";
const PASSENGER_API : string = '/api/passengers';

@Injectable()
export class PassengerDashboardService{
  constructor(private http : Http) {
    console.log(this.http);
  }
  getPassenger() : Observable<passenger[]>{
  return this.http
        .get(PASSENGER_API).map((response : Response)=> response.json())
  }
  updatetPassenger(passenger : passenger) : Observable<passenger>{
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`,passenger)
      .map((response : Response)=> response.json());
  }
}
