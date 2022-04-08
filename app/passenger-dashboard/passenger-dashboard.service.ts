import {passenger} from "./models/passenger-dashboard.interface";
import {Http, Response, Headers , RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/add/operator/toPromise";
// import {map} from "rxjs/add/operator";
const PASSENGER_API : string = '/api/passengers';

@Injectable()
export class PassengerDashboardService{
  constructor(private http : Http) {
    console.log(this.http);
  }
  getPassenger() : Promise<passenger[]>{
  return this.http
        .get(PASSENGER_API).toPromise().then((response : Response)=> response.json())
  }
  updatetPassenger(passenger : passenger) : Promise<passenger>{
    let headers = new Headers({
      'Content-type' : 'application/json'
    })
    let options = new RequestOptions({
      headers : headers
    })
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`,passenger,options)
      .toPromise().then((response : Response)=> response.json());
  }
  removePassenger(passenger : passenger) : Promise<passenger>{
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`,passenger)
      .toPromise().then((response : Response)=> response.json());
  }
}
