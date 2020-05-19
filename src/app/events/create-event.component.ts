import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from './shared';

@Component({
    selector: 'event-create',
    templateUrl: './create-event.component.html',
    styles: [` em {float:right;color : #E05C65;padding-left:10px;}

    .error input {background-color: #E3C3C5;}`]
})

export class EventCreateComponent implements OnInit {
    event : IEvent;
    constructor(private route:Router,private eventService:EventService) { }
    isDirty :boolean = true;
    ngOnInit() { 
        this.event ={
            id: 0,
            name:'Ng',
            date: new Date('8/8/2028'),
            time:'10am',
            price:799.99,
            location:{
                address:'456 Happy',
                city:'Fedcc',
                country:'sssss'
            },
            OnlineUrl : 'http://angular.io.com',
            imageUrl: 'http://angular.io.com/a.png',
            sessions: []
           


        }



    }

    close(){
     this.route.navigate(['/events']);
    }

    saveEvent(formValue){
    console.log(formValue)
    this.eventService.saveEvent(formValue)
    this.isDirty = false;
    this.route.navigate(['events'])   

    }

    cancel(){
        
    }
}