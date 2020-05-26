import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ISession } from '../shared';

@Component({
    selector: 'event-detail',
    templateUrl: './event-detail.component.html'
})

export class EventDetailComponent implements OnInit {
   event : any
   addMore :boolean;
   filterBy :string = 'all';
   sortBy : string = 'name';
    constructor(private eventService :EventService,private router:ActivatedRoute) { }
 
    ngOnInit() { 
        this.router.params.forEach((params:Params) => {

            this.event = this.eventService.getEventById(+params['id']);
            this.addMore = false;
        })

        //this.router.snapshot.params['id']
    //  this.event = this.eventService.getEventById(
    //      +this.router.snapshot.params['id']);

    }

    addSession(){
     this.addMore = true;
    }

    saveNewSession($session:ISession){
        console.log(this.event.sessions);
        const nextId = Math.max.apply(null,this.event.sessions.map(s=>s.id));
        $session.id = nextId+1;
        this.event.sessions.push($session);
        this.eventService.updateEvent(this.event)
        this.addMore = false;
    }

    cancelSession(){
        this.addMore = false;
    }
}