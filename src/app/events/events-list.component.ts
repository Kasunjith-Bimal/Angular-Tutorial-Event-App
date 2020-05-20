import  { Component, OnInit ,Inject} from '@angular/core';
import { EventService } from './shared/event.service';

import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';
import { Toastr ,TOASTR_TOKEN} from '../common/toastr.service';


@Component({
    selector: 'event-list',
    templateUrl: './event-list.component.html',
    styles : [`
    .well div{ color : white}
    `]
})

export class EventsListComponent implements OnInit  {
    events : IEvent[];
    constructor(private eventService : EventService, @Inject(TOASTR_TOKEN) private toastr:Toastr,private route:ActivatedRoute) { }
    
    ngOnInit(): void {
        //  this.eventService.getAllEvents().subscribe(events =>{
        //     this.events = events; 
        //  });
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(name:string){
        this.toastr.success(name)
    }

   
   
}       