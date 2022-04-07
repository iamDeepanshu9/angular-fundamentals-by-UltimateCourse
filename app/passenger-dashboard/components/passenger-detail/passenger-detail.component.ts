import { Component, Input } from "@angular/core";
import { passenger } from "../../models/passenger-dashboard.interface";

@Component({
    selector:'passenger-detail',
    styleUrls:['passenger-detail.component.scss'],
    template:`
        <div>
               <span class="status" [ngStyle] = "{
                        backgroundColor : (detail.checkedIn ? 'green' : 'red')
                        }">
                    </span>
                    <div *ngIf ="editing">
                        <input type="text"
                            [value]="detail.fullname"
                            (input) = "onNameChange(name.value)"
                            #name>
                    </div>
                    <div *ngIf="!editing">
                    {{detail.fullname}}
                    </div>
                    <div class="date">
                        Check in Date : {{detail.checkedInDate ? (detail.checkedInDate | date : ' MMM d,y' | uppercase) : 'not checked IN'}}
                    </div>
                    <button (click) = "toggleEdit()">
                        {{editing ? 'Done' : 'Edit'}}
                    </button>
        </div>
                        `
})

export class PassengerDetailComponent{
    @Input()
    detail : passenger
    editing : boolean = false
    constructor(){}
    onNameChange(value : string){
        console.log("value :",value);
    }
    toggleEdit(){
        this.editing=!this.editing; 
    }
}