import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from 'protractor';
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail',
    template: `   <div class="well hoverwell thumbnail">
    <h1>{{event?.name | uppercase}}</h1>
    <div> Date : {{event?.date | date:'shortDate' }}</div>
    <div [ngStyle]="getStartTimeClass()" [ngSwitch]="event?.time"> Time : {{event?.time}}
    
    <span *ngSwitchCase ="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase ="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault ="'10:00 am'">(Normal Start)</span>
   
    
    </div>
    
    <div> Price : {{event?.price | currency:'USD' }}</div>
    <div *ngIf="event?.location">
    <span>Location: {{event?.location?.address}}</span>
    <span>&nbsp;</span>
    <span class="padLeft">{{event?.location?.city}},{{event?.location?.country}}</span>
  
    </div>
    <div [hidden]="!event?.OnlineUrl"> 
    Online Url : {{event?.OnlineUrl}}
    </div>
    </div>`,
    styles : [`
    .padLeft{ marginleft:10px}
    .red {color : red}
    .bold {front-weight :bold}
    `]

})

export class EventThumbnailComponent  {
    constructor(){}
    @Input() event :IEvent;
   // SomeProperty : string = "Event";

  //  log(){
   //     console.log("A");
   // }
   getStartTimeClass():any{
    //    const isEarlyStart = this.event && this.event.time === '8:00 am'
    //    return {red :isEarlyStart,bold:isEarlyStart}
      if( this.event && this.event.time === '8:00 am')
      return { color: 'red', 'font-weight':'bold'   }
      return {}
   }

   
}