import { Component, Input, Output, EventEmitter ,OnChanges, SimpleChanges} from "@angular/core";
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
                    <button (click) = "OnRemove()">
                    Remove
                    </button>

        </div>
                        `
})

export class PassengerDetailComponent implements OnChanges{
    @Input()
    detail : passenger

    @Output()
    edit : EventEmitter<any> = new EventEmitter();

    @Output()
    remove : EventEmitter<any> = new EventEmitter();
    //can be write as - remove = new EventEmitter()
    editing : boolean = false

    constructor(){}

    ngOnChanges(changes): void {
        if(changes.detail)
        {
            this.detail=Object.assign({},changes.detail.currentValue);
        }
    }

    onNameChange(value : string){
        this.detail.fullname = value;
    }

    toggleEdit(){
        if(this.editing){
        this.edit.emit(this.detail);
        }
        this.editing=!this.editing;
    }
    OnRemove(){
        this.remove.emit(this.detail)
    }
}
