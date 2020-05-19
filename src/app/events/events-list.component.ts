import  { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';


@Component({
    selector: 'event-list',
    templateUrl: './event-list.component.html',
    styles : [`
    .well div{ color : white}
    `]
})

export class EventsListComponent implements OnInit  {
    events : IEvent[];
    constructor(private eventService : EventService,private toastr:ToastrService,private route:ActivatedRoute) { }
    
    ngOnInit(): void {
        //  this.eventService.getAllEvents().subscribe(events =>{
        //     this.events = events; 
        //  });
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(name:string){
        this.toastr.Success(name)
    }

   
   
}       