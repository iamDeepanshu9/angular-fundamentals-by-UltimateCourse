import { Component, Input} from "@angular/core";
import { passenger } from "../../models/passenger-dashboard.interface";

@Component({
    selector:'passenger-count',
    template:`
    <div>
        <h1>Airline Passenger</h1>
        <div>
        Checked In Passenger : {{totalCheckedIn()}}/{{items.length}}
</div>
`

})

export class PassengerCountComponent{
    @Input()
    items : passenger[];
    constructor(){}
    totalCheckedIn(){
        if(!this.items) return;
        return this.items.filter((psnger : passenger)=>psnger.checkedIn).length;
    }
}
